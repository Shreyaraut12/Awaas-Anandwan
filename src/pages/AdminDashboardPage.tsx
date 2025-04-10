import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Hospital,
  BookOpen,
  Scissors,
  Hammer,
  Coffee,
  Users,
  Calendar,
  Bell,
  LogOut,
  User,
  Home,
  Settings,
} from "lucide-react";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const facilities = [
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

  const recentGuests = [
    { name: "Pradeep Kumar", arrival: "2025-04-08", departure: "2025-04-12", purpose: "Volunteer" },
    { name: "Nisha Sharma", arrival: "2025-04-07", departure: "2025-04-14", purpose: "Personal Retreat" },
    { name: "Rajat Singh", arrival: "2025-04-05", departure: "2025-04-10", purpose: "Educational Workshop" },
    { name: "Meenakshi Patel", arrival: "2025-04-03", departure: "2025-04-09", purpose: "Wellness Program" },
    { name: "Arun Verma", arrival: "2025-04-01", departure: "2025-04-08", purpose: "Personal Retreat" },
  ];

  const upcomingEvents = [
    { name: "Nature Walk", date: "2025-04-12", attendees: 15, location: "Forest Trail" },
    { name: "Yoga Workshop", date: "2025-04-15", attendees: 25, location: "Meditation Hall" },
    { name: "Organic Farming Demo", date: "2025-04-18", attendees: 12, location: "Community Garden" },
    { name: "Cultural Evening", date: "2025-04-20", attendees: 50, location: "Community Center" },
  ];

  const notifications = [
    { message: "New guest registration received", time: "10 minutes ago", type: "info" },
    { message: "Low inventory alert in canteen supplies", time: "2 hours ago", type: "warning" },
    { message: "Monthly financial report is ready", time: "5 hours ago", type: "info" },
    { message: "Maintenance required at Cottage #5", time: "Yesterday", type: "alert" },
  ];

  return (
    <div className="min-h-screen bg-neutral-beige">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-primary-600 text-white min-h-screen p-4 hidden md:block">
          <div className="mb-8">
            <h2 className="text-xl font-bold">Admin Dashboard</h2>
            <p className="text-sm opacity-75">Anandwan Awaas</p>
          </div>
          
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md ${
                activeTab === "overview" ? "bg-primary-700 font-medium" : "hover:bg-primary-500"
              }`}
            >
              <Home size={18} />
              <span>Overview</span>
            </button>
            
            <button 
              onClick={() => setActiveTab("guests")}
              className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md ${
                activeTab === "guests" ? "bg-primary-700 font-medium" : "hover:bg-primary-500"
              }`}
            >
              <Users size={18} />
              <span>Guests</span>
            </button>
            
            <button 
              onClick={() => setActiveTab("events")}
              className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md ${
                activeTab === "events" ? "bg-primary-700 font-medium" : "hover:bg-primary-500"
              }`}
            >
              <Calendar size={18} />
              <span>Events</span>
            </button>
            
            <button 
              onClick={() => setActiveTab("notifications")}
              className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md ${
                activeTab === "notifications" ? "bg-primary-700 font-medium" : "hover:bg-primary-500"
              }`}
            >
              <Bell size={18} />
              <span>Notifications</span>
            </button>
          </nav>
          
          <div className="absolute bottom-4 w-56 space-y-1">
            <button className="flex items-center space-x-3 w-full px-3 py-2 rounded-md hover:bg-primary-500">
              <Settings size={18} />
              <span>Settings</span>
            </button>
            
            <Link to="/" className="flex items-center space-x-3 w-full px-3 py-2 rounded-md hover:bg-primary-500">
              <LogOut size={18} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome, Admin</h1>
              <p className="text-gray-600">Here's what's happening at Anandwan Awaas today</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-500" />
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                <User className="h-5 w-5 text-primary-600" />
              </div>
            </div>
          </div>
          
          {/* Mobile Tabs */}
          <div className="md:hidden mb-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="guests">Guests</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="notifications">Alerts</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold mb-4">Facilities Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {facilities.map((facility, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-primary-50 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{facility.name}</CardTitle>
                        {facility.icon}
                      </div>
                      <CardDescription>
                        Status: <span className="text-green-500">{facility.status}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(facility.stats).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-sm text-gray-500 capitalize">{key}</p>
                            <p className="font-medium">{value}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 p-2">
                      <Button variant="link" className="text-primary-600 p-0 h-auto w-full text-center">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Registrations</CardTitle>
                    <CardDescription>Latest guest check-ins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentGuests.slice(0, 3).map((guest, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
                          <div>
                            <p className="font-medium">{guest.name}</p>
                            <p className="text-sm text-gray-500">{guest.purpose}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Arrival: {guest.arrival}</p>
                            <p className="text-sm">Departure: {guest.departure}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-2">
                    <Button variant="link" className="text-primary-600 p-0 h-auto w-full text-center">
                      View All Guests
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Scheduled activities and programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.slice(0, 3).map((event, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
                          <div>
                            <p className="font-medium">{event.name}</p>
                            <p className="text-sm text-gray-500">{event.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Date: {event.date}</p>
                            <p className="text-sm">Attendees: {event.attendees}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-2">
                    <Button variant="link" className="text-primary-600 p-0 h-auto w-full text-center">
                      View All Events
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
          
          {/* Guests Tab */}
          {activeTab === "guests" && (
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Guest Management</CardTitle>
                      <CardDescription>View and manage guest registrations</CardDescription>
                    </div>
                    <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                      Add New Guest
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Name</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Arrival</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Departure</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Purpose</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {recentGuests.map((guest, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3">{guest.name}</td>
                            <td className="px-4 py-3">{guest.arrival}</td>
                            <td className="px-4 py-3">{guest.departure}</td>
                            <td className="px-4 py-3">{guest.purpose}</td>
                            <td className="px-4 py-3">
                              <div className="flex space-x-2">
                                <button className="text-primary-500 hover:text-primary-700">Edit</button>
                                <button className="text-gray-500 hover:text-gray-700">View</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Events Tab */}
          {activeTab === "events" && (
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Event Calendar</CardTitle>
                      <CardDescription>Manage upcoming activities and programs</CardDescription>
                    </div>
                    <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                      Schedule New Event
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Event Name</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Date</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Location</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Attendees</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {upcomingEvents.map((event, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3">{event.name}</td>
                            <td className="px-4 py-3">{event.date}</td>
                            <td className="px-4 py-3">{event.location}</td>
                            <td className="px-4 py-3">{event.attendees}</td>
                            <td className="px-4 py-3">
                              <div className="flex space-x-2">
                                <button className="text-primary-500 hover:text-primary-700">Edit</button>
                                <button className="text-red-500 hover:text-red-700">Cancel</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications & Alerts</CardTitle>
                  <CardDescription>System messages and important updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border ${
                          notification.type === 'warning' 
                            ? 'bg-yellow-50 border-yellow-200' 
                            : notification.type === 'alert' 
                              ? 'bg-red-50 border-red-200' 
                              : 'bg-blue-50 border-blue-200'
                        }`}
                      >
                        <div className="flex justify-between">
                          <p className={`font-medium ${
                            notification.type === 'warning' 
                              ? 'text-yellow-800' 
                              : notification.type === 'alert' 
                                ? 'text-red-800' 
                                : 'text-blue-800'
                          }`}>
                            {notification.message}
                          </p>
                          <p className="text-sm text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
