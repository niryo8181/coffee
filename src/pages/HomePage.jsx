import { Link } from "react-router-dom"
import { ROUTES } from "../constants/const.js"
import styles from "../css/HomePage.module.css"

export default function HomePage() {
  return (
    <>
    <header>METASEQUOIA COFFEE"</header>
    <div className={styles.homeContainer}>
      <div className = {styles.homeHeader}> </div>
      <h1 className={styles.title}>あなたの好みを知る、新たなコーヒー体験のためのコーヒー診断</h1>
      <img src="/cofeee0I9A8974_TP_V.webp"alt="コーヒー豆" className={styles.beansPhoto} />
      <Link to={ROUTES.DIAGNOSIS} className={styles.startButton}>診断を始める！</Link> 
      <div className={styles.subText}>たった５つの質問に答えるだけで、「あなたの好みのコーヒー」を診断します。<br/>診断結果に合わせたオススメのコーヒーもラインナップ！</div>
    <ul className={styles.featureList}>
      <li>
      <img src="/coffeecupicon.svg" alt="icon" className={styles.listIcon}/>
      <span>焙煎度合を中心にオススメします。初心者の方にもわかりやすい！</span>
      </li>
      <li>
      <img src="/coffeecupicon.svg" alt="icon" className={styles.listIcon}/>
      <span>国ごとに異なるコーヒーの味わいの違いもわかる！</span>
      </li>
      <li>
      <img src="/coffeecupicon.svg" alt="icon" className={styles.listIcon}/>
      <span>簡単なカッピングシート付き。風味や味わいの特徴を感じてみましょう！</span>
      </li>
    </ul>
    </div>
    </>
  )
};
