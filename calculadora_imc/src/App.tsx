import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { levels, calculateImc, Level } from './helpers/imc'
import { GridItem } from './components/GridItem'

const App =()=>{
  
  const [heightField,setHeightField] = useState<number>(0)
  const [weightField,setWeightField] = useState<number>(0)
  const [toShow,setToShow] = useState<Level | null>(null)

  const handleCalculateButton = ()=>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField,weightField))
    } else {
      alert("Digite em todos os campos!")
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
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
          disabled={toShow ? true : false}
          />

          <input 
          type="number"
          placeholder='Digite o seu Peso. Ex: 70 (Em kg)'
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton}  
          disabled={toShow ? true : false}>Calcular</button>

        </div>
        <div className={styles.rightSide}>
          {!toShow &&
              <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
              </div> 
          } {toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImage} alt="arrowImage" width={25} />
                </div>
                <GridItem item={toShow} />
              </div>
          
          }
        </div>

      </div>
    </div>

  )
}
export default App;