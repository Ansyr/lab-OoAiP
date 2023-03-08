import { Modal } from "@components/modal/Modal";
import { Button } from "@components/elements/button/Button";
import styles from "./OrderForm.module.scss";
export function OrderModal(props) {
  const { isOpen, onClose, onSuccess } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSuccess();
        }}
      >
        <h3>Мы вам перезвоним</h3>
        <input className={styles.input} type="text" placeholder="Ваше имя" />
        <input className={styles.input} type="tel" placeholder="Ваш телефон" />
        <Button>Отправить</Button>
      </form>
    </Modal>
  );
}
