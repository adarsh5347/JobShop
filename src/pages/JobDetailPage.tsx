import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, DollarSign, Briefcase, Clock, Building2, Share2, Bookmark, ArrowLeft, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { getJobById } from '../data/jobsData';

export function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = id ? getJobById(id) : undefined;

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Job Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/jobs">
            <Button>Back to Job Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    alert('Application submitted! This is a demo, so no actual application was sent.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/jobs')}
            className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-6"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Job Listings
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-8">
                {/* Job Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl mb-2">{job.title}</h1>
                      <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <Building2 className="w-5 h-5" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  {/* Job Meta Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="w-5 h-5" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-5 h-5" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <hr className="my-6 border-border" />

                {/* Job Description */}
                <div className="mb-6">
                  <h2 className="text-2xl mb-4">Job Description</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We are seeking a talented professional to join our dynamic team. The ideal candidate will have strong technical skills, excellent communication abilities, and a passion for continuous learning and growth.
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h2 className="text-2xl mb-4">Key Responsibilities</h2>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Collaborate with cross-functional teams to deliver high-quality solutions</li>
                    <li>Participate in design and code reviews to maintain code quality standards</li>
                    <li>Troubleshoot and resolve technical issues in a timely manner</li>
                    <li>Stay updated with industry trends and best practices</li>
                    <li>Contribute to team knowledge sharing and documentation</li>
                    <li>Mentor junior team members and support their professional growth</li>
                  </ul>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h2 className="text-2xl mb-4">Requirements</h2>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>{job.experience} of relevant professional experience</li>
                    <li>Strong proficiency in {job.skills.slice(0, 3).join(', ')}</li>
                    <li>Bachelor's degree in relevant field or equivalent experience</li>
                    <li>Excellent problem-solving and analytical skills</li>
                    <li>Strong communication and teamwork abilities</li>
                    <li>Self-motivated with ability to work independently</li>
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl mb-4">Benefits & Perks</h2>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Competitive salary and performance bonuses</li>
                    <li>Health insurance coverage for you and your family</li>
                    <li>Flexible work hours and remote work options</li>
                    <li>Professional development opportunities and training programs</li>
                    <li>Collaborative and inclusive work environment</li>
                    <li>Annual paid time off and holidays</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* About Company */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl mb-4">About {job.company}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {job.company} is a leading organization in the {job.category.toLowerCase()} industry, committed to innovation and excellence. We foster a culture of collaboration, continuous learning, and professional growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team consists of passionate professionals who are dedicated to delivering exceptional results and making a positive impact in our industry.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Apply Card */}
              <Card>
                <CardContent className="p-6">
                  <Button onClick={handleApply} className="w-full mb-4" size="lg">
                    Apply Now
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2">
                      <Bookmark className="w-4 h-4" />
                      Save
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Job Overview Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Job Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Posted Date</p>
                      <p className="">{job.postedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Job Type</p>
                      <p className="">{job.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Category</p>
                      <p className="">{job.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Experience</p>
                      <p className="">{job.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Salary</p>
                      <p className="">{job.salary}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="">{job.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about this position? Our recruitment team is here to assist you.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}