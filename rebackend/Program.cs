using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using rebackend.Data;
using rebackend.Interfaces;
using rebackend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    if (connectionString.Contains("postgres", StringComparison.OrdinalIgnoreCase))
        options.UseNpgsql(connectionString);
    else
        options.UseSqlServer(connectionString);
});

builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IReferralService, ReferralService>();
builder.Services.AddScoped<IJobService, JobService>();
builder.Services.AddScoped<ITrainingService, TrainingService>();
builder.Services.AddScoped<IInterviewSupportService, InterviewSupportService>();
builder.Services.AddScoped<IStaffingService, StaffingService>();
builder.Services.AddScoped<INewsletterService, NewsletterService>();
builder.Services.AddScoped<IContentPageService, ContentPageService>();
builder.Services.AddScoped<ICareerGuidanceService, CareerGuidanceService>();
builder.Services.AddScoped<IRefundRequestService, RefundRequestService>();
builder.Services.AddScoped<IAdminJobService, AdminJobService>();
builder.Services.AddScoped<IAdminTrainingService, AdminTrainingService>();
builder.Services.AddScoped<IAdminService, AdminService>();
builder.Services.AddScoped<IFileUploadService, FileUploadService>();
builder.Services.AddScoped<ISearchService, SearchService>();
builder.Services.AddScoped<IRecruitmentService, RecruitmentService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.WithOrigins(
            "http://localhost:5173", 
            "http://localhost:5174",
            "https://upliftplacements.netlify.app"
        )
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials());
});

var app = builder.Build();

// Get port from environment variable (Render sets PORT)
var port = Environment.GetEnvironmentVariable("PORT") ?? "10000";
app.Urls.Add($"http://0.0.0.0:{port}");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Remove HTTPS redirection for Render deployment
// app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();
app.Run();
