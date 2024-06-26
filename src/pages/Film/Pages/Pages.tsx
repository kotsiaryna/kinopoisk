import { useState } from 'react';
import Button from '../../../components/Button/Button';
import styles from './Pages.module.scss';

type PagesProps = {
  n: number;
  length: number;
  onButtonClick: (n: number) => void;
};
export const Pages = ({ n, length, onButtonClick }: PagesProps) => {
  const [activePage, setActivePage] = useState(1);

  const lastPage = Math.ceil(length / n);
  // const buttons = new Array(pagesNumber).fill(0);

  return (
    <div className={styles.wrapper}>
      <Button
        text="<<"
        onClick={() => {
          onButtonClick(1);
          setActivePage(1);
        }}
        disabled={activePage === 1}
      />
      <Button
        text="<"
        onClick={() => {
          onButtonClick(activePage - 1);
          setActivePage((page) => page - 1);
        }}
        disabled={activePage === 1}
      />
      <span className={styles.curPage}>{activePage}</span>
      <Button
        text=">"
        onClick={() => {
          onButtonClick(activePage + 1);
          setActivePage((page) => page + 1);
        }}
        disabled={activePage === lastPage}
      />
      <Button
        text=">>"
        onClick={() => {
          onButtonClick(lastPage);
          setActivePage(lastPage);
        }}
        disabled={activePage === lastPage}
      />
    </div>
  );
};
