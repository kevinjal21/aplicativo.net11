using System.ComponentModel.DataAnnotations;

namespace Aplicativo.net.DTOs
{
    public class LoginDto
    {
        [Required]
        public string Correo { get; set; }
        [Required]
        public string Password { get; set; }
    }
}