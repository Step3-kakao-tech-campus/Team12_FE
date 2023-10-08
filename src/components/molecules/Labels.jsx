import Label from '../atoms/Label';
import SubLabel from '../atoms/SubLabel';

const Labels = ({ htmlFor, label, subLabel }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>{label}</Label>
      <SubLabel>{subLabel}</SubLabel>
    </>
  );
};

export default Labels;
