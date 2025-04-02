import { HiOutlineHome, HiOutlineViewGrid } from "react-icons/hi";
import AppLayot from "../../ui/AppLayot";
import { CustomNavLink } from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";
import { useState } from "react";
import Header from "../../ui/Header";
import Logout from "../authentication/Logout";
import { LuLayoutDashboard } from "react-icons/lu";

function OwnerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppLayot>
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <CustomNavLink to="/">
          <HiOutlineHome />
          <span className="text-sm md:text-base">صفحه اصلی</span>
        </CustomNavLink>
        <CustomNavLink to="dashboard">
          <LuLayoutDashboard />
          <span className="text-sm md:text-base">داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiOutlineViewGrid />
          <span className="text-sm md:text-base">پروژه ها</span>
        </CustomNavLink>
        <div className="md:hidden pr-2">
          <Logout />
        </div>
      </Sidebar>
    </AppLayot>
  );
}

export default OwnerLayout;
