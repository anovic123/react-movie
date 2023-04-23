import { FC, useEffect } from 'react';

import { VideoPlayer } from '../';

import { VideosType } from '../../common/types/videos';

import s from './modal.module.scss';

interface ModalProps {
  data: VideosType;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ data, activeModal, setActiveModal }) => {
  useEffect(() => {
    activeModal
      ? (window.scrollTo({ top: 0, behavior: 'smooth' }),
        (document.body.style.overflowY = 'hidden'))
      : (document.body.style.overflowY = 'auto');
  }, [activeModal]);

  const videoUrlPath = 'https://www.youtube.com/watch?v=';

  return (
    <div className={s.modal} style={{ display: activeModal ? 'block' : 'none' }}>
      <div className={s.modalContainer}>
        <button className={s.modalButton} onClick={() => setActiveModal(false)}>
          X
        </button>
        <VideoPlayer
          url={data?.key ? `${videoUrlPath}${data?.key}` : `${videoUrlPath}Bb87s3EfM1s`}
        />
      </div>
    </div>
  );
};
