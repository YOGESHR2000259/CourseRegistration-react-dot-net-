using APICR.Models;
using APIRC.Models;
using Microsoft.EntityFrameworkCore;
namespace APIRC.Models
{
    public class CourseRegDBContext : DbContext
    {
        public CourseRegDBContext(DbContextOptions<CourseRegDBContext> options) : base(options)
        {
        }
        public DbSet<Course> Course { get; set; }
        public DbSet<Registration> Registration { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-5KSBNBE;Initial Catalog=APIRC;Integrated Security=True;TrustServerCertificate=yes;");
        }
    }
}
