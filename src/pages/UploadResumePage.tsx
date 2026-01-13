import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';

export function UploadResumePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    jobCategory: '',
    keySkills: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      alert('Please upload your resume');
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        currentLocation: '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        noticePeriod: '',
        jobCategory: '',
        keySkills: '',
      });
      setFile(null);
    }, 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Upload Your Resume</h1>
            <p className="text-xl text-blue-100">
              Get discovered by top employers. Upload your resume and let opportunities find you.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl mb-4">Resume Uploaded Successfully!</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Thank you for registering with JobShop India. Your profile has been created and your resume is now visible to our partner employers. We'll notify you when there are matching job opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setSubmitted(false)} size="lg">
                  Upload Another Resume
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/jobs'}>
                  Browse Jobs
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* File Upload Section */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6">Upload Resume</h2>
                  
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive
                        ? 'border-primary bg-blue-50'
                        : file
                        ? 'border-green-500 bg-green-50'
                        : 'border-border hover:border-primary'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {file ? (
                      <div className="flex flex-col items-center">
                        <FileText className="w-16 h-16 text-green-600 mb-4" />
                        <p className="mb-2">{file.name}</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setFile(null)}
                        >
                          Remove File
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-lg mb-2">
                          Drag and drop your resume here, or
                        </p>
                        <label className="inline-block">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <span className="text-primary hover:underline cursor-pointer">
                            browse files
                          </span>
                        </label>
                        <p className="text-sm text-muted-foreground mt-4">
                          Supported formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>
                      Your resume will be securely stored and only shared with verified employers. We respect your privacy and will never share your information without your consent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentLocation" className="block mb-2">
                        Current Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="currentLocation"
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Mumbai, Maharashtra"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Details */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6">Professional Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="experience" className="block mb-2">
                        Total Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-4">2-4 years</option>
                        <option value="4-6">4-6 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="jobCategory" className="block mb-2">
                        Preferred Job Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="jobCategory"
                        name="jobCategory"
                        value={formData.jobCategory}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select category</option>
                        <option value="IT & Software">IT & Software</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Design">Design</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Business">Business</option>
                        <option value="Content">Content</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="currentSalary" className="block mb-2">
                        Current Salary (LPA)
                      </label>
                      <input
                        type="text"
                        id="currentSalary"
                        name="currentSalary"
                        value={formData.currentSalary}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 8"
                      />
                    </div>

                    <div>
                      <label htmlFor="expectedSalary" className="block mb-2">
                        Expected Salary (LPA) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 10-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="noticePeriod" className="block mb-2">
                        Notice Period <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="noticePeriod"
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select notice period</option>
                        <option value="Immediate">Immediate (0-15 days)</option>
                        <option value="1 month">1 Month</option>
                        <option value="2 months">2 Months</option>
                        <option value="3 months">3 Months</option>
                        <option value="Serving notice">Currently Serving Notice</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="keySkills" className="block mb-2">
                        Key Skills <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="keySkills"
                        name="keySkills"
                        value={formData.keySkills}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="e.g., React, JavaScript, Node.js, Python, Project Management"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Separate skills with commas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button type="submit" size="lg" className="gap-2">
                  <Upload className="w-5 h-5" />
                  Submit Resume
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/jobs'}
                >
                  Browse Jobs Instead
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}