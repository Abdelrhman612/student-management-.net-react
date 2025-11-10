using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using student_management.Authentication.Dto;
using student_management.Authentication.InterFace;
using student_management.data;
using student_management.data.Models;
using student_management.Utils;

namespace student_management.Authentication.Service
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _db;
        private readonly ITokenService _tokenService;

        public AuthService(AppDbContext db, ITokenService tokenService)
        {
            _db = db;
            _tokenService = tokenService;
        }

        public async Task<SignUpDto> SignUp(SignUpDto dto)
        {
            var existing = await _db.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (existing != null)
                throw new Exception("User already exists");

            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = dto.Password,
                Role = dto.Role != null ? Enum.Parse<Roles>(dto.Role) : Roles.Student
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            var res = new SignUpDto
            {
                Name = user.Name,
                Email = user.Email,
                Password = user.Password,
                Role = user.Role.ToString(),
            };
            return res;
        }

        public async Task<AuthResSginInDto> SignIn(SignInDto dto)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u =>
                u.Email == dto.Email && u.Password == dto.Password);

            if (user == null)
                throw new Exception("Invalid credentials");

            var token = _tokenService.GenerateToken(user);

            return new AuthResSginInDto
            {
                Token = token,
            };
        }
    }
}
