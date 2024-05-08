import FormBongchan from '@/components/bongchan/Form';
import HookFormBongchan from '@/components/bongchan/HookForm';

export default function Bongchan() {
  return (
    <div>
      <div>
        <h2>일반 폼</h2>
        <FormBongchan />
      </div>
      <div>
        <h2>리액트 훅 폼</h2>
        <HookFormBongchan />
      </div>
    </div>
  );
}
