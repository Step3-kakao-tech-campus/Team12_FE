import { HOME, FOOTER } from '@/constant/home';

const Footer = () => {
  return (
    <div className="bg-zinc-100 py-2 px-5 w-full absolute bottom-0">
      <span className="text-zinc-400 text-sm">{HOME.PICKUP_SHUTTLE}</span>
      <br />
      <span className="text-zinc-400 text-xs">{FOOTER.TEAM}</span>
      <hr className="border-1 border-zinc-300" />
      <div className="text-right text-xs m-1 text-zinc-400">{FOOTER.COPYRIGHT} &#169;</div>
    </div>
  );
};

export default Footer;
