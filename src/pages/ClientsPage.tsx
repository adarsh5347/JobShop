import { motion } from 'motion/react';
import { Building2, CheckCircle, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ClientsPage() {
  // Extended client logos array
  const clients = [
    { 
      name: 'Tech Innovations Inc', 
      url: 'https://images.unsplash.com/photo-1661347998648-79ad2d81bf26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Technology',
      since: '2015'
    },
    { 
      name: 'Global Corporate Solutions', 
      url: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Consulting',
      since: '2012'
    },
    { 
      name: 'Modern Business Group', 
      url: 'https://images.unsplash.com/photo-1758518726324-62bef7c815b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Finance',
      since: '2018'
    },
    { 
      name: 'Digital Ventures Ltd', 
      url: 'https://images.unsplash.com/photo-1582203422342-1541a90a0103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Digital Marketing',
      since: '2016'
    },
    { 
      name: 'Startup Accelerator', 
      url: 'https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Venture Capital',
      since: '2019'
    },
    { 
      name: 'Enterprise Tech Corp', 
      url: 'https://images.unsplash.com/photo-1562705121-e624542c7b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Software',
      since: '2010'
    },
    { 
      name: 'Modern Workspace', 
      url: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Real Estate',
      since: '2017'
    },
    { 
      name: 'Fintech Innovations', 
      url: 'https://images.unsplash.com/photo-1707075891545-41b982930351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Fintech',
      since: '2020'
    },
    { 
      name: 'Creative Agency Pro', 
      url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Advertising',
      since: '2014'
    },
    { 
      name: 'Media Partners Network', 
      url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Media',
      since: '2011'
    },
    { 
      name: 'E-Commerce Giants', 
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'E-Commerce',
      since: '2013'
    },
    { 
      name: 'Healthcare Solutions', 
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Healthcare',
      since: '2016'
    },
    { 
      name: 'Manufacturing Excellence', 
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Manufacturing',
      since: '2009'
    },
    { 
      name: 'Education Platform', 
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Education',
      since: '2018'
    },
    { 
      name: 'Retail Innovation Co', 
      url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Retail',
      since: '2015'
    },
    { 
      name: 'Hospitality Group', 
      url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=150',
      industry: 'Hospitality',
      since: '2012'
    },
  ];

  const stats = [
    { icon: Building2, count: '500+', label: 'Partner Companies' },
    { icon: Users, count: '10,000+', label: 'Successful Placements' },
    { icon: CheckCircle, count: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A66C2] via-[#004182] to-[#003366] text-white py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#057642] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#378FE9] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bold">
              Our Trusted Clients
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Building exceptional teams for India's leading organizations across diverse industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl p-8 text-center border-2 border-gray-100 hover:border-blue-200 hover:shadow-3xl transition-all hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.count}</h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Companies We've Partnered With</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading organizations across multiple industries
            </p>
          </motion.div>

          {/* Grid of Client Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 overflow-hidden hover:-translate-y-2">
                  {/* Logo Container */}
                  <div className="h-40 flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white">
                    <ImageWithFallback
                      src={client.url}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Client Info */}
                  <div className="p-6 bg-white border-t border-gray-100">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {client.name}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
                        {client.industry}
                      </span>
                      <span className="text-gray-400">Since {client.since}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Join Our Growing Network?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Partner with us to build your dream team and drive your business forward
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A66C2] hover:bg-gray-100 px-10 py-6 text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all font-semibold rounded-2xl active:scale-95"
            >
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}