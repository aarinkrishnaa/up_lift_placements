using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;

namespace rebackend.Services;

public interface IEmailService
{
    Task SendContactEmailAsync(string name, string email, string phone, string subject, string message);
    Task SendReferralEmailAsync(string referrerName, string referrerEmail, string referrerPhone, string refereeName, string refereeEmail, string refereePhone, string refereeResume);
    Task SendTrainingEnrollmentEmailAsync(string name, string email, string phone, string program, string experience, string message);
}

public class EmailService : IEmailService
{
    private readonly IConfiguration _config;

    public EmailService(IConfiguration config)
    {
        _config = config;
    }

    private SmtpClient CreateClient()
    {
        return new SmtpClient(_config["EmailSettings:SmtpServer"], int.Parse(_config["EmailSettings:SmtpPort"]))
        {
            EnableSsl = true,
            Timeout = 10000,
            Credentials = new NetworkCredential(_config["EmailSettings:SenderEmail"], _config["EmailSettings:SenderPassword"])
        };
    }

    public async Task SendContactEmailAsync(string name, string email, string phone, string subject, string message)
    {
        var senderEmail = _config["EmailSettings:SenderEmail"];
        var receiverEmail = _config["EmailSettings:ReceiverEmail"];

        using var client = CreateClient();
        var mailMessage = new MailMessage
        {
            From = new MailAddress(senderEmail, "UP LIFT PLACEMENTS Contact Form"),
            Subject = $"Contact Form: {subject}",
            Body = $"New Contact Form Submission\n\nName: {name}\nEmail: {email}\nPhone: {phone}\nSubject: {subject}\n\nMessage:\n{message}",
            IsBodyHtml = false
        };
        mailMessage.To.Add(receiverEmail);
        mailMessage.ReplyToList.Add(new MailAddress(email, name));
        await client.SendMailAsync(mailMessage);
    }

    public async Task SendReferralEmailAsync(string referrerName, string referrerEmail, string referrerPhone, string refereeName, string refereeEmail, string refereePhone, string refereeResume)
    {
        var senderEmail = _config["EmailSettings:SenderEmail"];
        var receiverEmail = _config["EmailSettings:ReceiverEmail"];

        using var client = CreateClient();
        var mailMessage = new MailMessage
        {
            From = new MailAddress(senderEmail, "UP LIFT PLACEMENTS Referral"),
            Subject = "New Referral Submission",
            Body = $"New Referral Submission\n\nReferrer: {referrerName} | {referrerEmail} | {referrerPhone}\nReferee: {refereeName} | {refereeEmail} | {refereePhone}",
            IsBodyHtml = false
        };
        mailMessage.To.Add(receiverEmail);
        mailMessage.ReplyToList.Add(new MailAddress(referrerEmail, referrerName));
        await client.SendMailAsync(mailMessage);
    }

    public async Task SendTrainingEnrollmentEmailAsync(string name, string email, string phone, string program, string experience, string message)
    {
        var senderEmail = _config["EmailSettings:SenderEmail"];
        var receiverEmail = _config["EmailSettings:ReceiverEmail"];

        using var client = CreateClient();
        var mailMessage = new MailMessage
        {
            From = new MailAddress(senderEmail, "UP LIFT PLACEMENTS Training"),
            Subject = $"Training Enrollment: {program}",
            Body = $"New Training Enrollment\n\nName: {name}\nEmail: {email}\nPhone: {phone}\nProgram: {program}\nExperience: {experience}\n\n{message}",
            IsBodyHtml = false
        };
        mailMessage.To.Add(receiverEmail);
        mailMessage.ReplyToList.Add(new MailAddress(email, name));
        await client.SendMailAsync(mailMessage);
    }
}
