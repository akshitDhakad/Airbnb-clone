import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";

// list
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const users = [
    {
      name: "Tania Andrew",
      role: "Software Engineer @ Material Tailwind",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    },
    {
      name: "Alexander",
      role: "Backend Developer @ Material Tailwind",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    },
    {
      name: "Tania Andrew",
      role: "Software Engineer @ Material Tailwind",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    },
    {
      name: "Alexander",
      role: "Backend Developer @ Material Tailwind",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    },
    // Add more users as needed
  ];

  return (
    <AdminLayout>
      <section className="h-full">
        <div className="h-full max-w-7xl m-auto px-4 grid grid-cols-5">
          {/* side bar */}
          <div className="h-full border-r border-gray-500">
            <AdminSidebar />
          </div>
          {/* main content */}
          <div className="h-full col-span-4 overflow-hidden">
            <div className="border-b bor">
              <AdminHeader />
            </div>
            <div className="h-full overflow-y-auto pb-16">
              <Card className="w-full border-none shadow-none">
                <List>
                  {users.map((user, index) => (
                    <ListItem
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ListItemPrefix>
                        <Avatar
                          variant="circular"
                          alt={user.name.toLowerCase()}
                          src={user.avatar}
                        />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {user.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          {user.role}
                        </Typography>
                      </div>
                      <div
                        className={`ml-auto ${
                          hoveredIndex === index ? "block" : "hidden"
                        }`}
                      >
                        <Link to={"/admin/editProduct"}>
                          <button className="text-sm py-2 px-4 bg-gray-100 hover:bg-white border">
                            Edit
                          </button>
                        </Link>
                        <Link to={""}>
                          <button className="text-sm py-2 px-4 bg-black hover:bg-gray-800 text-white border">
                            Delete
                          </button>
                        </Link>
                      </div>
                    </ListItem>
                  ))}
                </List>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Home;
