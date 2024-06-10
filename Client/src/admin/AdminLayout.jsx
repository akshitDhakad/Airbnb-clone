import React from "react";
import Navbar from "./AdminNavbar";
import Footer from "./AdminFooter";

function AdminLayout({ children }) {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow overflow-hidden">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AdminLayout;
