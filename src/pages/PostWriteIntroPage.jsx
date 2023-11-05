import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import OtherNav from '../components/atoms/OtherNav';
import routes from '../constant/routes';
import intro from '../constant/postWrite/intro';

const PostWriteIntroPage = () => {
  return (
    <div className="page--layout bg-sky-blue flex flex-col justify-between">
      <OtherNav iconColor="#fff" bgColor="#000" />
      <div>
        <div className="text-white p-8">
          <div className="font-bold text-xl">{intro.TITLE}</div>
          <div>{intro.SUB_TITLE}</div>
        </div>
        <div className="flex justify-center mb-14">
          <Link to={routes.postWrite}>
            <Button width="w-[19rem]" height=" h-[2.5rem]" bgColor="bg-white" textColor="text-sky-blue">
              {intro.START_POST}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostWriteIntroPage;
