import { BsUpload } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import StudentMyPageBtn from '@components/molecules/StudentMyPageBtn';
import { STUDENT } from '@/constant/auth';

const UploadForm = () => {
  const formData = new FormData();
  const [imageSrc, setImageSrc] = useState(null);
  const [show, setShow] = useState(false);
  const didMount = useRef(false);

  // 학생증 사진을 업로드하면 취소/입력완료 버튼이 뜬다
  useEffect(() => {
    if (didMount.current) setShow(true);
    else didMount.current = true;
  }, [imageSrc]);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    formData.append('file', file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <>
      <div className="text-center">
        <label htmlFor="input-file">
          <div className="inline-block border-2 border-zinc-300 rounded-lg w-72 p-6">
            <div className="flex justify-center">
              <BsUpload />
            </div>
            <div className="text-center">{STUDENT.UPLOAD_CARD}</div>
          </div>
        </label>
      </div>
      <input
        id="input-file"
        accept="image/*"
        multiple
        type="file"
        onChange={(e) => onUpload(e)}
        style={{ display: 'none' }}
      />
      {imageSrc && <img className="mx-auto my-5 w-72 h-40" src={imageSrc} alt="student-card" />}
      {show && <StudentMyPageBtn isUploadImg={!!imageSrc} formData={formData} />}
    </>
  );
};

export default UploadForm;
