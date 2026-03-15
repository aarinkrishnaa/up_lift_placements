using SendGrid;
using SendGrid.Helpers.Mail;
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

    private SendGridClient CreateClient() =>
        new SendGridClient(_config["EmailSettings:SendGridApiKey"]);

    private EmailAddress Sender() =>
        new EmailAddress(_config["EmailSettings:SenderEmail"], "UP LIFT PLACEMENTS");

    private EmailAddress Receiver() =>
        new EmailAddress(_config["EmailSettings:ReceiverEmail"]);

    public async Task SendContactEmailAsync(string name, string email, string phone, string subject, string message)
    {
        var msg = MailHelper.CreateSingleEmail(
            Sender(), Receiver(),
            $"Contact Form: {subject}",
            $"Name: {name}\nEmail: {email}\nPhone: {phone}\nSubject: {subject}\n\nMessage:\n{message}",
            null);
        msg.ReplyTo = new EmailAddress(email, name);
        var response = await CreateClient().SendEmailAsync(msg);
        if (!response.IsSuccessStatusCode)
        {
            var body = await response.Body.ReadAsStringAsync();
            Console.WriteLine($"EMAIL ERROR: {response.StatusCode} - {body}");
        }
    }

    public async Task SendReferralEmailAsync(string referrerName, string referrerEmail, string referrerPhone, string refereeName, string refereeEmail, string refereePhone, string refereeResume)
    {
        var msg = MailHelper.CreateSingleEmail(
            Sender(), Receiver(),
            "New Referral Submission",
            $"Referrer: {referrerName} | {referrerEmail} | {referrerPhone}\nReferee: {refereeName} | {refereeEmail} | {refereePhone}",
            null);
        msg.ReplyTo = new EmailAddress(referrerEmail, referrerName);
        await CreateClient().SendEmailAsync(msg);
    }

    public async Task SendTrainingEnrollmentEmailAsync(string name, string email, string phone, string program, string experience, string message)
    {
        var msg = MailHelper.CreateSingleEmail(
            Sender(), Receiver(),
            $"Training Enrollment: {program}",
            $"Name: {name}\nEmail: {email}\nPhone: {phone}\nProgram: {program}\nExperience: {experience}\n\n{message}",
            null);
        msg.ReplyTo = new EmailAddress(email, name);
        await CreateClient().SendEmailAsync(msg);
    }
}
