import Minus from './components/Minus';
import Plus from './components/Plus';
import Multiple from './components/Multiple';
import Division from './components/Division';
import styles from './styles.module.css';


function App() {
  return (
    
    <div className={styles.App}>
     <Plus />
     <Minus />
     <Multiple />
     <Division />
    </div>
    
  );
}

export default App;
