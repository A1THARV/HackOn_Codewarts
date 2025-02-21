import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface Diagnosis {
  condition: string
  probability: number
  matchingSymptoms: string[]
  nonMatchingSymptoms: string[]
  rarityScore: number
  geneticFactors: string[]
  environmentalFactors: string[]
}

interface PossibleDiagnosesProps {
  data: Diagnosis[]
}

export function PossibleDiagnoses({ data }: PossibleDiagnosesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Possible Diagnoses</CardTitle>
        <CardDescription>Potential conditions based on symptom analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {data.map((diagnosis, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{diagnosis.condition}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline">Rarity: {diagnosis.rarityScore}/10</Badge>
                  <Progress value={diagnosis.probability} className="w-24" />
                  <span className="text-sm text-muted-foreground">{diagnosis.probability}%</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h5 className="text-sm font-medium mb-2">Matching Symptoms</h5>
                <div className="flex flex-wrap gap-2">
                  {diagnosis.matchingSymptoms.map((symptom, i) => (
                    <Badge key={i} variant="success" className="bg-green-100 text-green-800">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-medium mb-2">Non-Matching Symptoms</h5>
                <div className="flex flex-wrap gap-2">
                  {diagnosis.nonMatchingSymptoms.map((symptom, i) => (
                    <Badge key={i} variant="destructive" className="bg-red-100 text-red-800">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {(diagnosis.geneticFactors.length > 0 || diagnosis.environmentalFactors.length > 0) && (
              <div className="grid gap-4 md:grid-cols-2">
                {diagnosis.geneticFactors.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium mb-2">Genetic Factors</h5>
                    <div className="flex flex-wrap gap-2">
                      {diagnosis.geneticFactors.map((factor, i) => (
                        <Badge key={i} variant="secondary">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosis.environmentalFactors.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium mb-2">Environmental Factors</h5>
                    <div className="flex flex-wrap gap-2">
                      {diagnosis.environmentalFactors.map((factor, i) => (
                        <Badge key={i} variant="secondary">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

