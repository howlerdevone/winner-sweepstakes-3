"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Hooks
import { usePrizeData } from "@/app/hooks/usePrizeData";
import { useEntryForm } from "@/app/hooks/useEntryForm";

// Components - using barrel exports for cleaner imports
import {
  PrizeHero,
  PrizeDescription,
  PrizeDetails,
  OfficialRules,
  EntryForm,
  LoadingSpinner,
  ErrorMessage,
} from "@/app/components";

export default function PrizeDetailPage() {
  const params = useParams();
  const prizeId = params.prizeId as string;

  // Custom hooks for state management
  const { prizeData, loading, error } = usePrizeData(prizeId);
  const {
    formData,
    isSubmitting,
    submitResult,
    handleChange,
    handleSubmit,
    resetForm,
  } = useEntryForm(prizeId);

  // Loading state
  if (loading) {
    return (
      <LoadingSpinner
        size="xl"
        message="Loading prize details..."
        fullScreen={true}
      />
    );
  }

  // Error state
  if (error || !prizeData) {
    return (
      <ErrorMessage
        title="Prize Not Found"
        message={
          error ||
          "The prize you're looking for doesn't exist or has been removed."
        }
        showRetry={true}
        showHomeLink={true}
        showBackLink={true}
        onRetry={() => window.location.reload()}
        fullScreen={true}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to All Sweepstakes</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <PrizeHero prizeData={prizeData} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Prize Information */}
          <div className="lg:col-span-2 space-y-8">
            <PrizeDescription prizeData={prizeData} prizeId={prizeId} />
            <PrizeDetails prizeData={prizeData} />
            <OfficialRules prizeData={prizeData} />
          </div>

          {/* Right Column - Entry Form */}
          <div className="lg:col-span-1">
            <EntryForm
              formData={formData}
              isSubmitting={isSubmitting}
              submitResult={submitResult}
              onFormChange={handleChange}
              onFormSubmit={handleSubmit}
            />

            {/* Success state - additional actions */}
            {submitResult?.success && (
              <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What's Next?</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Check your email for confirmation</li>
                  <li>• Follow us on social media for updates</li>
                  <li>• Tell your friends about this sweepstakes</li>
                </ul>

                <div className="mt-4 space-y-2">
                  <button
                    onClick={resetForm}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Enter Another Sweepstakes
                  </button>

                  <Link
                    href="/"
                    className="block w-full text-center bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    View All Prizes
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Win {prizeData.title}?
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Don't miss your chance - enter now and you could be our next winner!
          </p>

          {!submitResult?.success && (
            <button
              onClick={() => {
                const formElement = document.querySelector("#entry-form");
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-yellow-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-50 transition-colors duration-200 transform hover:scale-105"
            >
              Enter Now - It's Free!
            </button>
          )}

          {submitResult?.success && (
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
              <p className="text-white font-medium text-lg">
                ✅ You're entered! Good luck!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
