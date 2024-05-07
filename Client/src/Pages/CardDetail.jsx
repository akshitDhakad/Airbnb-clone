import React from "react";
import Layout from "../components/Layout";
import { CiHeart } from "react-icons/ci";
import { LuUpload } from "react-icons/lu";
import { AiTwotoneAppstore } from "react-icons/ai";

function CardDetail() {
  return (
    <Layout>
      <main>
        {/* Img Grid  */}
        <section className="bg-white">
          <div className="max-w-7xl px-4 py-10">
            {/* heading  */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Spend the night in the Ferrari Museum
              </h2>
              <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-2 hover:cursor-pointer">
                  <span>
                    <LuUpload className="text-md" />
                  </span>
                  <span className="underline">Share</span>
                </div>
                <div className="flex items-center gap-x-2 hover:cursor-pointer">
                  <span>
                    <CiHeart className="text-xl" />
                  </span>
                  <span className="underline">Save</span>
                </div>
              </div>
            </div>
            {/* image grid  */}
            <div className="relative">
              <div className="h-96 grid grid-cols-2 gap-2  rounded-2xl overflow-hidden">
                <div className="h-96 w-full hover:cursor-pointer hover:opacity-90">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center border-theme-white"
                    src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg?im_w=960"
                    alt={"Havenhub"}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt={"Havenhub"}
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt={"Havenhub"}
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt={"Havenhub"}
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D"
                      alt={"Havenhub"}
                    />
                  </div>
                </div>
              </div>
              {/* buttons  */}
              <div className="absolute bottom-10 right-5">
                <button className="text-sm flex items-center gap-x-2 bg-gray-200 px-3 py-2 rounded-xl border-theme-black">
                  <span>
                    <AiTwotoneAppstore />
                  </span>
                  <span>Show all photos</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl m-auto px-4 py-10">
            <div className="grid grid-cols-10 gap-x-20">
              <div className="col-span-6"></div>
              <div className="col-span-4">
                <div className="p-5 border-theme-gray shadow-lg border-base-700 rounded-2xl">
                  <div className="border-theme-gray grid grid-cols-2">
                    <div></div>
                    <div></div>
                    <div className="col-span-2">
                      <button
                        data-ripple-light="true"
                        data-popover-target="menu"
                        class="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      >
                        Open Menu
                      </button>
                      <ul
                        role="menu"
                        data-popover="menu"
                        data-popover-placement="bottom"
                        class="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                      >
                        <li
                          role="menuitem"
                          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        >
                          Menu Item 1
                        </li>
                        <li
                          role="menuitem"
                          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        >
                          Menu Item 2
                        </li>
                        <li
                          role="menuitem"
                          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        >
                          Menu Item 3
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CardDetail;
