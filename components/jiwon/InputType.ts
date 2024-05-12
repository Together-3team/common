import { ChangeEvent } from "react";
export interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
}

export interface Errors {
  name?: string;
  email?: string;
  password?: string;
}
