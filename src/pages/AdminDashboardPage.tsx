
import { useState } from "react";
import {
  Hospital,
  BookOpen,
  Scissors,
  Hammer,
  Coffee,
} from "lucide-react";
import { FacilityData, Guest, Event, Notification } from "@/types/admin";
import Sidebar from "@/components/admin/Sidebar";
import MobileTabs from "@/components/admin/MobileTabs";
import DashboardHeader from "@/components/admin/DashboardHeader";
import OverviewTab from "@/components/admin/tabs/OverviewTab";
import GuestsTab from "@/components/admin/tabs/GuestsTab";
import EventsTab from "@/components/admin/tabs/EventsTab";
import NotificationsTab from "@/components/admin/tabs/NotificationsTab";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const facilities: FacilityData[] = [
    {
      name: "Hospital",
      icon: <Hospital className="h-8 w-8 text-primary-600" />,
      stats: {
        patients: "87",
        beds: "120",
        staff: "45",
      },
      status: "Operational",
    },
    {
      name: "School",
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      stats: {
        students: "245",
        teachers: "28",
        classes: "12",
      },
      status: "Operational",
    },
    {
      name: "Handloom",
      icon: <Scissors className="h-8 w-8 text-primary-600" />,
      stats: {
        workers: "32",
        looms: "18",
        production: "96%",
      },
      status: "Operational",
    },
    {
      name: "Handicrafts",
      icon: <Hammer className="h-8 w-8 text-primary-600" />,
      stats: {
        artisans: "56",
        products: "120+",
        orders: "42",
      },
      status: "Operational",
    },
    {
      name: "Canteen",
      icon: <Coffee className="h-8 w-8 text-primary-600" />,
      stats: {
        staff: "12",
        meals: "350/day",
        satisfaction: "92%",
      },
      status: "Operational",
    },
  ];

  const recentGuests: Guest[] = [
    { name: "Pradeep Kumar", arrival: "2025-04-08", departure: "2025-04-12", purpose: "Volunteer" },
    { name: "Nisha Sharma", arrival: "2025-04-07", departure: "2025-04-14", purpose: "Personal Retreat" },
    { name: "Rajat Singh", arrival: "2025-04-05", departure: "2025-04-10", purpose: "Educational Workshop" },
    { name: "Meenakshi Patel", arrival: "2025-04-03", departure: "2025-04-09", purpose: "Wellness Program" },
    { name: "Arun Verma", arrival: "2025-04-01", departure: "2025-04-08", purpose: "Personal Retreat" },
  ];

  const upcomingEvents: Event[] = [
    { name: "Nature Walk", date: "2025-04-12", attendees: 15, location: "Forest Trail" },
    { name: "Yoga Workshop", date: "2025-04-15", attendees: 25, location: "Meditation Hall" },
    { name: "Organic Farming Demo", date: "2025-04-18", attendees: 12, location: "Community Garden" },
    { name: "Cultural Evening", date: "2025-04-20", attendees: 50, location: "Community Center" },
  ];

  const notifications: Notification[] = [
    { message: "New guest registration received", time: "10 minutes ago", type: "info" },
    { message: "Low inventory alert in canteen supplies", time: "2 hours ago", type: "warning" },
    { message: "Monthly financial report is ready", time: "5 hours ago", type: "info" },
    { message: "Maintenance required at Cottage #5", time: "Yesterday", type: "alert" },
  ];

  return (
    <div className="min-h-screen bg-neutral-beige">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <DashboardHeader />
          
          {/* Mobile Tabs */}
          <MobileTabs activeTab={activeTab} onValueChange={setActiveTab} />
          
          {/* Tab Content */}
          {activeTab === "overview" && (
            <OverviewTab 
              facilities={facilities} 
              recentGuests={recentGuests} 
              upcomingEvents={upcomingEvents} 
            />
          )}
          
          {activeTab === "guests" && (
            <GuestsTab guests={recentGuests} />
          )}
          
          {activeTab === "events" && (
            <EventsTab events={upcomingEvents} />
          )}
          
          {activeTab === "notifications" && (
            <NotificationsTab notifications={notifications} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
