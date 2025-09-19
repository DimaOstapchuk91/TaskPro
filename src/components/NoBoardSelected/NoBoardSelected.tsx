const NoBoardSelected = () => {
  return (
    <div className='w-full h-[80%] flex justify-center items-center'>
      <p className='text-xs leading-4 max-w-[335px] text-center text-white/50 -tracking-[0.24px] md:max-w-[486px] md:text-sm md:leading-4.5 md:-tracking-[0.28px]'>
        Before starting your project, it is essential{' '}
        <span className='text-label-green'>to create a board</span> to visualize
        and track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </p>
    </div>
  );
};
export default NoBoardSelected;
