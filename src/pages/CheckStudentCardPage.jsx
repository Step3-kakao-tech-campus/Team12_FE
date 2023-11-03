/* eslint-disable */
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import OtherNav from '../components/atoms/OtherNav';
import Button from '../components/atoms/Button';
import Swal from 'sweetalert2';
import { useMutation } from '@tanstack/react-query';

const CheckStudentCardPage = () => {
  const [imageSrc, setImageSrc] = useState(null);
  // const { mutate } = useMutation({
  //   mutationFn: uploadCard,
  //   onSuccess: () => {},
  //   onError: () => {},
  // });

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  const requestCardModal = () => {
    return Swal.fire({
      title: '인증을 요청 하시겠습니까?',
      showCancelButton: true,
      cancelButtonText: '취소',
      confirmButtonText: '확인',
      confirmButtonColor: '#0075ff',
      heightAuto: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: '인증 요청이 완료됐어요!',
          showConfirmButton: false,
          timer: 1500,
        });
        // 그리고 사진 보내고 기다림
      }
    });
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center">
        <div className="text-center text-xl text-blue mt-10 mb-6">학생증 인증</div>
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
      <div className="mt-72 flex justify-between px-10">
        <Button width="w-32" textColor="text-black" bgColor="bg-zinc-300">
          취소
        </Button>
        <Button width="w-32" onClick={requestCardModal}>
          입력완료
        </Button>
      </div>
    </div>
  );
};

export default CheckStudentCardPage;
