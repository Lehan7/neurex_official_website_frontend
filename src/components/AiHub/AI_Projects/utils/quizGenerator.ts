import { HfInference } from '@huggingface/inference';

const hf = new HfInference('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');

export const generateQuizFromPDF = async (pdfContent: string) => {
  const response = await hf.questionGeneration({
    inputs: pdfContent,
    model: 'facebook/bart-large-mnli'
  });

  return response.map((q: any) => ({
    question: q.question,
    answers: [...q.answers, q.correct_answer] // Add logic to shuffle answers
  }));
};
