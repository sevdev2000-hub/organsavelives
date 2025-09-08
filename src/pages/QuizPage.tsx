import { ArrowLeft, Brain } from 'lucide-react';
import QuizComponent from '../components/quiz/QuizComponent';

const QuizPage = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back</span>
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">Organ Donation Quiz</h1>
                        <div className="w-16"></div> {/* Spacer for centering */}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Introduction Section */}
                <div className="text-center mb-12">
                    <div className="mb-6">
                        <Brain className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    </div>

                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        How much do you really know about organ donation? Take this quick quiz to discover the facts,
                        challenge common misconceptions, and learn how you can make a difference.
                    </p>

                </div>

                {/* Quiz Component */}
                <div className="max-w-3xl mx-auto">
                    <QuizComponent />
                </div>
            </div>
        </div>
    );
};

export default QuizPage;