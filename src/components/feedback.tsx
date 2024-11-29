import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import logo from '../assets/png/logo_short.png'
import { useQuiz } from '../context/quizContext';

interface FeedbackProps {
  score: number;
  totalQuestions: number;
}

export function Feedback({ score, totalQuestions }: FeedbackProps) {
  const navigate = useNavigate()
  const { resetQuiz } = useQuiz()
  const percentage = ( score / totalQuestions ) * 100

  let rank = ''
  let description = ''

  if (percentage >= 90) {
    rank = "Genius"
    description = 'You are a brilliant mind! Master any challenge. 🧠✨'
  } else if (percentage >= 75) {
    rank = "Intelligence"
    description = 'Impressive! Your knowledge is incredible. 🎓🌟'
  } else if (percentage >= 50) {
    rank = "Creative"
    description = 'Good job! Keep learning and improving. 📚💡'
  } else if (percentage >= 25) {
    rank = "Curious"
    description = 'A good start! Explore more and be surprised. 🔍🌈'
  } else if (percentage <= 24) {
    rank = "Beginner"
    description = 'There is still a lot to learn! Persist in the challenge. 🚀💪'
  }

  function startNewQuiz() {
    resetQuiz()
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-blacks-black_200 text-whites-white_200 flex flex-col items-center justify-between text-center p-7">
      <motion.img
        src={logo}
        alt='Logo'
        whileHover={{ scale: 1.1 }}
       className='max-h-28 h-auto w-auto'
      />

      <div className='flex flex-col gap-12' >
        <motion.h2
          className="text-5xl text-oranges-orange_100 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Final Result!
        </motion.h2>

        <section className='flex flex-col gap-4' >
          <motion.h2
            className="text-4xl text-whites-white_200 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            { rank }
          </motion.h2>

          <motion.p
            className="lg:text-xl md:text-xl sm:text-base text-whites-white_200 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            { description }
          </motion.p>
        </section>

        <motion.p
          className="text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your score: <span className='text-oranges-orange_100' > {score} / {totalQuestions} </span>
        </motion.p>
      </div>



      <motion.div
        className="flex flex-col items-center justify-center text-lg p-7 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.h2
          className="text-2xl text-whites-white_200 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Would you like start a new quiz?
        </motion.h2>

        <motion.button
        onClick={ startNewQuiz }
        whileHover={{ scale: 1.1, backgroundColor: '#DC2F02' }}
        className='bg-oranges-orange_100 p-4 w-64 h-18 text-whites-white_200 font-black text-2xl shadow-blacks-black_100 shadow-lg rounded-lg'
      >
        Start a new quiz
      </motion.button>
      </motion.div>
    </div>
  );
}
