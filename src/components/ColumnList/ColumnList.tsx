import { mockTasks } from '../../utils/mockData';
import ColumnItem from '../ColumnItem/ColumnItem';
import sprite from '../../assets/sprite.svg';

interface ColumnListProps {
  column: { id: string; title: string };
}

const ColumnList = ({ column }: ColumnListProps) => {
  return (
    <div>
      <div className='relative'>
        <h2>{column.title}</h2>
        <div className='absolute top-1/2 -translate-y-1/2 right-0 flex gap-2 '>
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
      <ul className='flex '>
        {mockTasks
          .filter(item => item.columnId === column.id)
          .map(item => (
            <ColumnItem key={item.id} taskData={item} />
          ))}
      </ul>
      <button type='button'>Add another card</button>
    </div>
  );
};
export default ColumnList;
