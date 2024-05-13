import classNames from 'classnames/bind';
import * as Yup from 'yup';

import styles from './Form.module.scss';
import InputBongchan from './Input';
import { ChangeEvent, FormEvent, useState } from 'react';

const cx = classNames.bind(styles);

const formSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email('이메일 형식으로 입력해 주세요.')
    .required('이메일을 입력해 주세요.'),
  password: Yup.string()
    .trim()
    .min(8, '8자 이상 입력해 주세요.')
    .required('비밀번호를 입력해 주세요.'),
  passwordConfirm: Yup.string()
    .trim()
    .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 입력해 주세요.'),
});

interface FormData {
  [key: string]: {
    value: string;
    isError: boolean;
    message: string;
  };
}

const initialFormData: FormData = {
  email: {
    value: '',
    isError: false,
    message: '',
  },
  password: {
    value: '',
    isError: false,
    message: '',
  },
  passwordConfirm: {
    value: '',
    isError: false,
    message: '',
  },
};

export default function FormBongchan() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: formData.email.value,
      password: formData.password.value,
      passwordConfirm: formData.passwordConfirm.value,
    };

    for (const key in formData) {
      try {
        await formSchema.validateAt(key, data);

        setFormData((prev) => ({
          ...prev,
          [key]: { ...prev[key], isError: false, message: '' },
        }));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          setFormData((prev) => ({
            ...prev,
            [key]: { ...prev[key], isError: true, message: error.message },
          }));
          return;
        }
      }
    }

    alert('제출 완료');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: { ...prev[name], value } }));
  };

  return (
    <form className={cx('form')} onSubmit={handleSubmit}>
      <InputBongchan>
        <InputBongchan.Label className={cx('label')} htmlFor="email" hide>
          이메일
        </InputBongchan.Label>
        <InputBongchan.Box isError={formData.email.isError}>
          <InputBongchan.Field
            className={cx('inputField')}
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            onChange={handleInputChange}
          />
        </InputBongchan.Box>
        {formData.email.message && (
          <InputBongchan.Message>
            {formData.email.message}
          </InputBongchan.Message>
        )}
      </InputBongchan>
      <InputBongchan>
        <InputBongchan.Label className={cx('label')} htmlFor="password">
          비밀번호
        </InputBongchan.Label>
        <InputBongchan.Box isError={formData.password.isError}>
          <InputBongchan.Field
            className={cx('inputField')}
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={handleInputChange}
            hasVisibleToggler
          />
        </InputBongchan.Box>
        {formData.password.message && (
          <InputBongchan.Message>
            {formData.password.message}
          </InputBongchan.Message>
        )}
      </InputBongchan>
      <InputBongchan>
        <InputBongchan.Label className={cx('label')} htmlFor="passwordConfirm">
          비밀번호 확인
        </InputBongchan.Label>
        <InputBongchan.Box isError={formData.passwordConfirm.isError}>
          <InputBongchan.Field
            className={cx('inputField')}
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="비밀번호를 입력해 주세요."
            onChange={handleInputChange}
            hasVisibleToggler
            visibleTogglerProps={{ src: '/images/heart.svg' }}
            inVisibleTogglerProps={{ src: '/images/star.svg' }}
          />
        </InputBongchan.Box>
        {formData.passwordConfirm.message && (
          <InputBongchan.Message>
            {formData.passwordConfirm.message}
          </InputBongchan.Message>
        )}
      </InputBongchan>
      <button type="submit">제출</button>
    </form>
  );
}
