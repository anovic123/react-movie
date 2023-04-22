import { FC, useState } from 'react';

import s from './text.module.scss';

interface TextProps {
  text: string;
}

export const Text: FC<TextProps> = ({ text }) => {
  const isFull = text.length < 300;
  const fullText = !isFull ? `${text.slice(0, 300)}...` : text;
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className={s.text}>
        {!isOpen ? fullText : text}
      </div>

      {isOpen ? (
        <span className={s.more} onClick={() => setOpen(false)}>Collapse</span>
      ) : (
        <span className={s.more} onClick={() => setOpen(true)}>Expand</span>
      )}
    </>
  );
};
