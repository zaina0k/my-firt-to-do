import styles from '../css/Modal.module.css';

function Modal({ children, clickOffModal }) {
  return (
    <>
      <div className={styles.backdrop} onClick={clickOffModal} />
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
