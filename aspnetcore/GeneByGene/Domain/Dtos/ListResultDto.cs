using System.Collections.Generic;

namespace GeneByGene.Domain.Dtos
{
    public class ListResultDto<T> : IListResult<T>
    {
        /// <summary>
        ///     List of items.
        /// </summary>
        public IReadOnlyList<T> Items
        {
            get => items ?? (items = new List<T>());
            set => items = value;
        }

        private IReadOnlyList<T> items;

        /// <summary>
        ///     Creates a new <see cref="ListResultDto{T}" /> object.
        /// </summary>
        public ListResultDto()
        {
        }

        /// <summary>
        ///     Creates a new <see cref="ListResultDto{T}" /> object.
        /// </summary>
        /// <param name="items">List of items</param>
        public ListResultDto(IReadOnlyList<T> items)
        {
            Items = items;
        }
    }
}