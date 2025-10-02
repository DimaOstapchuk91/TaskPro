import { mockTasks } from '../../utils/mockData';
import ControlButtons from '../btn/ControlButtons/ControlButtons';
import ColumnItem from '../ColumnItem/ColumnItem';
import sprite from '../../assets/sprite.svg';
import ColumnModal from '../modals/ColumnModal/ColumnModal';

interface ColumnListProps {
  column: { id: string; title: string };
}

const ColumnList = ({ column }: ColumnListProps) => {
  const handleDellColumn = async () => {
    console.log('Виадалення колонки');
  };

  return (
    <div className=' w-[335px]  snap-center flex flex-col'>
      <div className='relative  px-5 py-4.5 mb-3.5 bg-bg w-full rounded-lg '>
        <h2 className='text-sm font-medium -tracking-[0.28px]'>
          {column.title}
        </h2>
        <div className='absolute top-1/2 -translate-y-1/2 right-5 flex gap-2 '>
          <ControlButtons
            confirmAction={handleDellColumn}
            confirmTitle={'Delete column?'}
            CreateModal={ColumnModal}
          />
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
        className='p-3.5 flex items-center gap-2 justify-center w-full !text-sm font-bold -tracking-[0.26px] bg-brand rounded-lg  text-text-dark hover:bg-hover'
        type='button'
      >
        <span className='flex justify-center items-center rounded w-7 h-7 bg-text-dark'>
          <svg
            width='14'
            height='14'
            className='stroke-text-theme fill-transparent'
          >
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </span>
        Add another card
      </button>
    </div>
  );
};
export default ColumnList;
