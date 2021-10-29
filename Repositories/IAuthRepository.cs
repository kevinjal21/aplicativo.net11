using System.Threading.Tasks;
using Aplicativo.net.Models;

namespace Aplicativo.net.Repositories
{
    public interface IAuthRepository
    {
        Task<Usuario> Register(Usuario user, string password);
        Task<Usuario> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}