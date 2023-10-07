import Button from '../atoms/Button';

const CircleBtn = ({ num, children }) => {
  return (
    <div className="flex flex-col items-center z-10">
      <Button width="w-8" bgColor="bg-blue" bdRadius="rounded-full">
        {num}
      </Button>
      <div className="mt-2 text-blue">{children}</div>
    </div>
  );
};

export default CircleBtn;
