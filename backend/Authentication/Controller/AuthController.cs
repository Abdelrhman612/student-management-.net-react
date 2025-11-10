using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using student_management.Authentication.Dto;
using student_management.Authentication.InterFace;

namespace student_management.Authentication.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _auth;
        public AuthController(IAuthService auth)
        {
            _auth = auth;

        }
        [HttpPost("signUp")]
        public async Task<IActionResult> sginUp([FromBody] SignUpDto dto)
        {
            return Ok(await _auth.SignUp(dto));
        }

        [HttpPost("signIn")]
        public async Task<IActionResult> sginIn([FromBody] SignInDto dto)
        {
            return Ok(await _auth.SignIn(dto));
        }



    }
}