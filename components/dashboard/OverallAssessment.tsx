import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, ThumbsUp } from "lucide-react"

interface OverallAssessmentProps {
  data: {
    confidenceScore: number
    urgencyLevel: number
    recommendedActionPriority: string
    primaryConcerns: string[]
  }
}

export function OverallAssessment({ data }: OverallAssessmentProps) {
  const getUrgencyColor = (level: number) => {
    const colors = {
      1: "bg-green-500",
      2: "bg-blue-500",
      3: "bg-yellow-500",
      4: "bg-orange-500",
      5: "bg-red-500",
    }
    return colors[level as keyof typeof colors] || "bg-gray-500"
  }

  const getActionIcon = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "immediate":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "urgent":
        return <Clock className="h-4 w-4 text-orange-500" />
      default:
        return <ThumbsUp className="h-4 w-4 text-green-500" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Assessment</CardTitle>
        <CardDescription>Analysis confidence and urgency evaluation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Confidence Score</span>
            <span className="text-sm text-muted-foreground">{data.confidenceScore}%</span>
          </div>
          <Progress value={data.confidenceScore} />
        </div>

        <div className="flex items-center gap-4">
          <div>
            <span className="text-sm font-medium block">Urgency Level</span>
            <div
              className={`mt-1 w-8 h-8 rounded-full ${getUrgencyColor(data.urgencyLevel)} flex items-center justify-center text-white font-bold`}
            >
              {data.urgencyLevel}
            </div>
          </div>

          <div>
            <span className="text-sm font-medium block">Recommended Action</span>
            <div className="flex items-center gap-2 mt-1">
              {getActionIcon(data.recommendedActionPriority)}
              <span className="text-sm">{data.recommendedActionPriority}</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-medium block mb-2">Primary Concerns</span>
          <div className="flex flex-wrap gap-2">
            {data.primaryConcerns.map((concern, index) => (
              <Badge key={index} variant="secondary">
                {concern}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

