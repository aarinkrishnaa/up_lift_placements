using rebackend.DTOs;
using rebackend.Entities;

namespace rebackend.Interfaces;

public interface IAdminService
{
    Task<IEnumerable<Contact>> GetAllContactsAsync();
    Task<IEnumerable<Referral>> GetAllReferralsAsync();
    Task<IEnumerable<JobApplication>> GetAllApplicationsAsync();
    Task<IEnumerable<TrainingEnrollment>> GetAllEnrollmentsAsync();
    Task<IEnumerable<InterviewSupport>> GetAllInterviewSupportAsync();
    Task<IEnumerable<StaffingRequest>> GetAllStaffingAsync();
    Task<IEnumerable<Job>> GetAllJobsAsync();
    Task<IEnumerable<TrainingProgram>> GetAllTrainingAsync();
    Task<DashboardStatsDto> GetDashboardStatsAsync();
    Task<bool> UpdateContactStatusAsync(int id, string status);
    Task<bool> UpdateReferralStatusAsync(int id, string status);
    Task<bool> UpdateApplicationStatusAsync(int id, string status);
}

public interface IFileUploadService
{
    Task<string> UploadFileAsync(IFormFile file, string folder);
    Task<FileDto> GetFileAsync(string filename);
}

public interface ISearchService
{
    Task<IEnumerable<Job>> SearchJobsAsync(string keyword, string location);
    Task<IEnumerable<TrainingProgram>> SearchTrainingAsync(string keyword);
}

public interface IRecruitmentService
{
    Task<RecruitmentProcess> CreateAsync(RecruitmentProcess process);
    Task<RecruitmentProcess> GetByCandidateIdAsync(int candidateId);
    Task<bool> UpdateStageAsync(int id, string stage, string notes);
}
