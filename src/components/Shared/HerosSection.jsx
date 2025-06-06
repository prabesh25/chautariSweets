
const HerosSection = () => {
  return (
    <div>
    <div className="relative w-full p-4 min-h-[550px] bg-emerald-300">
      {/* Full-width background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/heroImg.png"
        alt="Traditional Namkeen"
      />

      {/* Text overlay - left middle */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-md text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Namkeen
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8">
              Experience The Authentic Taste Of Tradition!
            </p>
            <button className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
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