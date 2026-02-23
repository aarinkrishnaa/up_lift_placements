# 🚂 Deploy Backend to Railway

## Step 1: Prepare Code

✅ Already done:
- Added Railway PORT configuration
- Updated CORS to allow Netlify domain
- Created railway.json config

## Step 2: Push to GitHub

```bash
cd rebackend
git add .
git commit -m "Prepare backend for Railway deployment"
git push
```

## Step 3: Deploy to Railway

1. **Go to Railway:**
   - Visit https://railway.app
   - Sign up/Login with GitHub

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `up_lift_placements` repository
   - Select `rebackend` as root directory

3. **Configure Build:**
   - Railway auto-detects .NET
   - No manual configuration needed

4. **Add Database (PostgreSQL):**
   - Click "New" → "Database" → "Add PostgreSQL"
   - Railway will create a database
   - Copy the connection string

5. **Add Environment Variables:**
   Click "Variables" and add:

   ```
   ASPNETCORE_ENVIRONMENT=Production
   
   ConnectionStrings__DefaultConnection=<PASTE_RAILWAY_POSTGRES_URL>
   
   EmailSettings__SmtpServer=smtp.gmail.com
   EmailSettings__SmtpPort=587
   EmailSettings__SenderEmail=service@upliftplacements.com
   EmailSettings__ReceiverEmail=insvin121@gmail.com
   EmailSettings__SenderPassword=fslt gqws pezp wsco
   ```

6. **Deploy:**
   - Click "Deploy"
   - Wait 3-5 minutes
   - You'll get a URL like: `https://your-app.railway.app`

## Step 4: Update Database Connection

Railway uses PostgreSQL, not SQL Server. Update your code:

**Option A: Use PostgreSQL (Recommended)**
1. Install package:
   ```bash
   cd rebackend
   dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
   ```

2. Update Program.cs:
   ```csharp
   builder.Services.AddDbContext<AppDbContext>(options =>
       options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
   ```

**Option B: Use Railway's SQL Server (Paid)**
- Add SQL Server database from Railway marketplace

## Step 5: Run Migrations

After deployment, run migrations:
```bash
# Railway CLI
railway run dotnet ef database update
```

Or add to railway.json:
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "dotnet ef database update && dotnet rebackend.dll"
  }
}
```

## Step 6: Update Frontend

1. Get your Railway URL (e.g., `https://upliftplacements.railway.app`)

2. Update Netlify environment variable:
   - Go to Netlify → Site settings → Environment variables
   - Update `VITE_API_URL` to your Railway URL
   - Trigger redeploy

## Step 7: Test

1. Visit your Netlify site
2. Fill out contact form
3. Check if email arrives at `insvin121@gmail.com`

## Troubleshooting

**Build fails?**
- Check Railway logs
- Ensure .NET SDK version matches

**Database connection fails?**
- Verify connection string format
- Check if migrations ran

**CORS errors?**
- Verify Netlify URL in CORS policy
- Check Railway logs

## Cost

- **Railway Free Tier:**
  - $5 free credit/month
  - Enough for small projects
  - Sleeps after 30 min inactivity

- **Upgrade if needed:**
  - $5/month for always-on
  - PostgreSQL included
