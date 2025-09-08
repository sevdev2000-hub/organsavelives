import { useState, useEffect } from 'react';
import { Award, CheckCircle, XCircle, ArrowRight, Download, RefreshCw } from 'lucide-react';
import { QuizQuestions, sampleQuizQuestions } from "./QuizQuestions.ts";

interface QuizComponentProps {
    questionCount?: number; // Number of questions to sample (default: 10)
}

const QuizComponent = ({ questionCount = 5 }: QuizComponentProps) => {
    const [sampledQuestions, setSampledQuestions] = useState<typeof QuizQuestions>([]);
    const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

    // Initialize sampled questions on component mount
    useEffect(() => {
        const questions = sampleQuizQuestions(questionCount);
        setSampledQuestions(questions);
        setUserAnswers(new Array(questions.length).fill(null));
    }, [questionCount]);

    const handleQuizAnswer = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        const isCorrect = answerIndex === sampledQuestions[currentQuizQuestion].correct;
        setLastAnswerCorrect(isCorrect);
        setShowFeedback(true);

        // Update user answers array
        const newAnswers = [...userAnswers];
        newAnswers[currentQuizQuestion] = answerIndex;
        setUserAnswers(newAnswers);

        // Only increment score if this is the first time answering this question correctly
        if (isCorrect) {
            setQuizScore(quizScore + 1);
        }
    };

    const continueQuiz = () => {
        if (currentQuizQuestion < sampledQuestions.length - 1) {
            setCurrentQuizQuestion(currentQuizQuestion + 1);
            setShowFeedback(false);
            setSelectedAnswer(null);
        } else {
            setQuizComplete(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuizQuestion(0);
        setQuizScore(0);
        setQuizComplete(false);
        setShowFeedback(false);
        setLastAnswerCorrect(false);
        setSelectedAnswer(null);
        setUserAnswers(new Array(sampledQuestions.length).fill(null));
    };

    const generateNewQuiz = () => {
        const newQuestions = sampleQuizQuestions(questionCount);
        setSampledQuestions(newQuestions);
        setCurrentQuizQuestion(0);
        setQuizScore(0);
        setQuizComplete(false);
        setShowFeedback(false);
        setLastAnswerCorrect(false);
        setSelectedAnswer(null);
        setUserAnswers(new Array(newQuestions.length).fill(null));
    };

    const downloadQuizResults = () => {
        const results = sampledQuestions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = question.correct;
            const isCorrect = userAnswer === correctAnswer;

            return {
                question: question.question,
                userAnswer: userAnswer !== null ? question.options[userAnswer] : 'Not answered',
                correctAnswer: question.options[correctAnswer],
                isCorrect: isCorrect,
                explanation: question.explanation
            };
        });

        const content = `Organ Donation Quiz Results
Score: ${quizScore}/${sampledQuestions.length} (${Math.round((quizScore / sampledQuestions.length) * 100)}%)
${results.map((result, index) => `
Question ${index + 1}: ${result.question}
Your Answer: ${result.userAnswer}
Correct Answer: ${result.correctAnswer}
Result: ${result.isCorrect ? 'Correct' : 'Incorrect'}
Explanation: ${result.explanation}
${'='.repeat(50)}
`).join('')}`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'organ-donation-quiz-results.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Don't render until we have sampled questions
    if (sampledQuestions.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading quiz questions...</p>
            </div>
        );
    }

    if (quizComplete) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6">
                    <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
                    <p className="text-lg text-gray-600">You scored {quizScore} out of {sampledQuestions.length}</p>
                    <div className="mt-4">
                        <div className="text-sm text-gray-500">
                            Accuracy: {Math.round((quizScore / sampledQuestions.length) * 100)}%
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={resetQuiz}
                        className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors"
                    >
                        Retake Same Quiz
                    </button>
                    <button
                        onClick={generateNewQuiz}
                        className="flex items-center justify-center space-x-2 bg-purple-500 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-600 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        <span>New Random Quiz</span>
                    </button>
                    <button
                        onClick={downloadQuizResults}
                        className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download Results</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Fixed Header */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">
                        Question {currentQuizQuestion + 1} of {sampledQuestions.length}
                    </span>
                    <span className="text-sm text-gray-500">Score: {quizScore}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{width: `${((currentQuizQuestion + (showFeedback ? 1 : 0)) / sampledQuestions.length) * 100}%`}}
                    ></div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {sampledQuestions[currentQuizQuestion].question}
                </h3>

                {!showFeedback ? (
                    <div className="space-y-4">
                        {sampledQuestions[currentQuizQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleQuizAnswer(index)}
                                className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Show all options with visual feedback */}
                        <div className="space-y-3">
                            {sampledQuestions[currentQuizQuestion].options.map((option, index) => {
                                let className = "w-full text-left p-4 border rounded-lg ";
                                let icon = null;

                                if (index === sampledQuestions[currentQuizQuestion].correct) {
                                    className += "border-green-500 bg-green-50 text-green-900";
                                    icon = <CheckCircle className="w-5 h-5 text-green-600" />;
                                } else if (index === selectedAnswer) {
                                    className += "border-red-500 bg-red-50 text-red-900";
                                    icon = <XCircle className="w-5 h-5 text-red-600" />;
                                } else {
                                    className += "border-gray-200 bg-gray-50 text-gray-600";
                                }

                                return (
                                    <div key={index} className={className}>
                                        <div className="flex items-center justify-between">
                                            <span>{option}</span>
                                            {icon}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Feedback message with inline Continue button */}
                        <div className={`p-4 rounded-lg ${lastAnswerCorrect ? 'bg-green-50 border-l-4 border-green-400' : 'bg-red-50 border-l-4 border-red-400'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    {lastAnswerCorrect ? (
                                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                                    ) : (
                                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                                    )}
                                    <span className={`font-semibold ${lastAnswerCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                        {lastAnswerCorrect ? 'Correct!' : 'Incorrect'}
                                    </span>
                                </div>
                                <button
                                    onClick={continueQuiz}
                                    className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 border border-gray-200"
                                >
                                    <span>{currentQuizQuestion < sampledQuestions.length - 1 ? 'Continue' : 'Finish Quiz'}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <p className={`text-sm ${lastAnswerCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                {sampledQuestions[currentQuizQuestion].explanation}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizComponent;