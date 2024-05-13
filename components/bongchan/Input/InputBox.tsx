import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './InputBongchan.module.scss';

interface InputBoxBongchanProps {
  children: ReactNode;
  className?: string;
}

const cx = classNames.bind(styles);

export default function InputBoxBongchan({
  children,
  className,
}: InputBoxBongchanProps) {
  return <div className={cx('box', className)}>{children}</div>;
}
