import { useState } from "react";
import { CustomNavLink } from "./CustomNavlink";
import useOutsideClick from "../hooks/useOutsideClick";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const links = [
    { name: "صفحه اصلی", to: "/" },
    { name: "ثبت پروژه", to: "/owner" },
    { name: "یافتن پروژه ها", to: "/freelancer" },
    { name: "درباره ما", to: "/about" },
    { name: "پشتیبانی", to: "/contact" },
    { name: "ورود/عضویت", to: "/auth" },
  ];

  return (
    <nav className="bg-secondary-0 py-4 px-4 border-b border-secondary-200">
      <div className="max-w-7xl mx-auto  sm:px-2 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex gap-x-2 lg:gap-x-4 text-secondary-600 text-sm lg:text-base">
            {links.map((link) => (
              <CustomNavLink key={link.name} to={link.to}>
                {link.name}
              </CustomNavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button className="inline-flex items-center justify-center text-secondary-500 focus:outline-none ">
              <svg
                onClick={() => setIsOpen(true)}
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                onClick={() => setIsOpen(false)}
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-2" />   */}
            <span className="text-lg md:text-xl  text-primary-700 font-bold whitespace-nowrap">
              Freelancing App
            </span>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`${isOpen ? "block" : "hidden"} md:hidden `}
      >
        <div className="px-2 pt-4 pb-3 space-y-2 sm:px-3 text-sm md:text-base text-secondary-600">
          {links.map((link) => (
            <CustomNavLink key={link.name} to={link.to}>
              {link.name}
            </CustomNavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
