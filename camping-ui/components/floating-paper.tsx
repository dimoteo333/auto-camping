"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

type Paper = {
  x: number
  y: number
  rotate: number
  duration: number
}

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [papers, setPapers] = useState<Paper[]>([])

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // 클라이언트에서만 랜덤 값 생성
    setPapers(
      Array.from({ length: count }).map(() => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        rotate: Math.random() * 360,
        duration: 20 + Math.random() * 10,
      }))
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions.width, dimensions.height, count])

  return (
    <div className="relative w-full h-full">
      {papers.map((paper, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: paper.x,
            y: paper.y,
            rotate: 0,
          }}
          animate={{
            x: [paper.x, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [paper.y, Math.random() * dimensions.height, Math.random() * dimensions.height],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: paper.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-purple-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
