import { Target, Eye, Award, Users, CheckCircle, Globe, TrendingUp, Building } from 'lucide-react';
import { Card, CardContent } from '../components/Card';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6 font-bold">About The Job Shop</h1>
            <p className="text-xl text-blue-100">
              Advertising Recruitment Specialists Since 1985
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Established in 1985, <strong>The Job Shop</strong> is India's first and most trusted recruitment agency dedicated exclusively to the advertising industry. With over three decades of industry expertise, we have played a pivotal role in shaping careers and strengthening agencies across an ever-evolving advertising ecosystem.
            </p>
            <p>
              Built on deep sector knowledge and long-standing professional relationships, The Job Shop is committed to delivering strategic recruitment solutions that go beyond conventional hiring. Having partnered with three generations of advertising professionals, we have developed an extensive and highly curated talent network spanning India and international markets.
            </p>
            <p>
              Our recruitment footprint extends across India, the Middle East, South East Asia, and select African countries. We have successfully executed <strong>160+ senior-level international placements</strong>, including roles such as Vice Presidents – Account Management & Strategy, Media Leaders, Executive Creative Directors (ECDs), National Creative Directors (NCDs), Chief Financial Officers (CFOs), and Digital Heads, along with numerous leadership placements within India.
            </p>
            <p className="text-[#0A66C2] font-semibold text-xl">
              Senior and leadership recruitment remains our core specialization.
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach Stats */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="text-center py-10">
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-[#0A66C2]" />
                </div>
                <h3 className="text-4xl text-[#0A66C2] mb-3 font-bold">160+</h3>
                <p className="text-gray-600 text-lg">International Senior Placements</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="text-center py-10">
                <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-4xl text-purple-600 mb-3 font-bold">35+</h3>
                <p className="text-gray-600 text-lg">Years of Industry Expertise</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="text-center py-10">
                <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-4xl text-green-600 mb-3 font-bold">1985</h3>
                <p className="text-gray-600 text-lg">India's First Ad-Focused Agency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl mb-16 text-center font-bold">Leadership & Legacy</h2>
          
          <div className="space-y-16">
            {/* Vijay Uchil */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="text-center p-8">
                    <div className="w-40 h-40 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                    <h3 className="text-2xl mb-2 font-bold">Vijay Uchil</h3>
                    <p className="text-[#0A66C2] font-semibold text-lg">Founder & Principal Consultant</p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    With a professional journey that began in the finance divisions of leading advertising agencies, Vijay Uchil brings over <strong>35 years of firsthand industry experience</strong>. In 1985, identifying a critical gap between creative talent and limited HR infrastructure within advertising agencies, he founded The Job Shop—a recruitment consultancy singularly focused on the advertising sector.
                  </p>
                  <p>
                    Under his leadership, the firm has grown into a respected name in advertising recruitment, known for integrity, insight, and long-term value creation. His enduring relationships with industry leaders—many of whom he placed in their first or most defining career roles—stand as a testament to his contribution to the advertising community.
                  </p>
                </div>
              </div>
            </div>

            {/* Ishan Uchil */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="text-center p-8">
                    <div className="w-40 h-40 bg-gradient-to-br from-[#057642] to-[#045a35] rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                    <h3 className="text-2xl mb-2 font-bold">Ishan Uchil</h3>
                    <p className="text-[#057642] font-semibold text-lg">Director</p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Representing the second generation of leadership, Ishan Uchil brings a contemporary perspective to The Job Shop's legacy. With hands-on experience in advertising agencies, he possesses a deep understanding of modern creative structures, digital transformation, and evolving talent requirements.
                  </p>
                  <p>
                    Joining the organization in 2015, Ishan plays a key role in expanding the firm's capabilities beyond traditional advertising recruitment. His focus lies in future-ready hiring solutions, aligning talent strategy with emerging industry demands while upholding the firm's foundational values of trust, discretion, and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why The Job Shop */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl mb-16 text-center font-bold">Why The Job Shop</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0A66C2]">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#0A66C2] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">India's First Advertising-Focused Agency</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pioneering specialized recruitment in the advertising industry since 1985
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0A66C2]">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#0A66C2] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">35+ Years of Industry Credibility</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trusted by three generations of advertising professionals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0A66C2]">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#0A66C2] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Specialized in Senior & Leadership Hiring</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Expert placement of VPs, ECDs, NCDs, CFOs, and Digital Heads
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0A66C2]">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#0A66C2] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strong Presence Across India & International Markets</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Operating in India, Middle East, South East Asia, and Africa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0A66C2] md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#0A66C2] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trusted by Agencies, Networks & Professionals Worldwide</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Deep sector knowledge and long-standing professional relationships that deliver strategic recruitment solutions beyond conventional hiring
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
