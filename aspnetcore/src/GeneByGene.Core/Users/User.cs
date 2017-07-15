using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using GeneByGene.Domain.Entities;
using GeneByGene.Samples;

namespace GeneByGene.Users
{
    public class User : Entity
    {
        public const int MaxFirstNameLength = 30;
        public const int MaxLastNameLength = 30;

        [MaxLength(MaxFirstNameLength)]
        public virtual string FirstName { get; set; }

        [MaxLength(MaxLastNameLength)]
        public virtual string LastName { get; set; }

        public ICollection<Sample> Samples { get; set; }
    }
}