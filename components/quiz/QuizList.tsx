import { Quiz } from '@/types';
import { Fragment } from 'react';
import QuizCard from './QuizCard';

type QuizListProps = {
  quizList: Quiz[];
};

const QuizList: React.FC<QuizListProps> = ({ quizList }) => {
  if (quizList.length === 0) {
    return (
      <p className="text-gray-500">Lo sentimos, no hay nada que mostrar...</p>
    );
  }

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <h3 className="my-3 text-xl font-bold text-primary">
        ท้าทายความคิดของคุณ ทำเเบบฝึกหัด!
        </h3>
        <span className="text-sm text-gray-500">
        ผลลัพธ์ {quizList.length}
        </span>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {quizList.map((quiz) => (
          <QuizCard key={quiz._id.toString()} quiz={quiz} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuizList;
