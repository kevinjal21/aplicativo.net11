using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Aplicativo.net.DTOs;
using Aplicativo.net.Models;
using Aplicativo.net.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;


namespace Aplicativo.net.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IDocumentoRepository _repoArchivo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly AplicativoContext _context;

        public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper, AplicativoContext context)
        {
            _mapper = mapper;
            _config = config;
            _repo = repo;
            _context = context;

        }


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

        [HttpPost("PostArchivos")]
        // [Produces("multipart/form-data")]
        public ActionResult RegisterDocumento([FromForm] DocumentoDto documentoDto)
        {
    
            Console.WriteLine("este es el archivo: " + documentoDto.Archive);
            Console.WriteLine("este es el id: " + documentoDto.Id);
            Console.WriteLine("Hora: " + DateTime.Now.ToString());
            if (documentoDto.Archive == null) throw new Exception("File is null");
            if (documentoDto.Archive.Length == 0) throw new Exception("File is empty");
            var documento = _context.Documentos.Single(p => p.Codocumento == documentoDto.Id);

            try
            {
                var filePath = "D:\\User\\Escritorio\\Practicas\\Sotfware\\Aplicativo.net\\ClientApp\\src\\assets\\Documentos\\" + documentoDto.Archive.FileName;
                // var filePath = "C:/documentosPrueba/" + file.FileName;

                using (var stream = System.IO.File.Create(filePath))
                {
                    documentoDto.Archive.CopyTo(stream);
                }
                double tamanio = documentoDto.Archive.Length;
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
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterArchivo(RegisterDto registerDto)
        {
            //ToLower convierte los caracteres en minusculas
            registerDto.Correo = registerDto.Correo.ToLower();
            if (await _repo.UserExistsCorreo(registerDto.Correo))
                return BadRequest("El correo ya existe");
            if (await _repo.UserExistsCedula(registerDto.Id))
                return BadRequest("Ya existe un usuario con esa identificacion");
            registerDto.FechaRegistro = DateTime.Now.ToString();
            var userToCreate = _mapper.Map<Usuario>(registerDto);
            var createdUser = await _repo.Register(userToCreate, registerDto.Password);
            return StatusCode(201, new { Correo = createdUser.Correo, Nombres = createdUser.Nombres });
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            var userFromRepo = await _repo.Login(loginDto.Correo.ToLower(), loginDto.Password);
            if (userFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Codusuario.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Correo)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new { token = tokenHandler.WriteToken(token), codigoU = userFromRepo.Codusuario, email = userFromRepo.Correo, nombres = userFromRepo.Nombres, apellidos = userFromRepo.Apellidos, rol = userFromRepo.Rol });
        }
    }
}