import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.png"
        alt="Hero Image"
        layout="fill"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold">Welcome to Bear Creek Honey Farm</h1>
        <p className="mt-4 text-lg">
          The world's best AI-generated bed and breakfast
        </p>
        <button className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded">
          Reserve today!
        </button>
      </div>
    </div>
  )
}
