import React from "react";

const VidSection = () => {
  return (
    <section className="px-4 py-8 mt-15">
      <div className="text-center mb-8">
        <h4 className="text-lg mb-2 text-gray-600">Taste the legacy today!</h4>
        <p className="text-gray-600">
          Since 1948, our Indian brand has been delighting customers with 
          exquisite mithai,<br /> spice powders, namkeens, and tangy pickles.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex no-scrollbar overflow-x-auto space-x-4 pb-4 px-4 items-center max-w-full">
          <div className="flex no-scrollbar overflow-x-auto space-x-4 pb-4">
            <video
              className="w-60 h-90 flex-shrink-0 rounded-3xl  object-cover"
              src="/videos/vid2.mp4"
              autoPlay
              muted
              loop
            />
            <video
              className="w-60 h-90 flex-shrink-0 rounded-3xl  object-cover"
              src="/videos/vid3.mp4"
              autoPlay
              muted
              loop
            />
            <video
              className="w-60 h-90 flex-shrink-0 rounded-3xl  object-cover"
              src="/videos/vid1.mp4"
              autoPlay
              muted
              loop
            />
            <video
              className="w-60 h-90 flex-shrink-0 rounded-3xl  object-cover"
              src="/videos/vid2.mp4"
              autoPlay
              muted
              loop
            />
            <video
              className="w-60 h-90 flex-shrink-0 rounded-3xl  object-cover"
              src="/videos/vid3.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VidSection;



