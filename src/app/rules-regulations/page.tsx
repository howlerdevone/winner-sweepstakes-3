// app/rules/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Scale,
  Shield,
  Users,
  Calendar,
  Trophy,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface RuleSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  content: React.ReactNode;
  important?: boolean;
}

export default function RulesAndRegulationsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "overview",
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const ruleSections: RuleSection[] = [
    {
      id: "overview",
      title: "Sweepstakes Overview",
      icon: Trophy,
      important: true,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to WinnerSweepstakes! These Official Rules govern all
            sweepstakes and contests offered on our platform. By participating
            in any of our sweepstakes, you agree to be bound by these terms and
            conditions.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-900 mb-2">
                  Free to Enter
                </h4>
                <p className="text-green-800 text-sm">
                  All our sweepstakes are completely free to enter. No purchase
                  is necessary to enter or win any prize. Making a purchase will
                  not increase your chances of winning.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility Requirements",
      icon: Users,
      important: true,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">General Eligibility</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Must be 18 years of age or older at time of entry (21+ for
              travel-related prizes)
            </li>
            <li>Must be a legal resident of the United States</li>
            <li>Must have a valid email address</li>
            <li>Limit one entry per person per sweepstakes</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-6">
            Ineligible Participants
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Employees of WinnerSweepstakes and their immediate family members
            </li>
            <li>
              Employees of prize sponsors and their immediate family members
            </li>
            <li>
              Residents of countries where sweepstakes are prohibited by law
            </li>
            <li>
              Individuals who have won a prize from WinnerSweepstakes in the
              past 12 months
            </li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> Verification of eligibility may be
                required. False information will result in disqualification.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "entry",
      title: "How to Enter",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Entry Methods</h4>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Online Entry:</strong> Complete the entry form on the
              specific sweepstakes page with your name, email address, and any
              other required information.
            </li>
            <li>
              <strong>Mail-in Entry:</strong> Send a 3x5 postcard with your
              name, address, phone number, email, and the name of the
              sweepstakes to:
              <div className="bg-gray-100 p-3 mt-2 rounded border text-sm font-mono">
                WinnerSweepstakes
                <br />
                [Sweepstakes Name] Entry
                <br />
                PO Box 12345
                <br />
                Your City, ST 12345
              </div>
            </li>
          </ol>

          <h4 className="font-semibold text-gray-900 mt-6">
            Entry Requirements
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All required fields must be completed accurately</li>
            <li>Only one entry per person per sweepstakes</li>
            <li>Duplicate entries will be disqualified</li>
            <li>Entries must be received by the specified deadline</li>
            <li>Late, incomplete, or illegible entries will not be accepted</li>
          </ul>
        </div>
      ),
    },
    {
      id: "selection",
      title: "Winner Selection Process",
      icon: Trophy,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Random Drawing</h4>
          <p className="text-gray-700">
            Winners will be selected through a random drawing conducted by an
            independent third party. All eligible entries received by the
            deadline will be included in the drawing.
          </p>

          <h4 className="font-semibold text-gray-900">Winner Notification</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Winners will be notified by email and phone within 5 business days
            </li>
            <li>Winners must respond within 7 days of notification</li>
            <li>Failure to respond may result in disqualification</li>
            <li>Verification of eligibility and identity is required</li>
          </ul>

          <h4 className="font-semibold text-gray-900">Prize Claim Process</h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Complete and return all required documentation within 14 days
            </li>
            <li>Provide valid government-issued photo ID</li>
            <li>
              Sign affidavit of eligibility and liability/publicity release
            </li>
            <li>Provide Social Security number for tax reporting purposes</li>
          </ol>
        </div>
      ),
    },
    {
      id: "prizes",
      title: "Prize Information",
      icon: Trophy,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Prize Details</h4>
          <p className="text-gray-700">
            Specific prize details, including approximate retail value (ARV),
            are listed on each individual sweepstakes page. All prizes are
            awarded "as is" with no warranty or guarantee.
          </p>

          <h4 className="font-semibold text-gray-900">Prize Restrictions</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Prizes are non-transferable and cannot be sold or exchanged</li>
            <li>No cash substitution except at sponsor's sole discretion</li>
            <li>Travel prizes subject to availability and blackout dates</li>
            <li>Winners are responsible for all taxes and fees</li>
            <li>Additional restrictions may apply to specific prizes</li>
          </ul>

          <h4 className="font-semibold text-gray-900">Tax Responsibilities</h4>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-800 text-sm">
                  <strong>Important Tax Information:</strong> Winners are
                  responsible for all federal, state, and local taxes on prizes.
                  Form 1099 will be issued for prizes valued at $600 or more.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      icon: Shield,
      important: true,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">
            Information Collection
          </h4>
          <p className="text-gray-700">
            We collect only the information necessary to administer the
            sweepstakes, including name, email address, phone number, and
            mailing address.
          </p>

          <h4 className="font-semibold text-gray-900">Information Use</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Prize fulfillment and winner notification</li>
            <li>Eligibility verification</li>
            <li>Tax reporting requirements</li>
            <li>Optional: Marketing communications (with your consent)</li>
          </ul>

          <h4 className="font-semibold text-gray-900">
            Information Protection
          </h4>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your
            personal information. We do not sell, rent, or share your
            information with third parties except as necessary to administer the
            sweepstakes.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              For complete details on our privacy practices, please review our
              <Link href="/privacy" className="underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "general",
      title: "General Terms & Conditions",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">
            Limitation of Liability
          </h4>
          <p className="text-gray-700">
            By entering, participants agree to release and hold harmless
            WinnerSweepstakes and its affiliates from any liability for
            injuries, losses, or damages of any kind resulting from
            participation in the sweepstakes or use of any prize.
          </p>

          <h4 className="font-semibold text-gray-900">Force Majeure</h4>
          <p className="text-gray-700">
            If the sweepstakes cannot be completed as planned due to
            circumstances beyond our control (including but not limited to
            natural disasters, technical failures, or legal restrictions), we
            reserve the right to modify, suspend, or cancel the sweepstakes.
          </p>

          <h4 className="font-semibold text-gray-900">Governing Law</h4>
          <p className="text-gray-700">
            These rules are governed by the laws of the United States and the
            state where WinnerSweepstakes is headquartered. Any disputes will be
            resolved through binding arbitration.
          </p>

          <h4 className="font-semibold text-gray-900">Rule Changes</h4>
          <p className="text-gray-700">
            We reserve the right to modify these rules at any time. Changes will
            be posted on this page with an updated effective date.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Sweepstakes
          </Link>

          <div className="flex items-center">
            <Scale className="w-8 h-8 text-yellow-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Official Rules & Regulations
              </h1>
              <p className="text-gray-600 mt-2">
                Complete terms and conditions for all WinnerSweepstakes contests
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated Notice */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-yellow-800">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="text-sm">
              <strong>Last Updated:</strong> January 1, 2025 |
              <strong className="ml-2">Effective Date:</strong> January 1, 2025
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {ruleSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <IconComponent
                    className={`w-5 h-5 mr-3 ${
                      section.important ? "text-yellow-600" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      section.important
                        ? "font-semibold text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rule Sections */}
        <div className="space-y-6">
          {ruleSections.map((section) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSections.includes(section.id);

            return (
              <div
                key={section.id}
                id={section.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  section.important ? "ring-2 ring-yellow-200" : ""
                }`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IconComponent
                        className={`w-6 h-6 mr-4 ${
                          section.important
                            ? "text-yellow-600"
                            : "text-gray-500"
                        }`}
                      />
                      <h2 className="text-xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                      {section.important && (
                        <span className="ml-3 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          Important
                        </span>
                      )}
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="pt-4">{section.content}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about these rules or need assistance with any
            sweepstakes, please contact us using the information below:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">support@winnersweepstakes.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">1-800-WINNER-1</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM EST</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Mail</h4>
                <p className="text-gray-600">
                  WinnerSweepstakes
                  <br />
                  123 Prize Lane
                  <br />
                  Winner City, ST 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-100 rounded-lg p-6 mt-8">
          <p className="text-sm text-gray-600 text-center">
            <strong>Important:</strong> Please read these rules carefully.
            Participation in any WinnerSweepstakes contest constitutes
            acceptance of these Official Rules. For prize-specific rules, please
            refer to the individual sweepstakes page.
          </p>
        </div>
      </div>
    </div>
  );
}
