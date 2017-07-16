using System.Collections.Generic;

namespace GeneByGene.Host.Dtos
{
    public interface IListResult<T>
    {
        /// <summary>
        ///     List of items.
        /// </summary>
        IReadOnlyList<T> Items { get; set; }
    }
}