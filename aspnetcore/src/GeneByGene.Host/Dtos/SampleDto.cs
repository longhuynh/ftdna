using System;
using GeneByGene.Domain.Dtos;

namespace GeneByGene.Host.Dtos
{
    public class SampleDto : EntityDto
    {
        public string Barcode { get; set; }

        public DateTime CreateAt { get; set; }

        public string StatusDescription { get; set; }

        public string CreatorUserFirstName { get; set; }

        public string CreatorUserLastName { get; set; }
    }
}
