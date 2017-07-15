using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using GeneByGene.Domain.Entities;
using GeneByGene.Users;

namespace GeneByGene.Samples
{
    public class Sample : Entity
    {
        public const int MaxBarcodeLength = 20;

        [MaxLength(MaxBarcodeLength)]
        public virtual string Barcode { get; set; }

        public virtual DateTime CreateAt { get; set; } = DateTime.Now;

        public virtual int CreateBy { get; set; }

        public virtual int StatusId { get; set; }

        [ForeignKey("StatusId")]
        public Status Status { get; set; }

        [ForeignKey("CreateBy")]
        public User CreatorUser { get; set; }
    }
}
