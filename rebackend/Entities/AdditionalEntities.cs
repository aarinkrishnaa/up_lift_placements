namespace rebackend.Entities;

public class RecruitmentProcess : BaseEntity
{
    public string CandidateName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string CurrentStage { get; set; }
    public string Notes { get; set; }
    public string Status { get; set; }
}
