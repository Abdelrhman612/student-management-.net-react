using System.Collections.Generic;
using System.Threading.Tasks;
using student_management.data.Models;

namespace student_management.Repositories
{
    public interface IStudentRepository
    {
        Task<IEnumerable<Students>> GetAllAsync();
        Task<Students?> GetByIdAsync(int id);
        Task AddAsync(Students student);
        Task UpdateAsync(Students student);
        Task DeleteAsync(Students student);
        Task SaveChangesAsync();
    }
}
