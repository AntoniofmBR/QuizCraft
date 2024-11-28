type ProgressBarProps = {
  currentQuestion: number;
  totalQuestions: number;
};

export function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
  const percentage = Math.round(( currentQuestion / totalQuestions ) * 100)

  return (
    <div className='flex flex-col gap-1 w-full justify-center items-center' >
      <p className='text-left w-3/4' >
        { percentage }%
      </p>
      <div className="w-3/4 bg-whites-white_200 h-4 rounded-lg">
      <div
        className="bg-oranges-orange_100 h-4 rounded-lg transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
      </div>
    </div>
  )
}