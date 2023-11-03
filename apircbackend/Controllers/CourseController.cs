using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using APIRC.Models;
using APICR.Models;

namespace APIRC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly CourseRegDBContext _courseRegDBContext;
        public CourseController(CourseRegDBContext courseRegDBContext)
        {
            _courseRegDBContext = courseRegDBContext;
        }
        [HttpGet]
        [Route("GetCourse")]
        public async Task<IEnumerable<Course>> GetCourse()
        {
            return await _courseRegDBContext.Course.ToListAsync();
        }
        [HttpPost]
        [Route("AddNewCourse")]
        public async Task<Course> AddNewCourse(Course objCourse)
        {
            _courseRegDBContext.Course.Add(objCourse);
            await _courseRegDBContext.SaveChangesAsync();
            return objCourse;
        }

        [HttpPatch]
        [Route("UpdateCourse/{id}")]
        public async Task<Course> UpdateCourse(Course objCourse)
        {
            _courseRegDBContext.Entry(objCourse).State = EntityState.Modified;
            await _courseRegDBContext.SaveChangesAsync();
            return objCourse;
        }

        [HttpDelete]
        [Route("DeleteCourse/{id}")]
        public bool DeleteCourse(int id)
        {
            bool a = false;
            var course = _courseRegDBContext.Course.Find(id);
            if (course != null)
            {
                a = true;
                _courseRegDBContext.Entry(course).State = EntityState.Deleted;
                _courseRegDBContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;

        }





    }
}
