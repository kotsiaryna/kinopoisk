import { MouseEventHandler } from 'react';

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
