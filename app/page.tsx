import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import HeroImage from '@/components/ui/hero-image'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { MarkGithubIcon } from '@primer/octicons-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 pt-[20%] gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <HeroImage />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 pt-[20%] font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 pt-16 mt-16 items-center">
          <Carousel opts={{ align: 'center' }} className="w-full max-w-lg">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/bear-creek-honey-farm/logo.png"
                      alt="AI Generated Logo"
                      width={256}
                      height={256}
                      priority
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>AI Generated Logo</DialogTitle>
                      <DialogDescription>
                        <Image
                          src="/bear-creek-honey-farm/logo.png"
                          alt="AI Generated Logo"
                          width={512}
                          height={512}
                          priority
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/bear-creek-honey-farm/building.png"
                      alt="AI Generated Building"
                      width={256}
                      height={256}
                      priority
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>AI Generated Building</DialogTitle>
                      <DialogDescription>
                        <Image
                          src="/bear-creek-honey-farm/building.png"
                          alt="AI Generated Building"
                          width={512}
                          height={512}
                          priority
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/bear-creek-honey-farm/creek.png"
                      alt="AI Generated Creek"
                      width={256}
                      height={256}
                      priority
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>AI Generated Creek</DialogTitle>
                      <DialogDescription>
                        <Image
                          src="/bear-creek-honey-farm/creek.png"
                          alt="AI Generated Creek"
                          width={512}
                          height={512}
                          priority
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/bear-creek-honey-farm/farm.png"
                      alt="AI Generated Honey Farm"
                      width={256}
                      height={256}
                      priority
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>AI Generated Honey Farm</DialogTitle>
                      <DialogDescription>
                        <Image
                          src="/bear-creek-honey-farm/farm.png"
                          alt="AI Generated Honey Farm"
                          width={512}
                          height={512}
                          priority
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/bear-creek-honey-farm/room.png"
                      alt="AI Generated Room"
                      width={256}
                      height={256}
                      priority
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>AI Generated Room</DialogTitle>
                      <DialogDescription>
                        <Image
                          src="/bear-creek-honey-farm/room.png"
                          alt="AI Generated Room"
                          width={512}
                          height={512}
                          priority
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/bear-creek-honey-farm/food.png"
                      alt="AI Generated Food"
                      width={256}
                      height={256}
                      priority
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>AI Generated Food</DialogTitle>
                      <DialogDescription>
                        <Image
                          src="/bear-creek-honey-farm/food.png"
                          alt="AI Generated Food"
                          width={512}
                          height={512}
                          priority
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="w-full pl-16 pr-16">
            <div className="bg-black/50 rounded-lg shadow-lg">
              <div className="w-full p-4 text-center">
                <p>
                  Welcome to Bear Creek Honey Farm, a charming bed and breakfast
                  nestled in the picturesque mountains of AI-generated Austria.
                  Our cozy cottage offers a serene escape from the hustle and
                  bustle of everyday life, providing guests with a tranquil
                  retreat surrounded by breathtaking unnatural beauty.
                </p>
                <br />
                <p>
                  At Bear Creek Honey Farm, we pride ourselves on offering a
                  unique and <i>literally</i> unreal experience for our guests.
                  Our beautifully appointed, nonexistent rooms are designed with
                  a rustic yet elegant aesthetic, featuring comfortable
                  furnishings, warm wood accents, and stunning views of
                  AI-generated mountains. Each room is equipped with modern
                  amenities, including free Wi-Fi, flat-screen TVs, and
                  luxurious bedding to ensure a restful night's sleep.
                </p>
                <br />
                <p>
                  Guests can pretend to start their day with a delicious
                  homemade breakfast, featuring fresh, locally sourced
                  ingredients and our very own honey (none of which exist).
                  Enjoy a variety of options, from hearty omelets and fluffy
                  pancakes to fresh fruit and yogurt, all served in our charming
                  dining room with panoramic views of the mountains. For those
                  who prefer to dine <i>al fresco</i>, our outdoor terrace
                  provides the perfect setting to enjoy your phantom meal while
                  breathing in the fresh mountain air.
                </p>
                <br />
                <p>
                  Bear Creek Honey Farm offers a range of activities to suit
                  every interest. Explore the scenic hiking trails that wind
                  through the property, leading you to a peaceful, imaginary
                  creek. For those interested in learning more about our honey
                  production, we offer guided tours of our on-site honey farm,
                  where you can't see the bees in action, because they aren't
                  real.
                </p>
                <br />
                <p>
                  In the evenings, guests can gather around the fire pit to
                  share stories and roast marshmallows, or simply relax in our
                  cozy common area with a good book. Our friendly and attentive
                  staff are never on hand to ensure your stay is as comfortable
                  and enjoyable as possible.
                </p>
                <br />
                <p>
                  Whether you're seeking a romantic getaway, a family vacation,
                  or a solo retreat, Bear Creek Honey Farm offers the perfect
                  blend of comfort, charm, and natural beauty. We look forward
                  to welcoming you and making your stay truly unforgettable.
                  However, please note that Bear Creek Honey Farm does not
                  actually exist, and this website is purely fictional.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 pt-8 flex-wrap items-center justify-center">
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
