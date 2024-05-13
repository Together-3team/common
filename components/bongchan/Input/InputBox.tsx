import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './InputBongchan.module.scss';

interface InputBoxBongchanProps {
  children: ReactNode;
  isError?: boolean;
  className?: string;
}

const cx = classNames.bind(styles);

export default function InputBoxBongchan({
  children,
  isError,
  className,
}: InputBoxBongchanProps) {
  return (
    <div className={cx('box', { error: isError }, className)}>{children}</div>
  );
}
