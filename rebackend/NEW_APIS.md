# New APIs Added to NetBounce Placement Backend

## 1. Career Guidance API
**Endpoint:** `/api/CareerGuidance`
- **POST** `/api/CareerGuidance/request` - Submit career guidance request
- **GET** `/api/CareerGuidance` - Get all career guidance requests (Admin)

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "currentRole": "string",
  "targetRole": "string",
  "message": "string"
}
```

## 2. Content Management API
**Endpoint:** `/api/Content`
- **GET** `/api/Content/{pageName}` - Get content by page name (about-us, refund-policy, etc.)
- **POST** `/api/Content` - Create or update page content (Admin)

**Request Body:**
```json
{
  "pageName": "string",
  "title": "string",
  "content": "string",
  "isActive": true
}
```

## 3. Refund Request API
**Endpoint:** `/api/Refund`
- **POST** `/api/Refund/request` - Submit refund request
- **GET** `/api/Refund` - Get all refund requests (Admin)

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "orderId": "string",
  "reason": "string"
}
```

## 4. Enhanced Job API
**Endpoint:** `/api/Job`
- **GET** `/api/Job/listings` - Get all active jobs
- **GET** `/api/Job/{id}` - Get job by ID (NEW)
- **POST** `/api/Job/apply` - Apply for a job

## 5. Enhanced Training API
**Endpoint:** `/api/Training`
- **GET** `/api/Training/programs` - Get all active programs
- **GET** `/api/Training/{id}` - Get training program by ID (NEW)
- **POST** `/api/Training/enroll` - Enroll in training

## 6. Admin Job Management API
**Endpoint:** `/api/admin/jobs`
- **POST** `/api/admin/jobs` - Create new job
- **PUT** `/api/admin/jobs/{id}` - Update job
- **DELETE** `/api/admin/jobs/{id}` - Delete job
- **GET** `/api/admin/jobs/{id}` - Get job by ID

**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "location": "string",
  "jobType": "string",
  "experienceLevel": "string",
  "salaryMin": 0,
  "salaryMax": 0,
  "skills": "string",
  "isActive": true,
  "expiryDate": "2024-12-31T00:00:00Z"
}
```

## 7. Admin Training Management API
**Endpoint:** `/api/admin/training`
- **POST** `/api/admin/training` - Create new training program
- **PUT** `/api/admin/training/{id}` - Update training program
- **DELETE** `/api/admin/training/{id}` - Delete training program
- **GET** `/api/admin/training/{id}` - Get training program by ID

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "durationInWeeks": 0,
  "price": 0,
  "curriculum": "string",
  "isActive": true,
  "maxStudents": 0
}
```

## New Entities Added
1. **ContentPage** - For managing static content (About Us, Refund Policy, etc.)
2. **CareerGuidance** - For career guidance requests
3. **RefundRequest** - For refund requests

## Database Migration Required
Run the following commands to create the database migration:
```bash
dotnet ef migrations add AddNewEntities
dotnet ef database update
```

## Summary of Changes
- ✅ Added 3 new entities
- ✅ Added 7 new DTOs
- ✅ Added 6 new service interfaces
- ✅ Added 6 new service implementations
- ✅ Added 5 new controllers
- ✅ Enhanced existing Job and Training controllers with GetById endpoints
- ✅ Updated DbContext with new DbSets
- ✅ Registered all services in Program.cs

## Next Steps
1. Run database migrations
2. Test all new endpoints
3. Add authentication/authorization for admin endpoints
4. Implement file upload for resume handling
5. Add validation attributes to DTOs
