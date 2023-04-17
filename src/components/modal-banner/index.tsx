import { FC, useEffect } from 'react';
import ReactPlayer from 'react-player';

import s from './modal.module.scss';

interface ModalBannerProps {
  data: any;
  activeModal: boolean;
  setActiveModal: any;
}

export const ModalBanner: FC<ModalBannerProps> = ({ data, activeModal, setActiveModal }) => {
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  return (
    <div className={s.modal} style={{ display: activeModal ? 'block' : 'none' }}>
      <div className={s.modalContainer}>
        <button className={s.modalButton} onClick={() => setActiveModal(false)}>
          {' '}
          X{' '}
        </button>
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${data?.key} || https://www.youtube.com/watch?v=Bb87s3EfM1s`}
        />
      </div>
    </div>
  );
};