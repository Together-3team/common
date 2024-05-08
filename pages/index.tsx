import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>송은, 민영, 지원, 서인, 봉찬 파이팅!</h1>
      <ul>
        <li>
          <Link href="/songeun">송은</Link>
        </li>
        <li>
          <Link href="/minyoung">민영</Link>
        </li>
        <li>
          <Link href="/jiwon">지원</Link>
        </li>
        <li>
          <Link href="/seoin">서인</Link>
        </li>
        <li>
          <Link href="/bongchan">봉찬</Link>
        </li>
      </ul>
    </>
  );
}
