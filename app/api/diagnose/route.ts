import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI("AIzaSyBZfPzNVOcxkkcjbs1pcEIbGpei8tFq8hk")

const ANALYSIS_PROMPT = `You are an expert medical diagnostic AI system specializing in rare diseases. Analyze the provided patient data and return a comprehensive JSON object that EXACTLY matches this schema: 
{
  "overallAssessment": {
    "confidenceScore": number,
    "urgencyLevel": number,
    "recommendedActionPriority": string,
    "primaryConcerns": string[]
  },
  "possibleDiagnoses": [
    {
      "condition": string,
      "probability": number,
      "matchingSymptoms": string[],
      "nonMatchingSymptoms": string[],
      "rarityScore": number,
      "geneticFactors": string[],
      "environmentalFactors": string[]
    }
  ],
  "symptomAnalysis": {
    "presentingSymptoms": [
      {
        "symptom": string,
        "severity": number,
        "duration": string,
        "frequency": string,
        "relatedConditions": string[]
      }
    ],
    "symptomClusters": [
      {
        "cluster": string,
        "symptoms": string[],
        "possibleMechanisms": string[]
      }
    ],
    "temporalProgression": {
      "timeline": [
        {
          "timepoint": string,
          "symptoms": string[],
          "significance": string
        }
      ],
      "progressionPattern": string
    }
  },
  "diagnosticTests": {
    "recommended": [
      {
        "test": string,
        "priority": number,
        "rationale": string,
        "expectedFindings": string[]
      }
    ],
    "completed": [
      {
        "test": string,
        "result": string,
        "interpretation": string,
        "impact": number
      }
    ],
    "biomarkers": [
      {
        "name": string,
        "value": string,
        "normalRange": string,
        "significance": string
      }
    ]
  },
  "treatmentConsiderations": {
    "immediateActions": string[],
    "specialistReferrals": [
      {
        "specialty": string,
        "urgency": number,
        "rationale": string
      }
    ],
    "potentialTreatments": [
      {
        "treatment": string,
        "effectiveness": number,
        "risks": string[],
        "benefits": string[]
      }
    ],
    "lifestyle": {
      "recommendations": string[],
      "restrictions": string[],
      "monitoring": string[]
    }
  },
  "geneticAnalysis": {
    "inheritancePattern": string,
    "relevantGenes": string[],
    "recommendedTests": string[],
    "familyHistory": {
      "significance": number,
      "patterns": string[],
      "recommendations": string[]
    }
  },
  "researchAndTrials": {
    "relevantStudies": [
      {
        "title": string,
        "phase": string,
        "location": string,
        "eligibility": boolean
      }
    ],
    "expertCenters": [
      {
        "name": string,
        "location": string,
        "expertise": string[],
        "contactInfo": string
      }
    ]
  },
  "patientSupport": {
    "supportGroups": string[],
    "educationalResources": string[],
    "psychologicalSupport": string[],
    "financialResources": string[]
  },
  "followUp": {
    "monitoringPlan": [
      {
        "aspect": string,
        "frequency": string,
        "parameters": string[]
      }
    ],
    "warningSignals": string[],
    "emergencyPlan": string[]
  }
}

CRITICAL ANALYSIS REQUIREMENTS:
1. Symptom Pattern Recognition:
   - Identify all symptoms and their relationships
   - Analyze progression patterns
   - Calculate severity and impact scores
   - Map to known rare disease patterns

2. Diagnostic Accuracy:
   - Cross-reference with rare disease databases
   - Calculate confidence scores for each potential diagnosis
   - Identify critical diagnostic markers
   - Consider genetic and environmental factors

3. Treatment Planning:
   - Prioritize immediate actions
   - Identify specialist requirements
   - Evaluate treatment options
   - Consider patient-specific factors

4. Research Integration:
   - Include relevant clinical trials
   - Reference expert centers
   - Consider experimental treatments
   - Link to latest research findings

5. Patient Support:
   - Identify support resources
   - Consider psychological impact
   - Include educational materials
   - Plan follow-up care

CRITICAL INSTRUCTIONS:
1. Return ONLY the JSON object, no additional text
2. Response MUST be valid JSON
3. ALL number values MUST be within specified ranges
4. ALL arrays MUST contain at least one item
5. ALL fields are REQUIRED
6. Do NOT add fields not in the schema
7. Do NOT include comments
8. Format with proper indentation
`

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const fileContent = await file.text()
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = ANALYSIS_PROMPT + "\n\n" + fileContent
    const result = await model.generateContent(prompt)
    const analysis = result.response.text()

    // Parse the response to ensure it's valid JSON
    const parsedAnalysis = JSON.parse(analysis)

    return NextResponse.json(parsedAnalysis)
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "An error occurred while processing the request" }, { status: 500 })
  }
}
