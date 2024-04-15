using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Utils.OCR;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExameController : ControllerBase
    {
        private readonly IExameRepository _exameRepository;
        private readonly OCRService _ocrService;

        public ExameController(IExameRepository exameRepository, OCRService OCRService)
        {
            _exameRepository = exameRepository;
            _ocrService = OCRService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] ExameViewModel exame)
        {
            try
            {
                if (exame.Imagem == null || exame == null)
                {
                    return BadRequest("nenhuma imagem fornecida");
                }

                using (var stream = exame.Imagem.OpenReadStream())
                {
                    var result = await _ocrService.RecognizeTextAsync(stream);

                    exame.Descricao = result;

                    Exame newExame = new Exame();
                    newExame.Descricao = exame.Descricao;
                    newExame.ConsultaId = exame.ConsultaId;

                    _exameRepository.Cadastrar(newExame);

                    return Ok(newExame);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            } 
        }

        [HttpGet("BuscarPorIdConsulta")]
        public IActionResult GetByIdConsult(Guid Id)
        {
            try
            {
                List<Exame> lista = _exameRepository.BuscarPorIdConsulta(Id);
                return Ok(lista);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}