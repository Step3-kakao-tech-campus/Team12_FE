import CircleBtn from '@components/molecules/CircleBtn';
import Line from '@components/atoms/Line';
import { ARTICLE } from '@/constant/article';

const CircleNavigate = ({ navigate }) => {
  const writeMenu = [ARTICLE.INFO, ARTICLE.REQUEST, ARTICLE.DEADLINE];

  return (
    <div className="relative mt-4">
      <div className="flex place-content-around">
        {writeMenu.map((el, idx) => (
          <CircleBtn key={el.id} num={`${idx + 1}`} active={navigate === idx + 1}>
            {el}
          </CircleBtn>
        ))}
      </div>
      <div className="absolute top-4 left-14">
        <Line />
      </div>
    </div>
  );
};

export default CircleNavigate;
