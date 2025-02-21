import DiagnosticTool from "@/components/DiagnosticTool"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Start Your Analysis
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Upload patient data for comprehensive AI-powered analysis
            </p>
          </div>
          <DiagnosticTool />
        </div>
      </section>
    </div>
  )
}

