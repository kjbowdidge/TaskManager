using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public bool IsCompleted { get; set; }
    }
}