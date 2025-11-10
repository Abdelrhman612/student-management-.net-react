using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using student_management.Authentication;
using student_management.data.Models;

namespace student_management.Utils
{
    public class TokenService : ITokenService
    {
        private readonly Jwt _jwt;
        public TokenService(Jwt jwt)
        {
            _jwt = jwt;
        }

        public string GenerateToken(User user)
        {
            var tonkenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_jwt.key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = _jwt.Issuer,
                Audience = _jwt.Audience,
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier , user.Id.ToString()),
                    new Claim(ClaimTypes.Email , user.Email),
                    new Claim(ClaimTypes.Role , user.Role.ToString()),

                }),
                Expires = DateTime.UtcNow.AddDays(double.Parse(_jwt.LifeTime)),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)


            };
            var token = tonkenHandler.CreateToken(tokenDescriptor);
            var AccessToken = tonkenHandler.WriteToken(token);
            return AccessToken;


        }

    }
}