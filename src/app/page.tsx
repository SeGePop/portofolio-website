import HomePage from './Components/home/HomePage'
import Credentials from './Components/home/Credentials';
import Projects from './Components/home/Projects';
import Contact from './Components/home/Contact';

export default function Home() {
  return (
    <div >
      <HomePage />
      <Credentials />
      <Projects />
      <Contact />
    </div>
  );
}
