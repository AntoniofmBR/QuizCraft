import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import errorIllustration from '../assets/png/error.png'

export function NotFound () {
  const navigate = useNavigate()

  function handleBackToHomePage() {
    navigate('/')
  }

  return (
    <main className='min-h-screen flex lg:flex-row md:flex-row sm:flex-col bg-blacks-black_200 text-whites-white_200 justify-center items-center lg:text-left md:text-left sm:text-center gap-10 p-12' >
      <section className='flex flex-col justify-between w-1/2 h-80' >
        <div className='flex flex-col gap-5' >
          <h1 className='text-3xl text-oranges-orange_100 font-black' >
            Ops! Looks like this page does not exists.
          </h1>

          <p className='text-xl text-whites-white_200 font-semibold' >
            You can back to home clicking in the button, for more details send a e-mail to us!
          </p>
        </div>

        <motion.button
          onClick={ handleBackToHomePage }
          whileHover={{ scale: 1.1, backgroundColor: '#DC2F02' }}
          className='bg-oranges-orange_100 p-4 w-72 h-18 text-whites-white_200 font-black text-2xl shadow-blacks-black_100 shadow-lg rounded-lg lg:self-start md:self-start sm:self-center mt-2'
        >
          Back to home
        </motion.button>
      </section>

      <section className='w-1/2' >
        <img
          src={ errorIllustration }
          alt="Error"
          className='h-auto w-auto'
        />
      </section>
      
    </main>
  )
}