import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';

const StartPostPage = () => {
  return (
    <div className="page--layout bg-sky-blue flex flex-col justify-end">
      <div className="text-white p-8">
        <div className="font-bold text-xl">어떤 음료를 픽업 받으실 건가요?</div>
        <div>픽업을 위한 정보를 입력합니다.</div>
      </div>
      <div className="flex justify-center mb-14">
        <Link to="/post-write">
          <Button height="w-[19rem] h-[2.5rem]" bgColor="bg-white" textColor="text-sky-blue">
            공고 작성하기
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StartPostPage;
