import { useState } from 'react';
import WriterMatch from '../components/templates/WriterMatch';
import WriterNoMatch from '../components/templates/WriterNoMatch';
import PickerMatch from '../components/templates/PickerMatch';
import PickerNoMatch from '../components/templates/PickerNoMatch';

const PostDetailPage = () => {
  const isWriter = false;
  const [isMatch, setIsMatch] = useState(false);

  /* eslint no-else-return: "error" */
  const showDetailPage = (isWritered, isMatched) => {
    // 작성자이고 매칭됐을 때
    if (isWritered && isMatched) {
      return <WriterMatch />;
      // 작성자이고 매칭 안됐을 때
    } else if (isWritered && !isMatched) {
      return <WriterNoMatch />;
      // 피커이고 매칭 됐을 때
    } else if (!isWritered && isMatched) {
      return <PickerMatch />;
    }
    // 피커이고 매칭 안됐을 때
    return <PickerNoMatch setIsMatch={setIsMatch} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(isWriter, isMatch)}</div>
    </div>
  );
};

export default PostDetailPage;
