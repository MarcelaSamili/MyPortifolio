import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 p-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: 'home', link: '/', icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
