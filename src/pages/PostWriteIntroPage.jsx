import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import OtherNav from '../components/atoms/OtherNav';
import routes from '../constant/routes';

const PostWriteIntroPage = () => {
  return (
    <div className="page--layout bg-sky-blue flex flex-col justify-between">
      <OtherNav iconColor="#fff" bgColor="#000" />
      <div>
        <div className="text-white p-8">
          <div className="font-bold text-xl">어떤 음료를 픽업 받으실 건가요?</div>
          <div>픽업을 위한 정보를 입력합니다.</div>
        </div>
        <div className="flex justify-center mb-14">
          <Link to={routes.postWrite}>
            <Button width="w-[19rem]" height=" h-[2.5rem]" bgColor="bg-white" textColor="text-sky-blue">
              공고 작성하기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostWriteIntroPage;
