import { useState } from "react";
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
  User2
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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

  const facilities = [
    {
      name: "Hospital",
      icon: <Hospital className="h-6 w-6 text-[#2B6747]" />,
      description: "Medical facilities and wellness programs for residents and guests.",
      stats: [
        { label: "Staff", value: "12" },
        { label: "Patients", value: "8" },
        { label: "Beds", value: "20" }
      ]
    },
    {
      name: "School",
      icon: <GraduationCap className="h-6 w-6 text-[#2B6747]" />,
      description: "Educational programs for children and adults focusing on environmental awareness.",
      stats: [
        { label: "Teachers", value: "8" },
        { label: "Students", value: "45" },
        { label: "Courses", value: "6" }
      ]
    },
    {
      name: "Handloom",
      icon: <Scissors className="h-6 w-6 text-[#2B6747]" />,
      description: "Traditional textile crafting workshop using sustainable materials and methods.",
      stats: [
        { label: "Artisans", value: "15" },
        { label: "Units", value: "12" },
        { label: "Products", value: "30" }
      ]
    },
    {
      name: "Handicrafts",
      icon: <Hammer className="h-6 w-6 text-[#2B6747]" />,
      description: "Artisan workshops producing handmade crafts using local materials.",
      stats: [
        { label: "Artisans", value: "22" },
        { label: "Workshops", value: "5" },
        { label: "Products", value: "120" }
      ]
    },
    {
      name: "Canteen",
      icon: <Coffee className="h-6 w-6 text-[#2B6747]" />,
      description: "Community dining facility serving organic, locally-sourced vegetarian meals.",
      stats: [
        { label: "Staff", value: "12" },
        { label: "Meals/Day", value: "350" },
        { label: "Menu Items", value: "25" }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#F9F5F2]">
      {/* Sidebar */}
      <div className="w-64 bg-[#2B6747] text-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Anandwan Awaas</h1>
          <p className="text-sm opacity-80">Admin Dashboard</p>
        </div>

        <nav className="space-y-2">
          <Link to="#" className="flex items-center space-x-3 p-3 rounded-lg bg-[#7EB693] bg-opacity-20">
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link to="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#7EB693] hover:bg-opacity-20">
            <Users className="h-5 w-5" />
            <span>Guest Registry</span>
          </Link>
          <Link to="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#7EB693] hover:bg-opacity-20">
            <BookOpen className="h-5 w-5" />
            <span>Bookings</span>
          </Link>
          <Link to="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#7EB693] hover:bg-opacity-20">
            <FileText className="h-5 w-5" />
            <span>Reports</span>
          </Link>
          <Link to="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#7EB693] hover:bg-opacity-20">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="absolute bottom-8 left-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/20"></div>
            <div>
              <p className="font-medium">Arjun Mehta</p>
              <p className="text-sm opacity-80">Administrator</p>
            </div>
          </div>
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#7EB693] hover:bg-opacity-20 w-full">
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2B6747] mb-2">Dashboard</h1>
          <p className="text-[#2B6747]">Welcome back, Arjun. Here's what's happening at Anandwan Awaas today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center`}>
                  {card.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#2B6747]">{card.count}</h3>
              </div>
              <p className="text-[#2B6747]">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <h2 className="text-2xl font-bold text-[#2B6747] mb-6">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F3F3F3] rounded-full flex items-center justify-center">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B6747]">{facility.name}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{facility.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {facility.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="font-bold text-[#2B6747]">{stat.value}</p>
                  </div>
                ))}
              </div>
              <button className="text-[#FF9130] hover:text-[#FF9130]/80 text-sm mt-4">
                View details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
