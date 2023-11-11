const ArticleInfo = ({ className, label, children }) => {
  return (
    <div className={`flex ${className}`}>
      <div className="text-zinc-400">{label}</div>
      <div className="ml-5">{children}</div>
    </div>
  );
};

export default ArticleInfo;
