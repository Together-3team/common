import Image from 'next/image';
import { FormEvent, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Form.module.scss';
import InputBongchan from './Input';

const cx = classNames.bind(styles);

export default function SearchFormBongchan() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(searchInputRef.current?.value);
  };

  return (
    <form className={cx('form')} onSubmit={handleSubmit}>
      <InputBongchan>
        <InputBongchan.Box>
          <Image
            src="/images/search.svg"
            alt="검색 돋보기"
            width={24}
            height={24}
            onClick={handleSubmit}
          />
          <InputBongchan.Field type="text" ref={searchInputRef} />
        </InputBongchan.Box>
      </InputBongchan>
      <button type="submit">제출</button>
    </form>
  );
}
