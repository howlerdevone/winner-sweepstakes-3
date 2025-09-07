import React from "react";
import { Mail, User, Phone, Gift } from "lucide-react";
import { FormData } from "@/app/types/prize";

interface EntryFormProps {
  formData: FormData;
  isSubmitting: boolean;
  submitResult: { success: boolean; message: string } | null;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: React.FormEvent) => void;
}

export const EntryForm: React.FC<EntryFormProps> = ({
  formData,
  isSubmitting,
  submitResult,
  onFormChange,
  onFormSubmit,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
      <div className="text-center mb-6">
        <Gift className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter to Win</h3>
        <p className="text-gray-600">
          Fill out the form below for your chance to win!
        </p>
      </div>

      {submitResult && (
        <div
          className={`mb-4 p-4 rounded-lg ${
            submitResult.success
              ? "bg-green-50 border border-green-200 text-green-700"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}
        >
          {submitResult.message}
        </div>
      )}

      <form onSubmit={onFormSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={onFormChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={onFormChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={onFormChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={onFormChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none"
        >
          {isSubmitting ? "SUBMITTING..." : "ENTER NOW"}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By entering, you agree to our Terms & Conditions and Privacy Policy.
          No purchase necessary. Must be 18+ to enter.
        </p>
      </form>
    </div>
  );
};
