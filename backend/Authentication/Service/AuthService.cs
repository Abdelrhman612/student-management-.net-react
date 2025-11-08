using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using student_management.Authentication.Dto;
using student_management.Authentication.InterFace;
using student_management.data;

namespace student_management.Authentication.Service
{
    public class AuthService : IAuthService
    {
        private readonly  AppDbContext _db;
        public AuthService(AppDbContext db)
        {
            _db = db;
        }

        public Task<SignInDto> SignIn(SignInDto signUpDto)
        {
            throw new NotImplementedException();
        }

        public Task<SignUpDto> SignUp(SignUpDto signUpDto)
        {
            throw new NotImplementedException();
        }
    }
}