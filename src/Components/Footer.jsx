import ButtonGroup from './ButtonGroup';
import styles from './Components.module.css';
export default function Footer({ info, buttons }) {
  return (
    <div className={`${styles.footer}`}>
      <div>{info && <p>{info}</p>}</div>
      <ButtonGroup buttons={buttons} />
    </div>
  );
}