using System.Threading.Tasks;

namespace GeneByGene.EfCore.Seed
{
    public class GeneByGeneDbContextSeedData
    {
        private readonly GeneByGeneDbContext context;

        public GeneByGeneDbContextSeedData(GeneByGeneDbContext context)
        {
            this.context = context;
        }

        public async Task EnsureSeedData()
        {
           
        }
    }
}