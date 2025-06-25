'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Bell, MapPin, Clock, Users, CheckCircle, Star, ArrowRight, Loader2 } from "lucide-react"
import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import { useRef, useState, useEffect } from "react"

interface ForestData {
	id: string
	name: string
	type: string
	location: string
	image: string
	description: string
	reservationStatus: string
	rating?: number
	reviews?: number
	price?: string
}

const features = [
	{
		icon: <Calendar className="h-8 w-8" />,
		title: "실시간 모니터링",
		description: "24시간 실시간으로 빈자리를 모니터링하여 즉시 예약 기회를 포착합니다."
	},
	{
		icon: <Bell className="h-8 w-8" />,
		title: "즉시 알림",
		description: "원하는 날짜에 빈자리가 생기면 즉시 푸시 알림으로 알려드립니다."
	},
	{
		icon: <CheckCircle className="h-8 w-8" />,
		title: "자동 예약",
		description: "설정한 조건에 맞으면 자동으로 예약을 진행하여 놓치지 않습니다."
	},
	{
		icon: <MapPin className="h-8 w-8" />,
		title: "다중 지역 설정",
		description: "여러 자연휴양림을 동시에 모니터링하여 더 많은 기회를 잡을 수 있습니다."
	}
]

export default function Home() {
	const [selectedDate, setSelectedDate] = useState("")
	const [selectedLocation, setSelectedLocation] = useState("")
	const [forests, setForests] = useState<ForestData[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		fetchForestData()
	}, [])

	const fetchForestData = async () => {
		try {
			setLoading(true)
			const response = await fetch('/api/forests?page=1')
			const result = await response.json()
			
			if (result.success) {
				setForests(result.data)
			} else {
				setError('자연휴양림 데이터를 가져오는데 실패했습니다.')
			}
		} catch (err) {
			setError('서버 오류가 발생했습니다.')
			console.error('Error fetching forest data:', err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<main className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 antialiased relative overflow-hidden">
			{/* 배경 파티클 효과 */}
			<div className="h-full w-full absolute inset-0 z-0">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={50}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>

			<div className="relative z-10">
				<Navbar />
				
				{/* Hero Section */}
				<section className="min-h-screen flex items-center justify-center px-6">
					<div className="max-w-6xl mx-auto text-center">
						<motion.div 
							initial={{ opacity: 0, y: 30 }} 
							animate={{ opacity: 1, y: 0 }} 
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
									숲나들e
								</span>
								<br />
								자동 예약 서비스
							</h1>
							<p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
								대한민국 자연휴양림의 빈자리를 실시간으로 모니터링하고<br />
								자동으로 예약해드리는 스마트한 서비스입니다
							</p>
						</motion.div>

						<motion.div 
							initial={{ opacity: 0, y: 30 }} 
							animate={{ opacity: 1, y: 0 }} 
							transition={{ duration: 0.8, delay: 0.2 }}
							className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto"
						>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								<div className="relative">
									<Calendar className="absolute left-3 top-3 h-5 w-5 text-green-400" />
									<input
										type="date"
										value={selectedDate}
										onChange={(e) => setSelectedDate(e.target.value)}
										className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
										placeholder="날짜 선택"
									/>
								</div>
								<div className="relative">
									<MapPin className="absolute left-3 top-3 h-5 w-5 text-green-400" />
									<select
										value={selectedLocation}
										onChange={(e) => setSelectedLocation(e.target.value)}
										className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
									>
										<option value="">지역 선택</option>
										<option value="강원도">강원도</option>
										<option value="경기도">경기도</option>
										<option value="충청북도">충청북도</option>
										<option value="충청남도">충청남도</option>
										<option value="전라북도">전라북도</option>
										<option value="전라남도">전라남도</option>
										<option value="경상북도">경상북도</option>
										<option value="경상남도">경상남도</option>
										<option value="제주도">제주도</option>
									</select>
								</div>
								<Button 
									size="lg" 
									className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 h-auto"
								>
									<Bell className="mr-2 h-5 w-5" />
									알림 설정
								</Button>
							</div>
							<p className="text-green-200 text-sm">
								원하는 날짜와 지역을 선택하면 빈자리가 생길 때 즉시 알림을 받을 수 있습니다
							</p>
						</motion.div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20 px-6 bg-black/20">
					<div className="max-w-6xl mx-auto">
						<motion.div 
							initial={{ opacity: 0, y: 30 }} 
							whileInView={{ opacity: 1, y: 0 }} 
							transition={{ duration: 0.8 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl font-bold text-white mb-4">
								왜 숲나들e 자동 예약 서비스인가요?
							</h2>
							<p className="text-xl text-green-200">
								수동으로 새로고침할 필요 없이, AI가 알아서 최적의 예약 기회를 잡아드립니다
							</p>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: index * 0.1 }}
									className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all"
								>
									<div className="text-green-400 mb-4 flex justify-center">
										{feature.icon}
									</div>
									<h3 className="text-xl font-bold text-white mb-3">
										{feature.title}
									</h3>
									<p className="text-green-200">
										{feature.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Popular Sites Section */}
				<section className="py-20 px-6">
					<div className="max-w-6xl mx-auto">
						<motion.div 
							initial={{ opacity: 0, y: 30 }} 
							whileInView={{ opacity: 1, y: 0 }} 
							transition={{ duration: 0.8 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl font-bold text-white mb-4">
								실시간 자연휴양림 정보
							</h2>
							<p className="text-xl text-green-200">
								숲나들e에서 제공하는 최신 자연휴양림 정보를 확인해보세요
							</p>
						</motion.div>

						{loading ? (
							<div className="flex justify-center items-center py-20">
								<Loader2 className="h-8 w-8 text-green-400 animate-spin mr-3" />
								<span className="text-green-200 text-lg">자연휴양림 정보를 불러오는 중...</span>
							</div>
						) : error ? (
							<div className="text-center py-20">
								<p className="text-red-400 text-lg mb-4">{error}</p>
								<Button 
									onClick={fetchForestData}
									className="bg-green-600 hover:bg-green-700 text-white"
								>
									다시 시도
								</Button>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
								{forests.slice(0, 8).map((forest, index) => (
									<motion.div
										key={forest.id}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: index * 0.1 }}
										className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all"
									>
										<div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative overflow-hidden">
											<img 
												src={forest.image} 
												alt={forest.name}
												className="w-full h-full object-cover"
												onError={(e) => {
													const target = e.target as HTMLImageElement
													target.style.display = 'none'
													target.parentElement!.innerHTML = '<MapPin className="h-16 w-16 text-white/50" />'
												}}
											/>
											<div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
												{forest.type}
											</div>
										</div>
										<div className="p-6">
											<div className="flex items-center justify-between mb-2">
												<div className="flex items-center">
													<Star className="h-4 w-4 text-yellow-400 mr-1" />
													<span className="text-white font-semibold">{forest.rating?.toFixed(1) || '4.5'}</span>
													<span className="text-green-200 text-sm ml-1">({forest.reviews || 100})</span>
												</div>
												<span className="text-green-400 font-bold">{forest.price || '₩25,000'}</span>
											</div>
											<h3 className="text-lg font-bold text-white mb-2">{forest.name}</h3>
											<p className="text-green-200 text-sm mb-4">{forest.location}</p>
											<div className="flex items-center justify-between">
												<span className={`text-sm px-2 py-1 rounded-full ${
													forest.reservationStatus.includes('접수중') 
														? 'bg-green-500/20 text-green-300' 
														: 'bg-red-500/20 text-red-300'
												}`}>
													{forest.reservationStatus}
												</span>
												<Button 
													size="sm" 
													variant="outline" 
													className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
												>
													<ArrowRight className="h-4 w-4" />
												</Button>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						)}
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 px-6 bg-black/30">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div 
							initial={{ opacity: 0, y: 30 }} 
							whileInView={{ opacity: 1, y: 0 }} 
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-4xl font-bold text-white mb-6">
								지금 바로 시작하세요
							</h2>
							<p className="text-xl text-green-200 mb-8">
								더 이상 예약 경쟁에서 뒤처지지 마세요.<br />
								AI가 도와드리는 스마트한 자연휴양림 예약 서비스
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<Button 
									size="lg" 
									className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
								>
									<Bell className="mr-2 h-6 w-6" />
									무료로 시작하기
								</Button>
								<Button 
									size="lg" 
									variant="outline" 
									className="text-white border-white hover:bg-white hover:text-green-900 px-8 py-4 text-lg"
								>
									서비스 소개 보기
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</main>
	)
}
