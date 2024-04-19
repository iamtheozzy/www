import { Hero } from '@/components/hero';
import { ModeToggle } from '@/components/mode-toggle';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-evenly p-8 w-1/2">
          <li>
            <a
              href="https://www.linkedin.com/in/ozzy-c-38678177/"
              aria-label="Ozzy`s LinkedIn profile"
              target="_blank"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:cardenas.ozzy@gmail.com"
              aria-label="Ozzy`s email"
              target="_blank"
            >
              <Mail />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/iamtheozzy"
              aria-label="Ozzy`s Github"
              target="_blank"
            >
              <Github />
            </a>
          </li>
        </ul>
      </nav>
      <div className="px-10">
        <Hero />
      </div>
      <div className="flex justify-start p-10">
        <ModeToggle />
      </div>
    </main>
  );
}
