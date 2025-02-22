import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2">
      <ul className="flex flex-col gap-y-4">
        <li>
          {/* <NavLink
            to="/owner/dashboard"
            className={({ isActive }) =>
              isActive
                ? `${navlinkClasses} bg-primary-100/50 text-primary-900 `
                : `${navlinkClasses} text-secondary-600`
            }
          >
            <HiHome />
            <span>خانه</span>
          </NavLink> */}
          <CustomNavLink  to="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li>
          {/* <NavLink
            to="/owner/projects"
            className={({ isActive }) =>
              isActive
                ? `${navlinkClasses} bg-primary-100/50 text-primary-900 `
                : `${navlinkClasses} text-secondary-600`
            }
          >
            <HiCollection />
            <span>پروژه ها</span>
          </NavLink> */}
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({children,to}) {
  const navlinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50  px-2 py-1.5 rounded-lg transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClasses} bg-primary-100/50 text-primary-900 `
          : `${navlinkClasses} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
