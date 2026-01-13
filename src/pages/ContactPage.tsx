import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Toast } from '../components/Toast';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#004182] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-slideUp">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl mb-8">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-10 text-center animate-scaleIn">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Send className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl mb-3 text-green-800 font-semibold">Message Sent Successfully!</h3>
                    <p className="text-green-700 text-lg">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="animate-slideUp animation-delay-100">
                        <label htmlFor="name" className="block mb-2 font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="animate-slideUp animation-delay-200">
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 focus:bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="animate-slideUp animation-delay-300">
                        <label htmlFor="phone" className="block mb-2 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 focus:bg-white"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div className="animate-slideUp animation-delay-400">
                        <label htmlFor="subject" className="block mb-2 font-medium">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="job-seeker">Job Seeker Support</option>
                          <option value="employer">Employer Services</option>
                          <option value="technical">Technical Support</option>
                          <option value="partnership">Partnership Opportunities</option>
                        </select>
                      </div>
                    </div>

                    <div className="animate-slideUp animation-delay-500">
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="animate-fadeIn">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto px-10 py-4 text-lg gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="animate-slideUp animation-delay-100 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 font-semibold">Email Us</h3>
                <a href="mailto:info@jobshopindia.com" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors text-lg">
                  info@jobshopindia.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  For general inquiries and support
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slideUp animation-delay-200 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl mb-3 font-semibold">Call Us</h3>
                <a href="tel:+911234567890" className="text-green-600 hover:text-green-700 hover:underline transition-colors text-lg">
                  +91 123 456 7890
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Mon-Fri from 9am to 6pm
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slideUp animation-delay-300 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-3 font-semibold">Visit Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Business Park<br />
                  Andheri East<br />
                  Mumbai - 400069<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slideUp animation-delay-400 hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 font-semibold">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-red-600">Closed</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          type="success"
          message="Message sent successfully!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}