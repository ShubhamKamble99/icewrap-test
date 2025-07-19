import styles from './Components.module.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function DialogWindow({ show, header, content, footer }) {
  if (!show) return null;

  return (
    <div className={styles.dialogContainer}>
      {
        console.log("header", header)
      }
      <Header {...header} />
      <Content>{content}</Content>
      <Footer {...footer} />
    </div>
  );
}
