const HerosSection = () => {
  return (
    <div className="px-3">
      <div className="relative rounded-3xl overflow-hidden w-full p-4 min-h-[550px] bg-emerald-300">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/herroImg.png"
          alt="Traditional Namkeen"
        />

        <div className="absolute inset-0 flex items-end md:items-center pb-8 md:pb-0">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto md:ml-40 text-white text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Bellam Kaju
              </h1>
              <p className="md:text-xl lg:text-2xl mb-8">
                A Delightful Blend of Sweetness and Crunch!
              </p>
              <button className="hover:underline cursor-pointer font-bold rounded-full text-lg transition duration-300 transform hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerosSection;

