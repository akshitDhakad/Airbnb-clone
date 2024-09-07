// HostSignup.js
import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useMutation } from "react-query";
import axios from "axios";

function HostSignup() {
  const [formData, setFormData] = useState({
    profile: "",
    firstname: "",
    lastname: "",
    dob: "",
    identityVerified: false,
    email: "",
    phone: "",
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

  // handle form changes
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

  //  handleform submit
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
    console.log(payload);
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
                          <div className=" h-20 lg:h-40 lg:w-40 rounded-full">
                            <img
                              id="profile"
                              className="h-full w-full object-cover object-center "
                              name="profile"
                              src={
                                formData.profile ||
                                "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
                              }
                              alt="Profile"
                              aria-hidden="true"
                            />
                          </div>
                          <button
                            type="button"
                            className="rounded-md bg-white py-1.5 px-2 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Change
                          </button>
                        </div>
                      </div>

                      {/*First Name */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First Name{" "}
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="first-name"
                            type="text"
                            name="firstname"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Please enter your first name"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
                          />
                        </div>
                      </div>

                      {/*Last Name */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last Name{" "}
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="last-name"
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                            placeholder="Please enter your last name"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="dob"
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address (e.g., example@gmail.com)"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="phone"
                            type="Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={10}
                            minLength={10}
                            required
                            placeholder="Enter your phone number (e.g., +91 1234567890)"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
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
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="school"
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            required
                            placeholder="Enter the name of your school"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="work"
                            type="text"
                            name="work"
                            value={formData.work}
                            onChange={handleChange}
                            required
                            placeholder="Enter your professional or organizational details"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="guestPolicy"
                            type="text"
                            name="guestPolicy"
                            value={formData.guestPolicy}
                            required
                            onChange={handleChange}
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="uniqueHomeFeature"
                            id="uniqueHomeFeature"
                            value={formData.uniqueHomeFeature}
                            onChange={handleChange}
                            placeholder="Please enter the unique feature of your home"
                            required
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="hobbies"
                            id="hobbies"
                            value={formData.hobbies}
                            onChange={handleChange}
                            placeholder="Separate with commas"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="favoriteSong"
                            id="favoriteSong"
                            value={formData.favoriteSong}
                            onChange={handleChange}
                            placeholder="Enter your favorite song"
                            required
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="languages"
                            id="languages"
                            value={formData.languages}
                            onChange={handleChange}
                            placeholder="Separate with commas"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="biographyTitle"
                            id="biographyTitle"
                            value={formData.biographyTitle}
                            onChange={handleChange}
                            placeholder="Enter your biography title (Please separate entries with commas)"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="obsessions"
                            id="obsessions"
                            value={formData.obsessions}
                            onChange={handleChange}
                            placeholder="Please separate entries with commas"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="location.city"
                            type="text"
                            name="location.city"
                            value={formData.location.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                            required
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
                          />
                        </div>
                      </div>

                      {/* country  */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="location.country"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Country
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="location.country"
                            type="text"
                            name="location.country"
                            value={formData.location.country}
                            onChange={handleChange}
                            placeholder="Enter your country"
                            required
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="breakfastPreferences"
                            id="breakfastPreferences"
                            value={formData.breakfastPreferences}
                            onChange={handleChange}
                            placeholder="Please separate entries with commas"
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
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
                          <span className="text-red-500 text-lg lg:text-xl">
                            *
                          </span>
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="welcomeMessage"
                            name="welcomeMessage"
                            rows={4}
                            value={formData.welcomeMessage}
                            onChange={handleChange}
                            placeholder="Please enter your welcome message here ..."
                            required
                            className="block w-full rounded-md border outline-0 py-1.5 lg:py-2 px-2 text-sm shadow-md bg-gray-50"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-6 mb-20 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
