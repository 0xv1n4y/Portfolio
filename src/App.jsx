
import styles from'./App.module.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import TeckStack from './components/TeckStack/TeckStack';

function App() {
 

  return (
    <div className={styles.App}>
      <Navbar/>
      <Main/>
      <About/>
      <TeckStack/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App
