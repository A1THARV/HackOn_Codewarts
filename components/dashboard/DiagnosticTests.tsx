import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DiagnosticTestsProps {
  data: {
    recommended: Array<{
      test: string
      priority: number
      rationale: string
      expectedFindings: string[]
    }>
    completed: Array<{
      test: string
      result: string
      interpretation: string
      impact: number
    }>
    biomarkers: Array<{
      name: string
      value: string
      normalRange: string
      significance: string
    }>
  }
}

export function DiagnosticTests({ data }: DiagnosticTestsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Recommended Tests</CardTitle>
          <CardDescription>Tests to be conducted</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.recommended.map((test, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{test.test}</h4>
                  <Badge variant="outline">Priority: {test.priority}/5</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{test.rationale}</p>
                <div className="flex flex-wrap gap-2">
                  {test.expectedFindings.map((finding, i) => (
                    <Badge key={i} variant="secondary">
                      {finding}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed Tests</CardTitle>
          <CardDescription>Results and interpretations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.completed.map((test, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{test.test}</h4>
                  <Progress value={test.impact} className="w-24" />
                </div>
                <div className="text-sm">
                  <p>
                    <span className="font-medium">Result:</span> {test.result}
                  </p>
                  <p className="text-muted-foreground">{test.interpretation}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Biomarkers</CardTitle>
          <CardDescription>Key biological indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Biomarker</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Normal Range</TableHead>
                <TableHead>Significance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.biomarkers.map((biomarker, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{biomarker.name}</TableCell>
                  <TableCell>{biomarker.value}</TableCell>
                  <TableCell>{biomarker.normalRange}</TableCell>
                  <TableCell>{biomarker.significance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

