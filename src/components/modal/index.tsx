import { FC } from 'react';

import { VideoPlayer } from '../';

import { VideosType } from '../../common/types/videos';

import s from './modal.module.scss';

interface ModalProps {
  data: VideosType;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ data, activeModal, setActiveModal }) => {
  const videoUrlPath = 'https://www.youtube.com/watch?v=';

  return (
    <div className={`${s.modal} ${activeModal ? s.visible : ''}`}>
      <div className={s.modalLayer} onClick={() => setActiveModal(false)} />
      <div className={s.modalContainer}>
        <button className={s.modalButton} onClick={() => setActiveModal(false)}>
          X
        </button>
        <VideoPlayer
          isActive={activeModal}
          url={data?.key ? `${videoUrlPath}${data?.key}` : `${videoUrlPath}Bb87s3EfM1s`}
        />
      </div>
    </div>
  );
};
