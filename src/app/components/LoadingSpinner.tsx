import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  message?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "lg",
  message = "Loading...",
  fullScreen = true,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const containerClasses = fullScreen
    ? "min-h-screen bg-gray-50 flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {/* Spinner */}
        <div className="relative mb-4">
          <div className={`${sizeClasses[size]} animate-spin`}>
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-600 rounded-full animate-spin"></div>
          </div>

          {/* Pulse effect */}
          <div className={`absolute inset-0 ${sizeClasses[size]} animate-ping`}>
            <div className="w-full h-full bg-yellow-400 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Loading message */}
        <div className="space-y-2">
          <p className="text-gray-600 font-medium">{message}</p>

          {fullScreen && (
            <p className="text-sm text-gray-500">
              Please wait while we load the prize details...
            </p>
          )}
        </div>

        {/* Loading dots animation */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
