import { useEffect } from "react";

export const Modal = ({ imgSrc, alt, onClose }) => {
  const handleOverayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={handleOverayClick}>
      <Modal>
        <img src={imgSrc} alt={alt} />
      </Modal>
    </div>
  );
};
