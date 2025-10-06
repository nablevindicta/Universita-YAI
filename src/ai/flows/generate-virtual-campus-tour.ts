'use server';

/**
 * @fileOverview A virtual campus tour generator AI agent.
 *
 * - generateVirtualCampusTour - A function that handles the virtual campus tour generation process.
 * - GenerateVirtualCampusTourInput - The input type for the generateVirtualCampusTour function.
 * - GenerateVirtualCampusTourOutput - The return type for the generateVirtualCampusTour function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVirtualCampusTourInputSchema = z.object({
  imageDataUris: z
    .array(z.string())
    .describe(
      'An array of campus images, as data URIs that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
  imageDescriptions: z.array(z.string()).describe('The descriptions of the campus images.'),
});
export type GenerateVirtualCampusTourInput = z.infer<
  typeof GenerateVirtualCampusTourInputSchema
>;

const GenerateVirtualCampusTourOutputSchema = z.object({
  tourScript: z.string().describe('The script for the virtual campus tour.'),
});
export type GenerateVirtualCampusTourOutput = z.infer<
  typeof GenerateVirtualCampusTourOutputSchema
>;

export async function generateVirtualCampusTour(
  input: GenerateVirtualCampusTourInput
): Promise<GenerateVirtualCampusTourOutput> {
  return generateVirtualCampusTourFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateVirtualCampusTourPrompt',
  input: {schema: GenerateVirtualCampusTourInputSchema},
  output: {schema: GenerateVirtualCampusTourOutputSchema},
  prompt: `You are an AI virtual tour guide generator. You will generate a
script for a virtual tour of the campus using the provided images and
descriptions. Focus on making a prospective student excited about the campus.

Images: {{#each imageDataUris}} {{media url=this}} {{/each}}
Descriptions: {{#each imageDescriptions}} {{this}} {{/each}}`,
});

const generateVirtualCampusTourFlow = ai.defineFlow(
  {
    name: 'generateVirtualCampusTourFlow',
    inputSchema: GenerateVirtualCampusTourInputSchema,
    outputSchema: GenerateVirtualCampusTourOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
