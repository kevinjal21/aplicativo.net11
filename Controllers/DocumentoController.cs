using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aplicativo.net.Models;
using System;
using System.IO;
using Microsoft.AspNetCore.Http;
using Aplicativo.net.DTOs;
using Microsoft.AspNetCore.Hosting;

namespace Aplicativo.net.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class DocumentoController : ControllerBase
    {
        private readonly AplicativoContext _context;
        private readonly IWebHostEnvironment _appEnvironment;

        public DocumentoController(AplicativoContext context, IWebHostEnvironment appEnvironment)
        {
            _context = context;
            _appEnvironment = appEnvironment;

            // if (_context.Libros.Count() == 0)
            // {
            //     _context.Libros.Add(new Documento { Id = 1, Titulo ="Mike ",PrecioVenta =3000,Popular =true});
            //     _context.Libros.Add(new Documento { Id = 2, Titulo ="Carlos ",PrecioVenta =5000,Popular =true});
            //     _context.Libros.Add(new Documento { Id = 3, Titulo ="Miguel",PrecioVenta =6000,Popular =true});
            //     _context.SaveChanges();
            // }
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Documento>> PostDocumento(Documento newdocumento)
        {
            var varLibro = await _context.Documentos.FindAsync(newdocumento.Codocumento);
            if (varLibro != null)
            {
                return BadRequest();
            }
            else
            {
                _context.Documentos.Add(newdocumento);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetDocumento), new { id = newdocumento.Codocumento }, newdocumento);
            }

        }
        // PUT: api/cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocumento(int id, Documento documento)
        {
            if (id != (documento.Codocumento))
            {
                return BadRequest();
            }
            _context.Entry(documento).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Documento>>> GetDocumentos()
        {
            return await _context.Documentos.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Documento>> GetDocumento(int id)
        {
            var clienteItem = await _context.Documentos.FindAsync(id);

            if (clienteItem == null)
            {
                return NotFound();
            }

            return clienteItem;
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocumento(int id)
        {
            var DocumentoItem = await _context.Documentos.FindAsync(id);

            if (DocumentoItem == null)
            {
                return NotFound();
            }

            _context.Documentos.Remove(DocumentoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("ArchivosPost")]
        public ActionResult PostArchivos(IFormFile file, int id)
        {
            Console.WriteLine("este es el archivo: " + file);
            Console.WriteLine("este es el id: " + id);

            if (file == null) throw new Exception("File is null");
            if (file.Length == 0) throw new Exception("File is empty");
            var documento = _context.Documentos.Single(p => p.Codocumento == id);

            try
            {
                var filePath = "D:\\User\\Escritorio\\Practicas\\Sotfware\\Aplicativo.net\\ClientApp\\src\\assets\\Documentos\\" + file.FileName;
                // var filePath = "C:/documentosPrueba/" + file.FileName;

                using (var stream = System.IO.File.Create(filePath))
                {
                    file.CopyTo(stream);
                }
                double tamanio = file.Length;
                tamanio = tamanio / 1000000;
                tamanio = Math.Round(tamanio, 2);
                documento.Fechacreacion = DateTime.Now.ToString();
                documento.Tamanio = tamanio;
                documento.Url = filePath;
                _context.Entry(documento).State = EntityState.Modified;
                _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetDocumento), new { id = documento.Codocumento }, documento);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            // return Ok(documento);
        }


        [HttpPut("UpdateDocumento")]
        public ActionResult<DocumentoDto> UpdateDocumento([FromForm] DocumentoDto DocumenRequest)
        {
            var path = _appEnvironment.ContentRootPath;
            int id = DocumenRequest.Id;
            var re = Request.Form.Files;

            var documento = _context.Documentos.Single(p => p.Codocumento == id);

            try
            {
                FileInfo fi = new FileInfo(DocumenRequest.Archive.FileName);

                string nameFile = documento.Nombredoc + DateTime.Now.Ticks.ToString() + fi.Extension;
                var ruta = "ClientApp\\src\\assets\\Documentos\\" + nameFile;
                var filePath = Path.Combine(path, ruta);
                Console.WriteLine("La ruta1 es:  " + filePath);

                if (System.IO.File.Exists(documento.Url))
                {
                    //var ubicacion = "D:\\User\\Escritorio\\Practicas\\Sotfware\\Aplicativo.net\\ClientApp\\src\\assets\\Documentos\\" + documento.Url;
                    var ubicacion = Path.Combine(path, "ClientApp\\src\\assets\\Documentos\\" + documento.Url);
                    Console.WriteLine("La ruta es:  " + ubicacion);

                    System.IO.File.Delete(ubicacion);
                    using (var stream = System.IO.File.Create(filePath))
                    {
                        DocumenRequest.Archive.CopyTo(stream);
                    }

                    double tamanio1 = DocumenRequest.Archive.Length;
                    tamanio1 = tamanio1 / 1000000;
                    tamanio1 = Math.Round(tamanio1, 2);
                    documento.Fechaactualizacion = DateTime.Now.ToString();
                    documento.Tamanio = tamanio1;
                    documento.Url = nameFile;
                    _context.Entry(documento).State = EntityState.Modified;
                    _context.SaveChangesAsync();
                    return Ok(documento);
                }
                else
                {
                    using (var stream = System.IO.File.Create(filePath))
                    {
                        DocumenRequest.Archive.CopyTo(stream);
                    }
                    double tamanio = DocumenRequest.Archive.Length;
                    tamanio = tamanio / 1000000;
                    tamanio = Math.Round(tamanio, 2);
                    documento.Fechacreacion = DateTime.Now.ToString();
                    documento.Tamanio = tamanio;
                    documento.Observacion = "";
                    documento.Estado = "En proceso";
                    documento.Url = nameFile;
                    _context.Entry(documento).State = EntityState.Modified;
                    _context.SaveChangesAsync();
                    return Ok(documento);
                }
            }
            catch (System.Exception)
            {
                Console.WriteLine("catch");
                return BadRequest();
            }
        }
    }
}