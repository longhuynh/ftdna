using GeneByGene.Samples;
using GeneByGene.Users;
using Microsoft.EntityFrameworkCore;

namespace GeneByGene.EfCore
{
    public class GeneByGeneDbContext : DbContext
    {
        public GeneByGeneDbContext(DbContextOptions<GeneByGeneDbContext> options)
            : base(options)
        {

        }

        public DbSet<Status> Statuses { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Sample> Samples { get; set; }
    }
}