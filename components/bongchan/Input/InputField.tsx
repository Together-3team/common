import classNames from 'classnames/bind';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

import styles from './InputBongchan.module.scss';

interface InputFieldBongchanProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const cx = classNames.bind(styles);

const InputFieldBongchan = forwardRef(
  (
    { className, ...rest }: InputFieldBongchanProps,
    ref?: ForwardedRef<HTMLInputElement>
  ) => {
    return <input className={cx('input', className)} {...rest} ref={ref} />;
  }
);

InputFieldBongchan.displayName = 'InputFieldBongchan';

export default InputFieldBongchan;
