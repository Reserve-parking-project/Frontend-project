import { FC } from 'react';

const Confirmation: FC<{ text: string; props: Record<string, any> }> = ({ text, ...props }) => {
  return (
    <>
      <p {...props}>{text}</p>
    </>
  );
};

export default Confirmation;
