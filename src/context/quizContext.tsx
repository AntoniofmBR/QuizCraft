import React, { createContext, ReactNode, useContext, useState } from "react"
import { Question } from "../types/question"

interface QuizContextProps {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined)

interface QuizProviderProps {
  children: ReactNode
}

export function QuizProvider({ children }: QuizProviderProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [score, setScore] = useState(0)

  function resetQuiz() {
    setScore(0)
  }



  return (
    <QuizContext.Provider value={{ questions, setQuestions, score, setScore, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context
}