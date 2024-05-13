import { LabelHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './InputBongchan.module.scss';

interface InputLabelBongchanProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
  hide?: boolean;
}

const cx = classNames.bind(styles);

export default function InputLabelBongchan({
  children,
  className,
  hide,
  ...rest
}: InputLabelBongchanProps) {
  return (
    <label className={cx('label', { hide }, className)} {...rest}>
      {children}
    </label>
  );
}
