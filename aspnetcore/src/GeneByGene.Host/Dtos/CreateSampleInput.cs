using System;

namespace GeneByGene.Host.Dtos
{
    public class CreateSampleInput 
    {
        public virtual string Barcode { get; set; }

        public virtual int StatusId { get; set; }

        public virtual int CreateBy { get; set; }
    }
}