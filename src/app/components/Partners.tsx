import React from "react";
import ExternalImage from "./ExternalImage";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Image Approach - Current Method */}
        <div className="flex justify-center">
          <ExternalImage
            src="/partners.png"
            alt="Featured in Reader's Digest, Golf Digest, Architectural Digest, Cabela's, HGTV, and other leading publications"
            priority={true}
            className="max-w-5xl h-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}
