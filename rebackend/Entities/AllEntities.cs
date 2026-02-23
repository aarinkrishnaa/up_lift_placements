namespace rebackend.Entities;

public class Contact : BaseEntity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string Comments { get; set; }
    public string Status { get; set; }
}

public class Referral : BaseEntity
{
    public string ReferrerName { get; set; }
    public string ReferrerEmail { get; set; }
    public string ReferrerPhone { get; set; }
    public string RefereeName { get; set; }
    public string RefereeEmail { get; set; }
    public string RefereePhone { get; set; }
    public string ReferralCode { get; set; }
    public string Status { get; set; }
    public decimal? RewardAmount { get; set; }
}

public class Job : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string Location { get; set; }
    public string JobType { get; set; }
    public string ExperienceLevel { get; set; }
    public decimal? SalaryMin { get; set; }
    public decimal? SalaryMax { get; set; }
    public string Skills { get; set; }
    public bool IsActive { get; set; }
    public DateTime? ExpiryDate { get; set; }
}

public class JobApplication : BaseEntity
{
    public int JobId { get; set; }
    public Job Job { get; set; }
    public string ApplicantName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string ResumeUrl { get; set; }
    public string CoverLetter { get; set; }
    public string Status { get; set; }
}

public class TrainingProgram : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public int DurationInWeeks { get; set; }
    public decimal Price { get; set; }
    public string Curriculum { get; set; }
    public bool IsActive { get; set; }
    public int MaxStudents { get; set; }
}

public class TrainingEnrollment : BaseEntity
{
    public int TrainingProgramId { get; set; }
    public TrainingProgram TrainingProgram { get; set; }
    public string StudentName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Status { get; set; }
    public DateTime? EnrollmentDate { get; set; }
}

public class InterviewSupport : BaseEntity
{
    public string CandidateName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string InterviewType { get; set; }
    public DateTime? PreferredDate { get; set; }
    public string Status { get; set; }
    public string Notes { get; set; }
}

public class StaffingRequest : BaseEntity
{
    public string CompanyName { get; set; }
    public string ContactPerson { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string StaffingType { get; set; }
    public string Requirements { get; set; }
    public int NumberOfPositions { get; set; }
    public string Status { get; set; }
}

public class Newsletter : BaseEntity
{
    public string Email { get; set; }
    public bool IsSubscribed { get; set; }
    public DateTime? SubscribedDate { get; set; }
    public DateTime? UnsubscribedDate { get; set; }
}

public class ContentPage : BaseEntity
{
    public string PageName { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public bool IsActive { get; set; }
}

public class CareerGuidance : BaseEntity
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string CurrentRole { get; set; }
    public string TargetRole { get; set; }
    public string Message { get; set; }
    public string Status { get; set; }
}

public class RefundRequest : BaseEntity
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string OrderId { get; set; }
    public string Reason { get; set; }
    public string Status { get; set; }
}
