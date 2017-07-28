using System;
using System.Collections.Generic;
using System.Linq;

namespace E5R.ArchitectureOne.Business.Core.Storage
{
    public class GlobalUnitOfWork
    {
        private readonly IList<IAggregated> _aggregates;
        private readonly IUnitOfWork _uow;

        public GlobalUnitOfWork(IUnitOfWork uow)
        {
            if(uow == null)
            {
                throw new ArgumentNullException(nameof(uow));
            }

            _uow = uow;
            _aggregates = new List<IAggregated>();
        }

        public void AddAggregated(IAggregated aggregated)
        {
            if (!_aggregates.Contains(aggregated))
            {
                _aggregates.Add(aggregated);
                aggregated.Seed();
            }
        }

        public void StartWork()
        {
            _uow.StartWork();
        }

        public void SaveWork()
        {
            foreach (var aggregate in _aggregates.Where(where => where.HasChanges()))
            {
                aggregate.SaveChanges();
            }

            _uow.SaveWork();
        }

        public void CancelWork()
        {
            _uow.CancelWork();
        }
    }
}
