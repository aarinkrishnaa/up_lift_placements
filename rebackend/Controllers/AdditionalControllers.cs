using Microsoft.AspNetCore.Mvc;
using rebackend.DTOs;
using rebackend.Entities;
using rebackend.Interfaces;

namespace rebackend.Controllers;

[ApiController]
[Route("api/admin")]
public class AdminController : ControllerBase
{
    private readonly IAdminService _service;
    public AdminController(IAdminService service) => _service = service;

    [HttpGet("contacts")]
    public async Task<IActionResult> GetAllContacts() => Ok(await _service.GetAllContactsAsync());

    [HttpGet("referrals")]
    public async Task<IActionResult> GetAllReferrals() => Ok(await _service.GetAllReferralsAsync());

    [HttpGet("applications")]
    public async Task<IActionResult> GetAllApplications() => Ok(await _service.GetAllApplicationsAsync());

    [HttpGet("enrollments")]
    public async Task<IActionResult> GetAllEnrollments() => Ok(await _service.GetAllEnrollmentsAsync());

    [HttpGet("interview-support")]
    public async Task<IActionResult> GetAllInterviewSupport() => Ok(await _service.GetAllInterviewSupportAsync());

    [HttpGet("staffing")]
    public async Task<IActionResult> GetAllStaffing() => Ok(await _service.GetAllStaffingAsync());

    [HttpGet("jobs")]
    public async Task<IActionResult> GetAllJobs() => Ok(await _service.GetAllJobsAsync());

    [HttpGet("training")]
    public async Task<IActionResult> GetAllTraining() => Ok(await _service.GetAllTrainingAsync());

    [HttpGet("dashboard")]
    public async Task<IActionResult> GetDashboard() => Ok(await _service.GetDashboardStatsAsync());

    [HttpPatch("contacts/{id}/status")]
    public async Task<IActionResult> UpdateContactStatus(int id, [FromBody] StatusUpdateDto dto) => 
        Ok(await _service.UpdateContactStatusAsync(id, dto.Status));

    [HttpPatch("referrals/{id}/status")]
    public async Task<IActionResult> UpdateReferralStatus(int id, [FromBody] StatusUpdateDto dto) => 
        Ok(await _service.UpdateReferralStatusAsync(id, dto.Status));

    [HttpPatch("applications/{id}/status")]
    public async Task<IActionResult> UpdateApplicationStatus(int id, [FromBody] StatusUpdateDto dto) => 
        Ok(await _service.UpdateApplicationStatusAsync(id, dto.Status));
}

[ApiController]
[Route("api/[controller]")]
public class UploadController : ControllerBase
{
    private readonly IFileUploadService _service;
    public UploadController(IFileUploadService service) => _service = service;

    [HttpPost("resume")]
    public async Task<IActionResult> UploadResume(IFormFile file)
    {
        if (file == null || file.Length == 0) return BadRequest("No file uploaded");
        var url = await _service.UploadFileAsync(file, "resumes");
        return Ok(new { url });
    }

    [HttpGet("{filename}")]
    public async Task<IActionResult> GetFile(string filename)
    {
        var file = await _service.GetFileAsync(filename);
        if (file == null) return NotFound();
        return File(file.Content, file.ContentType, file.FileName);
    }
}

[ApiController]
[Route("api/[controller]")]
public class SearchController : ControllerBase
{
    private readonly ISearchService _service;
    public SearchController(ISearchService service) => _service = service;

    [HttpGet("jobs")]
    public async Task<IActionResult> SearchJobs([FromQuery] string keyword, [FromQuery] string location) => 
        Ok(await _service.SearchJobsAsync(keyword, location));

    [HttpGet("training")]
    public async Task<IActionResult> SearchTraining([FromQuery] string keyword) => 
        Ok(await _service.SearchTrainingAsync(keyword));
}

[ApiController]
[Route("api/[controller]")]
public class RecruitmentController : ControllerBase
{
    private readonly IRecruitmentService _service;
    public RecruitmentController(IRecruitmentService service) => _service = service;

    [HttpPost("process")]
    public async Task<IActionResult> CreateProcess(RecruitmentProcessDto dto)
    {
        var process = new RecruitmentProcess
        {
            CandidateName = dto.CandidateName,
            Email = dto.Email,
            Phone = dto.Phone,
            CurrentStage = dto.CurrentStage,
            Notes = dto.Notes
        };
        return Ok(await _service.CreateAsync(process));
    }

    [HttpGet("process/{candidateId}")]
    public async Task<IActionResult> GetProcess(int candidateId) => 
        Ok(await _service.GetByCandidateIdAsync(candidateId));

    [HttpPatch("process/{id}/stage")]
    public async Task<IActionResult> UpdateStage(int id, [FromBody] StageUpdateDto dto) => 
        Ok(await _service.UpdateStageAsync(id, dto.Stage, dto.Notes));
}
