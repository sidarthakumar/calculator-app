import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
function App() {
  let buttonsName = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.',
  ];
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer buttonsName={buttonsName} />
    </div>
  );
}

export default App;
