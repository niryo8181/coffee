import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './index.module.css'
import './AnimatedRoutes.css'
import HomePage from './pages/HomePage'
import { ROUTES } from './constants/const'
import DiagnosisPage from './pages/DiagnosisPage'
import ResultPage from './pages/ResultPage'
import AnimatedRoutes from './AnimatedRoutes'


function App() {

  return (
    <div className={styles.appContainer}>
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
    </div>
  )
}

export default App
