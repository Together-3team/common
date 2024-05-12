import React, { ChangeEvent, FormEvent, useState } from "react";
import InputJiwon from "./Input";

export default function FormJiwon() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FormData Submitted:", formData);
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
      />
      <InputJiwon
        label="Email"
        type="email"
        name="email"
        placeholder="이메일을 입력해 주세요"
        value={formData.email}
        onChange={handleChange}
      />
      <InputJiwon
        label="Password"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">제출</button>
    </form>
  );
}
