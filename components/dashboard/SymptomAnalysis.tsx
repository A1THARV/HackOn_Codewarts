import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface SymptomAnalysisProps {
  data: {
    presentingSymptoms: Array<{
      symptom: string
      severity: number
      duration: string
      frequency: string
      relatedConditions: string[]
    }>
    symptomClusters: Array<{
      cluster: string
      symptoms: string[]
      possibleMechanisms: string[]
    }>
    temporalProgression: {
      timeline: Array<{
        timepoint: string
        symptoms: string[]
        significance: string
      }>
      progressionPattern: string
    }
  }
}

export function SymptomAnalysis({ data }: SymptomAnalysisProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Presenting Symptoms</CardTitle>
          <CardDescription>Current symptoms and their characteristics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.presentingSymptoms.map((symptom, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{symptom.symptom}</h4>
                <Badge variant="outline">Severity: {symptom.severity}/10</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Duration: {symptom.duration}</p>
                <p>Frequency: {symptom.frequency}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {symptom.relatedConditions.map((condition, i) => (
                  <Badge key={i} variant="secondary">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Symptom Clusters</CardTitle>
          <CardDescription>Related symptoms and their possible mechanisms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.symptomClusters.map((cluster, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-medium">{cluster.cluster}</h4>
              <div className="flex flex-wrap gap-2">
                {cluster.symptoms.map((symptom, i) => (
                  <Badge key={i}>{symptom}</Badge>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mt-2">Possible Mechanisms:</p>
                <ul className="list-disc list-inside">
                  {cluster.possibleMechanisms.map((mechanism, i) => (
                    <li key={i}>{mechanism}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Temporal Progression</CardTitle>
          <CardDescription>Timeline of symptom development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              {data.temporalProgression.timeline.map((point, index) => (
                <div key={index} className="flex gap-4 pb-4">
                  <div className="w-24 flex-shrink-0 text-sm font-medium">{point.timepoint}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {point.symptoms.map((symptom, i) => (
                        <Badge key={i} variant="outline">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{point.significance}</p>
                  </div>
                </div>
              ))}
            </div>
            <Separator />
            <div className="pt-2">
              <p className="text-sm font-medium">Progression Pattern:</p>
              <p className="text-sm text-muted-foreground">{data.temporalProgression.progressionPattern}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

