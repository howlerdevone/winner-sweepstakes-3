import React from "react";
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ErrorMessageProps {
  message: string;
  title?: string;
  showRetry?: boolean;
  showHomeLink?: boolean;
  showBackLink?: boolean;
  onRetry?: () => void;
  fullScreen?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  title = "Oops! Something went wrong",
  showRetry = true,
  showHomeLink = true,
  showBackLink = false,
  onRetry,
  fullScreen = true,
}) => {
  const containerClasses = fullScreen
    ? "min-h-screen bg-gray-50 flex items-center justify-center px-4"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>

        {/* Error Content */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 leading-relaxed mb-6">{message}</p>

          {/* Additional helpful text */}
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
            <p>
              If this problem continues, please try refreshing the page or
              contact our support team for assistance.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {showRetry && (
            <button
              onClick={onRetry}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
          )}

          <div className="flex space-x-3">
            {showBackLink && (
              <button
                onClick={() => window.history.back()}
                className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            )}

            {showHomeLink && (
              <Link
                href="/"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Home className="w-4 h-4 mr-2" />
                Home Page
              </Link>
            )}
          </div>
        </div>

        {/* Error Code (optional) */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">Error Code: PRIZE_LOAD_ERROR</p>
        </div>
      </div>
    </div>
  );
};
