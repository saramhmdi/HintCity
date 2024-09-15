/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
const Input = ({ handleChange, hint }) => {
  return (
    <div className={styles.input}>
      <label htmlFor="input">{hint}</label>
      <input type="text" id="input" onChange={handleChange}  placeholder="Please enter city"/>
    </div>
  );
};

export default Input;
