import FormSongeun from '@/components/songeun/Form';
import HookFormSongeun from '@/components/songeun/HookForm';

export default function Songeun() {
  return (
    <div>
      <div>
        <h2>일반 폼</h2>
        <FormSongeun />
      </div>
      <div>
        <h2>리액트 훅 폼</h2>
        <HookFormSongeun />
      </div>
    </div>
  );
}
