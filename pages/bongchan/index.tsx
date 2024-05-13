import classNames from 'classnames/bind';

import styles from './bongchan.module.scss';
import FormBongchan from '@/components/bongchan/Form';
import HookFormBongchan from '@/components/bongchan/HookForm';
import SearchFormBongchan from '@/components/bongchan/SearchForm';

const cx = classNames.bind(styles);

export default function Bongchan() {
  return (
    <div className={cx('page')}>
      <div>
        <h2>일반 폼</h2>
        <FormBongchan />
      </div>
      <div>
        <h2>검색 폼</h2>
        <SearchFormBongchan />
      </div>
      <div>
        <h2>리액트 훅 폼</h2>
        <HookFormBongchan />
      </div>
    </div>
  );
}
