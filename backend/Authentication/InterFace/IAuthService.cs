using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using student_management.Authentication.Dto;

namespace student_management.Authentication.InterFace
{
    public interface IAuthService
    {
        Task<SignUpDto> SignUp(SignUpDto signUpDto);
        Task<SignInDto> SignIn(SignInDto signUpDto);
    }
}