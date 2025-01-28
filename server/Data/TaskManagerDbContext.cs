using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class TaskManagerDbContext : DbContext
    {
        public TaskManagerDbContext(DbContextOptions<TaskManagerDbContext> options) : base(options) { }

        public DbSet<server.Models.Task> Tasks { get; set; }

    }
}