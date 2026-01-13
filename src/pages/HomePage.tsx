import { Link } from 'react-router-dom';
import { Users, TrendingUp, Building2, ArrowRight, Briefcase, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Card, CardContent } from '../components/Card';
import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Logo } from '../components/Logo';
import { motion, AnimatePresence } from 'motion/react';

export function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Splash animation timing
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); // 3.5 seconds total animation

    return () => clearTimeout(timer);
  }, []);

  const scrollMarquee = (direction: 'left' | 'right') => {
    if (marqueeRef.current) {
      const scrollAmount = 300;
      marqueeRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const companyLogos = [
    { name: 'Tech Company', url: 'https://images.unsplash.com/photo-1661347998648-79ad2d81bf26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
    { name: 'Corporate Brand', url: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
    { name: 'Business Office', url: 'https://images.unsplash.com/photo-1758518726324-62bef7c815b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
    { name: 'Technology Brand', url: 'https://images.unsplash.com/photo-1582203422342-1541a90a0103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
    { name: 'Startup', url: 'https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
    { name: 'Corporate Tech', url: 'https://images.unsplash.com/photo-1562705121-e624542c7b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
    { name: 'Modern Office', url: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
    { name: 'Fintech', url: 'https://images.unsplash.com/photo-1707075891545-41b982930351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=100' },
  ];

  return (
    <>
      {/* Beautiful Splash Screen Animation */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              y: -50,
              transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0A66C2] via-[#004182] to-[#003366]"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-20 w-96 h-96 bg-[#057642] rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-[#378FE9] rounded-full blur-3xl"
            />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-12"
              >
                <Logo size="lg" variant="light" />
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              >
                We Help You Focus
              </motion.h1>
              
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              >
                Your Search
              </motion.h1>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="h-1 bg-white mx-auto mt-8 rounded-full"
              />

              {/* Subtle loading dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="flex gap-2 justify-center mt-12"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-3 h-3 bg-white rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Homepage Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden"
      >
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white py-24 md:py-32 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#057642] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#378FE9] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight font-bold max-w-5xl mx-auto">
                EVERY GREAT JOURNEY BEGINS WITH A SINGLE STEP.
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
                LET US WALK THAT PATH TOGETHER.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/upload-resume">
                <button
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0A66C2] hover:bg-gray-100 hover:text-[#004182] px-10 py-6 text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all font-semibold rounded-2xl active:scale-95"
                >
                  Apply Now
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link to="/employers">
                <button
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A66C2] px-10 py-6 text-lg shadow-2xl hover:scale-105 transition-all font-semibold rounded-2xl active:scale-95"
                >
                  Hire Talent
                  <Users className="w-6 h-6" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section with Enhanced Cards */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200 group">
                  <CardContent className="text-center py-10">
                    <div className="bg-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <Briefcase className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-5xl text-blue-600 mb-3 font-bold">5,000+</h3>
                    <p className="text-gray-600 text-lg">Active Jobs</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 group">
                  <CardContent className="text-center py-10">
                    <div className="bg-purple-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <Building2 className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="text-5xl text-purple-600 mb-3 font-bold">2,500+</h3>
                    <p className="text-gray-600 text-lg">Companies</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-200 group">
                  <CardContent className="text-center py-10">
                    <div className="bg-green-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <Users className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-5xl text-green-600 mb-3 font-bold">50,000+</h3>
                    <p className="text-gray-600 text-lg">Job Seekers</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-200 group">
                  <CardContent className="text-center py-10">
                    <div className="bg-orange-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <TrendingUp className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="text-5xl text-orange-600 mb-3 font-bold">10,000+</h3>
                    <p className="text-gray-600 text-lg">Placements</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl mb-4">Why Choose The Job Shop?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                India's first advertising-focused recruitment agency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4">35+ Years Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Since 1985, we've built deep sector knowledge and lasting professional relationships across the advertising industry.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4">Leadership Specialists</h3>
                <p className="text-gray-600 leading-relaxed">
                  160+ international senior placements including VPs, ECDs, NCDs, CFOs, and Digital Heads.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Operating across India, Middle East, South East Asia, and select African markets.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Marquee Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl mb-4">Trusted by Leading Companies</h2>
              <p className="text-xl text-gray-600">
                We've helped these organizations build exceptional teams
              </p>
            </motion.div>

            {/* Marquee Container */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div className="flex animate-marquee" ref={marqueeRef}>
                {companyLogos.map((company, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="inline-flex items-center justify-center mx-6 min-w-[280px]"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-200 group w-full h-32 flex items-center justify-center overflow-hidden">
                      <ImageWithFallback
                        src={company.url}
                        alt={company.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
                {companyLogos.map((company, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="inline-flex items-center justify-center mx-6 min-w-[280px]"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-200 group w-full h-32 flex items-center justify-center overflow-hidden">
                      <ImageWithFallback
                        src={company.url}
                        alt={company.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-4">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full mr-2"
                onClick={() => scrollMarquee('left')}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full"
                onClick={() => scrollMarquee('right')}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#004182] text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                Ready to Take the Next Step?
              </h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Upload your resume and let employers find you. Get started with your job search today.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/upload-resume">
                <button
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0A66C2] hover:bg-gray-100 px-10 py-6 text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all font-semibold rounded-2xl active:scale-95"
                >
                  Upload Resume
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A66C2] px-10 py-6 text-lg shadow-2xl hover:scale-105 transition-all font-semibold rounded-2xl active:scale-95"
                >
                  Get In Touch
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}