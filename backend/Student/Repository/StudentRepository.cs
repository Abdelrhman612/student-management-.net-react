using Microsoft.EntityFrameworkCore;
using student_management.data;
using student_management.data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace student_management.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly AppDbContext _context;

        public StudentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Students>> GetAllAsync()
        {
            return await _context.Students.ToListAsync();
        }

        public async Task<Students?> GetByIdAsync(int id)
        {
            return await _context.Students.FindAsync(id);
        }

        public async Task AddAsync(Students student)
        {
            await _context.Students.AddAsync(student);
        }

        public async Task UpdateAsync(Students student)
        {
            _context.Students.Update(student);
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(Students student)
        {
            _context.Students.Remove(student);
            await Task.CompletedTask;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
