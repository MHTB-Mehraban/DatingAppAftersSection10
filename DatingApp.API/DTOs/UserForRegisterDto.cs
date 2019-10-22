using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Username field connot be empty")]
        public string Username { get; set; }
        [Required]
        [StringLength(8 , MinimumLength = 4, ErrorMessage="You must specify password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}