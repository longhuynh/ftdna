using System.ComponentModel.DataAnnotations;
using GeneByGene.Samples;

namespace GeneByGene.Host.Dtos
{
    public class CreateSampleInput 
    {
        [MaxLength(Sample.MaxBarcodeLength)]
        public virtual string Barcode { get; set; }

        public virtual int StatusId { get; set; }

        public virtual int CreateBy { get; set; }
    }
}