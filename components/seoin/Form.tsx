import { useState } from "react";
import InputSeoin from "./Input";
import styles from "./FormSeoin.module.css";

export default function FormSeoin() {
  const [isError, setIsError] = useState(false);
  return (
    <form>
      <InputSeoin
        id="seoin"
        type="text"
        label="ID: "
        style={styles.Medium}
        isError={false}
        labelStyle={styles.Label}
        placeholder={"아이디를 입력해주세요"}
      />
      <button type="submit" disabled={isError}>
        제출
      </button>
    </form>
  );
}
