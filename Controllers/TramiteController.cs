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

            // if (_context.Libros.Count() == 0)
            // {
            //     _context.Libros.Add(new Tramite { Id = 1, Titulo ="Mike ",PrecioVenta =3000,Popular =true});
            //     _context.Libros.Add(new Tramite { Id = 2, Titulo ="Carlos ",PrecioVenta =5000,Popular =true});
            //     _context.Libros.Add(new Tramite { Id = 3, Titulo ="Miguel",PrecioVenta =6000,Popular =true});
            //     _context.SaveChanges();
            // }
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Tramite>> PostCliente(Tramite newdocumento)
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
                return CreatedAtAction(nameof(GetCliente), new { id = newdocumento.Codtramite }, newdocumento);
            }

        }
        // PUT: api/cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCliente(int id, Tramite itemCliente)
        {
            if (id != (itemCliente.Codtramite))
            {
                return BadRequest();
            }
            _context.Entry(itemCliente).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tramite>>> GetClientes()
        {
            return await _context.Tramites.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tramite>> GetCliente(int id)
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
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var ClienteItem = await _context.Tramites.FindAsync(id);

            if (ClienteItem == null)
            {
                return NotFound();
            }

            _context.Tramites.Remove(ClienteItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
