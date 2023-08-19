import styles from './styles.module.css'


function InputContainer(props) {

  return (
    <div className={styles.wrapper}>
      {props.title}
      {props.children}
    </div>
  );
}

export default InputContainer;