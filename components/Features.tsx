"use client"

import { motion } from "framer-motion"
import { Dna, Brain, HeartPulse, Microscope, FlaskRoundIcon as Flask, Shield } from "lucide-react"

const features = [
  {
    name: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze patient data in seconds for accurate diagnosis",
    icon: Brain,
    gradient: "from-purple-500 to-blue-500",
  },
  {
    name: "Genetic Profiling",
    description: "Comprehensive genetic analysis to identify rare inherited conditions",
    icon: Dna,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Clinical Assessment",
    description: "Detailed evaluation of symptoms with industry-standard medical benchmarks",
    icon: Microscope,
    gradient: "from-cyan-500 to-green-500",
  },
  {
    name: "Real-time Monitoring",
    description: "Continuous patient monitoring with instant alerts for critical changes",
    icon: HeartPulse,
    gradient: "from-green-500 to-yellow-500",
  },
  {
    name: "Lab Integration",
    description: "Seamless integration with laboratory tests and results",
    icon: Flask,
    gradient: "from-yellow-500 to-red-500",
  },
  {
    name: "Secure Platform",
    description: "HIPAA-compliant platform ensuring patient data security",
    icon: Shield,
    gradient: "from-red-500 to-purple-500",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how our AI-powered platform revolutionizes rare disease diagnosis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="feature-card glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="stats-grid mt-20">
          <div className="glass-card p-8 rounded-xl text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-2">
              99.9%
            </div>
            <div className="text-gray-400">Accuracy Rate</div>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              24/7
            </div>
            <div className="text-gray-400">Availability</div>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500 mb-2">
              10k+
            </div>
            <div className="text-gray-400">Diseases Analyzed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

