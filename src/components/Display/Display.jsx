import styles from "./Display.module.css"

export default function Display({currentQuestion,onChoice}) {
  return (
    <div className={styles.display}>
      <h2>{currentQuestion.question}</h2>
      <div className={styles.gridContainer}>{currentQuestion.options.map((option,index) =>{
        return(
          <button className={styles.choiceButton} key={index} onClick={() => onChoice(option.scoreType,option.point)}>
            {option.text}
          </button>
        )
      })}</div>
      </div>
  )
}
