import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"

export default function Features() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-features"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <section className="py-32 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6">Features</h1>
          <p className="text-lg text-gray-300 max-w-xl text-center">
            이 페이지는 주요 기능(Features)을 소개하는 공간입니다.<br />
            원하는 내용을 여기에 자유롭게 추가하세요.
          </p>
        </section>
      </div>
      </main>
    )
  }