import { memo, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { classNames } from "@helpers/className";
import { Overlay } from "./Overlay"
import styles from "./Modal.module.scss";
export function useModal({ onClose, animationDelay, lazy, isOpen }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    if (onClose) {
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [onClose, animationDelay]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return { closeHandler, isClosing, isMounted };
}

export const Portal = (props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
  }) => {
    const { isClosing, isMounted, closeHandler } = useModal({
      animationDelay: 300,
      onClose,
      isOpen,
    });
  
    const mods = {
      [styles.opened]: isOpen,
      [styles.isClosing]: isClosing,
    };
  
    if (lazy && !isMounted) {
      return null;
    }
  
    return (
      <Portal>
        <div className={classNames(styles.Modal, mods, [className])}>
          <Overlay onClick={closeHandler} />
          <div className={styles.content}>{children}</div>
        </div>
      </Portal>
    );
  };