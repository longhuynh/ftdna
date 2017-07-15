using GeneByGene.Domain.Entities;

namespace GeneByGene.EntityFramework.Repositories
{
    public class EfRepositoryBase<TEntity> : EfRepositoryBaseOfTEntityAndTPrimaryKey<TEntity, int>,
        IRepository<TEntity>
        where TEntity : class, IEntity<int>
    {
       
    }
}