import React from 'react'
import styles from './Calculadora.module.css'
import Button from './Button'
import './Calculadora.css'
import {useState} from 'react'
const Calculadora = () => {
  let [altura, setAltura] = useState('')
  let [peso, setPeso] = useState('')
  function limpaForm(){
    setAltura('')
    setPeso('')
  }
  return (
    <div id='container-calculadora'>
        <h1 id='titulo'>CALCULADORA DE IMC</h1>
        <form action="" id='formulario-calculadora'>
            <label className={styles.labelsInput} htmlFor="input-altura">Altura</label>
            <input value={altura} onChange={(e) => {setAltura(e.target.value)}} className={styles.Inputs} type="text" id='input-altura' placeholder='Digite a sua altura' />
            <label className={styles.labelsInput} htmlFor="input-peso">Peso</label>
            <input value={peso} onChange={(e) => {setPeso(e.target.value)}} className={styles.Inputs} type="text" id='input-peso' placeholder='Digite o seu peso' />
        </form>
        <div className={styles.botoesCalculadora}>
            <Button id={'botaoCalcular'} text={'Calcular'}/>
            <Button acao={limpaForm} id={'botaoLimpar'} text={'Limpar'}/>
        </div>
    </div>
  )
}

export default Calculadora