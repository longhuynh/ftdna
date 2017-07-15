using System.IO;

namespace GeneByGene.EfCore.Seed
{
    public static class DataHelper
    {
        public const string SampleFileName = "Samples.txt";
        public const string StatusFileName = "Statuses.txt";
        public const string UserFileName = "Users.txt";

        public static string Path => Directory.GetCurrentDirectory();
    }
}
