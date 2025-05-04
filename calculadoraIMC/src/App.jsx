import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora'
import TabelaResultado from './components/TabelaResultado'

function App() {
  let [exibeCalculadora, setExibeCalculadora] = useState(true)
  let [imc, setImc] = useState(null)
  let [situacao, setSituacao] = useState('')

  let calcula = (imc, situacao) => {
    setImc(imc)
    setSituacao(situacao)
    setExibeCalculadora(false)
  }

  function voltar(){
    setImc(null)
    setSituacao('')
    setExibeCalculadora(true)
  }
  return (
    <>
      <div>
        {exibeCalculadora ? <Calculadora calcula={calcula}/> : <TabelaResultado imc={imc} situacao={situacao} voltar={voltar}/>}
      </div>
    </>
  )
}

export default App
