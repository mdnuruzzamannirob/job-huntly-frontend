export const userModel = {
  userId: 'string', // Unique identifier for the user (e.g., UUID or MongoDB ObjectID)
  email: 'string', // User's email address (used for login)
  passwordHash: 'string', // Hashed password for the user's account
  firstName: 'string', // User's first name (for Applicants and Admins)
  lastName: 'string', // User's last name (for Applicants and Admins)
  phone: 'string', // User's phone number (optional)
  role: 'string', // Role of the user (e.g., Applicant, Employer, Admin)
  status: 'string', // Account status (e.g., Active, Pending, Suspended)
  profileCompleted: 'boolean', // Whether the user has completed their profile
  emailVerified: 'boolean', // Whether the user's email has been verified
  verificationToken: 'string', // Token used for email verification
  resetPasswordToken: 'string', // Token used for password reset (optional)
  resetPasswordExpires: 'string', // Expiry date for the password reset token (optional)
  lastLogin: 'string', // Timestamp of the last login (ISO 8601 format)
  createdAt: 'string', // Date when the user account was created (ISO 8601 format)
  updatedAt: 'string', // Last update date (ISO 8601 format)
  deletedAt: 'string', // Date when the user account was deleted (if applicable, optional)

  companyDetails: {
    // Only for company role
    companyId: 'string', // Unique identifier for the company
    companyName: 'string', // Company name
    industry: 'string', // Industry of the company
    companyLogo: 'string', // URL to the company logo
    website: 'string', // Company website URL
  },

  preferences: {
    // User's preferences (optional)
    jobAlertFrequency: 'string', // Frequency of job alerts (e.g., Daily, Weekly)
    preferredLocation: 'string', // Preferred job location (optional)
    preferredJobType: 'string', // Preferred job type (e.g., Full-time, Part-time, Remote)
  },

  jobsApplied: [
    // List of jobs the user has applied to (optional)
    {
      jobId: 'string', // Job ID
      applicationDate: 'string', // Date when the application was submitted
      status: 'string', // Application status (e.g., Pending, Accepted, Rejected)
    },
  ],

  socialLogin: {
    // Data for social login (optional)
    google: {
      // Google login information
      googleId: 'string',
      profilePicture: 'string',
    },
    facebook: {
      // Facebook login information
      facebookId: 'string',
      profilePicture: 'string',
    },
  },
};
