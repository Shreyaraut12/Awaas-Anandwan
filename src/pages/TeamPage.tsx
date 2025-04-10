
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  contact?: string;
}

const TeamPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Anika Sharma",
      role: "Founder & Director",
      bio: "Dr. Anika founded Anandwan Awaas in 1985 after a successful career in environmental science. Her vision for a sustainable forest retreat has transformed countless lives and inspired environmental conservation efforts across the region.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "anika@anandwanawaas.org"
    },
    {
      name: "Rajiv Mehta",
      role: "Operations Manager",
      bio: "Rajiv oversees the day-to-day operations of Anandwan Awaas. With over 15 years of experience in hospitality and retreat management, he ensures that every guest's experience is seamless and memorable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "rajiv@anandwanawaas.org"
    },
    {
      name: "Priya Nair",
      role: "Sustainability Coordinator",
      bio: "Priya leads our sustainability initiatives, from organic farming to waste management systems. Her innovative approaches have significantly reduced our environmental footprint while enhancing the guest experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "priya@anandwanawaas.org"
    },
    {
      name: "Dr. Vikram Singh",
      role: "Wellness Director",
      bio: "Dr. Vikram brings his expertise in Ayurvedic medicine and holistic health to our wellness programs. He has developed signature treatments that combine traditional wisdom with modern approaches to health and wellbeing.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "vikram@anandwanawaas.org"
    },
    {
      name: "Meera Patel",
      role: "Community Outreach Manager",
      bio: "Meera coordinates our relationships with local communities and volunteers. Her passion for social development has created strong bonds between Anandwan Awaas and surrounding villages.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "meera@anandwanawaas.org"
    },
    {
      name: "Arjun Desai",
      role: "Head of Programs",
      bio: "Arjun designs and implements our guest programs and educational workshops. His background in experiential education has shaped our unique approach to nature-based learning.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "arjun@anandwanawaas.org"
    },
    {
      name: "Kavita Reddy",
      role: "Culinary Director",
      bio: "Kavita oversees our farm-to-table dining program. Her commitment to organic, locally-sourced cuisine showcases the bounty of our gardens while nourishing guests with delicious, wholesome meals.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "kavita@anandwanawaas.org"
    },
    {
      name: "Sanjay Kumar",
      role: "Forest Conservation Lead",
      bio: "Sanjay heads our environmental conservation efforts. His expertise in forest ecology and biodiversity has been instrumental in preserving and enhancing the natural habitat around Anandwan Awaas.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      contact: "sanjay@anandwanawaas.org"
    },
  ];

  return (
    <div className="bg-neutral-beige">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              Meet the dedicated individuals who make Anandwan Awaas a transformative experience.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glassmorphism rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                  {member.contact && (
                    <a
                      href={`mailto:${member.contact}`}
                      className="text-sm text-primary-500 hover:text-primary-700 inline-block"
                    >
                      Contact
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg mb-8 text-gray-700">
              We're always looking for passionate individuals who share our vision of sustainable living and community development. Check our current openings or send us your resume.
            </p>
            <Button className="bg-primary-500 hover:bg-primary-600 text-white">
              View Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Can't join full-time? Consider volunteering! We offer various opportunities for individuals who want to contribute to our mission while gaining valuable experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/guide">
              <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white">
                Learn About Volunteering
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
