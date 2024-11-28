import axios from "axios"

import { Question } from "../types/question"

export async function fetchTriviaQuestions (
  amount: number,
  category?: number,
  difficulty?: "easy" | "medium" | "hard",
  type?: "multiple" | "boolean"
): Promise<Question[] | null > {
  const params = {
    amount,
    category,
    difficulty,
    type,
  };
  try {
    const response = await axios.get("https://opentdb.com/api.php", {
      params,
    })
    return response.data.results
  } catch (error) {
    console.error("Error fetching trivia questions:", error);
    return null
  }
};