import React, { ChangeEvent, FormEvent, useState } from "react";
import InputJiwon from "./Input";
import { FormData, Errors } from "./InputType";
import * as yup from "yup";

// 유효성 검사 스키마 정의
const schema = yup.object().shape({
  name: yup
    .string()
    .required("이름은 필수입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다."),
  email: yup
    .string()
    .email("유효한 이메일 주소를 입력해주세요.")
    .required("이메일은 필수입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
});

export default function FormJiwon() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // yup 사용
    // validateAt => 유효성 검사 메서드
    // name 키에 해당하는 값(value)을 검증
    const validationObject: Partial<FormData> = { [name]: value };
    schema
      .validateAt(name, validationObject)
      .then(() => {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [name]: err.message }));
      });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log("FormData Submitted:", formData);
        setErrors({});
      })
      .catch((err) => {
        const newErrors = err.inner.reduce(
          (acc: any, cur: any) => ({
            ...acc,
            [cur.path]: cur.message,
          }),
          {}
        );
        setErrors(newErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputJiwon
        label="Name"
        type="text"
        name="name"
        placeholder="이름을 입력해 주세요"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputJiwon
        label="Email"
        type="email"
        name="email"
        placeholder="이메일을 입력해 주세요"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputJiwon
        label="Password"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button type="submit">제출</button>
    </form>
  );
}
