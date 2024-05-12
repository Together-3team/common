import Image from "next/image";
import { useState } from "react";

import styles from "./Input.module.scss";
import eyeOnImg from "./svgs/eye-on.svg";
import eyeOffImg from "./svgs/eye-off.svg";
import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

type IconType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type InputSongeun = {
  inputClassName?: string;
  labelClassName?: string;
  type?: string;
  label: string;
  id: string;
  hasLabel: boolean;
  required?: boolean;
  icon?: IconType;
  register?: UseFormRegisterReturn;
  errors?: FieldErrors<FieldValues>;
};

export default function InputSongeun({
  inputClassName,
  labelClassName,
  type,
  label,
  id,
  hasLabel = true,
  required = false,
  icon,
  register,
  errors,
  ...rest
}: InputSongeun) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleToggle = () => {
    setIsVisible((preIsVisible) => !preIsVisible);
  };
  return (
    <>
      <label
        className={`${styles.label} ${
          hasLabel || styles.hiddenLabel
        } ${labelClassName}`}
        htmlFor={id}
      >
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={`${styles.inputContainer} ${inputClassName}`}>
        {icon && (
          <Image
            width={icon.width}
            height={icon.height}
            src={icon.src}
            alt={icon.alt}
          />
        )}
        <input
          type={type === "password" && isVisible ? "text" : type}
          className={styles.input}
          id={id}
          {...register}
          {...rest}
        />
        {type === "password" && (
          <button
            onClick={handleVisibleToggle}
            type="button"
            className={styles.visibleToggler}
          >
            <Image
              width={24}
              height={24}
              src={isVisible ? eyeOnImg : eyeOffImg}
              alt={isVisible ? "Show Password" : "Hide Password"}
            />
          </button>
        )}
      </div>
      {errors && register && errors[register.name]?.message && (
        <p className={styles.errorMessage}>
          {errors[register.name]?.message?.toString()}
        </p>
      )}
    </>
  );
}
