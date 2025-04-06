export const adminModel = {
  adminId: 'string', // Unique identifier for the admin (e.g., UUID or MongoDB ObjectID)
  firstName: 'string', // Admin's first name
  lastName: 'string', // Admin's last name
  email: 'string', // Admin's email address (used for login)
  passwordHash: 'string', // Hashed password for the admin account
  role: 'string', // Role of the admin (e.g., Super Admin, Moderator, Recruiter Manager)
  permissions: [
    // List of permissions granted to the admin
    'viewUsers',
    'manageJobs',
    'approveCompanies',
    'viewReports',
  ],
  status: 'string', // Status of the admin (e.g., Active, Inactive, Suspended)
  lastLogin: 'string', // Timestamp of the last login (ISO 8601 format)
  createdAt: 'string', // Date when the admin account was created (ISO 8601 format)
  updatedAt: 'string', // Last update date (ISO 8601 format)
  assignedCompanies: [
    // List of companies assigned to the admin (optional, used for restricted roles)
    {
      companyId: 'string', // Unique identifier of the company
      companyName: 'string', // Name of the assigned company
    },
  ],
  assignedUsers: [
    // List of users assigned to the admin (optional)
    {
      userId: 'string', // Unique identifier of the user
      userName: 'string', // Name of the assigned user
    },
  ],
  auditLogs: [
    // List of actions performed by the admin (optional)
    {
      logId: 'string', // Unique identifier for the log entry
      action: 'string', // Description of the action (e.g., "Created Job Posting")
      timestamp: 'string', // Timestamp of the action (ISO 8601 format)
      performedBy: 'string', // Who performed the action (e.g., "adminName")
      details: 'string', // Additional details about the action (optional)
    },
  ],
};
