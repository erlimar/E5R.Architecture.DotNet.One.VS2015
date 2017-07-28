namespace E5R.ArchitectureOne.Business.Core.Storage
{
    public interface IUnitOfWork
    {
        void StartWork();
        void SaveWork();
        void CancelWork();
    }
}
