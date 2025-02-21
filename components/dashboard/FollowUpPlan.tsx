import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Calendar, Shield } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface FollowUpPlanProps {
  data: {
    monitoringPlan: Array<{
      aspect: string
      frequency: string
      parameters: string[]
    }>
    warningSignals: string[]
    emergencyPlan: string[]
  }
}

export function FollowUpPlan({ data }: FollowUpPlanProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Monitoring Schedule
          </CardTitle>
          <CardDescription>Regular health monitoring parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Aspect</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Parameters to Monitor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.monitoringPlan.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.aspect}</TableCell>
                  <TableCell>{item.frequency}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {item.parameters.map((parameter, i) => (
                        <Badge key={i} variant="outline">
                          {parameter}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Warning Signals
          </CardTitle>
          <CardDescription>Signs requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.warningSignals.map((signal, index) => (
              <div key={index} className="flex items-start gap-2">
                <Badge variant="destructive">{index + 1}</Badge>
                <span className="text-sm">{signal}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Emergency Plan
          </CardTitle>
          <CardDescription>Steps to take in case of emergency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.emergencyPlan.map((step, index) => (
              <div key={index} className="flex items-start gap-2">
                <Badge variant="default">{index + 1}</Badge>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

