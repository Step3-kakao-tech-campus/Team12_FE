import ArticleInfo from '@components/organisms/ArticleInfo';
import { time } from '@/utils/date';
import { ARTICLE, PICKUP } from '@/constant/article';

const PickUpInfo = ({
  isMatch,
  finishedAt,
  beverages,
  tip,
  request,
  pickerBank,
  pickerAccount,
  arrivalTime,
  pickerPhoneNumber,
}) => {
  const TITLE = 'text-xl text-blue py-1';
  const TEXT_GRAY = 'text-zinc-400';

  return (
    <div className="px-8 pt-6">
      <article>
        <p className={TITLE}>{ARTICLE.INFO}</p>
        <div>
          {beverages.map((name) => {
            return <p key={name.id}>{Object.values(name)}</p>;
          })}
        </div>
      </article>

      <article className="my-12">
        <p className={TITLE}>{ARTICLE.REQUEST}</p>
        <section>
          <div className="flex">
            <p className={TEXT_GRAY}>{ARTICLE.TIP}</p>
            <p className="ml-8">
              {tip}
              {ARTICLE.WON}
            </p>
          </div>
          <div className="flex">
            <p className={TEXT_GRAY}>{ARTICLE.REQUEST}</p>
            <p className="ml-5">{request}</p>
          </div>
        </section>
      </article>

      <article className="my-12">
        <p className={TITLE}>{ARTICLE.DEADLINE}</p>
        <p>{time(finishedAt)}</p>
      </article>

      {isMatch && (
        <article className="my-8">
          <div className="text-xl text-blue pb-2">{PICKUP.INFO}</div>
          <ArticleInfo label={PICKUP.ARRIVAL_TIME}>{time(arrivalTime)}</ArticleInfo>
          <ArticleInfo className="my-1" label={PICKUP.ACCOUNT}>
            {pickerBank} {pickerAccount}
          </ArticleInfo>
          <ArticleInfo className="my-1" label={PICKUP.PHONE_NUMBER}>
            {pickerPhoneNumber}
          </ArticleInfo>
        </article>
      )}
    </div>
  );
};

export default PickUpInfo;
