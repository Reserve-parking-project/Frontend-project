import { FC } from 'react';

interface ButtonModalProps {
  text: string;
  changePage: (value: string) => void;
  props: Record<string, any>;
}

const ButtonModal: FC<ButtonModalProps> = ({ text, changePage, ...props }) => {
  return (
    <button {...props} onClick={() => changePage(text)}>
      {text}
    </button>
  );
};

export default ButtonModal;
