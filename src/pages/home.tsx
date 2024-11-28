import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/png/logo_home.png'
import { useQuiz } from '../context/quizContext'

export function Home () {
  const navigate = useNavigate()
  const { resetQuiz } = useQuiz()

  function startQuiz() {
    resetQuiz()
    navigate("/quiz");
  }

  return (
    <main className='min-h-screen flex flex-col bg-blacks-black_200 text-whites-white_200 items-center gap-10 p-7 text-center' >
      <motion.img
       src={logo}
       alt='logo'
       whileHover={{ scale: 1.1 }}
       className='h-64 w-64'
      />
      
      <h1 className='text-4xl font-black' >
        Show your genius💡
      </h1>

      <p className='text-2xl font-semibold' >
        Test your knowledge with this question answering game <br/>
        <span className='text-oranges-orange_100 ml-1' >
          each question is a door to a new world of curiosities
        </span>
      </p>

      <div className='flex flex-col gap-2 items-center justify-center' >
        <h3 className='font-semibold text-2xl' >
          Are you ready for this challenge?
        </h3>
        <h4 className='font-bold text-xl' >
          Start the quiz now and discover!
        </h4>
      </div>

      <motion.button
        onClick={ startQuiz }
        whileHover={{ scale: 1.1, backgroundColor: '#DC2F02' }}
        className='bg-oranges-orange_100 p-4 w-72 h-18 text-whites-white_200 font-black text-2xl shadow-blacks-black_100 shadow-lg rounded-lg'
      >
        Start
      </motion.button>
    </main>
  )
}