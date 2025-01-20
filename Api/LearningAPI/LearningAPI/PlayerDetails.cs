using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.VisualBasic;

namespace LearningAPI
{
    [Table("PlayerDetails")]

    public class PlayerDetails
    {
        public int PlayerId { get; set; }
        public string PlayerName { get; set; }
        public DateTime DateofBirth { get; set; }
        public bool Gender { get; set; }
        public int Rating { get; set; }
        public bool Status { get; set; }

    }
}
