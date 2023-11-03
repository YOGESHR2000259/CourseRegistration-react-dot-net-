using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace APICR.Models
{
    public class Registration
    {
        [Key]
        public int id { get; set; }
        [Required(ErrorMessage = "Please enter a name.")]
        [StringLength(50, ErrorMessage = "Name cannot exceed 50 characters.")]

        public string firstname { get; set; }

        [Required(ErrorMessage = "Please enter a name.")]
        [StringLength(50, ErrorMessage = "Name cannot exceed 50 characters.")]
        public string lastname { get; set; }

        [Required]
        [MaxLength(100)]
        [DataType(DataType.EmailAddress, ErrorMessage = "E-Mail is not Valid")]
        public string emailid { get; set; }

        [Required]
        [DataType(DataType.Date, ErrorMessage = "Date is not Valid")]
        public DateTime dob { get; set; }

        [Required(ErrorMessage = "Please select a course.")]
        public string selectcourse { get; set; }

    }
}
