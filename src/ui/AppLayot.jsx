import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayot() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
     <Header/>
     <Sidebar/>
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md bg-red-400 flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayot;
