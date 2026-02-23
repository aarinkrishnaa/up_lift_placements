using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using rebackend.Data;
using rebackend.DTOs;
using rebackend.Entities;
using rebackend.Interfaces;

namespace rebackend.Services;

public class AdminService : IAdminService
{
    private readonly AppDbContext _db;
    public AdminService(AppDbContext db) => _db = db;

    public async Task<IEnumerable<Contact>> GetAllContactsAsync() => await _db.Contacts.ToListAsync();
    public async Task<IEnumerable<Referral>> GetAllReferralsAsync() => await _db.Referrals.ToListAsync();
    public async Task<IEnumerable<JobApplication>> GetAllApplicationsAsync() => await _db.JobApplications.Include(j => j.Job).ToListAsync();
    public async Task<IEnumerable<TrainingEnrollment>> GetAllEnrollmentsAsync() => await _db.TrainingEnrollments.Include(t => t.TrainingProgram).ToListAsync();
    public async Task<IEnumerable<InterviewSupport>> GetAllInterviewSupportAsync() => await _db.InterviewSupports.ToListAsync();
    public async Task<IEnumerable<StaffingRequest>> GetAllStaffingAsync() => await _db.StaffingRequests.ToListAsync();
    public async Task<IEnumerable<Job>> GetAllJobsAsync() => await _db.Jobs.ToListAsync();
    public async Task<IEnumerable<TrainingProgram>> GetAllTrainingAsync() => await _db.TrainingPrograms.ToListAsync();

    public async Task<DashboardStatsDto> GetDashboardStatsAsync()
    {
        return new DashboardStatsDto
        {
            TotalContacts = await _db.Contacts.CountAsync(),
            TotalReferrals = await _db.Referrals.CountAsync(),
            TotalApplications = await _db.JobApplications.CountAsync(),
            TotalEnrollments = await _db.TrainingEnrollments.CountAsync(),
            TotalInterviewSupport = await _db.InterviewSupports.CountAsync(),
            TotalStaffingRequests = await _db.StaffingRequests.CountAsync(),
            ActiveJobs = await _db.Jobs.CountAsync(j => j.IsActive),
            ActiveTrainingPrograms = await _db.TrainingPrograms.CountAsync(t => t.IsActive)
        };
    }

    public async Task<bool> UpdateContactStatusAsync(int id, string status)
    {
        var contact = await _db.Contacts.FindAsync(id);
        if (contact == null) return false;
        contact.Status = status;
        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<bool> UpdateReferralStatusAsync(int id, string status)
    {
        var referral = await _db.Referrals.FindAsync(id);
        if (referral == null) return false;
        referral.Status = status;
        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<bool> UpdateApplicationStatusAsync(int id, string status)
    {
        var application = await _db.JobApplications.FindAsync(id);
        if (application == null) return false;
        application.Status = status;
        await _db.SaveChangesAsync();
        return true;
    }
}

public class FileUploadService : IFileUploadService
{
    private readonly IWebHostEnvironment _env;
    public FileUploadService(IWebHostEnvironment env) => _env = env;

    public async Task<string> UploadFileAsync(IFormFile file, string folder)
    {
        var uploadsFolder = Path.Combine(_env.WebRootPath, folder);
        Directory.CreateDirectory(uploadsFolder);
        
        var uniqueFileName = $"{Guid.NewGuid()}_{file.FileName}";
        var filePath = Path.Combine(uploadsFolder, uniqueFileName);
        
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }
        
        return $"/{folder}/{uniqueFileName}";
    }

    public async Task<FileDto> GetFileAsync(string filename)
    {
        var filePath = Path.Combine(_env.WebRootPath, filename.TrimStart('/'));
        if (!File.Exists(filePath)) return null;
        
        var content = await File.ReadAllBytesAsync(filePath);
        return new FileDto
        {
            Content = content,
            ContentType = GetContentType(filename),
            FileName = Path.GetFileName(filename)
        };
    }

    private string GetContentType(string filename)
    {
        var ext = Path.GetExtension(filename).ToLowerInvariant();
        return ext switch
        {
            ".pdf" => "application/pdf",
            ".doc" => "application/msword",
            ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            _ => "application/octet-stream"
        };
    }
}

public class SearchService : ISearchService
{
    private readonly AppDbContext _db;
    public SearchService(AppDbContext db) => _db = db;

    public async Task<IEnumerable<Job>> SearchJobsAsync(string keyword, string location)
    {
        var query = _db.Jobs.Where(j => j.IsActive);
        
        if (!string.IsNullOrEmpty(keyword))
            query = query.Where(j => j.Title.Contains(keyword) || j.Description.Contains(keyword) || j.Skills.Contains(keyword));
        
        if (!string.IsNullOrEmpty(location))
            query = query.Where(j => j.Location.Contains(location));
        
        return await query.ToListAsync();
    }

    public async Task<IEnumerable<TrainingProgram>> SearchTrainingAsync(string keyword)
    {
        var query = _db.TrainingPrograms.Where(t => t.IsActive);
        
        if (!string.IsNullOrEmpty(keyword))
            query = query.Where(t => t.Name.Contains(keyword) || t.Description.Contains(keyword));
        
        return await query.ToListAsync();
    }
}

public class RecruitmentService : IRecruitmentService
{
    private readonly AppDbContext _db;
    public RecruitmentService(AppDbContext db) => _db = db;

    public async Task<RecruitmentProcess> CreateAsync(RecruitmentProcess process)
    {
        process.Status = "Active";
        _db.RecruitmentProcesses.Add(process);
        await _db.SaveChangesAsync();
        return process;
    }

    public async Task<RecruitmentProcess> GetByCandidateIdAsync(int candidateId) => 
        await _db.RecruitmentProcesses.FindAsync(candidateId);

    public async Task<bool> UpdateStageAsync(int id, string stage, string notes)
    {
        var process = await _db.RecruitmentProcesses.FindAsync(id);
        if (process == null) return false;
        process.CurrentStage = stage;
        process.Notes = notes;
        await _db.SaveChangesAsync();
        return true;
    }
}
