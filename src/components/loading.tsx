import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const phrases = [
  'Nervous?',
  'Are you a genius?',
  'Do you studied?',
  'Ready to test your knowledge?',
  'Let’s see how much you know!',
  'The clock is ticking...',
  'Can you answer them all?',
  'Stay calm, it’s just a quiz!',
  'Don’t rush, take your time!',
  'You got this!',
  'Let’s challenge your brain!',
  'It’s time to shine!',
  'How many can you get right?',
  'Think carefully before answering!',
  'Let’s test your limits!',
  'Are you sure about that answer?',
  'It’s your moment to show off!',
  'The quiz is waiting for you!',
  'Let’s find out if you’re a pro!',
  'What’s your score going to be?'
]

export function Loading () {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className='min-h-screen bg-blacks-black_200 text-whites-white_200 flex flex-col items-center justify-center gap-24 text-center'>
      <div className='flex flex-col gap-2 justify-center items-center' >
        <h1 className='text-5xl  font-black' >
          Loading questions...
        </h1>

        <motion.h3
          key={currentPhraseIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-oranges-orange_100"
        >
          {phrases[currentPhraseIndex]}
        </motion.h3>
      </div>

      <motion.div
        className='w-16 h-16 border-4 border-t-4 border-b-slate-50 border-oranges-orange_100 rounded-full'
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </main>
  )
}