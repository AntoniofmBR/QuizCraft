import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

import { useQuiz } from '../context/quizContext'
import { fetchTriviaQuestions } from '../services/triviaService'

import { Loading } from '../components/loading'
import { Feedback } from '../components/feedback'

import logo from '../assets/png/logo_short.png'
import { ProgressBar } from '../components/progressBar'

export function Quiz() {
  const { questions, setQuestions, score, setScore } = useQuiz()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)

  useEffect(() => {
    const loadQuestions = async () => {
      const triviaQuestions = await fetchTriviaQuestions(15, 9, "medium", "multiple")

      if (triviaQuestions == null) {
        return "❌ Erro em carregar as perguntas, por favor tente novamente mais tarde."
      }

      setQuestions(triviaQuestions)
    }

    loadQuestions()
  }, [setQuestions])

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1)
    setCurrentQuestion((prev) => prev + 1)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if (!questions.length) return <Loading />

  const question = questions[currentQuestion]

  if (!question) return <Feedback score={score} totalQuestions={questions.length} />

  return (
    <div className="min-h-screen bg-blacks-black_200 text-whites-white_200 font-semibold flex flex-col justify-between items-center p-7 gap-7">
      <motion.img
        src={logo}
        alt='Logo'
        whileHover={{ scale: 1.1 }}
       className='max-h-28 h-auto w-auto'
      />

      <ProgressBar
        key={ currentQuestionIndex }
        currentQuestion={ currentQuestion }
        totalQuestions={ questions.length }
      />

      <h1 className='text-oranges-orange_100 text-5xl font-black' >
        Question { String(currentQuestionIndex).padStart(2, '0') }
      </h1>

      <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-center'>
        {question.question}
      </h2>

      <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 p-7' >
        {[question.correct_answer, ...question.incorrect_answers]
          .sort(() => Math.random() - 0.5)
          .map((answer, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(answer === question.correct_answer)}
              whileHover={{ scale: 1.07, backgroundColor: '#DC2F02' }}
              className='bg-oranges-orange_100 p-7 w-72 h-18 text-whites-white_200 font-black text-2xl shadow-blacks-black_100 shadow-lg rounded-lg'
            >
              {answer}
            </motion.button>
          ))}
      </section>

      <div />
    </div>
  )
}
