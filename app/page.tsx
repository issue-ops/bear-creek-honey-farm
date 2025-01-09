import { MarkGithubIcon } from '@primer/octicons-react'
import Image from 'next/image'
import HeroImage from '../components/HeroImage'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 pt-[20%] gap-16 font-[family-name:var(--font-geist-sans)]">
      <HeroImage />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 pt-[20%] font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="flex flex-row gap-4 auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50 pr-10">
                <Image
                  src="/building.png"
                  alt="Building"
                  width={256}
                  height={256}
                  priority
                />
              </div>
              <div className="aspect-video rounded-xl bg-muted/50 pl-10 pr-10">
                <Image
                  src="/creek.png"
                  alt="Creek"
                  width={256}
                  height={256}
                  priority
                />
              </div>
              <div className="aspect-video rounded-xl bg-muted/50 pl-10 pr-10">
                <Image
                  src="/farm.png"
                  alt="Farm"
                  width={256}
                  height={256}
                  priority
                />
              </div>
              <div className="aspect-video rounded-xl bg-muted/50 pl-10">
                <Image
                  src="/room.png"
                  alt="Room"
                  width={256}
                  height={256}
                  priority
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/issue-ops/bear-creek-honey-farm"
            target="_blank"
            rel="noopener noreferrer">
            <MarkGithubIcon className="w-6 h-6" />
            GitHub
          </a>
        </footer>
      </div>
    </div>
  )
}
