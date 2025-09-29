import { mockTasks } from '../../utils/mockData';
import ColumnItem from '../ColumnItem/ColumnItem';
import sprite from '../../assets/sprite.svg';

interface ColumnListProps {
  column: { id: string; title: string };
}

const ColumnList = ({ column }: ColumnListProps) => {
  return (
    <div className=' w-[335px]  snap-center flex flex-col'>
      <div className='relative  px-5 py-4.5 mb-3.5 bg-bg w-full rounded-lg '>
        <h2 className='text-sm font-medium -tracking-[0.28px]'>
          {column.title}
        </h2>
        <div className='absolute top-1/2 -translate-y-1/2 right-5 flex gap-2 '>
          <button
            className='opacity-40 hover:opacity-100  cursor-pointer transition-all duration-300'
            type='button'
          >
            <svg
              className='stroke-white fill-transparent hover:stroke-brand hover:drop-shadow-[0_0_6px_var(--color-brand)] transition-all duration-300'
              width={16}
              height={16}
            >
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button
            className='opacity-40 hover:opacity-100 cursor-pointer transition-all duration-300'
            type='button'
          >
            <svg
              className='stroke-white fill-transparent hover:stroke-error hover:drop-shadow-[0_0_6px_var(--color-error)]  transition-all duration-300'
              width={16}
              height={16}
            >
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>
      <ul className=' flex  flex-col pr-2  -mr-4 gap-2 mb-3.5 h-[calc(100vh-314px)]  overflow-y-auto overflow-hidden  scrollbar-thumb-bg scrollbar-track-text-theme/10 scrollbar-thumb-rounded-full scrollbar-w-2 scrollbar scrollbar-track-rounded-full'>
        {mockTasks
          .filter(item => item.columnId === column.id)
          .map(item => (
            <ColumnItem key={item.id} taskData={item} />
          ))}
      </ul>
      <button
        className='p-3.5 w-full !text-sm font-bold -tracking-[0.26px] bg-brand rounded-lg  text-text-dark hover:bg-hover'
        type='button'
      >
        Add another card
      </button>
    </div>
  );
};
export default ColumnList;
