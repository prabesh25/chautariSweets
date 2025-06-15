// // import React from "react";

// // const ExploreSection = () => {
// //   const exploreItems = [
// //     { image: "/images/0102.png" },
// //     { image: "/images/0103.png" },
// //     { image: "/images/0105.png" },
// //     { image: "/images/0107.png" },
// //   ];

// //   return (
// //     <div className="w-full flex flex-col items-center px-4 py-8">
// //       <div className="w-full max-w-2xl text-center mb-8">
// //         <h4 className="text-lg text-gray-600 mb-2">A Sweet Tradition collections</h4>
// //         <p className="text-gray-600">
// //          Exquisitely packaged to benefit every occasion, we celebrate your pride, happiness and relationships with absolute grandeur.</p>
// //       </div>

// //       <div className="w-full flex justify-center">
// //         <div className="flex bg-blue-300  overflow-x-auto no-scrollbar pb-4 space-x-4 w-full max-w-full">

// //           <div className="flex-shrink-0    md:w-[calc((100%-1024px)/2)]"></div>

// //           {exploreItems.map((item) => (
// //             <div
// //               key={item.name}
// //               className="relative no-scrollbar w-70 h-80 overflow-hidden rounded-lg  group flex-shrink-0"
// //             >
// //               <img
// //                 src={item.image}
// //                 alt={item.name}
// //                 className="w-full h-full object-cover"
// //               />
// //               <button className="absolute cursor-pointer hover:bg-gray-200 bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-emerald-700 font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 Explore
// //               </button>
// //             </div>
// //           ))}

// //           <div className="flex-shrink-0 w-4 md:w-[calc((100%-1024px)/2)]"></div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExploreSection;

// import React from "react";

// const ExploreSection = () => {
//   const exploreItems = [
//     { image: "/images/0102.png", name: "item1" },
//     { image: "/images/0103.png", name: "item2" },
//     { image: "/images/0105.png", name: "item3" },
//     { image: "/images/0107.png", name: "item4" },
//   ];

//   return (
//     <div className="w-full flex flex-col items-center px-4 py-8">
//       {/* Heading */}
//       <div className="w-full text-center mb-8">
//         <h4 className="text-lg text-gray-600 mb-2">
//           A Sweet Tradition Collections
//         </h4>
//         <p className="text-gray-600">
//           Exquisitely packaged to benefit every occasion, we celebrate your
//           pride, happiness and relationships with absolute grandeur.
//         </p>
//       </div>

//       {/* Scrollable Image Cards */}
//       <div className="w-full  flex justify-between items-center mx-auto no-scrollbar">
    
//         <div className="flex gap-2 pb-4 px-4">
//           {exploreItems.map((item) => (
//             <div
//               key={item.name}
//               className="relative w-[280px] h-80 overflow-hidden rounded-lg group flex-shrink-0"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover"
//               />
//               <button className="absolute cursor-pointer hover:bg-gray-200 bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-emerald-700 font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 Explore
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreSection;

























import React from "react";

const ExploreSection = () => {
  const exploreItems = [
    { image: "/images/01.jpg", name: "item1" },
    { image: "/images/02.png", name: "item2" },
    { image: "/images/03.png", name: "item3" },
    { image: "/images/0107.png", name: "item4" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 py-8">
      {/* Heading */}
      <div className="w-full max-w-2xl text-center mb-8">
        <h4 className="text-3xl font-bold text-gray-600 mb-2">
          A Sweet Tradition Collections
        </h4>
        <p className="text-gray-600">
          Exquisitely packaged to benefit every occasion, we celebrate your
          pride, happiness and relationships with absolute grandeur.
        </p>
      </div>

      {/* Scrollable Image Cards - FIXED SECTION */}
      <div className="w-full">
        <div className="flex justify-center overflow-x-auto no-scrollbar pb-4">
          <div className="flex gap-4 px-4">
            {exploreItems.map((item) => (
              <div
                key={item.name}
                className="relative w-[280px] h-80 overflow-hidden rounded-lg group flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute cursor-pointer hover:bg-gray-200 bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-emerald-700 font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;