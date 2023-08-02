import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { getIsClickLogOut } from 'redux/authSlice/authSelectors';

import { ICONS } from 'ui-kit/icons';
import s from './Modal.module.scss';

interface ModalProps {
  isShowModal: boolean;
  onClick: () => void;
  isCloseIcon?: boolean;
  children?: JSX.Element;
}

export const Modal = ({
  isShowModal,
  onClick,
  isCloseIcon,
  children,
}: ModalProps) => {
  const isClickLogOut = useSelector(getIsClickLogOut);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isCloseIcon) return;

      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCloseIcon, onClick]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <div
      className={s.backdropDark}
      onClick={isCloseIcon && handleBackdropClick}
    >
      <div
        className={`${s.modalDark} ${
          (isShowModal || isClickLogOut) && s.fadeIn
        }`}
      >
        {isCloseIcon && (
          <button
            type='button'
            className={s.closeModalBtnDark}
            onClick={onClick}
          >
            <ICONS.CROSS_SMALL />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
