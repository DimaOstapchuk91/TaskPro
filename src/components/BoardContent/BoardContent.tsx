interface BoardContentProps {
  id: string;
}

const BoardContent = ({ id }: BoardContentProps) => {
  return <div>BoardContent ID: {id}</div>;
};
export default BoardContent;
