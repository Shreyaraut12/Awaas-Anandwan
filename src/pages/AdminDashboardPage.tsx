import React, { useState } from "react";
import {
  Home,
  Users,
  BookOpen,
  FileText,
  Settings,
  LogOut,
  Hospital,
  Scissors,
  Hammer,
  Coffee,
  GraduationCap,
  User2,
  Menu,
  X,
  ChevronRight,
  Clock,
  Users as UsersIcon
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

interface Facility {
  name: string;
  description: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
  details?: {
    capacity: number;
    currentOccupancy: number;
    operatingHours: string;
    staffCount: number;
    services: string[];
    contact: string;
  };
}

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statsCards = [
    {
      title: "Current Guests",
      count: "42",
      icon: <User2 className="h-6 w-6 text-white" />,
      bgColor: "bg-[#2B6747]"
    },
    {
      title: "Upcoming Arrivals",
      count: "18",
      icon: <Users className="h-6 w-6 text-white" />,
      bgColor: "bg-[#FF9130]"
    },
    {
      title: "Total Bookings",
      count: "126",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      bgColor: "bg-[#2B6747]"
    },
    {
      title: "Active Programs",
      count: "7",
      icon: <Settings className="h-6 w-6 text-white" />,
      bgColor: "bg-[#7EB693]"
    }
  ];

  const facilities: Facility[] = [
    {
      name: "Hospital",
      icon: <Hospital className="h-6 w-6 text-[#2B6747]" />,
      description: "Medical facilities and wellness programs for residents and guests.",
      stats: [
        { label: "Staff", value: "12" },
        { label: "Patients", value: "8" },
        { label: "Beds", value: "20" }
      ],
      details: {
        capacity: 20,
        currentOccupancy: 8,
        operatingHours: "24/7",
        staffCount: 12,
        services: ["Emergency Care", "General Medicine", "Wellness Programs"],
        contact: "hospital@anandwan.com"
      }
    },
    {
      name: "School",
      icon: <GraduationCap className="h-6 w-6 text-[#2B6747]" />,
      description: "Educational programs for children and adults focusing on environmental awareness.",
      stats: [
        { label: "Teachers", value: "8" },
        { label: "Students", value: "45" },
        { label: "Courses", value: "6" }
      ],
      details: {
        capacity: 60,
        currentOccupancy: 45,
        operatingHours: "8:00 AM - 4:00 PM",
        staffCount: 8,
        services: ["Primary Education", "Environmental Studies", "Vocational Training"],
        contact: "school@anandwan.com"
      }
    },
    {
      name: "Handloom",
      icon: <Scissors className="h-6 w-6 text-[#2B6747]" />,
      description: "Traditional textile crafting workshop using sustainable materials and methods.",
      stats: [
        { label: "Artisans", value: "15" },
        { label: "Units", value: "12" },
        { label: "Products", value: "30" }
      ],
      details: {
        capacity: 20,
        currentOccupancy: 15,
        operatingHours: "9:00 AM - 6:00 PM",
        staffCount: 15,
        services: ["Weaving", "Dyeing", "Design", "Sales"],
        contact: "handloom@anandwan.com"
      }
    },
    {
      name: "Handicrafts",
      icon: <Hammer className="h-6 w-6 text-[#2B6747]" />,
      description: "Artisan workshops producing handmade crafts using local materials.",
      stats: [
        { label: "Artisans", value: "22" },
        { label: "Workshops", value: "5" },
        { label: "Products", value: "120" }
      ],
      details: {
        capacity: 30,
        currentOccupancy: 22,
        operatingHours: "9:00 AM - 6:00 PM",
        staffCount: 22,
        services: ["Woodworking", "Pottery", "Metalwork", "Sales"],
        contact: "handicrafts@anandwan.com"
      }
    },
    {
      name: "Canteen",
      icon: <Coffee className="h-6 w-6 text-[#2B6747]" />,
      description: "Community dining facility serving organic, locally-sourced vegetarian meals.",
      stats: [
        { label: "Staff", value: "12" },
        { label: "Meals/Day", value: "350" },
        { label: "Menu Items", value: "25" }
      ],
      details: {
        capacity: 400,
        currentOccupancy: 350,
        operatingHours: "7:00 AM - 9:00 PM",
        staffCount: 12,
        services: ["Breakfast", "Lunch", "Dinner", "Special Dietary Needs"],
        contact: "canteen@anandwan.com"
      }
    }
  ];

  const navItems = [
    { name: "Dashboard", icon: <Home />, to: "/admin/dashboard" },
    { name: "Guest Registry", icon: <Users />, to: "/admin/guests" },
    { name: "Bookings", icon: <BookOpen />, to: "/admin/bookings" },
    { name: "Reports", icon: <FileText />, to: "/admin/reports" },
    { name: "Settings", icon: <Settings />, to: "/admin/settings" }
  ];

  const handleFacilityClick = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFacility(null);
  };

  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-[#2B6747] text-white p-6 relative">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1">Anandwan Awaas</h1>
            <p className="text-sm opacity-80">Admin Dashboard</p>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ name, icon, to }) => (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg ${
                    isActive
                      ? "bg-white/10 font-semibold"
                      : "hover:bg-white/10"
                  }`
                }
              >
                {React.cloneElement(icon, { className: "h-5 w-5" })}
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="absolute bottom-8 left-6 w-[90%]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20"></div>
              <div>
                <p className="font-medium">Arjun Mehta</p>
                <p className="text-sm opacity-80">Administrator</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 w-full"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#2B6747] mb-2">Dashboard</h1>
            <p className="text-[#2B6747]">
              Welcome back, Arjun. Here's what's happening at Anandwan Awaas today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#2B6747]">
                    {card.count}
                  </h3>
                </div>
                <p className="text-[#2B6747]">{card.title}</p>
              </div>
            ))}
          </div>

          {/* Facilities Section */}
          <h2 className="text-2xl font-bold text-[#2B6747] mb-6">Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                onClick={() => handleFacilityClick(facility)}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F3F3F3] rounded-full flex items-center justify-center group-hover:bg-[#7EB693] group-hover:bg-opacity-20 transition-colors duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2B6747] group-hover:text-[#7EB693] transition-colors duration-300">
                    {facility.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{facility.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {facility.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="font-bold text-[#2B6747] group-hover:text-[#7EB693] transition-colors duration-300">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end mt-4">
                  <span className="text-[#FF9130] group-hover:text-[#FF9130]/80 text-sm flex items-center">
                    View details <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facility Details Modal */}
      {isModalOpen && selectedFacility && selectedFacility.details && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F3F3F3] rounded-full flex items-center justify-center">
                  {selectedFacility.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#2B6747]">
                  {selectedFacility.name}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#2B6747] mb-4">Overview</h3>
                <p className="text-gray-600 mb-6">{selectedFacility.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <UsersIcon className="h-5 w-5 text-[#7EB693]" />
                    <div>
                      <p className="text-sm text-gray-600">Current Occupancy</p>
                      <p className="font-semibold">{selectedFacility.details.currentOccupancy} / {selectedFacility.details.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#7EB693]" />
                    <div>
                      <p className="text-sm text-gray-600">Operating Hours</p>
                      <p className="font-semibold">{selectedFacility.details.operatingHours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <UsersIcon className="h-5 w-5 text-[#7EB693]" />
                    <div>
                      <p className="text-sm text-gray-600">Staff Count</p>
                      <p className="font-semibold">{selectedFacility.details.staffCount}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#2B6747] mb-4">Services</h3>
                <ul className="space-y-2">
                  {selectedFacility.details.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#7EB693] rounded-full" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-[#2B6747] mb-2">Contact</h3>
                  <p className="text-gray-600">{selectedFacility.details.contact}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[#2B6747] text-white rounded-lg hover:bg-[#7EB693] transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AdminDashboardPage;
