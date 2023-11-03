using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using APIRC.Models;
using APICR.Models;

namespace APIRC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly CourseRegDBContext _courseRegDbContext;

        public RegistrationController(CourseRegDBContext courseRegDbContext)
        {
            _courseRegDbContext = courseRegDbContext;
        }

        [HttpGet]
        [Route("GetRegistration")]
        public async Task<IEnumerable<Registration>> GetRegistrations()
        {
            return await _courseRegDbContext.Registration.ToListAsync();
        }

        [HttpPost]
        [Route("AddRegistration")]
        public async Task<Registration> AddRegistration(Registration objRegistration)
        {
            _courseRegDbContext.Registration.Add(objRegistration);
            await _courseRegDbContext.SaveChangesAsync();
            return objRegistration;
        }

        [HttpPatch]
        [Route("UpdateRegistration/{id}")]
        public async Task<Registration> UpdateRegistration(Registration objRegistration)
        {
            _courseRegDbContext.Entry(objRegistration).State = EntityState.Modified;
            await _courseRegDbContext.SaveChangesAsync();
            return objRegistration;
        }

        [HttpDelete]
        [Route("DeleteRegistration/{id}")]
        public bool DeleteRegistration(int id)
        {
            bool a = false;
            var registration = _courseRegDbContext.Registration.Find(id);
            if (registration != null)
            {
                a = true;
                _courseRegDbContext.Entry(registration).State = EntityState.Deleted;
                _courseRegDbContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;

        }

    }

}