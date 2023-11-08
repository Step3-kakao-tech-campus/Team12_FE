import { Link } from 'react-router-dom';
import Button from '@components/atoms/button/Button';
import OtherNav from '@components/atoms/nav/OtherNav';
import routes from '@/constant/routes';
import { INTRO } from '@/constant/writeArticle';

const ArticleWriteIntroPage = () => {
  return (
    <div className="page--layout bg-sky-blue flex flex-col justify-between">
      <OtherNav iconColor="#fff" bgColor="#000" />
      <div>
        <div className="text-white p-8">
          <div className="font-bold text-xl animate-fade-in-move-right">{INTRO.TITLE}</div>
          <div className="opacity-0 animate-fade-in-move-right-delayed">{INTRO.SUB_TITLE}</div>
        </div>
        <div className="flex justify-center mb-14">
          <Link to={routes.articleWrite}>
            <Button width="w-[19rem]" height=" h-[2.5rem]" bgColor="bg-white" textColor="text-sky-blue">
              {INTRO.START_ARTICLE}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleWriteIntroPage;
