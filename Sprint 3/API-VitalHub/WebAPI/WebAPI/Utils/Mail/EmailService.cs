using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;

namespace WebAPI.Utils.Mail
{
    public class EmailService : IEmailService
    {
        //variável que armazena as configs de emailSettings
        private readonly EmailSettings emailSettings;

        //construtor que recebe a dependence injection de EmailSettings
        public EmailService(IOptions<EmailSettings> options)
        {
            emailSettings = options.Value;
        }

        //método para envio de email
        public async Task SendEmailAsync(MailRequest mail)
        {
            try 
            {
                //objeto que representa o email
                var email = new MimeMessage();

                //definimos o remetente do email
                email.Sender = MailboxAddress.Parse(emailSettings.Email);

                //define o assunto do email
                email.To.Add(MailboxAddress.Parse(mail.ToEmail));
                
                //define o assunto do email
                email.Subject = mail.Subject;

                //cria o corpo do email
                var builder = new BodyBuilder();

                // define o corpo do email com htlm
                builder.HtmlBody = mail.Body;

                //define o corpo do email no objeto Mime Message 
                email.Body = builder.ToMessageBody();

                //cria client SMTP para envio do email
                using (var smtp = new SmtpClient())
                {
                    //cnecta-se ao server smtp usando os dados do emailsettings 
                    smtp.Connect(emailSettings.Host, emailSettings.Port, SecureSocketOptions.StartTls);

                    //autentica-se no server smtp usando os dados do email settings
                    smtp.Authenticate(emailSettings.Email, emailSettings.Password);

                    //envia o email
                    await smtp.SendAsync(email);
                }
            }
            catch (Exception ex) 
            { 
                
            }
        }
    }
}
