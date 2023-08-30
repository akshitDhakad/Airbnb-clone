import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import products from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ImageGrid from "./ImageGrid";
import Calender from "./Calender";

function CardDetail() {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  const [showGrid ,setshowGrid] = useState(false)
  useEffect(() => {
    const data = products.find((product) => product.id === 6);
    setProduct(data);
  }, [id]);
  

  return (
    <>
      <Navbar />
      {showGrid ? (
        <ImageGrid showGrid={showGrid} setshowGrid={setshowGrid} />
      ) : null}
      <div style={showGrid ? { display: "none" } : null} className="bg-white">
        <div className="px-20 py-5 ">
          <h2 className="text-2xl font-semibold">
            LakeView Premium Room in Alleppey
          </h2>
          <p className="font-normal underline">
            Kainakary South, Kerala, India
          </p>
          {/*********** gallery grid**********/}
          <div className="my-10 grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
            <div className="">
              <img
                src="https://a0.muscache.com/im/pictures/27013fec-93f9-4250-b9b6-0004a3f6aefb.jpg?im_w=960"
                alt="thumbnail-Img"
              />
            </div>
            <div className="relative grid grid-cols-2 gap-2">
              <div>
                <img
                  src="https://a0.muscache.com/im/pictures/999032d1-87ff-4e46-9a72-e5d06d093830.jpg?im_w=720"
                  alt="Img-1"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <img
                  src="https://a0.muscache.com/im/pictures/23e8f804-276c-4b24-90c1-36f6c29f0516.jpg?im_w=720"
                  alt="Img-2"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-14584406/original/7913b9c7-a5a1-426b-9586-855fc95eaf62.jpeg?im_w=720"
                  alt="Img-3"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <img
                  src="https://a0.muscache.com/im/pictures/ea2254fb-40fe-40fa-bd27-084841e58aee.jpg?im_w=720"
                  alt="Img-4"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                className=" flex absolute border border-black bg-gray-100 rounded-md right-10 bottom-10 px-3 py-1 gap-2 items-center cursor-pointer"
                onClick={() => setshowGrid(!showGrid)}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </span>
                <span className="text-sm">show all photos</span>
              </div>
            </div>
          </div>

          {/************ descpition section ************/}
          <div className="mt-10 ">
            <h3 className="font-semibold text-xl">Hotel hosted by Akhil</h3>
            <p>
              <span>2 guests</span>&nbsp;
              <span>1 bedroom</span>&nbsp;
              <span>2 beds</span>&nbsp;
              <span>1.5 bathrooms</span>
            </p>
          </div>
          {/************ details section ************/}
          <div className="my-10 grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <hr />
              <div className="my-5 flex gap-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold">Park for free</h5>
                  <p className="text-gray-500">
                    This is one of the few places in the area with free parking.
                  </p>
                </div>
              </div>
              <div className="my-5  flex gap-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold">
                    Free cancellation before 31 Aug.
                  </h5>
                </div>
              </div>
              <hr className="my-5" />
              <div>
                <p className="text-gray-900">
                  You could view sunset from the property. Backwater in front of
                  our property makes you feel great and relaxed stay. Explore
                  the backwaters and experience tranquility and its scenic
                  surroundings. Wake up to the greetings of the sun and indulge
                  in the classic beauty of Kerala in all its glory. My place is
                  good for couples, solo adventurers, business travelers,
                  families (with kids), big groups.
                </p>
              </div>
              <hr className="my-5" />
              <div className="my-10">
                <h5 className="text-xl font-semibold">
                  What this place offers
                </h5>
                <div className="my-5 grid grid-cols-2 gap-x-40 gap-y-5">
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                    <span>Lake view</span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                        />
                      </svg>
                    </span>
                    <span>Wifi</span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    <span>Breakfast</span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </span>
                    <span>TV</span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </span>
                    <span>Free parking on premises</span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </span>
                    <span>Air conditioning</span>
                  </div>
                </div>
              </div>
              <hr className="my-5" />
              <div className="my-10">
                <h5 className="text-xl font-semibold">Select check-in date</h5>
                <p className="my-1 text-gray-500">
                  Add your travel dates for exact pricing
                </p>
                <div><Calender/></div>
              </div>
              <hr className="my-5" />
              <div className="my-10">
                <h5 className="text-xl font-semibold">
                  Kainakary South, Kerala, India
                </h5>
                <p className="my-1 text-gray-500">
                  Our Place named "Kainakary" is a village in Kuttanad Taluk in
                  Allappuzha District of Kerala state, India
                </p>
              </div>
            </div>
            {/* pricing section */}
            <div className="sticky top-0 right-0">
              <div className="p-5 rounded-xl shadow-xl border ">
                <div>
                  <h4 className="font-bold text-2xl">₹25,500 </h4>
                  <p className="text-xs text-gray-500">Total before taxes</p>
                </div>

                <div className="my-10 rounded-xl border grid grid-cols-2">
                  <div className="p-2">
                    <h6 className="text-sm text-gray-500">Check-In</h6>
                  </div>
                  <div className="p-2">
                    <h6 className="text-sm text-gray-500">Check-Out</h6>
                  </div>

                  <div className="p-2 col-span-2">
                    <div className="flex justify-between my-5">
                      <div>
                        <p>Adults</p>
                        <p className="text-xs text-gray-400">Age 13+</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        {/* http://www.w3.org/2000/svg */}
                        <svg
                          viewBox="0 0 256 256"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                        >
                          <rect fill="none" height="256" width="256" />
                          <circle
                            cx="128"
                            cy="128"
                            fill="none"
                            r="96"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="8"
                          />
                          <line
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="8"
                            x1="88"
                            x2="168"
                            y1="128"
                            y2="128"
                          />
                        </svg>
                        <span>1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-between my-5">
                      <div>
                        <p>Childrens</p>
                        <p className="text-xs text-gray-400">Ages 2–12</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        {/* http://www.w3.org/2000/svg */}
                        <svg
                          viewBox="0 0 256 256"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                        >
                          <rect fill="none" height="256" width="256" />
                          <circle
                            cx="128"
                            cy="128"
                            fill="none"
                            r="96"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="8"
                          />
                          <line
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="8"
                            x1="88"
                            x2="168"
                            y1="128"
                            y2="128"
                          />
                        </svg>
                        <span>1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-between my-5">
                      <div>
                        <p>Pets</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        {/* http://www.w3.org/2000/svg */}
                        <svg
                          viewBox="0 0 256 256"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                        >
                          <rect fill="none" height="256" width="256" />
                          <circle
                            cx="128"
                            cy="128"
                            fill="none"
                            r="96"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="8"
                          />
                          <line
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="8"
                            x1="88"
                            x2="168"
                            y1="128"
                            y2="128"
                          />
                        </svg>
                        <span>1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full">
                  <Link to={"/reserve-place"}>
                    <div className="w-full text-center font-bold bg-gradient-to-r from-red-600 via-red-400 to-pink-300  rounded-lg px-10 py-2 text-white">
                      Reserve
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardDetail;
