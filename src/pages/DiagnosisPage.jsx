import { useState } from "react"
import QUESTIONS from "../constants/questions"
import Display from "../components/Display/Display"
import {useNavigate} from "react-router-dom"
import styles from "../css/DiagnosisPage.module.css"

export default function DiagnosisPage() {

  const [step,setStep] = useState(0)

  const[scores,setScores] = useState({
    light: 0,//浅煎り
    medium: 0,//中煎り
    mediumDark: 0,//中深煎り
    dark: 0//深煎り
  })

  const navigate = useNavigate();
  const handleChoice = (scoreType,point)=> {
    const newScores = {
      ...scores,
      [scoreType]:scores[scoreType] + point
    };
    setScores(newScores);
    if(step === QUESTIONS.length - 1){
      navigate("/result",{ state:{finalScore: newScores}});
    }else{
    setStep (step + 1)
  }
}

  return (
    <div className={styles.container}>
      <question-header>
      <h1 className={styles.title}>コーヒー診断</h1>

      </question-header>
      <main>

      <div className={styles.carafe}>
        <img src={`/carafe${step + 1 }.png`} alt="carafeImage"
        className={styles.carafeImage} />
        <p className={styles.progress}>{step + 1}/{QUESTIONS.length}</p>
      </div>
      <div className={styles.illustration}>
        <img 
          src={QUESTIONS[step].image}
          alt="質問のイラスト"
          className={styles.questionImage} />
      </div>

      <Display 
      currentQuestion={QUESTIONS[step]}
      onChoice={handleChoice}
      />
      </main>
    </div>
  )

}
