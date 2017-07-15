using System;
using GeneByGene.Domain.Dtos;

namespace GeneByGene.Host.Dtos
{
    public class SampleDto : EntityDto
    {
        public virtual string Barcode { get; set; }

        public virtual DateTime CreateAt { get; set; }

        public virtual string StatusDescription { get; set; }

        public virtual string CreatorUserFirstName { get; set; }

        public virtual string CreatorUserLastName { get; set; }
    }
}
