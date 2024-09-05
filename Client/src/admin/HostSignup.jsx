// HostSignup.js
import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useMutation } from "react-query";
import axios from "axios";

function HostSignup() {
  const [formData, setFormData] = useState({
    profile: "",
    name: "",
    dob: "",
    identityVerified: false,
    email: "",
    phone: "",
    reviews: "",
    rating: "",
    birthYear: "",
    school: "",
    work: "",
    guestPolicy: "Ready to cater to any possible requirement",
    uniqueHomeFeature: "",
    hobbies: "",
    favoriteSong: "",
    languages: "",
    biographyTitle: "Travel Trader",
    obsessions: "",
    location: {
      city: "",
      country: "",
    },
    breakfastPreferences: "",
    welcomeMessage: "",
    // Assuming 'places' and 'reviews' will be handled separately or are optional
  });

  const mutation = useMutation(
    (newHost) => axios.post("/api/hosts", newHost), // Replace with your actual API endpoint
    {
      onSuccess: () => {
        alert("Host created successfully!");
        // Optionally reset form or redirect
        setFormData({
          profile: "",
          name: "",
          dob: "",
          identityVerified: false,
          email: "",
          phone: "",
          reviews: "",
          rating: "",
          birthYear: "",
          school: "",
          work: "",
          guestPolicy: "Ready to cater to any possible requirement",
          uniqueHomeFeature: "",
          hobbies: "",
          favoriteSong: "",
          languages: "",
          biographyTitle: "Travel Trader",
          obsessions: "",
          location: {
            city: "",
            country: "",
          },
          breakfastPreferences: "",
          welcomeMessage: "",
        });
      },
      onError: (error) => {
        console.error("Error creating host:", error);
        alert("Failed to create host. Please try again.");
      },
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (name.includes("location.")) {
      const [field, subfield] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subfield]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert comma-separated strings to arrays
    const payload = {
      ...formData,
      hobbies: formData.hobbies.split(",").map((hobby) => hobby.trim()),
      languages: formData.languages.split(",").map((lang) => lang.trim()),
      obsessions: formData.obsessions.split(",").map((obs) => obs.trim()),
      breakfastPreferences: formData.breakfastPreferences
        .split(",")
        .map((pref) => pref.trim()),
    };

    mutation.mutate(payload);
  };

  return (
    <AdminLayout>
      <section className="h-full">
        <div className="h-full max-w-7xl m-auto px-4 grid grid-cols-5">
          {/* Side Bar */}
          <div className="h-full border-r border-gray-500">
            <AdminSidebar />
          </div>
          {/* Main Content */}
          <div className="h-full col-span-4 overflow-hidden">
            <div className="border-b border-gray-300">
              <AdminHeader />
            </div>
            <div className="h-full overflow-y-auto pb-16 p-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                  {/* Profile Section */}
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      {/* Profile Picture */}
                      <div className="col-span-full">
                        <label
                          htmlFor="profile"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Profile Picture
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                          <UserCircleIcon
                            className="h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 px-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Change
                          </button>
                        </div>
                      </div>

                      {/* Name */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name (eg. John Doe)"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                          />
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="dob"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Date of Birth
                        </label>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="dob"
                            id="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100 hover:cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address (e.g., example@gmail.com)"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            type="Number"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={10}
                            minLength={10}
                            required
                            placeholder="Enter your phone number (e.g., +91 1234567890)"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                          />
                        </div>
                      </div>

                      {/* Birth Year */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="birthYear"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Birth Year
                        </label>
                        <div className="mt-2">
                          <input
                            type="number"
                            name="birthYear"
                            id="birthYear"
                            value={formData.birthYear}
                            onChange={handleChange}
                            required
                            min="1900"
                            max={new Date().getFullYear()}
                            placeholder="birth-year (YYYY)"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                          />
                        </div>
                      </div>

                      {/* School */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="school"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          School
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="school"
                            id="school"
                            value={formData.school}
                            onChange={handleChange}
                            required
                            placeholder="Enter the name of your school"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                          />
                        </div>
                      </div>

                      {/* Work */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="work"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Work
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="work"
                            id="work"
                            value={formData.work}
                            onChange={handleChange}
                            required
                            placeholder="Enter your professional or organizational details"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                          />
                        </div>
                      </div>

                      {/* Guest Policy */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="guestPolicy"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Guest Policy
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="guestPolicy"
                            id="guestPolicy"
                            value={formData.guestPolicy}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Unique Home Feature */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="uniqueHomeFeature"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Unique Home Feature
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="uniqueHomeFeature"
                            id="uniqueHomeFeature"
                            value={formData.uniqueHomeFeature}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Hobbies */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="hobbies"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Hobbies
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="hobbies"
                            id="hobbies"
                            value={formData.hobbies}
                            onChange={handleChange}
                            placeholder="Separate with commas"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Favorite Song */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="favoriteSong"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Favorite Song
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="favoriteSong"
                            id="favoriteSong"
                            value={formData.favoriteSong}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="languages"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Languages
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="languages"
                            id="languages"
                            value={formData.languages}
                            onChange={handleChange}
                            placeholder="Separate with commas"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Biography Title */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="biographyTitle"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Biography Title
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="biographyTitle"
                            id="biographyTitle"
                            value={formData.biographyTitle}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Obsessions */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="obsessions"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Obsessions
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="obsessions"
                            id="obsessions"
                            value={formData.obsessions}
                            onChange={handleChange}
                            placeholder="Separate with commas"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Location */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="location.city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="location.city"
                            id="location.city"
                            value={formData.location.city}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="location.country"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Country
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="location.country"
                            id="location.country"
                            value={formData.location.country}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Breakfast Preferences */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="breakfastPreferences"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Breakfast Preferences
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="breakfastPreferences"
                            id="breakfastPreferences"
                            value={formData.breakfastPreferences}
                            onChange={handleChange}
                            placeholder="Separate with commas"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Welcome Message */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="welcomeMessage"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Welcome Message
                        </label>
                        <div className="mt-2">
                          <textarea
                            name="welcomeMessage"
                            id="welcomeMessage"
                            rows={4}
                            value={formData.welcomeMessage}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information Section */}
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      {/* First Name */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Street Address */}
                      <div className="col-span-full">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* City */}
                      <div className="sm:col-span-2 sm:col-start-1">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* State / Province */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          State / Province
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* ZIP / Postal Code */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 bg-blue-gray-100"
                          />
                        </div>
                      </div>

                      {/* Country (Duplicate?) */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Country
                        </label>
                        <div className="mt-2">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            {/* Add more countries as needed */}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notifications Section */}
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Notifications
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      We'll always let you know about important changes, but you
                      pick what else you want to hear about.
                    </p>

                    <div className="mt-10 space-y-10">
                      {/* Email Notifications */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          By Email
                        </legend>
                        <div className="mt-6 space-y-6">
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-900"
                              >
                                Comments
                              </label>
                              <p className="text-gray-500">
                                Get notified when someone posts a comment on a
                                posting.
                              </p>
                            </div>
                          </div>
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor="candidates"
                                className="font-medium text-gray-900"
                              >
                                Candidates
                              </label>
                              <p className="text-gray-500">
                                Get notified when a candidate applies for a job.
                              </p>
                            </div>
                          </div>
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                name="offers"
                                type="checkbox"
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="font-medium text-gray-900"
                              >
                                Offers
                              </label>
                              <p className="text-gray-500">
                                Get notified when a candidate accepts or rejects
                                an offer.
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      {/* Push Notifications */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Push Notifications
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          These are delivered via SMS to your mobile phone.
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              onChange={handleChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="push-everything"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Everything
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              onChange={handleChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="push-email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Same as email
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              onChange={handleChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="push-nothing"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              No push notifications
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default HostSignup;
