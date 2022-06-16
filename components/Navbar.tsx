import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 25,
        color: 'white',
        backgroundColor: '#ff5a00',
        padding: '2em 0',
      }}
    >
      <div>Adrian Rogers</div>
      <div>
        <Link href="https://www.linkedin.com/in/adrian-rogers/">linkedin</Link>
      </div>
    </div>
  );
}
