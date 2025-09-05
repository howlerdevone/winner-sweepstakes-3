import React from "react";

export default function PrizeShowcase() {
  const prizes = [
    {
      id: 1,
      category: "WINNERSWEEPSTAKES",
      title: "Ultimate Home Theater",
      description:
        "ENTER NOW FOR A CHANCE TO WIN A STATE OF THE ART HOME THEATER LIKE NO...",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      category: "WINNERSWEEPSTAKES",
      title: "Trip To Paradise",
      description:
        "ENTER NOW FOR A CHANCE TO WIN A 4-DAY/3-NIGHT PARADISE GETAWAY! Choose from any of these...",
      image:
        "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      category: "WINNERSWEEPSTAKES",
      title: "Win $1,125 Million",
      description:
        "ENTER NOW FOR A CHANCE TO WIN THE ULTIMATE CASH PRIZE! Life-changing money that could...",
      image:
        "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      category: "WINNERSWEEPSTAKES",
      title: "Europe Extravaganza",
      description:
        "ENTER NOW FOR A CHANCE TO WIN AN INCREDIBLE EUROPEAN ADVENTURE! Visit the most beautiful...",
      image:
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              WIN THESE AMAZING PRIZES
            </h2>
            <p className="text-lg text-gray-600 hidden md:block">
              Enter today and win!
            </p>
          </div>
          <p className="text-lg text-gray-600 md:hidden mb-8">
            Enter today and win!
          </p>
        </div>

        <div className="space-y-12">
          {prizes.map((prize, index) => (
            <div
              key={prize.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2">
                  <div
                    className="h-64 lg:h-80 bg-cover bg-center"
                    style={{ backgroundImage: `url(${prize.image})` }}
                  />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                      {prize.category}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {prize.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {prize.description}
                  </p>

                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg self-start">
                    ENTER NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
            VIEW ALL SWEEPSTAKES
          </button>
        </div>
      </div>
    </section>
  );
}
