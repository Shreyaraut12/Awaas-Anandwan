
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ImageCarousel from '@/components/ImageCarousel';

const HomePage = () => {
  // Carousel Images
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "River between mountains under white clouds"
    },
    {
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      alt: "Pine trees in forest"
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Mountain hit by sun rays"
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Body of water surrounded by trees"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/fdaacaa0-02bb-4bf3-bb62-8e3a1ec8b795.png" 
            alt="Forest with tall trees and green foliage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-500/25 bg-gradient-to-b from-primary-500/15 to-primary-600/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <div className="max-w-3xl text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">Experience Anandwan</h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto">
              a compassionate community founded by Baba Amte, offering hope, healing, and harmony with nature.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <Link to="/register">
                <Button size="default" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 h-12 rounded-md">
                  Register as Guest
                </Button>
              </Link>
              <Link to="/admin-login">
                <Button size="default" className="bg-accent-orange hover:bg-accent-orange/90 text-white px-6 py-2 h-12 rounded-md">
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Anandwan Awaas is dedicated to providing a serene retreat that connects guests with nature while supporting sustainable community development and holistic wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 rounded-lg bg-neutral-beige hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Connect with Nature</h3>
              <p className="text-gray-600">
                Experience the rejuvenating power of nature in our thoughtfully designed forest retreat.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-neutral-beige hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Development</h3>
              <p className="text-gray-600">
                Support sustainable community initiatives that empower local residents.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-neutral-beige hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Holistic Wellness</h3>
              <p className="text-gray-600">
                Discover holistic wellness practices rooted in ancient traditions and modern science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Anandwan</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Explore the serene beauty and transformative experiences waiting for you at our retreat.
            </p>
          </div>

          <div className="max-w-4xl mx-auto h-[400px]">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Visit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for a transformative experience in the heart of nature. Register now or learn more about what we offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white">
                Register as Guest
              </Button>
            </Link>
            <Link to="/guide">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
