import React from 'react'
import styles from './Calculadora.module.css'
import Button from './Button'
import './Calculadora.css'
import {useState} from 'react'
const Calculadora = ({calcula}) => {
  let [altura, setAltura] = useState('')
  let [peso, setPeso] = useState('')

  function Calcular(){
    altura = parseFloat(altura)
    peso = parseFloat(peso)
    let imc = peso / Math.pow(altura, 2)
    imc = imc.toFixed(2)
    let situacao
    if(imc < 18.5){
      situacao = 'Magresa'
    }
    else if(imc >= 18.5 && imc <= 24.9){
      situacao = 'Normal'
    }
    else if(imc >= 25 && imc <= 29.9){
      situacao = 'Sobrepeso'
    }
    else if(imc >= 30 && imc <= 39.9){
      situacao = 'Obesidade'
    }
    else{
      situacao = 'Obesidade grave'
    }
    calcula(imc, situacao)
  }
  return (
    <div id='container-calculadora'>
        <h1 id='titulo'>CALCULADORA DE IMC</h1>
        <form action="" id='formulario-calculadora'>
            <label className={styles.labelsInput} htmlFor="input-altura">Altura</label>
            <input value={altura} onChange={(e) => {setAltura(e.target.value)}} className={styles.Inputs} type="number" step={0.01} id='input-altura' placeholder='Digite a sua altura' />
            <label className={styles.labelsInput} htmlFor="input-peso">Peso</label>
            <input value={peso} onChange={(e) => {setPeso(e.target.value)}} className={styles.Inputs} type="number" step={0.01} id='input-peso' placeholder='Digite o seu peso' />
        </form>
        <div className={styles.botoesCalculadora}>
            <Button id={'botaoCalcular'} text={'Calcular'} acao={Calcular}/>
            <Button id={'botaoLimpar'} text={'Limpar'}/>
        </div>
        
    </div>
  )
}

export default Calculadora