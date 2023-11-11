/* eslint-disable react/prop-types */
import styles from './ButtonsContainer.module.css';
const ButtonsContainer = ({ buttonsName }) => {
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
