"use client"

import { Button } from "@/components/ui/button"
import { TreePine, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react" // Added import for React

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <TreePine className="w-8 h-8 text-green-500" />
        <span className="text-white font-medium text-xl">숲나들e</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/features">서비스 소개</NavLink>
        <NavLink href="/how-it-works">이용 방법</NavLink>
        <NavLink href="/forests">자연휴양림</NavLink>
        <NavLink href="/pricing">요금제</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <SignedOut>
          <SignInButton><Button variant="ghost" className="text-white hover:text-green-400">로그인</Button></SignInButton>
          <SignUpButton><Button variant="ghost" className="text-white hover:text-green-400">회원가입</Button></SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton>Hello</UserButton>
        </SignedIn>

        <Button className="bg-green-600 hover:bg-green-700 text-white">시작하기</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
    </Link>
  )
}
