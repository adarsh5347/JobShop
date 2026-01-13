import { Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Clock, Building2 } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  postedDate: string;
  category: string;
  skills: string[];
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card hover className="h-full group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-blue-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl mb-1 group-hover:text-primary transition-colors">
              <Link to={`/jobs/${job.id}`} className="hover:underline">
                {job.title}
              </Link>
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Building2 className="w-4 h-4 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">{job.company}</span>
            </div>
          </div>
          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
            {job.type}
          </span>
        </div>

        {/* Job Details */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <DollarSign className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Briefcase className="w-4 h-4" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Clock className="w-4 h-4" />
            <span>Posted {job.postedDate}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {job.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {job.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="text-xs text-muted-foreground px-3 py-1">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link to={`/jobs/${job.id}`}>
          <Button variant="primary" className="w-full group-hover:shadow-lg">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
}