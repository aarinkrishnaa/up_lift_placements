using Microsoft.EntityFrameworkCore;
using rebackend.Data;
using rebackend.Entities;
using rebackend.Interfaces;

namespace rebackend.Services;

public class ContactService : IContactService
{
    private readonly AppDbContext _db;
    public ContactService(AppDbContext db) => _db = db;

    public async Task<Contact> SubmitAsync(Contact contact)
    {
        contact.Status = "New";
        _db.Contacts.Add(contact);
        await _db.SaveChangesAsync();
        return contact;
    }

    public async Task<IEnumerable<Contact>> GetAllAsync() => await _db.Contacts.ToListAsync();
}

public class ReferralService : IReferralService
{
    private readonly AppDbContext _db;
    public ReferralService(AppDbContext db) => _db = db;

    public async Task<Referral> CreateAsync(Referral referral)
    {
        referral.ReferralCode = $"REF{Guid.NewGuid().ToString("N")[..8].ToUpper()}";
        referral.Status = "Pending";
        _db.Referrals.Add(referral);
        await _db.SaveChangesAsync();
        return referral;
    }

    public async Task<Referral> GetByCodeAsync(string code) => 
        await _db.Referrals.FirstOrDefaultAsync(r => r.ReferralCode == code);
}

public class JobService : IJobService
{
    private readonly AppDbContext _db;
    public JobService(AppDbContext db) => _db = db;

    public async Task<IEnumerable<Job>> GetActiveJobsAsync() => 
        await _db.Jobs.Where(j => j.IsActive).ToListAsync();

    public async Task<Job> GetByIdAsync(int id) => await _db.Jobs.FindAsync(id);

    public async Task<JobApplication> ApplyAsync(JobApplication application)
    {
        application.Status = "Submitted";
        _db.JobApplications.Add(application);
        await _db.SaveChangesAsync();
        return application;
    }
}

public class TrainingService : ITrainingService
{
    private readonly AppDbContext _db;
    public TrainingService(AppDbContext db) => _db = db;

    public async Task<IEnumerable<TrainingProgram>> GetActiveProgramsAsync() => 
        await _db.TrainingPrograms.Where(t => t.IsActive).ToListAsync();

    public async Task<TrainingProgram> GetByIdAsync(int id) => await _db.TrainingPrograms.FindAsync(id);

    public async Task<TrainingEnrollment> EnrollAsync(TrainingEnrollment enrollment)
    {
        enrollment.Status = "Enrolled";
        enrollment.EnrollmentDate = DateTime.UtcNow;
        _db.TrainingEnrollments.Add(enrollment);
        await _db.SaveChangesAsync();
        return enrollment;
    }
}

public class InterviewSupportService : IInterviewSupportService
{
    private readonly AppDbContext _db;
    public InterviewSupportService(AppDbContext db) => _db = db;

    public async Task<InterviewSupport> CreateAsync(InterviewSupport support)
    {
        support.Status = "Requested";
        _db.InterviewSupports.Add(support);
        await _db.SaveChangesAsync();
        return support;
    }
}

public class StaffingService : IStaffingService
{
    private readonly AppDbContext _db;
    public StaffingService(AppDbContext db) => _db = db;

    public async Task<StaffingRequest> CreateAsync(StaffingRequest request)
    {
        request.Status = "New";
        _db.StaffingRequests.Add(request);
        await _db.SaveChangesAsync();
        return request;
    }
}

public class NewsletterService : INewsletterService
{
    private readonly AppDbContext _db;
    public NewsletterService(AppDbContext db) => _db = db;

    public async Task<Newsletter> SubscribeAsync(string email)
    {
        var existing = await _db.Newsletters.FirstOrDefaultAsync(n => n.Email == email);
        if (existing != null)
        {
            existing.IsSubscribed = true;
            existing.SubscribedDate = DateTime.UtcNow;
        }
        else
        {
            existing = new Newsletter { Email = email, IsSubscribed = true, SubscribedDate = DateTime.UtcNow };
            _db.Newsletters.Add(existing);
        }
        await _db.SaveChangesAsync();
        return existing;
    }

    public async Task<bool> UnsubscribeAsync(string email)
    {
        var newsletter = await _db.Newsletters.FirstOrDefaultAsync(n => n.Email == email);
        if (newsletter != null)
        {
            newsletter.IsSubscribed = false;
            newsletter.UnsubscribedDate = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            return true;
        }
        return false;
    }
}

