/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserAuth } from '../../apis/myPage';
import OtherNav from '../../components/atoms/nav/OtherNav';
import Button from '../../components/atoms/button/Button';
import { useNavigate } from 'react-router-dom';
import routes from '../../constant/routes';
import uploadCard from '../../apis/uploadCard';
import { requestCardModalMessage, successRequestCardMessage, errorRequestCardMessage } from '../../utils/alert';

const CheckStudentCardPage = () => {
  // 주석 부분은 백엔드랑 연결되면 사용
  // const { data } = useQuery('/mypage/auth', getUserAuth);
  // const checking = data?.data?.response;

  // 샘플
  const checking = {
    success: true,
    response: '미인증',
    error: null,
  };

  const navigate = useNavigate();
  const didMount = useRef(false);
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const formData = new FormData();
  const { mutate } = useMutation({
    mutationFn: uploadCard,
  });

  // 학생증 사진을 업로드하면 취소/입력완료 버튼이 뜬다
  useEffect(() => {
    if (didMount.current) setShow(true);
    else didMount.current = true;
  }, [imageSrc]);

  // 입력완료 누를 때 나타나는 모달창
  const requestCardModal = () => {
    Swal.fire(requestCardModalMessage).then((result) => {
      if (result.isConfirmed && imageSrc) {
        Swal.fire(successRequestCardMessage).then(mutate(formData));
      }
    });
  };

  // 취소버튼
  const cancel = () => {
    navigate(routes.mypage);
  };

  // 취소, 입력완료 버튼 보일지말지
  const showButton = (pic) => {
    if (pic) {
      return (
        <div className="mt-72 flex justify-between px-10">
          <Button width="w-32" textColor="text-black" bgColor="bg-zinc-300" onClick={cancel}>
            취소
          </Button>
          <Button width="w-32" onClick={requestCardModal}>
            입력완료
          </Button>
        </div>
      );
    }
  };

  // 사진 업로드
  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file);
    formData.append('file', file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  // 학생증 업로드하는 부분
  const uploadForm = () => {
    return (
      <>
        <div className="text-center">
          <label htmlFor="input-file">
            <div className="inline-block border-2 border-zinc-300 rounded-lg w-72 p-6">
              <div className="flex justify-center">
                <BsUpload />
              </div>
              <div className="text-center">학생증 업로드하기</div>
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
        <img className="mx-auto my-5 w-72 h-40" src={imageSrc} />
        {showButton(show)}
      </>
    );
  };

  // 학생증인증중인지 아닌지 체크
  const isCheck = (checking) => {
    if (checking.response === '미인증') return uploadForm();
    else return <div className="text-center text-xl my-10">학생증 인증 검토 중입니다.</div>;
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-xl text-blue mt-10 mb-6">학생증 인증</div>
      {isCheck(checking)}
    </div>
  );
};

export default CheckStudentCardPage;
