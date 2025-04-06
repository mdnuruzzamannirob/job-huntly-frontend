export const applicantModel = {
  auth_id: 'string', // Unique identifier for the user (e.g., UUID or MongoDB ObjectID)
  firstName: 'string', // Applicant's first name
  lastName: 'string', // Applicant's last name
  email: 'string', // Applicant's email address (unique)
  passwordHash: 'string', // Hashed password for secure storage
  profilePicture: 'string', // URL to the applicant's profile picture (optional)
  phoneNumber: 'string', // Applicant's phone number (optional)
  address: {
    // Applicant's address (optional)
    street: 'string',
    city: 'string',
    state: 'string',
    postalCode: 'string',
    country: 'string',
  },
  dateOfBirth: 'string', // Applicant's date of birth (ISO 8601 format)
  gender: 'string', // Gender (optional)
  resume: {
    // URL or reference to the applicant's resume document
    fileUrl: 'string',
    uploadDate: 'string', // Date of upload (ISO 8601 format)
  },
  skills: [
    // List of skills the applicant has
    'string',
  ],
  education: [
    // Applicant's education history
    {
      degree: 'string', // Degree obtained (e.g., Bachelor’s, Master’s)
      fieldOfStudy: 'string', // Field of study (e.g., Computer Science, Business)
      university: 'string', // Name of the university
      startDate: 'string', // Start date of education (ISO 8601 format)
      endDate: 'string', // End date of education (ISO 8601 format or 'Present')
      graduationYear: 'number', // Graduation year (optional)
    },
  ],
  workExperience: [
    // Work experience history
    {
      jobTitle: 'string', // Job title
      company: 'string', // Company name
      location: 'string', // Job location (city, country)
      startDate: 'string', // Job start date (ISO 8601 format)
      endDate: 'string', // Job end date (ISO 8601 format or 'Present')
      responsibilities: 'string', // Job responsibilities and achievements
    },
  ],
  certifications: [
    // List of certifications (optional)
    {
      certificationName: 'string', // Name of the certification
      issuingOrganization: 'string', // Organization that issued the certification
      issueDate: 'string', // Issue date (ISO 8601 format)
      expirationDate: 'string', // Expiration date (optional)
    },
  ],
  languages: [
    // List of languages the applicant speaks (optional)
    {
      language: 'string', // Language name (e.g., English, Spanish)
      proficiencyLevel: 'string', // Proficiency level (e.g., Beginner, Intermediate, Fluent, Native)
    },
  ],
  socialLinks: {
    // Links to applicant's social profiles (optional)
    linkedin: 'string',
    github: 'string',
    portfolio: 'string',
  },
  locationPreferences: {
    // Preferred job locations (optional)
    preferredCity: 'string',
    preferredCountry: 'string',
  },
  jobPreferences: {
    // Preferences regarding job types (optional)
    desiredJobTitle: 'string',
    desiredSalaryRange: {
      // Salary range (optional)
      min: 'number', // Minimum salary expectation
      max: 'number', // Maximum salary expectation
    },
    employmentType: 'string', // Employment type (Full-time, Part-time, Remote, etc.)
    willingToRelocate: 'boolean', // Whether the applicant is open to relocation (optional)
  },
  applications: [
    // List of job applications submitted by the applicant
    {
      jobId: 'string', // Job ID the applicant applied to
      status: 'string', // Application status (e.g., "Applied", "Interview", "Hired", "Rejected")
      applicationDate: 'string', // Date the application was submitted (ISO 8601 format)
      resumeUrl: 'string', // Resume URL if uploaded with the application
      coverLetter: 'string', // Cover letter text (optional)
    },
  ],
  interviews: [
    // List of interviews scheduled for the applicant (optional)
    {
      jobId: 'string', // Job ID for the interview
      interviewDate: 'string', // Interview date and time (ISO 8601 format)
      interviewLocation: 'string', // Interview location (virtual, in-person, etc.)
      interviewer: 'string', // Name of the interviewer
    },
  ],
  notifications: [
    // List of notifications for the applicant (optional)
    {
      type: 'string', // Type of notification (e.g., Interview scheduled, Application status updated)
      message: 'string', // Message content
      date: 'string', // Date of the notification (ISO 8601 format)
      readStatus: 'boolean', // Whether the notification has been read
    },
  ],
  accountStatus: 'string', // Account status (e.g., Active, Suspended, Deactivated)
  createdAt: 'string', // Account creation date (ISO 8601 format)
  updatedAt: 'string', // Last profile update date (ISO 8601 format)
};
