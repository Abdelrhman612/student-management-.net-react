using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using student_management.data.Models;

namespace student_management.Utils
{
    public interface ITokenService
    {
        public string GenerateToken(User user);
    }
}