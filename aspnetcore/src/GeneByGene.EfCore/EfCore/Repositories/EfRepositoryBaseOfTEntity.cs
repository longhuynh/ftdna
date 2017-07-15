using GeneByGene.Domain.Entities;

namespace GeneByGene.EfCore.Repositories
{
    public class EfRepositoryBase<TEntity> : EfRepositoryBaseOfTEntityAndTPrimaryKey<TEntity, int>,
        IRepository<TEntity>
        where TEntity : class, IEntity<int>
    {
        public EfRepositoryBase(GeneByGeneDbContext dbContext) : base(dbContext)
        {
        }
    }
}