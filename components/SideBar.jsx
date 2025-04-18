"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiMedalBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <TbBrandGoogleAnalytics size={20} />,
  },
  { name: "Skill Test", path: "/skill-test", icon: <PiMedalBold size={20} /> },
  {
    name: "Internships",
    path: "/internships",
    icon: <IoDocumentOutline size={20} />,
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-1/6 h-screen fixed bg-white border-r border-gray-200 p-4">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <li className="flex font-bold items-center ml-2 mt-6 mb-3 hover:bg-gray-100 rounded-full p-3">
              <p
                href={item.path}
                className={`flex items-center gap-3 text-lg transition-colors ${
                  pathname === item.path
                    ? "text-blue-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item.icon}
                {item.name}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
