import sprite from '../../assets/sprite.svg';
import { mockColumns } from '../../utils/mockData';
import ColumnList from '../ColumnList/ColumnList';

interface BoardContentProps {
  id: string;
}

const BoardContent = ({ id }: BoardContentProps) => {
  console.log(mockColumns);
  return (
    <div className='h-full'>
      <div className='flex flex-nowrap gap-4.5 w-max h-full'>
        {mockColumns
          .filter(item => item.boardId === id)
          .map(item => (
            <ColumnList key={item.id} column={item} />
          ))}

        <button
          className='flex-none w-[335px] h-14 flex items-center justify-center gap-2 bg-header rounded-lg self-start'
          type='button'
        >
          <span className='flex justify-center items-center rounded w-7 h-7 bg-brand'>
            <svg
              width='14'
              height='14'
              className='stroke-text-dark fill-transparent'
            >
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
          <p className='text-sm text-text-theme'>Add another column</p>
        </button>
      </div>
    </div>
  );
};
export default BoardContent;
