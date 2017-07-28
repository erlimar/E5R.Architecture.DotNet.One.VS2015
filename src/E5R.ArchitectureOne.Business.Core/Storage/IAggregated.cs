namespace E5R.ArchitectureOne.Business.Core.Storage
{
    public interface IAggregated
    {
        void SaveChanges();
        bool HasChanges();
        void Seed();
    }
}
