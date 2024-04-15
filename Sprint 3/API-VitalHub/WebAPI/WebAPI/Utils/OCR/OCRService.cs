using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace WebAPI.Utils.OCR
{
    public class OCRService
    {
        private readonly string _subscriptKey = "891effa06218437e9f2896de0505fdf1";

        private readonly string _endpoint = "https://cvvitalhubmiguel.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync(Stream imageString)
        {
            try
            {
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptKey))
                {
                    Endpoint = _endpoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageString);

                return ProssesRecognitionRseult(ocrResult);
            }
            catch (Exception ex)
            {
                return "Erro ao reconhecer texto:" + ex.Message;
            }
        }

        public static string ProssesRecognitionRseult(OcrResult result)
        {
            try
            {
                string recognizedText = "";

                foreach (var region in result.Regions)
                {
                    foreach (var line in region.Lines)
                    {
                        foreach (var word in line.Words)
                        {
                            recognizedText += word.Text + " ";
                        }
                        recognizedText += "\n";
                    }
                }
                return recognizedText;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
