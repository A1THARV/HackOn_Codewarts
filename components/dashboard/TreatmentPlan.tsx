import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface TreatmentPlanProps {
  data: {
    immediateActions: string[]
    specialistReferrals: Array<{
      specialty: string
      urgency: number
      rationale: string
    }>
    potentialTreatments: Array<{
      treatment: string
      effectiveness: number
      risks: string[]
      benefits: string[]
    }>
    lifestyle: {
      recommendations: string[]
      restrictions: string[]
      monitoring: string[]
    }
  }
}

export function TreatmentPlan({ data }: TreatmentPlanProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Immediate Actions</CardTitle>
          <CardDescription>Steps to be taken immediately</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {data.immediateActions.map((action, index) => (
              <li key={index} className="flex items-center gap-2">
                <Badge variant="default">{index + 1}</Badge>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Specialist Referrals</CardTitle>
          <CardDescription>Required specialist consultations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.specialistReferrals.map((referral, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{referral.specialty}</h4>
                  <Badge variant="outline">Urgency: {referral.urgency}/5</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{referral.rationale}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Potential Treatments</CardTitle>
          <CardDescription>Treatment options and their effectiveness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.potentialTreatments.map((treatment, index) => (
              <div key={index} className="space-y-3">
                <div className="space-y-1">
                  <h4 className="font-medium">{treatment.treatment}</h4>
                  <div className="flex items-center gap-2">
                    <Progress value={treatment.effectiveness} className="w-24" />
                    <span className="text-sm text-muted-foreground">{treatment.effectiveness}% effective</span>
                  </div>
                </div>
                <div className="grid gap-2 text-sm">
                  <div>
                    <p className="font-medium">Benefits:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Risks:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {treatment.risks.map((risk, i) => (
                        <li key={i}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lifestyle Management</CardTitle>
          <CardDescription>Recommendations and restrictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Recommendations</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {data.lifestyle.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Restrictions</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {data.lifestyle.restrictions.map((restriction, index) => (
                  <li key={index}>{restriction}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Monitoring</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {data.lifestyle.monitoring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

