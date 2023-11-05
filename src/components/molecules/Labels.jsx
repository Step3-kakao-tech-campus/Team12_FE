import Label from '../atoms/label/Label';
import SubLabel from '../atoms/label/SubLabel';

const Labels = ({ htmlFor, label, subLabel }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>{label}</Label>
      <SubLabel>{subLabel}</SubLabel>
    </>
  );
};

export default Labels;
