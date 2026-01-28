import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import NavBar from "./NavBar.jsx";
import AnimatedContent from './AnimatedContent'

const App = () => (
  <>
    <NavBar />
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
      <Home />
      <Skills />
    </AnimatedContent>
  </>
);

export default App;
