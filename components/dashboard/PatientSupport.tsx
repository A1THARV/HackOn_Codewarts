import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, DollarSign, Heart, Users } from "lucide-react"

interface PatientSupportProps {
  data: {
    supportGroups: string[]
    educationalResources: string[]
    psychologicalSupport: string[]
    financialResources: string[]
  }
}

export function PatientSupport({ data }: PatientSupportProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Support Groups
          </CardTitle>
          <CardDescription>Available patient communities and support networks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.supportGroups.map((group, index) => (
              <div key={index} className="flex items-start gap-2">
                <Badge variant="outline">{index + 1}</Badge>
                <span className="text-sm">{group}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            Educational Resources
          </CardTitle>
          <CardDescription>Learning materials and information sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.educationalResources.map((resource, index) => (
              <div key={index} className="flex items-start gap-2">
                <Badge variant="outline">{index + 1}</Badge>
                <span className="text-sm">{resource}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Psychological Support
          </CardTitle>
          <CardDescription>Mental health and emotional support services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.psychologicalSupport.map((support, index) => (
              <div key={index} className="flex items-start gap-2">
                <Badge variant="outline">{index + 1}</Badge>
                <span className="text-sm">{support}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Financial Resources
          </CardTitle>
          <CardDescription>Financial assistance and funding options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.financialResources.map((resource, index) => (
              <div key={index} className="flex items-start gap-2">
                <Badge variant="outline">{index + 1}</Badge>
                <span className="text-sm">{resource}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

