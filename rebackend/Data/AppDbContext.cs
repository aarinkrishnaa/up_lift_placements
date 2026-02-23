using Microsoft.EntityFrameworkCore;
using rebackend.Entities;

namespace rebackend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Contact> Contacts { get; set; }
    public DbSet<Referral> Referrals { get; set; }
    public DbSet<Job> Jobs { get; set; }
    public DbSet<JobApplication> JobApplications { get; set; }
    public DbSet<TrainingProgram> TrainingPrograms { get; set; }
    public DbSet<TrainingEnrollment> TrainingEnrollments { get; set; }
    public DbSet<InterviewSupport> InterviewSupports { get; set; }
    public DbSet<StaffingRequest> StaffingRequests { get; set; }
    public DbSet<Newsletter> Newsletters { get; set; }
    public DbSet<ContentPage> ContentPages { get; set; }
    public DbSet<CareerGuidance> CareerGuidances { get; set; }
    public DbSet<RefundRequest> RefundRequests { get; set; }
    public DbSet<RecruitmentProcess> RecruitmentProcesses { get; set; }
}
