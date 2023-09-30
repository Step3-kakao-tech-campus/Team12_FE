const StartPostPage = () => {
  return (
    <div className="page--layout bg-sky-blue flex flex-col items-start justify-end">
      <div className="text-white p-8">
        <div className="font-bold text-xl">어떤 음료를 픽업 받으실 건가요?</div>
        <div>픽업을 위한 정보를 입력합니다.</div>
      </div>
      {/* 버튼 컴포넌트로 수정 */}
      <button type="button">공고 작성하기</button>
    </div>
  );
};

export default StartPostPage;
