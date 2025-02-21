"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverallAssessment } from "./OverallAssessment"
import { PossibleDiagnoses } from "./PossibleDiagnoses"
import { SymptomAnalysis } from "./SymptomAnalysis"
import { DiagnosticTests } from "./DiagnosticTests"
import { TreatmentPlan } from "./TreatmentPlan"
import { GeneticAnalysis } from "./GeneticAnalysis"
import { ResearchAndTrials } from "./ResearchAndTrials"
import { PatientSupport } from "./PatientSupport"
import { FollowUpPlan } from "./FollowUpPlan"

interface DiagnosticDashboardProps {
  data: any // Replace with proper type
}

export function DiagnosticDashboard({ data }: DiagnosticDashboardProps) {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <OverallAssessment data={data.overallAssessment} />
        <PossibleDiagnoses data={data.possibleDiagnoses} />
      </div>

      <Tabs defaultValue="symptoms" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="tests">Tests</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="genetic">Genetic</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
          <TabsTrigger value="followup">Follow-up</TabsTrigger>
        </TabsList>

        <TabsContent value="symptoms" className="space-y-4">
          <SymptomAnalysis data={data.symptomAnalysis} />
        </TabsContent>

        <TabsContent value="tests" className="space-y-4">
          <DiagnosticTests data={data.diagnosticTests} />
        </TabsContent>

        <TabsContent value="treatment" className="space-y-4">
          <TreatmentPlan data={data.treatmentConsiderations} />
        </TabsContent>

        <TabsContent value="genetic" className="space-y-4">
          <GeneticAnalysis data={data.geneticAnalysis} />
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <ResearchAndTrials data={data.researchAndTrials} />
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <PatientSupport data={data.patientSupport} />
        </TabsContent>

        <TabsContent value="followup" className="space-y-4">
          <FollowUpPlan data={data.followUp} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

