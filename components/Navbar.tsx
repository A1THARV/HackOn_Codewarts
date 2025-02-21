import { Button } from "@/components/ui/button"
import { Dna } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Dna className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            RareDx
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

