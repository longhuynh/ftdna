using System;
using GeneByGene.Domain.Dtos;
using Newtonsoft.Json;

namespace GeneByGene.Host.Dtos
{
    public class SampleDto : EntityDto
    {
        public string Barcode { get; set; }

        public string CreateDate => CreateAt.ToString("d");

        [JsonIgnore]
        public DateTime CreateAt { get; set; }

        public string StatusDescription { get; set; }

        public string CreatorUserFirstName { get; set; }

        public string CreatorUserLastName { get; set; }
    }
}
