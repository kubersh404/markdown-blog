import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          The Majestic Feline
        </h1>
        <p className="text-xl mb-12 text-zinc-300">
          Cats are beautiful, mysterious, and perfect companions. Enjoy some pawsome pictures below!
        </p>
        
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 border border-zinc-800 bg-zinc-900">
            <Image 
              src="https://cataas.com/cat?width=300&height=300" 
              alt="A majestic cat" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
              priority
              unoptimized
            />
          </div>
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 border border-zinc-800 bg-zinc-900">
            <Image 
              src="https://cataas.com/cat/cute?width=300&height=300" 
              alt="A cute cat" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </main>
  );
}
