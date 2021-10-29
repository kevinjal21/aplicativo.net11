using System.ComponentModel.DataAnnotations;

namespace Aplicativo.net.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string TipoId { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Correo { get; set; }
        [Required]
        public string Celular { get; set; }
        [Required]
        public string Rol { get; set; }
        [Required]
        public string Password { get; set; }
    }
}