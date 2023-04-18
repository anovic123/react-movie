import { FC, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { VideosType } from '../../common/types/videos';

import s from './modal.module.scss';

interface ModalBannerProps {
  data: VideosType;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalBanner: FC<ModalBannerProps> = ({ data, activeModal, setActiveModal }) => {
  useEffect(() => {
    if (activeModal) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [activeModal]);

  return (
    <div className={s.modal} style={{ display: activeModal ? 'block' : 'none' }}>
      <div className={s.modalContainer}>
        <button className={s.modalButton} onClick={() => setActiveModal(false)}>
          X
        </button>
        <ReactPlayer
          controls
          height={'100%'}
          width={'100%'}
          url={`https://www.youtube.com/watch?v=${data?.key} || https://www.youtube.com/watch?v=Bb87s3EfM1s`}
        />
      </div>
    </div>
  );
};
