import{ useRef, createRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition} from "react-transition-group"
import HomePage from "./pages/HomePage";
import DiagnosisPage from "./pages/DiagnosisPage";
import ResultPage from "./pages/ResultPage";
import { ROUTES } from "./constants/const";

const AnimatedRoutes = () => {
  const location = useLocation();

const nodeRefs = useRef({});

if (!nodeRefs.current[location.pathname]){
  nodeRefs.current[location.pathname] = createRef();
}

const currentNodeRef = nodeRefs.current[location.pathname];

return(
  <TransitionGroup>
    <CSSTransition
      key={location.pathname}
      classNames="fade"
      timeout={600}
      nodeRef={currentNodeRef}
      >
      <div ref= {currentNodeRef} className="page-wrapper"> 
       <Routes location={location}>
        <Route path={ROUTES.HOME} element={<HomePage />}/>
        <Route path={ROUTES.DIAGNOSIS} element={<DiagnosisPage />}/>
        <Route path={ROUTES.RESULT} element={<ResultPage />}/>
       </Routes>
      </div>
    </CSSTransition>
  </TransitionGroup>
)
};

export default AnimatedRoutes;