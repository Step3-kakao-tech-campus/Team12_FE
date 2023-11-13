import { BsUpload } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import StudentMyPageBtn from '@components/molecules/StudentMyPageBtn';
import { STUDENT } from '@/constant/auth';

const UploadForm = () => {
  // const formDataRef = useRef(new FormData());
  const didMount = useRef(false);
  const [formData, setFormData] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [show, setShow] = useState(false);

  // 학생증 사진을 업로드하면 취소/입력완료 버튼이 뜨도록 하는 코드
  useEffect(() => {
    if (didMount.current) setShow(true);
    else didMount.current = true;
  }, [imageSrc]);

  // 학생증 이미지를 업로드했을 경우 처리해주는 코드
  // const onUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);

  //   formDataRef.current = new FormData(); // 새로운 파일이 업로드되면 새로운 FormData로 초기화

  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       formDataRef.current.append('file', reader.result);
  //       setImageSrc(reader.result || null); // 파일의 컨텐츠
  //       resolve();
  //     };
  //   });
  // };

  const onUpload = (e) => {
    // key : "image" & value : 파일값을 담기위한 formdata 선언
    const formdata = new FormData();
    const file = e.target.files[0];
    formdata.append('key', 'image');
    formdata.append('value', file);
    setFormData(formdata);

    // 이미지 미리보기를 위한 코드, FileReader를 활용한다.
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 미리보기를 위한 URL 설정
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
      {show && <StudentMyPageBtn formData={formData} />}
    </>
  );
};

export default UploadForm;
