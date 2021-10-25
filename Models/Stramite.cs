using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aplicativo.net.Models
{
    // [Table("STRAMITE")]

    public class Stramite
    {
        [Key] [JsonProperty("codstramite")] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int Codstramite { get; set; }
        [JsonProperty("codusuario")] public int Codusuario { get; set; }
        [JsonProperty("codtramite")] public int Codtramite { get; set; }
        [JsonProperty("fecha")] public string Fecha { get; set; }
    }
}
