import React from 'react'
import './TabelaResultado.css'
import Button from './Button'

const TabelaResultado = ({imc, situacao, voltar}) => {
  return (
    <div id='container-resultado'>
        <h1>Seu IMC: {imc} </h1>
        <h2>Situação atual: {situacao}</h2>
        <h3>Confira as classificações</h3>
        <table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th>Obesidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Menor que 18,5</td>
                    <td>Magreza</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 18,5 e 24,9</td>
                    <td>Normal</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 25 e 29,9</td>
                    <td>Sobrepeso</td>
                    <td>I</td>
                </tr>
                <tr>
                    <td>Entre 30 e 39,9</td>
                    <td>Obesidade</td>
                    <td>II</td>
                </tr>
                <tr>
                    <td>Maior que 40</td>
                    <td>Obesidade grave</td>
                    <td>III</td>
                </tr>
            </tbody>
        </table>
        <Button id={'botao-voltar'} text={'Voltar'} acao={voltar}></Button>
    </div>
  )
}

export default TabelaResultado