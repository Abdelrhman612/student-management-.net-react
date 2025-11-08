using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace student_management.Authentication
{
    public class Jwt
    {
        public string key { get; set; } = "";
        public string Issuer { get; set; } = "";
        public string Audience { get; set; } = "";
        public string LifeTime { get; set; } = "";
    }
}