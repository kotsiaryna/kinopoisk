import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
