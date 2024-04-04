import React, { useState, useEffect, useRef } from "react";


function Header({ filter, showFilter, setSearch }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuSize, setMenuSize] = useState(0);
  const [menuWrapperSize, setMenuWrapperSize] = useState(0);
  const [filterBy, setFilter] = useState("");
  const menuRef = useRef(null);
  const data = [
    // Farms
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Farm")}>
        <img
          src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
          alt="Farms"
          className="h-6 "
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Farms</span>
    </div>,
    // Amazing views
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Villa")}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt="Amazing views"
          className="h-6 "
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Villa</span>
    </div>,
    // Beachfront
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Beachfront")}>
        <img
          src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
          alt="Beachfront"
          className="h-6"
        />
      </div>
      <span className=" text-sm font-bold text-gray-400">Beachfront</span>
    </div>,
    // Countryside
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Countryside")}>
        <img
          src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
          alt="Countryside"
          className="h-6"
        />
      </div>
      <span className=" text-sm font-bold text-gray-400">Countryside</span>
    </div>,
    // Countryside
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Tropical")}>
        <img
          src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
          alt="Tropical"
          className="h-6"
        />
      </div>
      <span className=" text-sm font-bold text-gray-400">Tropical</span>
    </div>,
    // Lakefront
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Lakefront")}>
        <img
          src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
          alt="Lakefront"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Lakefront</span>
    </div>,
    // Beach
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Beach")}>
        <img
          src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
          alt="Beach"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Beach</span>
    </div>,
    // Amazing pools
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Amazing pools")}>
        <img
          src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          alt="Amazing pools"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Amazing pools</span>
    </div>,
    // Rooms
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Rooms")}>
        <img
          src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
          alt="Rooms"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Rooms</span>
    </div>,
    // Tiny homes
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Tiny-homes")}>
        <img
          src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
          alt="Tiny homes"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Tiny homes</span>
    </div>,
    // Beachfont
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Beachfont")}>
        <img
          src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
          alt="Beachfont"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Beachfont</span>
    </div>,
    // cabins
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Cabin")}>
        <img
          src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
          alt="Cabins"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Cabins</span>
    </div>,
    // treehouses
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Treehouses")}>
        <img
          src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
          alt="Treehouses"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Treehouses</span>
    </div>,
    // Caves
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Caves")}>
        <img
          src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
          alt="Caves"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Caves</span>
    </div>,
    // Design
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Design")}>
        <img
          src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
          alt="Design"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Design</span>
    </div>,
    // Camping
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Camping")}>
        <img
          src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
          alt="Camping"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Camping</span>
    </div>,
    // Boats
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Boats")}>
        <img
          src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg"
          alt="Boats"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Boats</span>
    </div>,
    // Ryokans
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Ryokans")}>
        <img
          src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg"
          alt="Ryokans"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Ryokans</span>
    </div>,
    // Desert
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Desert")}>
        <img
          src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
          alt="Desert"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Desert</span>
    </div>,
    // Houseboats
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Houseboats")}>
        <img
          src="https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg"
          alt="Houseboats"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Houseboats</span>
    </div>,
    // Beach
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Beach")}>
        <img
          src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
          alt="Beach"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Beach</span>
    </div>,
    // Lake
    <div className="border-b-2  border-transparent hover:border-gray-400  p-4 cursor-pointer">
      <div onClick={(e) => setFilter("Lake")}>
        <img
          src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
          alt="Lake"
          className="h-6"
        />
      </div>
      <span className="text-sm font-bold text-gray-400">Lake</span>
    </div>,
  ];
  useEffect(() => {
    const handleResize = () => {
      setMenuSize(menuRef.current.scrollWidth);
      setMenuWrapperSize(menuRef.current.clientWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollLeft = () => {
    const newPosition = scrollPosition - menuWrapperSize;
    setScrollPosition(newPosition < 0 ? 0 : newPosition);
  };
  const scrollRight = () => {
    const newPosition = scrollPosition + menuWrapperSize;
    setScrollPosition(
      newPosition > menuSize - menuWrapperSize
        ? menuSize - menuWrapperSize
        : newPosition
    );
  };

  useEffect(() => {
    setSearch(filterBy)
  }, [filterBy]);




  return (
    <div className=" flex  items-center px-1 gap-3">
      <div className="menu-wrapper w-11/12 relative mx-auto mt-4  overflow-hidden">
        {/* grid data  */}
        <div
          className="menu flex"
          ref={menuRef}
          style={{
            transform: `translateX(${-scrollPosition}px)`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="item flex-shrink-0 w-28 h-28  flex items-center justify-center"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="paddles absolute top-0 bottom-0 flex flex-col justify-center">
          <button className={`left-paddle paddle`} onClick={scrollLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${
                scrollPosition === 0 ? "-rotate-90" : "-rotate-90"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          {/* <button
            className={`right-paddle paddle ${
              scrollPosition >= menuSize - menuWrapperSize ? "hidden" : ""
            }`}
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 -rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button> */}
        </div>
        <div className="paddles absolute top-0 bottom-0 right-0 flex flex-col justify-center">
          {/* <div
            className={`left-paddle paddle ${
              scrollPosition === 0 ? "hidden" : ""
            }`}
            onClick={scrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div> */}
          <button className={`right-paddle paddle`} onClick={scrollRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${
                scrollPosition === 0 ? "rotate-90" : "rotate-90"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        onClick={() => showFilter(!filter)}
        className="flex justify-center items-center cursor-pointer"
      >
        <div className="p-2 flex gap-1 items-center border rounded-xl">
          <div>
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-800">Filters</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
