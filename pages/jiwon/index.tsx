import FormJiwon from '@/components/jiwon/Form';
import HookFormJiwon from '@/components/jiwon/HookForm';

export default function Jiwon() {
  return (
    <div>
      <div>
        <h2>일반 폼</h2>
        <FormJiwon />
      </div>
      <div>
        <h2>리액트 훅 폼</h2>
        <HookFormJiwon />
      </div>
    </div>
  );
}
