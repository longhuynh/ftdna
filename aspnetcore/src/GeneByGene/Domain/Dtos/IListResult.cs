using System.Collections.Generic;

namespace GeneByGene.Domain.Dtos
{
    public interface IListResult<T>
    {
        /// <summary>
        ///     List of items.
        /// </summary>
        IReadOnlyList<T> Items { get; set; }
    }
}