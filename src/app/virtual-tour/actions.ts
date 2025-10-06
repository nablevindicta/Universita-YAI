"use server";

import { generateVirtualCampusTour, type GenerateVirtualCampusTourInput } from "@/ai/flows/generate-virtual-campus-tour";

export async function generateTourAction(
  input: GenerateVirtualCampusTourInput
): Promise<{ tourScript: string | null; error: string | null }> {
  try {
    const result = await generateVirtualCampusTour(input);
    if (result.tourScript) {
      return { tourScript: result.tourScript, error: null };
    }
    return { tourScript: null, error: "Failed to generate tour script. The result was empty." };
  } catch (e: any) {
    console.error("Error generating virtual tour:", e);
    return { tourScript: null, error: e.message || "An unknown error occurred." };
  }
}