public class ContentPageService : IContentPageService
{
    private readonly AppDbContext _db;
    public ContentPageService(AppDbContext db) => _db = db;

    public async Task<ContentPage> GetByNameAsync(string pageName) => 
        await _db.ContentPages.FirstOrDefaultAsync(p => p.PageName == pageName && p.IsActive);

    public async Task<ContentPage> CreateOrUpdateAsync(ContentPage page)
    {
        var existing = await _db.ContentPages.FirstOrDefaultAsync(p => p.PageName == page.PageName);
        if (existing != null)
        {
            existing.Title = page.Title;
            existing.Content = page.Content;
            existing.IsActive = page.IsActive;
        }
        else
        {
            _db.ContentPages.Add(page);
        }
        await _db.SaveChangesAsync();
        return existing ?? page;
    }
}

public class CareerGuidanceService : ICareerGuidanceService
{
    private readonly AppDbContext _db;
    public CareerGuidanceService(AppDbContext db) => _db = db;

    public async Task<CareerGuidance> CreateAsync(CareerGuidance guidance)
    {
        guidance.Status = "New";
        _db.CareerGuidances.Add(guidance);
        await _db.SaveChangesAsync();
        return guidance;
    }

    public async Task<IEnumerable<CareerGuidance>> GetAllAsync() => await _db.CareerGuidances.ToListAsync();
}

public class RefundRequestService : IRefundRequestService
{
    private readonly AppDbContext _db;
    public RefundRequestService(AppDbContext db) => _db = db;

    public async Task<RefundRequest> CreateAsync(RefundRequest request)
    {
        request.Status = "Pending";
        _db.RefundRequests.Add(request);
        await _db.SaveChangesAsync();
        return request;
    }

    public async Task<IEnumerable<RefundRequest>> GetAllAsync() => await _db.RefundRequests.ToListAsync();
}

public class AdminJobService : IAdminJobService
{
    private readonly AppDbContext _db;
    public AdminJobService(AppDbContext db) => _db = db;

    public async Task<Job> CreateAsync(Job job)
    {
        _db.Jobs.Add(job);
        await _db.SaveChangesAsync();
        return job;
    }

    public async Task<Job> UpdateAsync(int id, Job job)
    {
        var existing = await _db.Jobs.FindAsync(id);
        if (existing == null) return null;
        existing.Title = job.Title;
        existing.Description = job.Description;
        existing.Location = job.Location;
        existing.JobType = job.JobType;
        existing.ExperienceLevel = job.ExperienceLevel;
        existing.SalaryMin = job.SalaryMin;
        existing.SalaryMax = job.SalaryMax;
        existing.Skills = job.Skills;
        existing.IsActive = job.IsActive;
        existing.ExpiryDate = job.ExpiryDate;
        await _db.SaveChangesAsync();
        return existing;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var job = await _db.Jobs.FindAsync(id);
        if (job == null) return false;
        _db.Jobs.Remove(job);
        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<Job> GetByIdAsync(int id) => await _db.Jobs.FindAsync(id);
}

public class AdminTrainingService : IAdminTrainingService
{
    private readonly AppDbContext _db;
    public AdminTrainingService(AppDbContext db) => _db = db;

    public async Task<TrainingProgram> CreateAsync(TrainingProgram program)
    {
        _db.TrainingPrograms.Add(program);
        await _db.SaveChangesAsync();
        return program;
    }

    public async Task<TrainingProgram> UpdateAsync(int id, TrainingProgram program)
    {
        var existing = await _db.TrainingPrograms.FindAsync(id);
        if (existing == null) return null;
        existing.Name = program.Name;
        existing.Description = program.Description;
        existing.DurationInWeeks = program.DurationInWeeks;
        existing.Price = program.Price;
        existing.Curriculum = program.Curriculum;
        existing.IsActive = program.IsActive;
        existing.MaxStudents = program.MaxStudents;
        await _db.SaveChangesAsync();
        return existing;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var program = await _db.TrainingPrograms.FindAsync(id);
        if (program == null) return false;
        _db.TrainingPrograms.Remove(program);
        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<TrainingProgram> GetByIdAsync(int id) => await _db.TrainingPrograms.FindAsync(id);
}
