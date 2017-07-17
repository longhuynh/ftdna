using System;
using System.IO;
using System.Linq;
using GeneByGene.Samples;

namespace GeneByGene.EfCore.Seed
{
    public class DefaultStatusesCreator
    {
        private readonly GeneByGeneDbContext context;

        public DefaultStatusesCreator(GeneByGeneDbContext context)
        {
            this.context = context;
        }

        public void Create()
        {
            CreateStatuses();
        }

        private void CreateStatuses()
        {
            var lines = File.ReadAllLines(
                string.Format(@"{0}\App_Data\{1}", DataHelper.Path, DataHelper.StatusFileName)
            );
            foreach (var line in lines.Skip(1))
            {
                AddStatusIfNotExists(line);
            }
        }

        private void AddStatusIfNotExists(string line)
        {
            var values = line.Split(',');
            if (values.Length < 2)
                return;

            var description = values[1];

            if (context.Statuses.Any(s => s.Description == description))
            {
                return;
            }

            context.Statuses.Add(new Status { Description = description });
            context.SaveChanges();
        }

    }
}