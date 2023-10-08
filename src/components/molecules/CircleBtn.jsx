import Button from '../atoms/Button';

const CircleBtn = ({ num, children, active }) => {
  const bgColor = active ? 'bg-blue' : 'bg-gray-400';
  const textColor = active ? 'text-blue' : 'text-gray-400';

  return (
    <div className="flex flex-col items-center z-10">
      <Button bgColor={bgColor} width="w-8" bdRadius="rounded-full">
        {num}
      </Button>
      <div className={`mt-2 ${textColor}`}>{children}</div>
    </div>
  );
};

export default CircleBtn;
