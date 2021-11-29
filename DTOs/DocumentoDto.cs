using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Aplicativo.net.DTOs
{
    public class DocumentoDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public IFormFile File { get; set; }
    }
}