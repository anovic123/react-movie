import { FC, useEffect } from 'react';

import { VideoPlayer } from '../video-player';

import { VideosType } from '../../common/types/videos';

import s from './modal.module.scss';

interface ModalProps {
  data: VideosType;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ data, activeModal, setActiveModal }) => {
  
  useEffect(() => {
    if (activeModal) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [activeModal]);

  const videoUrlPath = `https://www.youtube.com/watch?v=${data?.key}`;
  const pureVideoPath = 'https://www.youtube.com/watch?v=Bb87s3EfM1s';

  return (
    <div className={s.modal} style={{ display: activeModal ? 'block' : 'none' }}>
      <div className={s.modalContainer}>
        <button className={s.modalButton} onClick={() => setActiveModal(false)}>
          X
        </button>
        <VideoPlayer url={!data?.key ? pureVideoPath : videoUrlPath} />
      </div>
    </div>
  );
};