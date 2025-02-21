import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface GeneticAnalysisProps {
  data: {
    inheritancePattern: string
    relevantGenes: string[]
    recommendedTests: string[]
    familyHistory: {
      significance: number
      patterns: string[]
      recommendations: string[]
    }
  }
}

export function GeneticAnalysis({ data }: GeneticAnalysisProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Genetic Profile</CardTitle>
          <CardDescription>Inheritance and gene analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Inheritance Pattern</h4>
            <Badge variant="outline">{data.inheritancePattern}</Badge>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Relevant Genes</h4>
            <div className="flex flex-wrap gap-2">
              {data.relevantGenes.map((gene, index) => (
                <Badge key={index} variant="secondary">
                  {gene}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Recommended Genetic Tests</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {data.recommendedTests.map((test, index) => (
                <li key={index} className="list-disc list-inside">
                  {test}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Family History Analysis</CardTitle>
          <CardDescription>Familial patterns and implications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Historical Significance</h4>
              <span className="text-sm text-muted-foreground">{data.familyHistory.significance}%</span>
            </div>
            <Progress value={data.familyHistory.significance} />
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Observed Patterns</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {data.familyHistory.patterns.map((pattern, index) => (
                <li key={index} className="list-disc list-inside">
                  {pattern}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Family-Based Recommendations</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {data.familyHistory.recommendations.map((recommendation, index) => (
                <li key={index} className="list-disc list-inside">
                  {recommendation}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

