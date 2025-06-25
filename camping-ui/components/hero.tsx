"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Bell, MapPin, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                숲나들e
              </span>
              <br />
              자동 예약 서비스
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-green-100 text-xl mb-8 max-w-2xl mx-auto"
          >
            대한민국 자연휴양림의 빈자리를 실시간으로 모니터링하고<br />
            자동으로 예약해드리는 스마트한 서비스입니다
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              <Bell className="mr-2 h-5 w-5" />
              알림 설정하기
            </Button>
            <Button size="lg" variant="outline" className="text-white border-green-500 hover:bg-green-500/20">
              <Sparkles className="mr-2 h-5 w-5" />
              서비스 소개
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  )
}
