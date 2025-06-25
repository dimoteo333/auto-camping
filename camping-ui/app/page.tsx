'use client'

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { useRef, useState } from "react"

const products = [
	{
		name: "캠핑 텐트",
		image: "/images/tent.jpg",
		description: "튼튼하고 넓은 4인용 텐트",
		price: "₩120,000",
		rating: 4.7,
		reviews: 132,
		features: ["방수", "초경량", "설치 쉬움"],
	},
	{
		name: "캠핑 체어",
		image: "/images/chair.jpg",
		description: "편안한 접이식 캠핑 의자",
		price: "₩35,000",
		rating: 4.5,
		reviews: 98,
		features: ["내구성", "컴팩트", "쿠션감"],
	},
	{
		name: "랜턴",
		image: "/images/lantern.jpg",
		description: "밝고 오래가는 LED 랜턴",
		price: "₩22,000",
		rating: 4.8,
		reviews: 201,
		features: ["충전식", "밝기 조절", "장시간 사용"],
	},
	{
		name: "쿨러 박스",
		image: "/images/cooler.jpg",
		description: "음식과 음료를 신선하게!",
		price: "₩49,000",
		rating: 4.6,
		reviews: 77,
		features: ["대용량", "이동 손잡이", "보냉력 우수"],
	},
	{
		name: "캠핑 테이블",
		image: "/images/table.jpg",
		description: "가볍고 튼튼한 테이블",
		price: "₩42,000",
		rating: 4.4,
		reviews: 65,
		features: ["폴딩", "경량", "내구성"],
	},
	{
		name: "코펠 세트",
		image: "/images/cookset.jpg",
		description: "실용적인 캠핑 조리도구 세트",
		price: "₩28,000",
		rating: 4.7,
		reviews: 110,
		features: ["스테인리스", "다양한 구성", "세척 용이"],
	},
	{
		name: "침낭",
		image: "/images/sleepingbag.jpg",
		description: "따뜻하고 가벼운 침낭",
		price: "₩39,000",
		rating: 4.9,
		reviews: 154,
		features: ["보온성", "경량", "컴팩트"],
	},
	{
		name: "버너",
		image: "/images/burner.jpg",
		description: "강력한 화력의 캠핑 버너",
		price: "₩33,000",
		rating: 4.6,
		reviews: 89,
		features: ["고화력", "안전장치", "휴대성"],
	},
	{
		name: "캠핑 매트",
		image: "/images/mat.jpg",
		description: "포근한 캠핑 매트",
		price: "₩25,000",
		rating: 4.3,
		reviews: 73,
		features: ["충전식", "방수", "쿠션감"],
	},
	{
		name: "캠핑 화로대",
		image: "/images/firepit.jpg",
		description: "안전한 캠핑 화로대",
		price: "₩59,000",
		rating: 4.8,
		reviews: 120,
		features: ["스테인리스", "접이식", "안전망"],
	},
]

export default function Home() {
	const scrollRef = useRef<HTMLDivElement>(null)
	const [scrollIndex, setScrollIndex] = useState(0)
	const visibleCount = 5

	const scrollToIndex = (idx: number) => {
		if (scrollRef.current) {
			const child = scrollRef.current.children[idx] as HTMLElement
			if (child) {
				scrollRef.current.scrollTo({
					left: child.offsetLeft,
					behavior: "smooth",
				})
			}
		}
		setScrollIndex(idx)
	}

	const handleScroll = () => {
		if (scrollRef.current) {
			const scrollLeft = scrollRef.current.scrollLeft
			const childWidth = scrollRef.current.children[0]?.clientWidth || 1
			const idx = Math.round(scrollLeft / childWidth)
			setScrollIndex(idx)
		}
	}

	return (
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			{/* 전체 페이지에 걸쳐 움직이는 파티클 배경 */}
			<div className="h-full w-full absolute inset-0 z-0">
				<SparklesCore
					id="tsparticlesfullpage"
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
				<Hero />
			</div>

			{/* 아래로 스크롤 시 상품 리스트 */}
			<section className="relative z-10 mt-32 pb-32">
				<h2 className="text-3xl font-bold text-white text-center mb-10">
					추천 캠핑 상품
				</h2>
				<div
					ref={scrollRef}
					className="flex overflow-x-auto gap-8 px-8 pb-8 scroll-smooth"
					style={{
						scrollSnapType: "x mandatory",
					}}
					onScroll={handleScroll}
				>
					{products.map((product, idx) => (
						<div
							key={idx}
							className="min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-200 scroll-snap-align-start relative"
							style={{ scrollSnapAlign: "start" }}
						>
							<img
								src={product.image}
								alt={product.name}
								className="w-44 h-44 object-cover rounded-lg mb-4 shadow"
								loading="lazy"
							/>
							<div className="w-full flex flex-col gap-2">
								<h3 className="text-lg font-bold text-gray-900">
									{product.name}
								</h3>
								<div className="flex items-center gap-2">
									<span className="text-yellow-400 text-base">
										{"★".repeat(Math.round(product.rating))}
										{"☆".repeat(5 - Math.round(product.rating))}
									</span>
									<span className="text-gray-500 text-sm ml-1">
										{product.rating} ({product.reviews})
									</span>
								</div>
								<p className="text-gray-700 text-sm mb-2">
									{product.description}
								</p>
								<ul className="text-xs text-gray-600 mb-2 list-disc list-inside">
									{product.features.map((f, i) => (
										<li key={i}>{f}</li>
									))}
								</ul>
								<div className="flex items-center justify-between mt-2">
									<span className="text-xl font-bold text-purple-700">
										{product.price}
									</span>
									<button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded shadow transition">
										장바구니
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* 상품 개수 바 */}
				<div className="flex justify-center mt-4 gap-2">
					{Array.from({ length: products.length - visibleCount + 1 }).map(
						(_, idx) => (
							<button
								key={idx}
								className={`w-6 h-2 rounded-full transition-all duration-200 ${
									scrollIndex === idx
										? "bg-purple-400"
										: "bg-gray-300"
								}`}
								onClick={() => scrollToIndex(idx)}
								aria-label={`상품 ${idx + 1}~${idx + visibleCount} 보기`}
							/>
						)
					)}
				</div>
				{/* 아래 그라데이션 */}
				<div
					className="absolute left-0 right-0 bottom-0 h-40 pointer-events-none z-20"
					style={{
						background: "linear-gradient(to bottom, transparent, #fff 90%)",
					}}
				/>
			</section>
		</main>
	)
}
