# COMPLETE API LIST - NetBounce Placement Backend

## ✅ ALL APIs Now Available

### 1. PUBLIC APIS (Frontend)

#### Contact Form
- POST `/api/Contact/submit` - Submit contact form

#### Referral & Earn
- POST `/api/Referral/submit` - Submit referral
- GET `/api/Referral/status/{code}` - Check referral status by code

#### Job Listings & Applications
- GET `/api/Job/listings` - Get all active jobs
- GET `/api/Job/{id}` - Get job by ID
- POST `/api/Job/apply` - Apply for a job

#### Training Programs
- GET `/api/Training/programs` - Get all active programs
- GET `/api/Training/{id}` - Get training program by ID
- POST `/api/Training/enroll` - Enroll in training

#### Interview Support
- POST `/api/InterviewSupport/request` - Request interview support

#### Staffing Services
- POST `/api/Staffing/request` - Submit staffing request

#### Newsletter
- POST `/api/Newsletter/subscribe` - Subscribe to newsletter
- POST `/api/Newsletter/unsubscribe` - Unsubscribe from newsletter

#### Content Pages
- GET `/api/Content/{pageName}` - Get page content (about-us, refund-policy, etc.)

#### Career Guidance
- POST `/api/CareerGuidance/request` - Request career guidance

#### Refund Requests
- POST `/api/Refund/request` - Submit refund request

#### Search
- GET `/api/Search/jobs?keyword=...&location=...` - Search jobs
- GET `/api/Search/training?keyword=...` - Search training programs

#### Recruitment Process
- POST `/api/Recruitment/process` - Create recruitment process
- GET `/api/Recruitment/process/{candidateId}` - Get recruitment status

#### File Upload
- POST `/api/Upload/resume` - Upload resume file
- GET `/api/Upload/{filename}` - Download file

---

### 2. ADMIN APIS (Backend Management)

#### Dashboard
- GET `/api/admin/dashboard` - Get dashboard statistics

#### View All Submissions
- GET `/api/admin/contacts` - View all contact submissions
- GET `/api/admin/referrals` - View all referrals
- GET `/api/admin/applications` - View all job applications
- GET `/api/admin/enrollments` - View all training enrollments
- GET `/api/admin/interview-support` - View all interview support requests
- GET `/api/admin/staffing` - View all staffing requests
- GET `/api/admin/jobs` - View ALL jobs (active + inactive)
- GET `/api/admin/training` - View ALL training programs

#### Status Updates
- PATCH `/api/admin/contacts/{id}/status` - Update contact status
- PATCH `/api/admin/referrals/{id}/status` - Update referral status
- PATCH `/api/admin/applications/{id}/status` - Update application status

#### Job Management (CRUD)
- POST `/api/admin/jobs` - Create new job
- GET `/api/admin/jobs/{id}` - Get job by ID
- PUT `/api/admin/jobs/{id}` - Update job
- DELETE `/api/admin/jobs/{id}` - Delete job

#### Training Management (CRUD)
- POST `/api/admin/training` - Create new training program
- GET `/api/admin/training/{id}` - Get training program by ID
- PUT `/api/admin/training/{id}` - Update training program
- DELETE `/api/admin/training/{id}` - Delete training program

#### Content Management
- POST `/api/Content` - Create or update page content
- GET `/api/CareerGuidance` - View all career guidance requests
- GET `/api/Refund` - View all refund requests

#### Recruitment Process Management
- PATCH `/api/Recruitment/process/{id}/stage` - Update recruitment stage

---

## 📊 ENTITIES

1. Contact
2. Referral
3. Job
4. JobApplication
5. TrainingProgram
6. TrainingEnrollment
7. InterviewSupport
8. StaffingRequest
9. Newsletter
10. ContentPage
11. CareerGuidance
12. RefundRequest
13. RecruitmentProcess

---

## 🔧 SETUP INSTRUCTIONS

### 1. Database Migration
```bash
dotnet ef migrations add CompleteAPISetup
dotnet ef database update
```

### 2. Configure File Upload
Add to `appsettings.json`:
```json
{
  "FileUpload": {
    "MaxFileSize": 5242880,
    "AllowedExtensions": [".pdf", ".doc", ".docx"]
  }
}
```

### 3. Create wwwroot folder
```bash
mkdir wwwroot
mkdir wwwroot/resumes
```

### 4. Update CORS (if needed)
Already configured in Program.cs with "AllowAll" policy

---

## 📝 REQUEST/RESPONSE EXAMPLES

### Upload Resume
```bash
POST /api/Upload/resume
Content-Type: multipart/form-data

file: [binary file data]

Response:
{
  "url": "/resumes/guid_filename.pdf"
}
```

### Dashboard Stats
```bash
GET /api/admin/dashboard

Response:
{
  "totalContacts": 150,
  "totalReferrals": 45,
  "totalApplications": 89,
  "totalEnrollments": 34,
  "totalInterviewSupport": 23,
  "totalStaffingRequests": 12,
  "activeJobs": 25,
  "activeTrainingPrograms": 8
}
```

### Search Jobs
```bash
GET /api/Search/jobs?keyword=developer&location=remote

Response: [
  {
    "id": 1,
    "title": "Senior Developer",
    "location": "Remote",
    ...
  }
]
```

### Update Status
```bash
PATCH /api/admin/contacts/123/status
Content-Type: application/json

{
  "status": "Contacted"
}
```

---

## ✅ COMPLETE FEATURE CHECKLIST

- ✅ Contact Form Submission
- ✅ Referral & Earn Program
- ✅ Job Listings & Applications
- ✅ Training Programs & Enrollment
- ✅ Interview Support Requests
- ✅ Staffing Requests
- ✅ Newsletter Subscription
- ✅ Content Management (About, Refund Policy)
- ✅ Career Guidance Requests
- ✅ Refund Request Management
- ✅ File Upload (Resume)
- ✅ Search Functionality
- ✅ Recruitment Process Tracking
- ✅ Admin Dashboard
- ✅ Admin View All Submissions
- ✅ Admin Status Updates
- ✅ Admin Job CRUD
- ✅ Admin Training CRUD

---

## 🚀 TOTAL API COUNT: 45+ Endpoints

**Public APIs:** 20
**Admin APIs:** 25+

---

## 🔐 SECURITY RECOMMENDATIONS

1. Add Authentication/Authorization for all `/api/admin/*` endpoints
2. Implement rate limiting for public APIs
3. Add file type validation for uploads
4. Implement CSRF protection
5. Add API key authentication for sensitive operations
6. Validate file size limits
7. Sanitize all user inputs
8. Add logging for all admin operations

---

## 📦 NEXT STEPS

1. ✅ Run database migrations
2. ⚠️ Add authentication middleware
3. ⚠️ Test all endpoints
4. ⚠️ Add input validation
5. ⚠️ Implement error handling
6. ⚠️ Add API documentation (Swagger)
7. ⚠️ Set up logging
8. ⚠️ Configure email notifications
