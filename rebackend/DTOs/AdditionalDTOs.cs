namespace rebackend.DTOs;

public class StatusUpdateDto
{
    public string Status { get; set; }
}

public class StageUpdateDto
{
    public string Stage { get; set; }
    public string Notes { get; set; }
}

public class RecruitmentProcessDto
{
    public string CandidateName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string CurrentStage { get; set; }
    public string Notes { get; set; }
}

public class DashboardStatsDto
{
    public int TotalContacts { get; set; }
    public int TotalReferrals { get; set; }
    public int TotalApplications { get; set; }
    public int TotalEnrollments { get; set; }
    public int TotalInterviewSupport { get; set; }
    public int TotalStaffingRequests { get; set; }
    public int ActiveJobs { get; set; }
    public int ActiveTrainingPrograms { get; set; }
}

public class FileDto
{
    public byte[] Content { get; set; }
    public string ContentType { get; set; }
    public string FileName { get; set; }
}
