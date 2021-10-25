using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aplicativo.net.Models
{
    // [Table("USUARIO")]
    
    public class Usuario
    {
        [Key] [JsonProperty("codusuario")] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int Codusuario { get; set; }
        [JsonProperty("id")] public string Id { get; set; }
        [JsonProperty("tipoId")] public string TipoId { get; set; }
        [JsonProperty("nombres")] public string Nombres { get; set; }
        [JsonProperty("apellidos")] public string Apellidos { get; set; }
        [JsonProperty("correo")] public string Correo { get; set; }
        [JsonProperty("celular")] public string Celular { get; set; }
        [JsonProperty("clave")] public string Clave { get; set; }
        [JsonProperty("rol")] public string Rol { get; set; }
    }
}
