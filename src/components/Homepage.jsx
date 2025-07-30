import React from 'react';
import { Phone, Clock, MapPin, User, Stethoscope, Heart, Activity, Brain, Leaf, Apple, Baby, Users, Star, Award, Shield } from 'lucide-react';

const InfinityClinic = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hair & Skin Care",
      description: "PRP | Laser treatments",
      marathi: "केस व त्वचा समस्यांचे उपचार",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23grad1)' rx='15'/%3E%3Cpath d='M40 30 Q60 20 80 30 Q85 50 80 70 Q60 80 40 70 Q35 50 40 30' fill='white' opacity='0.9'/%3E%3C/svg%3E"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Spinal Care",
      description: "Cervical, Lumbar Spondylosis, Arthritis & Joint Pain",
      marathi: "मान, पाठ व गुडघ्याचे उपचार",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23grad2)' rx='15'/%3E%3Cpath d='M50 20 L50 40 M50 40 L50 60 M50 60 L50 80 M50 80 L50 100 M45 25 Q50 20 55 25 M45 45 Q50 40 55 45 M45 65 Q50 60 55 65 M45 85 Q50 80 55 85' stroke='white' stroke-width='3' fill='none'/%3E%3C/svg%3E"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Panchakarma",
      description: "Naadi Parikshan & Traditional Treatments",
      marathi: "पंचकर्म आणि नाडी परीक्षण",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23grad3)' rx='15'/%3E%3Cpath d='M60 20 Q70 30 60 40 Q50 30 60 20 M40 50 Q80 30 80 70 Q60 90 40 70 Q40 60 40 50' fill='white' opacity='0.9'/%3E%3C/svg%3E"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "PCOD & Gynaec",
      description: "Garbha Sanskar Programs",
      marathi: "स्त्री रोग तपासणी व उपचार आणि गर्भ संस्कार कार्यक्रम, सुवर्ण प्राशन",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23grad4)' rx='15'/%3E%3Ccircle cx='45' cy='50' r='15' fill='white' opacity='0.9'/%3E%3Ccircle cx='75' cy='50' r='15' fill='white' opacity='0.9'/%3E%3Cpath d='M30 80 Q60 70 90 80' stroke='white' stroke-width='4' fill='none'/%3E%3C/svg%3E"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Lifestyle Management",
      description: "Healthy Diet | Yoga | Meditation",
      marathi: "आहार व्यवस्थापन, योगासाधने",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23grad5)' rx='15'/%3E%3Ccircle cx='60' cy='45' r='20' fill='white' opacity='0.9'/%3E%3Cpath d='M50 75 Q60 85 70 75 Q75 85 80 75' stroke='white' stroke-width='3' fill='none'/%3E%3C/svg%3E"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Diabetes & Hypertension",
      description: "Weight Loss Management",
      marathi: "मधुमेह व रक्तदाब वाढण्यासी उपचार वजन कमी करण्यासाठी सल्ला",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23grad6)' rx='15'/%3E%3Cpath d='M30 60 L40 45 L50 55 L60 35 L70 50 L80 30 L90 45' stroke='white' stroke-width='4' fill='none'/%3E%3Ccircle cx='60' cy='60' r='25' fill='none' stroke='white' stroke-width='3'/%3E%3C/svg%3E"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header with floating elements */}
      <header className="relative bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Logo and Clinic Name */}
            <div className="flex items-center mb-6 lg:mb-0 z-10">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mr-6 shadow-xl border-4 border-pink-200">
                <span className="text-pink-500 font-bold text-3xl">AB</span>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">Infinity Clinic</h1>
                <p className="text-pink-100 text-xl font-semibold mb-1">FAMILY PHYSICIAN | SKIN • HAIR • LASER</p>
                <p className="text-pink-200 text-lg">Ayurved & Physiotherapy</p>
              </div>
            </div>
            
            {/* Contact Info Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-xl z-10">
              <div className="flex items-center justify-center lg:justify-end mb-3">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-xl font-bold">9518583294 | 9579692886</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <Clock className="w-6 h-6 mr-3" />
                <span className="text-lg">10AM To 2PM | 5PM To 10PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Doctor Information with Images */}
      <section className="py-12 bg-white shadow-lg relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Meet Our Expert Doctors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Dr. Bhagyashree Kshirsagar</h3>
                  <div className="flex items-center mt-2">
                    <Award className="w-4 h-4 text-pink-500 mr-2" />
                    <p className="text-pink-600 font-semibold">BAMS, PGDEMS, PGDCC</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Reg. No. - I-104447-A</p>
              <p className="text-gray-700">Expert in Ayurvedic treatments and family medicine with years of dedicated practice.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Dr. Anagha Kale</h3>
                  <div className="flex items-center mt-2">
                    <Award className="w-4 h-4 text-pink-500 mr-2" />
                    <p className="text-pink-600 font-semibold">BPTH, PGDEMS, PGDCC</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Reg. No. - 2019/07/PT/008056</p>
              <p className="text-gray-700">Specialized in physiotherapy and rehabilitation with modern treatment approaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Medical Imagery */}
      <section className="relative py-20 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Medical Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 opacity-20">
            <Stethoscope className="w-24 h-24 text-white animate-float" />
          </div>
          <div className="absolute top-40 right-20 opacity-20">
            <Heart className="w-20 h-20 text-white animate-bounce" />
          </div>
          <div className="absolute bottom-20 left-1/3 opacity-20">
            <Activity className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
              Complete Healthcare Solutions
            </h2>
            <p className="text-2xl text-pink-100 mb-10 leading-relaxed">
              Combining modern medicine with traditional Ayurveda for holistic wellness
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/25 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="text-white font-semibold">Expert Care</span>
                </div>
              </div>
              <div className="bg-white/25 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="text-white font-semibold">Modern Equipment</span>
                </div>
              </div>
              <div className="bg-white/25 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="text-white font-semibold">Holistic Approach</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mx-auto flex items-center justify-center mb-4">
                <Stethoscope className="w-16 h-16 text-white" />
              </div>
              <p className="text-white text-xl font-semibold">Serving Pune with Excellence Since Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid with Images */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Comprehensive Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class healthcare with our range of specialized treatments combining traditional wisdom with modern technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Service Image */}
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Icon */}
                <div className="text-pink-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {service.description}
                </p>
                {service.marathi && (
                  <p className="text-pink-600 font-medium text-center text-sm bg-pink-50 py-2 px-4 rounded-lg">
                    {service.marathi}
                  </p>
                )}
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Visit Our Modern Clinic</h2>
            <p className="text-xl text-pink-100">Located in the heart of Pune for your convenience</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Address Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-10 mb-10 shadow-2xl border border-white/30">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Our Location</h3>
              </div>
              <p className="text-xl text-center leading-relaxed">
                Om Sadan Building, 1st Floor, Opp. ICICI Bank,<br />
                Krishna Chowk Road, New Sangavi, Pune - 411061
              </p>
            </div>
            
            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Clinic Hours</h3>
                </div>
                <div className="text-center">
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Morning:</span> 10:00 AM - 2:00 PM
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Evening:</span> 5:00 PM - 10:00 PM
                  </p>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Contact Numbers</h3>
                </div>
                <div className="text-center">
                  <p className="text-xl mb-2 font-semibold">9518583294</p>
                  <p className="text-xl font-semibold">9579692886</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-xl">
                <span className="text-white font-bold text-2xl">AB</span>
              </div>
              <h3 className="text-3xl font-bold">Infinity Clinic</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Your trusted partner in holistic healthcare, combining the wisdom of traditional Ayurveda 
              with cutting-edge modern medical technology for comprehensive wellness solutions.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-pink-400" />
                <span className="text-gray-300">Trusted Care</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-pink-400" />
                <span className="text-gray-300">Expert Doctors</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-400" />
                <span className="text-gray-300">Holistic Approach</span>
              </div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-500">
              © 2024 Infinity Clinic. All rights reserved by SK | Designed with care for your health and wellness.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default InfinityClinic;