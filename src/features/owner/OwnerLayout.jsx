import { HiCollection, HiHome } from "react-icons/hi";
import AppLayot from "../../ui/AppLayot";
import { CustomNavLink } from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";
import { useState } from "react";
import Header from "../../ui/Header";

function OwnerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppLayot>
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayot>
  );
}

export default OwnerLayout;
