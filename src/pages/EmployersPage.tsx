import { useState } from 'react';
import { Upload, Building2, Briefcase, Mail, Phone, User, IndianRupee } from 'lucide-react';
import { motion } from 'motion/react';

export function EmployersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    organization: '',
    position: '',
    experience: '',
    brands: '',
    ctc: '',
    jobDescription: '',
    jdFile: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, jdFile: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! Our team will get in touch with you shortly.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      organization: '',
      position: '',
      experience: '',
      brands: '',
      ctc: '',
      jobDescription: '',
      jdFile: null
    });
  };

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
            <h1 className="text-4xl md:text-5xl mb-6 font-bold">Post Your Hiring Requirement</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Partner with The Job Shop to connect with exceptional talent tailored to your organization's needs.
              <br />
              Please share the details below and our team will get in touch with you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50"
          >
            {/* Contact Information Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-2xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                {/* Organization Name */}
                <div className="md:col-span-2">
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Role Details Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Role Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Position / Job Title */}
                <div className="md:col-span-2">
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Position / Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900"
                    placeholder="e.g., Senior Graphic Designer"
                    required
                  />
                </div>

                {/* Total Experience Required */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Total Experience Required (in years) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900"
                    placeholder="e.g., 5"
                    min="0"
                    step="0.5"
                    required
                  />
                </div>

                {/* CTC Budget */}
                <div>
                  <label htmlFor="ctc" className="block text-sm font-semibold text-gray-700 mb-2">
                    CTC Budget (Compensation Range) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="ctc"
                      name="ctc"
                      value={formData.ctc}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900"
                      placeholder="e.g., 8-12 LPA"
                      required
                    />
                  </div>
                </div>

                {/* Brands to Be Handled */}
                <div className="md:col-span-2">
                  <label htmlFor="brands" className="block text-sm font-semibold text-gray-700 mb-2">
                    Brands to Be Handled <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="brands"
                    name="brands"
                    value={formData.brands}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900 resize-none"
                    placeholder="List the brands/accounts this role will manage"
                    required
                  />
                </div>

                {/* Job Description */}
                <div className="md:col-span-2">
                  <label htmlFor="jobDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="jobDescription"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors text-gray-900 resize-none"
                    placeholder="Provide a detailed description of the role, responsibilities, and requirements..."
                    required
                  />
                </div>

                {/* Upload JD File */}
                <div className="md:col-span-2">
                  <label htmlFor="jdFile" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Job Description (JD)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="jdFile"
                      name="jdFile"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0A66C2] file:text-white hover:file:bg-[#004182] cursor-pointer"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">PDF / DOC formats supported</p>
                </div>
              </div>
            </div>

            {/* Submission Note */}
            <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-100 rounded-2xl">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#0A66C2]">Confidentiality Notice:</span> All information shared will be treated with strict confidentiality and used solely for recruitment purposes.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white px-12 py-4 text-lg font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
              >
                <Upload className="w-5 h-5" />
                Submit Requirement
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 font-bold">
              Need Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Our recruitment specialists are here to help you find the perfect talent for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-lg">
              <a href="tel:+911234567890" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:employers@thejobshop.in" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span>employers@thejobshop.in</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}