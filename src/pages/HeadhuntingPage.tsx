import { CheckCircle, Target, Users, FileSearch, MessageSquare, UserCheck } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { motion } from 'motion/react';

export function HeadhuntingPage() {
  const methodology = [
    {
      number: "1",
      title: "Client Brief & Role Definition",
      description: "The process begins with a comprehensive understanding of the client's hiring objectives. We immerse ourselves in the brand, role requirements, organizational structure, and leadership expectations, while also advising on industry-benchmarked compensation frameworks.",
      detail: "This stage culminates in the creation of a clearly defined candidate profile, developed collaboratively with the client. The profile serves as a strategic blueprint, ensuring complete alignment on experience, capability, culture fit, and leadership potential.",
      icon: Target,
      color: "from-blue-500 to-blue-700"
    },
    {
      number: "2",
      title: "Distilled Role-Based Talent Search",
      description: "Leveraging our proprietary database and long-standing industry network, we identify talent with highly relevant brand and role experience. Our deep understanding of performance metrics enables us to pinpoint professionals with proven impact.",
      detail: "The search is further strengthened through targeted research across industry networks, social platforms, and specialist channels, ensuring access to both visible and discreet leadership talent.",
      icon: FileSearch,
      color: "from-purple-500 to-purple-700"
    },
    {
      number: "3",
      title: "Curated Profile Presentation & Introduction",
      description: "Each shortlisted candidate undergoes a detailed screening and digital interview, evaluating multiple dimensions including personality, leadership style, industry exposure, career progression, project contribution, and skill depth.",
      detail: "Clients receive a concise, insight-driven shortlist, featuring candidate summaries, compensation expectations, career highlights, and our professional assessment outlining both strengths and potential considerations.",
      icon: Users,
      color: "from-green-500 to-green-700"
    },
    {
      number: "4",
      title: "Interview Management & Offer Facilitation",
      description: "We coordinate and manage the entire interview process, ensuring candidates are fully briefed on role expectations, organizational context, and leadership dynamics.",
      detail: "Prior to offer closure, we collate all necessary documentation and facilitate transparent discussions around compensation and expectations. Acting as a neutral advisor, we support negotiations to achieve a mutually beneficial outcome. As part of our professional ethos, we also provide constructive feedback to non-selected candidates, maintaining long-term relationships within our talent ecosystem.",
      icon: MessageSquare,
      color: "from-orange-500 to-orange-700"
    },
    {
      number: "5",
      title: "Post-Recruitment Engagement",
      description: "Our role extends beyond placement. Post-joining, we remain actively engaged with both client and candidate to ensure a smooth transition and integration.",
      detail: "Should any challenges arise during the adjustment phase, we provide ongoing support to safeguard success on both sides.",
      icon: UserCheck,
      color: "from-teal-500 to-teal-700"
    }
  ];

  const whyItWorks = [
    "Deep understanding of advertising & creative leadership roles",
    "35+ years of executive search expertise",
    "Structured, transparent, and relationship-driven approach",
    "Strong post-placement engagement",
    "Trusted by leading brands and senior professionals"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-6 font-bold">Headhunting</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Bringing the right talent to the right opportunity through insight, discretion, and deep industry expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-12 text-center font-bold">Our Philosophy</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At The Job Shop, we believe that bringing the right talent to the right opportunity is far more than a matching exercise. Exceptional recruitment requires insight, discretion, and the ability to evaluate individuals beyond résumés, job titles, and interview responses.
              </p>
              <p>
                Our approach focuses on understanding the individual behind the profile—their motivations, aspirations, decision drivers, and what genuinely excites them in both work and life. This depth of assessment allows us to identify not just qualified professionals, but individuals who align with a brand's culture, vision, and long-term growth.
              </p>
              <p>
                Established over 35 years ago as a specialist force in the creative and advertising executive search industry, The Job Shop has built a reputation for delivering transformational talent. We do not simply recruit employees; we identify leaders and specialists who grow with your organization and contribute lasting value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Search Methodology */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 font-bold">Our Executive Search Methodology</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our executive search is governed by a structured, five-point process, designed to protect the interests of both clients and candidates while ensuring clarity, alignment, and long-term success.
            </p>
          </motion.div>

          <div className="space-y-12">
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0A66C2]">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Icon & Number */}
                      <div className="flex-shrink-0">
                        <div className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="mt-4 text-center">
                          <span className="text-4xl font-bold text-gray-300">{step.number}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0A66C2]">{step.title}</h3>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                          {step.description}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-12 text-center font-bold">Why Our Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0A66C2]">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-8 h-8 text-[#057642] flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#004182] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight font-bold">
              Ready to Find Your Next Leader?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Partner with India's most trusted advertising recruitment specialists. Let us help you build exceptional teams.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#0A66C2] px-10 py-5 rounded-full hover:bg-gray-100 transition-all text-lg font-semibold shadow-2xl hover:scale-105"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}