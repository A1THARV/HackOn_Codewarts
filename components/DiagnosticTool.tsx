"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DiagnosticDashboard } from "./dashboard/DiagnosticDashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function DiagnosticTool() {
  const [file, setFile] = useState<File | null>(null)
  const [analysis, setAnalysis] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      alert("Please select a file")
      return
    }

    setIsLoading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      setAnalysis(data)
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred while processing your request.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upload Patient Data</CardTitle>
          <CardDescription>
            Upload a file containing patient data for comprehensive analysis. The file should include symptoms, medical
            history, test results, and other relevant information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input
                type="file"
                id="file"
                onChange={handleFileChange}
                accept=".txt,.csv,.json"
                required
                className="cursor-pointer"
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                "Analyzing..."
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Analyze Patient Data
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {analysis && <DiagnosticDashboard data={analysis} />}
    </div>
  )
}

