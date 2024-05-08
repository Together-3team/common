import FormMinyoung from '@/components/minyoung/Form';
import HookFormMinyoung from '@/components/minyoung/HookForm';

export default function Minyoung() {
  return (
    <div>
      <div>
        <h2>일반 폼</h2>
        <FormMinyoung />
      </div>
      <div>
        <h2>리액트 훅 폼</h2>
        <HookFormMinyoung />
      </div>
    </div>
  );
}
