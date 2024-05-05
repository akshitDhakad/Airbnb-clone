import React from "react";
import Layout from "../components/Layout";
import { CiHeart } from "react-icons/ci";
import { LuUpload } from "react-icons/lu";

function CardDetail() {
  return (
    <Layout>
      <main>
        <section className="bg-white">
          <div className="max-w-7xl px-4 py-10">
            {/* heading  */}
            <div className="mb-5 flex items-center justify-between">
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
            <div>
              <div className="h-96 grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
                <div className="h-96 w-full hover:cursor-pointer hover:opacity-90">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg?im_w=960"
                    alt=""
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
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
