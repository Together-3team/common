import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './InputBongchan.module.scss';

interface InputMessageBongchanProps {
  children: ReactNode;
  className?: string;
}

const cx = classNames.bind(styles);

export default function InputMessageBongchan({
  children,
  className,
}: InputMessageBongchanProps) {
  return <div className={cx('message', className)}>{children}</div>;
}
