"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiMedalBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

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
  const [isOpen, setIsOpen] = useState(false);
  
  // Handle window resize to show sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // md breakpoint
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Listen for toggle events from NavBar
    const handleToggle = (e) => {
      setIsOpen(e.detail.isOpen);
    };
    
    document.addEventListener('toggle-sidebar', handleToggle);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('toggle-sidebar', handleToggle);
    };
  }, []);

  // Handle navigation item click on mobile - close sidebar
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-transparent z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div 
        className={`
          fixed h-screen bg-white border-r border-gray-200 p-4 z-30
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:w-1/6
          w-64
        `}
      >
        {/* Close button - only visible on mobile */}
        <button 
          className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose size={24} />
        </button>
        
        <ul className="space-y-4 mt-8 lg:mt-0">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} onClick={handleNavClick}>
              <li className="flex font-bold items-center ml-2 mt-6 mb-3 hover:bg-gray-100 rounded-full p-3">
                <p
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
    </>
  );
};

export default SideBar;
