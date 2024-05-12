import { ChangeEvent } from "react";

export interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}