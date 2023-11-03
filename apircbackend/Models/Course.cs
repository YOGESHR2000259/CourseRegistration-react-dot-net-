using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace APICR.Models
{
    public class Course
    {
        [Key]

        public int id { get; set; }
        [DisplayName("Course")]

        [Required(ErrorMessage = "Please enter a Course name.")]

        public string name { get; set; }
    }
}
