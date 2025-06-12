const Journey = () => {
  return (
    <div className="px-5 ">
      <div className="relative rounded-4xl overflow-hidden mt-20 w-full p-4 min-h-[550px] bg-emerald-300">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/since.png"
          alt="Traditional Namkeen"
        />

        <div className="absolute flex  items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-md flex flex-col justify-between text-white">
              <div>
                <h2 className=" font-bold mb-4">SINCE 2011</h2>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  A Journey Of 70 Years
                </h1>
              </div>
              <div className="">
                <p className="text-xl md:mt-40 mt-50 md:text-xl lg:text-2xl mb-8">
                  With over six decades of experiencee, we bring authentic
                  flavors and tradition to your home.{" "}
                </p>
                <button className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
