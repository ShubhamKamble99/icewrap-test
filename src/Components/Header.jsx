import IconAndText from './IconAndText';
import ButtonGroup from './ButtonGroup';
import styles from './Components.module.css';
export default function Header({ icon, title, buttons }) {
  return (
    <div className={`${styles.header}`}>
      <IconAndText icon={icon} title={title} />
      <ButtonGroup buttons={buttons} />
    </div>
  );
}