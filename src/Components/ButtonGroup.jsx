import Button from './Button';
import styles from './Components.module.css';
export default function ButtonGroup({ buttons }) {
  return (
    <div className={`${styles.buttonGroup}`}>
      {
        console.log("buttons", buttons)
      }
      {buttons.map((btn, idx) => (
        <Button key={idx} label={btn.label} className={btn.className} disabled={btn.disabled} onClick={btn.onClick} />
      ))}
    </div>
  );
}