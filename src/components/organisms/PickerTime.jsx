import Swal from 'sweetalert2';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@components/atoms/button/Button';
import { articlePickerTime } from '@/apis/articleDetail';
import { articlePickupDenyMessage, articlePickupConfirmMessage, articlePickupSuccessMessage } from '@/utils/alert';
import occurError from '@/utils/occurError';
import { PICKER_INPUT } from '@/constant/writeArticle';

const PickerTime = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: articlePickerTime,
    onSuccess: () => {
      queryClient.invalidateQueries('article_detail');
    },
    onError: (error) => {
      occurError(error);
    },
  });

  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const pickUpCancel = () => {
    window.location.reload();
  };

  const doneWrite = () => {
    Swal.fire(articlePickupConfirmMessage).then((result) => {
      if (result.isConfirmed && value) {
        mutate({
          boardId: id,
          arrivalTime: value,
        });
        Swal.fire(articlePickupSuccessMessage).then(navigate(`/article/${id}`));
      }
      if (result.isConfirmed && !value) {
        Swal.fire(articlePickupDenyMessage);
      }
    });
  };

  return (
    <div className="px-8">
      <div className="mt-8 mb-3">
        <p className="text-blue text-xl">{PICKER_INPUT.LABEL}</p>
        <p className="text-sm">{PICKER_INPUT.SUB_LABEL}</p>
      </div>
      <div className="mt-4">
        <input
          className="text-center w-28 h-10 border border-[#858585] rounded-lg mr-3"
          type="number"
          placeholder="15"
          value={value}
          onChange={onChange}
        />
        {PICKER_INPUT.ARRIVE}
      </div>

      <div className="mt-72 flex justify-between">
        <Button
          onClick={pickUpCancel}
          width="w-[136px]"
          height="h-9"
          bdRadius="rounded-md"
          textColor="text-black"
          bgColor="bg-zinc-300"
        >
          {PICKER_INPUT.CANCEL}
        </Button>

        <Button onClick={doneWrite} width="w-[136px]" height="h-9" bdRadius="rounded-md">
          {PICKER_INPUT.COMPLETE}
        </Button>
      </div>
    </div>
  );
};

export default PickerTime;
