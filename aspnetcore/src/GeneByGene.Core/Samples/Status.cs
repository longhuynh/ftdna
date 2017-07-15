using System.ComponentModel.DataAnnotations;
using GeneByGene.Domain.Entities;

namespace GeneByGene.Samples
{
    public class Status : Entity
    {
        public const int MaxDescriptionLength = 20;

        [MaxLength(MaxDescriptionLength)]
        public virtual string Description { get; set; }
    }
}
