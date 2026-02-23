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

    public async Task SendContactEmailAsync(string name, string email, string phone, string subject, string message)
    {
        var smtpServer = _config["EmailSettings:SmtpServer"];
        var smtpPort = int.Parse(_config["EmailSettings:SmtpPort"]);
        var senderEmail = _config["EmailSettings:SenderEmail"];
        var receiverEmail = _config["EmailSettings:ReceiverEmail"];
        var senderPassword = _config["EmailSettings:SenderPassword"];

        using var client = new SmtpClient(smtpServer, smtpPort)
        {
            EnableSsl = true,
            Credentials = new NetworkCredential(receiverEmail, senderPassword)
        };

        var mailMessage = new MailMessage
        {
            From = new MailAddress(receiverEmail, "UP LIFT PLACEMENTS Contact Form"),
            Subject = $"Contact Form: {subject}",
            Body = $@"
New Contact Form Submission

Name: {name}
Email: {email}
Phone: {phone}
Subject: {subject}

Message:
{message}

---
This email was sent from the UP LIFT PLACEMENTS contact form.
",
            IsBodyHtml = false
        };

        mailMessage.To.Add(receiverEmail);
        mailMessage.ReplyToList.Add(new MailAddress(email, name));

        await client.SendMailAsync(mailMessage);
    }

    public async Task SendReferralEmailAsync(string referrerName, string referrerEmail, string referrerPhone, string refereeName, string refereeEmail, string refereePhone, string refereeResume)
    {
        var receiverEmail = _config["EmailSettings:ReceiverEmail"];
        var senderPassword = _config["EmailSettings:SenderPassword"];

        using var client = new SmtpClient(_config["EmailSettings:SmtpServer"], int.Parse(_config["EmailSettings:SmtpPort"]))
        {
            EnableSsl = true,
            Credentials = new NetworkCredential(receiverEmail, senderPassword)
        };

        var mailMessage = new MailMessage
        {
            From = new MailAddress(receiverEmail, "UP LIFT PLACEMENTS Referral"),
            Subject = "New Referral Submission",
            Body = $@"
New Referral Submission

REFERRER DETAILS:
Name: {referrerName}
Email: {referrerEmail}
Phone: {referrerPhone}

REFEREE DETAILS:
Name: {refereeName}
Email: {refereeEmail}
Phone: {refereePhone}
Resume/LinkedIn: {refereeResume}

---
This email was sent from the UP LIFT PLACEMENTS Refer and Earn page.
",
            IsBodyHtml = false
        };

        mailMessage.To.Add(receiverEmail);
        mailMessage.ReplyToList.Add(new MailAddress(referrerEmail, referrerName));

        await client.SendMailAsync(mailMessage);
    }

    public async Task SendTrainingEnrollmentEmailAsync(string name, string email, string phone, string program, string experience, string message)
    {
        var receiverEmail = _config["EmailSettings:ReceiverEmail"];
        var senderPassword = _config["EmailSettings:SenderPassword"];

        using var client = new SmtpClient(_config["EmailSettings:SmtpServer"], int.Parse(_config["EmailSettings:SmtpPort"]))
        {
            EnableSsl = true,
            Credentials = new NetworkCredential(receiverEmail, senderPassword)
        };

        var mailMessage = new MailMessage
        {
            From = new MailAddress(receiverEmail, "UP LIFT PLACEMENTS Training"),
            Subject = $"Training Enrollment: {program}",
            Body = $@"
New Training Enrollment

Name: {name}
Email: {email}
Phone: {phone}
Program: {program}
Experience Level: {experience}

Additional Information:
{message}

---
This email was sent from the UP LIFT PLACEMENTS Training page.
",
            IsBodyHtml = false
        };

        mailMessage.To.Add(receiverEmail);
        mailMessage.ReplyToList.Add(new MailAddress(email, name));

        await client.SendMailAsync(mailMessage);
    }
}
