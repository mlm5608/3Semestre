using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaContoller : ControllerBase
    {
        private readonly VitalContext _context;
        private readonly EmailSendingService _emailSendingService;
        public RecuperarSenhaContoller(VitalContext context, EmailSendingService emailSendingService)
        {
            _context = context;
            _emailSendingService = emailSendingService;
        }

        [HttpPost]
        public async Task<IActionResult> SendRecoveryCodePassword(string email)
        {
            try
            {
                Usuario? user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado");
                }
                
                //gerar um codigo com 4 algarismos
                Random random = new Random();
                int recoveryCode = random.Next(1000, 9999);
                user.CodRecupSenha = recoveryCode;

                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecovery(user.Email!, recoveryCode);

                return Ok("Código enviado com sucesso!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //crie um controller para validar o código enviado para o email
        //se o codigo for igual, resete o codigo do banco anterior no banco de dados e devolva um status code informando se o codigo é válido.

        [HttpPost("ValidaçãoDeCódigo")]
        public async Task<IActionResult> ValidationCode(int codigo, string email)
        {
            try
            {
                Usuario? user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound();
                }

                if (user.CodRecupSenha == codigo)
                {
                    user.CodRecupSenha = null;
                    await _context.SaveChangesAsync();
                    return Ok("Código Válido");
                }
                else
                {
                    return StatusCode(400, "Código Inválido");
                }
            }
            catch (Exception)
            {
                return BadRequest("Código Inválido!");
            }
        }

    }
}
