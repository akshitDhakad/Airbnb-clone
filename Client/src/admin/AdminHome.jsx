import React from 'react'
import AdminLayout from "./AdminLayout";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

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
              <Card className=" w-full border-none shadow-none">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src="https://docs.material-tailwind.com/img/face-1.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Software Engineer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="alexander"
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Alexander
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Backend Developer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src="https://docs.material-tailwind.com/img/face-1.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Software Engineer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="alexander"
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Alexander
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Backend Developer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src="https://docs.material-tailwind.com/img/face-1.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Software Engineer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="alexander"
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Alexander
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Backend Developer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src="https://docs.material-tailwind.com/img/face-1.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Software Engineer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="alexander"
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Alexander
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Backend Developer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Home