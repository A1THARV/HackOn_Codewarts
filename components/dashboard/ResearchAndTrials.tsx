import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ResearchAndTrialsProps {
  data: {
    relevantStudies: Array<{
      title: string
      phase: string
      location: string
      eligibility: boolean
    }>
    expertCenters: Array<{
      name: string
      location: string
      expertise: string[]
      contactInfo: string
    }>
  }
}

export function ResearchAndTrials({ data }: ResearchAndTrialsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Clinical Trials</CardTitle>
          <CardDescription>Relevant ongoing research studies</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Study Title</TableHead>
                <TableHead>Phase</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.relevantStudies.map((study, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{study.title}</TableCell>
                  <TableCell>{study.phase}</TableCell>
                  <TableCell>{study.location}</TableCell>
                  <TableCell>
                    <Badge variant={study.eligibility ? "success" : "secondary"}>
                      {study.eligibility ? "Eligible" : "Not Eligible"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {data.expertCenters.map((center, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{center.name}</CardTitle>
            <CardDescription>{center.location}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {center.expertise.map((area, i) => (
                  <Badge key={i} variant="outline">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Contact Information</h4>
              <p className="text-sm text-muted-foreground">{center.contactInfo}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

