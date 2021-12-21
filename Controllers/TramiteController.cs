using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aplicativo.net.Models;
using System;

namespace Aplicativo.net.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class TramiteController : ControllerBase
    {
        private readonly AplicativoContext _context;

        public TramiteController(AplicativoContext context)
        {
            _context = context;

            if (_context.Tramites.Count() == 0)
            {
                _context.Tramites.Add(new Tramite {  Nombre ="Personería Jurídica de organismos deportivos y recreativos",Descripcion ="Reconocimiento de la personería jurídica de los organismos deportivos y recreativos vinculados al sistema nacional del deporte",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Reconocimiento"});
                _context.Tramites.Add(new Tramite {  Nombre ="Inscripción de dignatarios de los organismos deportivos y recreativos",Descripcion ="Inscripción de dignatarios de los organismos deportivos y recreativos vinculados al sistema nacional del deporte",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Inscripcion"});
                _context.Tramites.Add(new Tramite {  Nombre ="Aprobación de reformas estatutarias",Descripcion ="Aprobación de las reformas estatutarias de los organismos deportivos o recreativos vinculados al sistema nacional del deporte",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Aprobacion"});
                _context.Tramites.Add(new Tramite {  Nombre ="Cancelación de Personería Jurídica",Descripcion ="Cancelación de la personería jurídica de ligas y clubes deportivos",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Cancelacion"});
                _context.Tramites.Add(new Tramite {  Nombre ="Certificación de existencia y representación legal",Descripcion ="Certificación de existencia y representación legal de las ligas y asociaciones deportivas",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Certificado"});
                _context.SaveChanges();
            }
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Tramite>> PostTramite(Tramite newdocumento)
        {
            var varLibro = await _context.Tramites.FindAsync(newdocumento.Codtramite);
            if (varLibro != null)
            {
                return BadRequest();
            }
            else
            {
                _context.Tramites.Add(newdocumento);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetTramite), new { id = newdocumento.Codtramite }, newdocumento);
            }

        }
        // PUT: api/cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTramite(int id, Tramite itemTramite)
        {
            if (id != (itemTramite.Codtramite))
            {
                return BadRequest();
            }
            _context.Entry(itemTramite).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tramite>>> GetTramites()
        {
            return await _context.Tramites.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tramite>> GetTramite(int id)
        {
            var clienteItem = await _context.Tramites.FindAsync(id);

            if (clienteItem == null)
            {
                return NotFound();
            }

            return clienteItem;
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTramite(int id)
        {
            var TramiteItem = await _context.Tramites.FindAsync(id);

            if (TramiteItem == null)
            {
                return NotFound();
            }

            _context.Tramites.Remove(TramiteItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
