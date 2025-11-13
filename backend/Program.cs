using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using student_management.data;
using student_management.Authentication;
using student_management.Authentication.InterFace;
using student_management.Authentication.Service;
using student_management.InterFaces;
using student_management.Services;
using student_management.Utils;
using student_management.Repositories;

var builder = WebApplication.CreateBuilder(args);

// ----------------------------
// 1️⃣ Configure Database
// ----------------------------
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("myCon")));

// ----------------------------
// 2️⃣ Configure CORS
// ----------------------------
var allowedOrigins = builder.Configuration.GetSection("allowedOrigins").Get<string[]>();
builder.Services.AddCors(options =>
{
    if (allowedOrigins != null && allowedOrigins.Length > 0)
    {
        options.AddPolicy("ReactPolicy", policy =>
        {
            policy
                .WithOrigins(allowedOrigins)
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
    }
});

// ----------------------------
// 3️⃣ Configure JWT
// ----------------------------
var jwtOptions = builder.Configuration.GetSection("JWT").Get<Jwt>();
if (jwtOptions != null)
{
    builder.Services.AddSingleton(jwtOptions);
    builder.Services.AddSingleton<ITokenService>(provider => new TokenService(jwtOptions));
}

// ----------------------------
// 4️⃣ Register Services
// ----------------------------
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddScoped<IStudentRepository, StudentRepository>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = jwtOptions?.Issuer,
            ValidateAudience = true,
            ValidAudience = jwtOptions?.Audience,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions?.key ?? "fallback_key"))
        };
    });

// ----------------------------
// 5️⃣ Controllers & Swagger
// ----------------------------
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ----------------------------
// 6️⃣ Middleware Order
// ----------------------------
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// CORS قبل authentication & authorization
app.UseCors("ReactPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
