export const companyModel = {
  companyId: 'string', // Unique identifier for the company (e.g., UUID or MongoDB ObjectID)
  companyName: 'string', // Name of the company
  industry: 'string', // Industry the company operates in (e.g., Technology, Healthcare, etc.)
  companyLogo: 'string', // URL to the company's logo (optional)
  companyDescription: 'string', // Short description of the company
  website: 'string', // Company website URL
  address: {
    // Company address
    street: 'string',
    city: 'string',
    state: 'string',
    postalCode: 'string',
    country: 'string',
  },
  contactInfo: {
    // Contact information for the company
    phone: 'string', // Phone number
    email: 'string', // Contact email address
    supportEmail: 'string', // Customer support email (optional)
    hrEmail: 'string', // HR or recruitment email (optional)
  },
  size: {
    // Company size (optional)
    employeeCount: 'number', // Number of employees
    revenue: 'string', // Company revenue (optional)
  },
  socialLinks: {
    // Links to the company's social media (optional)
    linkedin: 'string',
    facebook: 'string',
    twitter: 'string',
    instagram: 'string',
  },
  jobs: [
    // List of job postings from the company
    {
      jobId: 'string', // Unique identifier for the job
      title: 'string', // Job title
      location: 'string', // Job location (e.g., city, country)
      description: 'string', // Job description
      employmentType: 'string', // Employment type (e.g., Full-time, Part-time, Remote)
      salaryRange: {
        // Salary range for the job (optional)
        min: 'number', // Minimum salary
        max: 'number', // Maximum salary
      },
      datePosted: 'string', // Date when the job was posted (ISO 8601 format)
      applicationDeadline: 'string', // Application deadline (optional)
      status: 'string', // Job status (e.g., Active, Closed, On Hold)
    },
  ],
  employees: [
    // List of employees working at the company (optional)
    {
      employeeId: 'string', // Unique identifier for the employee
      firstName: 'string', // Employee's first name
      lastName: 'string', // Employee's last name
      email: 'string', // Employee's email address
      jobTitle: 'string', // Employee's job title
      dateJoined: 'string', // Date the employee joined the company (ISO 8601 format)
      managerId: 'string', // Reference to the employee's manager (optional)
    },
  ],
  recruiters: [
    // List of recruiters working for the company (optional)
    {
      recruiterId: 'string', // Unique identifier for the recruiter
      firstName: 'string', // Recruiter's first name
      lastName: 'string', // Recruiter's last name
      email: 'string', // Recruiter's email address
      phone: 'string', // Recruiter's phone number (optional)
      jobListingsManaged: [
        // List of jobs the recruiter manages
        'string',
      ],
    },
  ],
  reviews: [
    // Company reviews from employees or applicants (optional)
    {
      reviewId: 'string', // Unique identifier for the review
      reviewerId: 'string', // Reviewer ID (either employee or applicant)
      rating: 'number', // Rating (e.g., 1-5 stars)
      reviewText: 'string', // Detailed review text
      datePosted: 'string', // Date the review was posted (ISO 8601 format)
    },
  ],
  benefits: [
    // List of benefits offered by the company (optional)
    'Health insurance',
    '401(k)',
    'Paid time off',
    'Flexible working hours',
    'Remote work options',
  ],
  createdAt: 'string', // Date the company was created or registered (ISO 8601 format)
  updatedAt: 'string', // Last update date (ISO 8601 format)
};
