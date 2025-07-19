
import styles from './Components.module.css';

export default function IconAndText({ icon, title }) {

  return (
    <div className={`${styles.iconAndText}`}>
      <span>{icon}</span>
      <h3>{title}</h3>
    </div>
  );
}