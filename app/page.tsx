import DiagnosticTool from "@/components/DiagnosticTool"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">AI-based Rare Disease Diagnostic Tool</h1>
      <div className="mb-8 text-center">
        <p className="mb-4">Upload a file containing patient data for analysis.</p>
        <p className="text-sm text-gray-600">
          The file should be in .txt, .csv, or .json format and include relevant patient information such as age,
          gender, symptoms, and medical history.
        </p>
      </div>
      <DiagnosticTool />
    </main>
  )
}

