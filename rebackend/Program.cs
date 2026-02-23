using Microsoft.EntityFrameworkCore;
using rebackend.Data;
using rebackend.Interfaces;
using rebackend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IContactService, ContactService>();
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
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();
app.Run();
