using System.IO;
using System.Linq;
using GeneByGene.Samples;
using GeneByGene.Users;

namespace GeneByGene.EfCore.Seed
{
    public class DefaultUserCreator
    {
        private readonly GeneByGeneDbContext context;

        public DefaultUserCreator(GeneByGeneDbContext context)
        {
            this.context = context;
        }

        public void Create()
        {
            var lines = File.ReadAllLines(
                string.Format(@"{0}\App_Data\{1}", DataHelper.Path, DataHelper.UserFileName)
            );
            foreach (var line in lines.Skip(1))
            {
                AddUserIfNotExists(line);
            }
        }

        private void AddUserIfNotExists(string line)
        {
            var values = line.Split(',');
            if (values.Length < 3)
                return;

            var firstName = values[1];
            var lastName = values[2];

            if (context.Users.Any(s => s.FirstName == firstName && s.LastName == lastName))
            {
                return;
            }

            context.Users.Add(new User { FirstName = firstName, LastName =  lastName});
            context.SaveChanges();
        }
    }
}