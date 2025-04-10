
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GuidePage = () => {
  return (
    <div className="bg-neutral-beige">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Visitor's Guide</h1>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              Everything you need to know about staying and participating at Anandwan Awaas.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Register to Stay</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 mb-4">
                  To stay at Anandwan Awaas, you'll need to register in advance. Our registration process helps us prepare for your arrival and ensure you have a comfortable stay.
                </p>
                <ol className="list-decimal pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Fill out our online registration form with your personal details and stay preferences.</li>
                  <li>Receive a confirmation email with your booking details.</li>
                  <li>Prepare for your visit by reviewing our guidelines and packing recommendations.</li>
                  <li>Arrive at the scheduled date and check-in at our reception center.</li>
                </ol>
                <Link to="/register">
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white mt-2">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Explore the Environment</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 mb-4">
                  Anandwan Awaas is situated in a beautiful forest environment with numerous opportunities to connect with nature and explore the surroundings.
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Join guided nature walks to discover local flora and fauna.</li>
                  <li>Participate in forest bathing sessions for mindfulness and stress reduction.</li>
                  <li>Explore nearby hiking trails ranging from beginner to advanced levels.</li>
                  <li>Visit our botanical gardens featuring medicinal plants and organic farming.</li>
                  <li>Enjoy bird watching in designated areas known for diverse avian species.</li>
                </ul>
                <div className="bg-neutral-beige p-4 rounded-lg text-gray-700 mt-4">
                  <p className="font-medium">Note: Please follow all guidelines for responsible exploration to help us preserve the natural environment.</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Volunteer Opportunities</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 mb-4">
                  We welcome volunteers who wish to contribute their time and skills to our community. Volunteering at Anandwan Awaas is a rewarding experience that allows you to make a meaningful impact.
                </p>
                <h3 className="text-lg font-medium mb-2">Volunteer Programs:</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Forest Conservation - Help with reforestation efforts and trail maintenance.</li>
                  <li>Organic Farming - Assist in our sustainable agriculture initiatives.</li>
                  <li>Community Teaching - Share your knowledge with local children and adults.</li>
                  <li>Crafts & Skills - Contribute to our handicrafts program and skill development workshops.</li>
                  <li>Administrative Support - Help with guest services, communications, and daily operations.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Volunteer commitments range from a few days to several months. We provide basic accommodation and meals for long-term volunteers.
                </p>
                <Button className="bg-primary-500 hover:bg-primary-600 text-white mt-2">
                  Learn About Volunteering
                </Button>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Donate</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 mb-4">
                  Your financial support helps us maintain and expand our programs while keeping our services accessible to all. Donations to Anandwan Awaas directly contribute to:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Forest conservation and reforestation efforts</li>
                  <li>Community development programs</li>
                  <li>Wellness center operations and accessibility initiatives</li>
                  <li>Educational workshops and skill development programs</li>
                  <li>Infrastructure maintenance and sustainable improvements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We offer various donation options, including one-time gifts, monthly giving, and program-specific support. All donations are eligible for tax benefits as per applicable laws.
                </p>
                <Link to="/donate">
                  <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white mt-2">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Visit Anandwan Awaas?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Register now to experience our unique forest retreat. If you have any questions, our FAQ section may have the answers you're looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white">
                Register Now
              </Button>
            </Link>
            <Link to="/faqs">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;
