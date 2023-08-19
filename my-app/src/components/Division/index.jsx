import styles from './styles.module.css'
import { useState } from 'react'
import InputContainer from '../InputContainer'

const Division = () => {
const [number1, setNumber1] = useState()
const [number2, setNumber2] = useState()
const [total, setTotal] = useState(number1 / number2)
    
const calculate = () => {
     setTotal(number1 / number2)
    }

    return (
    <InputContainer title='Деление'>
     <div className={styles.text}>
     <input className={styles.inputCount} value={number1} onChange={(event) => { setNumber1(Number(event.target.value))}}></input>
      <button className={styles.btnCount}>/</button>
      <input className={styles.inputScore} value={number2} onChange={(event) => { setNumber2(Number(event.target.value))}}></input>
      <button onClick={calculate}>=</button>
      <input className={styles.inputTotal} readonly='readonly' value={total}></input>
     </div>            
    </InputContainer>    
    )
}

export default Division;