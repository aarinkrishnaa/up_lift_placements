using rebackend.Entities;

namespace rebackend.Interfaces;

public interface IContactService
{
    Task<Contact> SubmitAsync(Contact contact);
    Task<IEnumerable<Contact>> GetAllAsync();
}

public interface IReferralService
{
    Task<Referral> CreateAsync(Referral referral);
    Task<Referral> GetByCodeAsync(string code);
}

public interface IJobService
{
    Task<IEnumerable<Job>> GetActiveJobsAsync();
    Task<Job> GetByIdAsync(int id);
    Task<JobApplication> ApplyAsync(JobApplication application);
}

public interface ITrainingService
{
    Task<IEnumerable<TrainingProgram>> GetActiveProgramsAsync();
    Task<TrainingProgram> GetByIdAsync(int id);
    Task<TrainingEnrollment> EnrollAsync(TrainingEnrollment enrollment);
}

public interface IInterviewSupportService
{
    Task<InterviewSupport> CreateAsync(InterviewSupport support);
}

public interface IStaffingService
{
    Task<StaffingRequest> CreateAsync(StaffingRequest request);
}

public interface INewsletterService
{
    Task<Newsletter> SubscribeAsync(string email);
    Task<bool> UnsubscribeAsync(string email);
}

public interface IContentPageService
{
    Task<ContentPage> GetByNameAsync(string pageName);
    Task<ContentPage> CreateOrUpdateAsync(ContentPage page);
}

public interface ICareerGuidanceService
{
    Task<CareerGuidance> CreateAsync(CareerGuidance guidance);
    Task<IEnumerable<CareerGuidance>> GetAllAsync();
}

public interface IRefundRequestService
{
    Task<RefundRequest> CreateAsync(RefundRequest request);
    Task<IEnumerable<RefundRequest>> GetAllAsync();
}

public interface IAdminJobService
{
    Task<Job> CreateAsync(Job job);
    Task<Job> UpdateAsync(int id, Job job);
    Task<bool> DeleteAsync(int id);
    Task<Job> GetByIdAsync(int id);
}

public interface IAdminTrainingService
{
    Task<TrainingProgram> CreateAsync(TrainingProgram program);
    Task<TrainingProgram> UpdateAsync(int id, TrainingProgram program);
    Task<bool> DeleteAsync(int id);
    Task<TrainingProgram> GetByIdAsync(int id);
}
