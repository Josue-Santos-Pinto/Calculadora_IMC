import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import { levels, calculateImc } from './helpers/imc'

const App =()=>{
  
  const [heightField,setHeightField] = useState<number>(0)
  const [weightField,setWeightField] = useState<number>(0)

  const handleCalculateButton = ()=>{
    if(heightField && weightField){

    } else {
      alert("Digite em todos os campos!")
    }
  }

  return(
    
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={poweredImage} width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>O IMC (ou índice de massa corporal) é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.</p>

          <input 
          type="number"
          placeholder='Digite a sua Altura. Ex: 1.5 (Em metros)'
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input 
          type="number"
          placeholder='Digite o seu Peso. Ex: 70 (Em kg)'
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>

        </div>
        <div className={styles.rightSide}>
        ...    
        </div>

      </div>
    </div>

  )
}
export default App;