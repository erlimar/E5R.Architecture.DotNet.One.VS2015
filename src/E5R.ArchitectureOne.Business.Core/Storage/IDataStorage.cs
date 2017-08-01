using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace E5R.ArchitectureOne.Business.Core.Storage
{
    public interface IDataStorage<TEntity, TIdentifier>
    {
        // [C]RUD - Create
        TEntity Create(TEntity entity);

        // C[R]UD - Retrieve
        IEnumerable<TEntity> Retrieve();
        IEnumerable<TEntity> Retrieve(Expression<Func<TEntity, bool>> where);
        TEntity Retrieve(TIdentifier id);

        // CR[U]D - Update
        TEntity Update(TIdentifier id, TEntity entity);
        IEnumerable<TEntity> Update(IEnumerable<KeyValuePair<TIdentifier, TEntity>> entities);

        // CRU[D] - Delete
        void Delete(TIdentifier id);
        void Delete(IEnumerable<TIdentifier> ids);
        void Delete(Expression<Func<TEntity, bool>> where);
    }
}
