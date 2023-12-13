import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const Dropdown = ({ title, subMenu, submenuPosition = "right" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group ${isHovered ? "text-red-500" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="nav-link  cursor-pointer  items-center justify-center rounded text-white text-sm mb-1 font-medium">
      <span className=" gap-x-1 flex items-center">
        {title}
            <IconChevronDown size={20} color="white" />
          </span>
        
      </span>
      {isHovered && subMenu && subMenu.length > 0 && (
        <div
          className={`absolute p-2 bg-white border border-gray-300 rounded shadow-lg ${
            submenuPosition === "left" ? "left-0" : ""
          }`}
        >
          {subMenu.map((item) => (
            <a
              key={item.url}
              href={`#${item.url.toLowerCase()}`}
              className="block w-48 mt-2 px-2 text-gray-800 hover:text-red-500"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
