import FormSeoin from '@/components/seoin/Form';
import HookFormSeoin from '@/components/seoin/HookForm';

export default function Seoin() {
  return (
    <div>
      <div>
        <h2>일반 폼</h2>
        <FormSeoin />
      </div>
      <div>
        <h2>리액트 훅 폼</h2>
        <HookFormSeoin />
      </div>
    </div>
  );
}
