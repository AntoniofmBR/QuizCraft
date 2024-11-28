import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { QuizProvider } from './context/quizContext'

import { Home } from './pages/home'
import { Quiz } from './pages/quiz'
import { NotFound } from './pages/notFound'

export default function App() {
  return (
    <div className='app-container' >
      <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QuizProvider>
    </div>
  )
}