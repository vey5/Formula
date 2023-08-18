import styles from './styles.module.css'


function Counted(props) {

  return (
    <div className={styles.wrapper}>
      {props.title}
      {props.children}
    </div>
  );
}

export default Counted;