import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './Form.module.scss';
import InputBongchan from './Input';

const cx = classNames.bind(styles);

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

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

export default function HookFormBongchan() {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setError,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleValidSubmit = (data: FormValues) => {
    alert('제출 완료');
  };

  return (
    <form className={cx('form')} onSubmit={handleSubmit(handleValidSubmit)}>
      <InputBongchan>
        <InputBongchan.Label className={cx('label')} htmlFor="email2">
          이메일
        </InputBongchan.Label>
        <InputBongchan.Box isError={errors.email ? true : false}>
          <InputBongchan.Field
            className={cx('inputField')}
            type="email"
            id="email2"
            placeholder="이메일을 입력해 주세요."
            {...register('email')}
          />
        </InputBongchan.Box>
        {errors.email?.message && (
          <InputBongchan.Message>{errors.email.message}</InputBongchan.Message>
        )}
      </InputBongchan>
      <InputBongchan>
        <InputBongchan.Label className={cx('label')} htmlFor="password2">
          비밀번호
        </InputBongchan.Label>
        <InputBongchan.Box isError={errors.password ? true : false}>
          <InputBongchan.Field
            className={cx('inputField')}
            type="password"
            id="password2"
            placeholder="비밀번호를 입력해 주세요."
            hasVisibleToggler
            {...register('password')}
          />
        </InputBongchan.Box>
        {errors.password?.message && (
          <InputBongchan.Message>
            {errors.password.message}
          </InputBongchan.Message>
        )}
      </InputBongchan>
      <InputBongchan>
        <InputBongchan.Label className={cx('label')} htmlFor="passwordConfirm2">
          비밀번호 확인
        </InputBongchan.Label>
        <InputBongchan.Box isError={errors.passwordConfirm ? true : false}>
          <InputBongchan.Field
            className={cx('inputField')}
            type="password"
            id="passwordConfirm2"
            placeholder="비밀번호를 입력해 주세요."
            hasVisibleToggler
            visibleTogglerProps={{ src: '/images/heart.svg' }}
            inVisibleTogglerProps={{ src: '/images/star.svg' }}
            {...register('passwordConfirm')}
          />
        </InputBongchan.Box>
        {errors.passwordConfirm?.message && (
          <InputBongchan.Message>
            {errors.passwordConfirm.message}
          </InputBongchan.Message>
        )}
      </InputBongchan>
      <button type="submit" disabled={!isValid || isSubmitting}>
        제출
      </button>
    </form>
  );
}
