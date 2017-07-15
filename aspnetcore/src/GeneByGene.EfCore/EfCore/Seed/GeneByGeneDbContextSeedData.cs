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
            new DefaultUserCreator(context).Create();
            new DefaultStatusesCreator(context).Create();
            new DefaultSampleCreator(context).Create();

            context.SaveChanges();
        }
    }
}