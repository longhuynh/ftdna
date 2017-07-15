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
            var lines = File.ReadAllLines(
                string.Format(@"{0}\App_Data\{1}", DataHelper.Path, DataHelper.SampleFileName)
            );
            foreach (var line in lines.Skip(1))
            {
                AddStatusIfNotExists(line);
            }
        }

        private void AddStatusIfNotExists(string line)
        {
            var values = line.Split(',');
            if (values.Length < 5)
                return;

            var barcode = values[1];
            var createdAt = DateTime.Parse(values[2]);
            var createdBy = int.Parse(values[3]) + 1; // Because UserId in Users.txt begin 0
            var statusId = int.Parse(values[4]) + 1; // Because StatusId in Statuses.txt begin 0

            if (context.Samples.Any(s => s.Barcode == barcode))
            {
                return;
            }

            context.Samples.Add(new Sample
            {
                Barcode = barcode,
                CreateAt = createdAt,
                CreateBy = createdBy,
                StatusId = statusId
            });
            context.SaveChanges();
        }
    }
}