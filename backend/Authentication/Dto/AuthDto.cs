using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace student_management.Authentication.Dto
{
    public class SignUpDto
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public string? Role { get; set; }

    }
public class AuthResSginUpDto
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? Role { get; set; }

    }
    public class SignInDto
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public string? Role { get; set; } = null;

    }

    public class AuthResSginInDto
    {
        public string Token { get; set; } = string.Empty;

    }


}