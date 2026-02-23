# Contact Form Email Setup Instructions

## ✅ What's Been Done:

1. **Backend Updated**:
   - Modified `ContactDto` and `Contact` entity to match frontend form fields
   - Created `EmailService.cs` to handle email sending via Gmail SMTP
   - Updated `ContactService` to send email when form is submitted
   - Registered `EmailService` in dependency injection
   - Added email configuration to `appsettings.json`

2. **Frontend Updated**:
   - Contact form now connects to backend API: `http://localhost:5000/api/contact/submit`
   - Form is fully responsive for mobile devices
   - Shows loading state and success/error messages

3. **Email Configuration**:
   - Displays: `service@upliftplacements.com` (frontend)
   - Receives: `insvin121@gmail.com` (backend)

## 🔧 Setup Required:

### Step 1: Enable Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Step 2: Update Backend Configuration

Open `rebackend/appsettings.json` and replace `YOUR_APP_PASSWORD_HERE` with your Gmail app password:

```json
"EmailSettings": {
  "SmtpServer": "smtp.gmail.com",
  "SmtpPort": 587,
  "SenderEmail": "service@upliftplacements.com",
  "ReceiverEmail": "insvin121@gmail.com",
  "SenderPassword": "YOUR_16_CHAR_APP_PASSWORD"
}
```

### Step 3: Run Backend

```bash
cd rebackend
dotnet restore
dotnet ef database update  # If you have migrations
dotnet run
```

Backend will run on: `http://localhost:5000`

### Step 4: Run Frontend

```bash
cd refrontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

## 📧 How It Works:

1. User fills contact form on website
2. Form submits to backend API: `POST /api/contact/submit`
3. Backend saves to database
4. Backend sends email to `insvin121@gmail.com` via Gmail SMTP
5. Email includes all form details with reply-to set to user's email
6. User sees success message

## 🔒 Security Notes:

- Never commit `appsettings.json` with real passwords to Git
- Use environment variables in production
- Consider using Azure SendGrid or AWS SES for production email sending

## 📱 Mobile Responsive:

The contact page is now fully responsive with:
- Smaller text on mobile (text-sm sm:text-base)
- Reduced padding (py-8 sm:py-12)
- Better spacing (gap-8 md:gap-12)
- Responsive form inputs and buttons
