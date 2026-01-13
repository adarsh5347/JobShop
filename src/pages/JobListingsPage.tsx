import { useState, useMemo } from 'react';
import { Search, MapPin, Filter, X } from 'lucide-react';
import { JobCard } from '../components/JobCard';
import { Button } from '../components/Button';
import { jobsData, jobCategories } from '../data/jobsData';

export function JobListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch = 
        searchTerm === '' ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesLocation =
        locationFilter === '' ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());

      const matchesCategory =
        categoryFilter === 'All' ||
        job.category === categoryFilter;

      const matchesType =
        typeFilter === 'All' ||
        job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesCategory && matchesType;
    });
  }, [searchTerm, locationFilter, categoryFilter, typeFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setCategoryFilter('All');
    setTypeFilter('All');
  };

  const hasActiveFilters = searchTerm || locationFilter || categoryFilter !== 'All' || typeFilter !== 'All';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-6 text-center">Browse Job Openings</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Discover thousands of opportunities across India's leading companies
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="mb-3">Category</h4>
                <div className="space-y-2">
                  {jobCategories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === category}
                        onChange={() => setCategoryFilter(category)}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Job Type Filter */}
              <div>
                <h4 className="mb-3">Job Type</h4>
                <div className="space-y-2">
                  {['All', 'Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        checked={typeFilter === type}
                        onChange={() => setTypeFilter(type)}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
              <div
                className="bg-white w-80 h-full overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline mb-6 block"
                  >
                    Clear All Filters
                  </button>
                )}

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="mb-3">Category</h4>
                  <div className="space-y-2">
                    {jobCategories.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={categoryFilter === category}
                          onChange={() => setCategoryFilter(category)}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div>
                  <h4 className="mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {['All', 'Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          checked={typeFilter === type}
                          onChange={() => setTypeFilter(type)}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => setShowFilters(false)}
                  className="w-full mt-6"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}

          {/* Job Listings */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredJobs.length} of {jobsData.length} jobs
              </p>
            </div>

            {/* Jobs Grid */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filters to find what you're looking for
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}