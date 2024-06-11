import React, { useState } from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const HeaderGrid = () => {
  const items = [
    {
      id: 1,
      title: "Amazing pools",
      imgURl:
        "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      id: 2,
      title: "Castles",
      imgURl:
        "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
    {
      id: 3,
      title: "Bed & beadkfasts",
      imgURl:
        "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    },
    {
      id: 4,
      title: "Amazing views",
      imgURl:
        "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
      id: 5,
      title: "Mansions",
      imgURl:
        "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    },
    {
      id: 6,
      title: "Cabins",
      imgURl:
        "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
    {
      id: 7,
      title: "Golfing",
      imgURl:
        "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    },
    {
      id: 8,
      title: "Luxe",
      imgURl:
        "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    },
    {
      id: 9,
      title: "Vineyards",
      imgURl:
        "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    },
    {
      id: 10,
      title: "Beach",
      imgURl:
        "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
      id: 11,
      title: "Camping",
      imgURl:
        "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    },
    {
      id: 12,
      title: "Top cities",
      imgURl:
        "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    },
    {
      id: 13,
      title: "islands",
      imgURl:
        "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    },
    {
      id: 14,
      title: "Farms",
      imgURl:
        "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    },
    {
      id: 15,
      title: "Rooms",
      imgURl:
        "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
      id: 16,
      title: "Caves",
      imgURl:
        "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex - 8 < 0) {
      setActiveIndex(items.length - 8);
      return;
    }
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNext = () => {
    if (activeIndex + 8 >= items.length) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative  ">
      <div className=" grid max-w-6xl m-auto grid-cols-4 md:grid-cols-8 gap-x-4 mt-2 mb-1">
        {items.slice(activeIndex, activeIndex + 8).map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-2 py-2  rounded-md shadow-md hover:shadow-md cursor-pointer"
          >
            <div className="h-4 md:h-6">
              <img
                loading="lazy"
                className="h-full w-auto object-cover object-center"
                src={`${item.imgURl}`}
                alt={`Havenhub-${item.name}-${item.imgURl}`}
              />
            </div>
            <div>
              <p className="text-xs">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/3 bg-gray-500 font-bold rounded-full"
      >
        <IoIosArrowDropleftCircle className="text-3xl text-white border shadow  rounded-full" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/3 bg-gray-500  font-bold rounded-full"
      >
        <FaCircleChevronRight className="text-3xl text-white border-2 shadow-lg  rounded-full" />
      </button>
    </div>
  );
};

export default HeaderGrid;
