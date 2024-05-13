import classNames from 'classnames/bind';
import { PropsWithChildren, ReactNode } from 'react';

import styles from './InputBongchan.module.scss';

const cx = classNames.bind(styles);

interface InputLayoutBongchanProps extends PropsWithChildren {
  className?: string;
}

export default function InputLayoutBongchan({
  children,
  className,
}: InputLayoutBongchanProps) {
  return <div className={cx('layout', className)}>{children}</div>;
}
