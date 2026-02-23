using Microsoft.AspNetCore.Mvc;
using rebackend.DTOs;
using rebackend.Entities;
using rebackend.Interfaces;

namespace rebackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IContactService _service;
    public ContactController(IContactService service) => _service = service;

    [HttpPost("submit")]
    public async Task<IActionResult> Submit(ContactDto dto)
    {
        var contact = new Contact
        {
            Name = dto.Name,
            Email = dto.Email,
            Phone = dto.Phone,
            Subject = dto.Subject,
            Message = dto.Message,
            Status = "New"
        };
        return Ok(await _service.SubmitAsync(contact));
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _service.GetAllAsync());
}

[ApiController]
[Route("api/[controller]")]
public class ReferralController : ControllerBase
{
    private readonly IReferralService _service;
    public ReferralController(IReferralService service) => _service = service;

    [HttpPost("submit")]
    public async Task<IActionResult> Submit(ReferralDto dto)
    {
        var referral = new Referral
        {
            ReferrerName = dto.ReferrerName,
            ReferrerEmail = dto.ReferrerEmail,
            ReferrerPhone = dto.ReferrerPhone,
            RefereeName = dto.RefereeName,
            RefereeEmail = dto.RefereeEmail,
            RefereePhone = dto.RefereePhone
        };
        return Ok(await _service.CreateAsync(referral));
    }

    [HttpGet("status/{code}")]
    public async Task<IActionResult> GetByCode(string code) => Ok(await _service.GetByCodeAsync(code));
}

[ApiController]
[Route("api/[controller]")]
public class JobController : ControllerBase
{
    private readonly IJobService _service;
    public JobController(IJobService service) => _service = service;

    [HttpGet("listings")]
    public async Task<IActionResult> GetListings() => Ok(await _service.GetActiveJobsAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var job = await _service.GetByIdAsync(id);
        return job == null ? NotFound() : Ok(job);
    }

    [HttpPost("apply")]
    public async Task<IActionResult> Apply(JobApplicationDto dto)
    {
        var application = new JobApplication
        {
            JobId = dto.JobId,
            ApplicantName = dto.ApplicantName,
            Email = dto.Email,
            Phone = dto.Phone,
            CoverLetter = dto.CoverLetter
        };
        return Ok(await _service.ApplyAsync(application));
    }
}

[ApiController]
[Route("api/[controller]")]
public class TrainingController : ControllerBase
{
    private readonly ITrainingService _service;
    public TrainingController(ITrainingService service) => _service = service;

    [HttpGet("programs")]
    public async Task<IActionResult> GetPrograms() => Ok(await _service.GetActiveProgramsAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var program = await _service.GetByIdAsync(id);
        return program == null ? NotFound() : Ok(program);
    }

    [HttpPost("enroll")]
    public async Task<IActionResult> Enroll(TrainingEnrollmentDto dto)
    {
        var enrollment = new TrainingEnrollment
        {
            TrainingProgramId = dto.TrainingProgramId,
            StudentName = dto.StudentName,
            Email = dto.Email,
            Phone = dto.Phone
        };
        return Ok(await _service.EnrollAsync(enrollment));
    }
}

[ApiController]
[Route("api/[controller]")]
public class InterviewSupportController : ControllerBase
{
    private readonly IInterviewSupportService _service;
    public InterviewSupportController(IInterviewSupportService service) => _service = service;

    [HttpPost("request")]
    public async Task<IActionResult> Request(InterviewSupportDto dto)
    {
        var support = new InterviewSupport
        {
            CandidateName = dto.CandidateName,
            Email = dto.Email,
            Phone = dto.Phone,
            InterviewType = dto.InterviewType,
            PreferredDate = dto.PreferredDate,
            Notes = dto.Notes
        };
        return Ok(await _service.CreateAsync(support));
    }
}

[ApiController]
[Route("api/[controller]")]
public class StaffingController : ControllerBase
{
    private readonly IStaffingService _service;
    public StaffingController(IStaffingService service) => _service = service;

    [HttpPost("request")]
    public async Task<IActionResult> Request(StaffingRequestDto dto)
    {
        var request = new StaffingRequest
        {
            CompanyName = dto.CompanyName,
            ContactPerson = dto.ContactPerson,
            Email = dto.Email,
            Phone = dto.Phone,
            StaffingType = dto.StaffingType,
            Requirements = dto.Requirements,
            NumberOfPositions = dto.NumberOfPositions
        };
        return Ok(await _service.CreateAsync(request));
    }
}

[ApiController]
[Route("api/[controller]")]
public class NewsletterController : ControllerBase
{
    private readonly INewsletterService _service;
    public NewsletterController(INewsletterService service) => _service = service;

    [HttpPost("subscribe")]
    public async Task<IActionResult> Subscribe(NewsletterDto dto) => Ok(await _service.SubscribeAsync(dto.Email));

    [HttpPost("unsubscribe")]
    public async Task<IActionResult> Unsubscribe(NewsletterDto dto) => Ok(await _service.UnsubscribeAsync(dto.Email));
}

[ApiController]
[Route("api/[controller]")]
public class ContentController : ControllerBase
{
    private readonly IContentPageService _service;
    public ContentController(IContentPageService service) => _service = service;

    [HttpGet("{pageName}")]
    public async Task<IActionResult> GetByName(string pageName)
    {
        var page = await _service.GetByNameAsync(pageName);
        return page == null ? NotFound() : Ok(page);
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrUpdate(ContentPageDto dto)
    {
        var page = new ContentPage
        {
            PageName = dto.PageName,
            Title = dto.Title,
            Content = dto.Content,
            IsActive = dto.IsActive
        };
        return Ok(await _service.CreateOrUpdateAsync(page));
    }
}

[ApiController]
[Route("api/[controller]")]
public class CareerGuidanceController : ControllerBase
{
    private readonly ICareerGuidanceService _service;
    public CareerGuidanceController(ICareerGuidanceService service) => _service = service;

    [HttpPost("request")]
    public async Task<IActionResult> Request(CareerGuidanceDto dto)
    {
        var guidance = new CareerGuidance
        {
            Name = dto.Name,
            Email = dto.Email,
            Phone = dto.Phone,
            CurrentRole = dto.CurrentRole,
            TargetRole = dto.TargetRole,
            Message = dto.Message
        };
        return Ok(await _service.CreateAsync(guidance));
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _service.GetAllAsync());
}

[ApiController]
[Route("api/[controller]")]
public class RefundController : ControllerBase
{
    private readonly IRefundRequestService _service;
    public RefundController(IRefundRequestService service) => _service = service;

    [HttpPost("request")]
    public async Task<IActionResult> Request(RefundRequestDto dto)
    {
        var request = new RefundRequest
        {
            Name = dto.Name,
            Email = dto.Email,
            Phone = dto.Phone,
            OrderId = dto.OrderId,
            Reason = dto.Reason
        };
        return Ok(await _service.CreateAsync(request));
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _service.GetAllAsync());
}

[ApiController]
[Route("api/admin/jobs")]
public class AdminJobController : ControllerBase
{
    private readonly IAdminJobService _service;
    public AdminJobController(IAdminJobService service) => _service = service;

    [HttpPost]
    public async Task<IActionResult> Create(JobDto dto)
    {
        var job = new Job
        {
            Title = dto.Title,
            Description = dto.Description,
            Location = dto.Location,
            JobType = dto.JobType,
            ExperienceLevel = dto.ExperienceLevel,
            SalaryMin = dto.SalaryMin,
            SalaryMax = dto.SalaryMax,
            Skills = dto.Skills,
            IsActive = dto.IsActive,
            ExpiryDate = dto.ExpiryDate
        };
        return Ok(await _service.CreateAsync(job));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, JobDto dto)
    {
        var job = new Job
        {
            Title = dto.Title,
            Description = dto.Description,
            Location = dto.Location,
            JobType = dto.JobType,
            ExperienceLevel = dto.ExperienceLevel,
            SalaryMin = dto.SalaryMin,
            SalaryMax = dto.SalaryMax,
            Skills = dto.Skills,
            IsActive = dto.IsActive,
            ExpiryDate = dto.ExpiryDate
        };
        var result = await _service.UpdateAsync(id, job);
        return result == null ? NotFound() : Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) => Ok(await _service.DeleteAsync(id));

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var job = await _service.GetByIdAsync(id);
        return job == null ? NotFound() : Ok(job);
    }
}

[ApiController]
[Route("api/admin/training")]
public class AdminTrainingController : ControllerBase
{
    private readonly IAdminTrainingService _service;
    public AdminTrainingController(IAdminTrainingService service) => _service = service;

    [HttpPost]
    public async Task<IActionResult> Create(TrainingProgramDto dto)
    {
        var program = new TrainingProgram
        {
            Name = dto.Name,
            Description = dto.Description,
            DurationInWeeks = dto.DurationInWeeks,
            Price = dto.Price,
            Curriculum = dto.Curriculum,
            IsActive = dto.IsActive,
            MaxStudents = dto.MaxStudents
        };
        return Ok(await _service.CreateAsync(program));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, TrainingProgramDto dto)
    {
        var program = new TrainingProgram
        {
            Name = dto.Name,
            Description = dto.Description,
            DurationInWeeks = dto.DurationInWeeks,
            Price = dto.Price,
            Curriculum = dto.Curriculum,
            IsActive = dto.IsActive,
            MaxStudents = dto.MaxStudents
        };
        var result = await _service.UpdateAsync(id, program);
        return result == null ? NotFound() : Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) => Ok(await _service.DeleteAsync(id));

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var program = await _service.GetByIdAsync(id);
        return program == null ? NotFound() : Ok(program);
    }
}
