// // import React from 'react';

// // const TraditionsSection = () => {
// //   const traditions = [
// //     {
// //       title: "Traditional",
// //       image: "/images/traditional.jpg",
// //       description: "From humble beginnings as a small town to a beloved household home. We have been creating traditional Indian delicacies with love and expertise for generations. Each sweet feels a story of heritage, flavor, and sweet memories shared across families."
// //     },
// //     {
// //       title: "Purity",
// //       image: "/images/purity.jpg",
// //       description: "Crafted with purity and tradition, our sweets are made with our finest edible ghee, ensuring each bite is a taste of pure bliss."
// //     },
// //     {
// //       title: "Social Responsibility",
// //       image: "/images/social-responsibility.jpg",
// //       description: "We not only delight taste buds but also nurture minds. By establishing schools and colleges for students, we embody a commitment to uplift the community and pave the way for a brighter future."
// //     }
// //   ];

// //   return (
// //     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-3xl font-bold text-center mb-12">Our Sweet Traditions</h2>
        
// //         <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
// //           {traditions.map((tradition, index) => (
// //             <div 
// //               key={index}
// //               className="flex-1 flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
// //             >
// //               {/* Image Section */}
// //               <div className="h-48 sm:h-56 md:h-48 lg:h-64 w-full overflow-hidden">
// //                 <img
// //                   src={tradition.image}
// //                   alt={tradition.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
              
// //               {/* Content Section */}
// //               <div className="p-6 flex flex-col flex-grow">
// //                 <h3 className="text-xl font-bold mb-3">{tradition.title}</h3>
// //                 <p className="text-gray-600 flex-grow">{tradition.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TraditionsSection;




// import React from 'react';

// const TraditionsSection = () => {
//   const traditions = [
//     {
//       title: "Traditional",
//       image: "/images/traditional.jpg",
//       description: "From humble beginnings as a small town to a beloved household home. We have been creating traditional Indian delicacies with love and expertise for generations. Each sweet feels a story of heritage, flavor, and sweet memories shared across families."
//     },
//     {
//       title: "Purity",
//       image: "/images/purity.jpg",
//       description: "Crafted with purity and tradition, our sweets are made with our finest edible ghee, ensuring each bite is a taste of pure bliss."
//     },
//     {
//       title: "Social Responsibility",
//       image: "/images/social-responsibility.jpg",
//       description: "We not only delight taste buds but also nurture minds. By establishing schools and colleges for students, we embody a commitment to uplift the community and pave the way for a brighter future."
//     }
//   ];

//   return (
//     <div className="bg-[#f8f5f0] py-16 px-4 sm:px-6 lg:px-8"> {/* Cream background */}
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <h2 className="text-3xl font-serif font-bold text-[#5e2d1b] text-center mb-12"> {/* Brown text */}
//           Our Sweet Traditions
//         </h2>
        
//         {/* Three Column Layout */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {traditions.map((tradition, index) => (
//             <div 
//               key={index}
//               className="flex-1 flex flex-col bg-white rounded-lg overflow-hidden shadow-sm border border-[#e8d9c5]" {/* Light brown border */}
//             >
//               {/* Image Section */}
//               <div className="h-64 w-full overflow-hidden">
//                 <img
//                   src={tradition.image}
//                   alt={tradition.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Content Section */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-serif font-bold text-[#5e2d1b] mb-4"> {/* Brown title */}
//                   {tradition.title}
//                 </h3>
//                 <p className="text-[#6b5a4a] font-sans leading-relaxed"> {/* Dark brown text */}
//                   {tradition.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TraditionsSection;




import React from 'react';

const TraditionsSection = () => {
  const traditions = [
    {
      title: "Traditional",
      image: "/images/traditional.jpg",
      description: "From humble beginnings as a small town to a beloved household home. We have been creating traditional Indian delicacies with love and expertise for generations. Each sweet feels a story of heritage, flavor, and sweet memories shared across families."
    },
    {
      title: "Purity",
      image: "/images/purity.jpg",
      description: "Crafted with purity and tradition, our sweets are made with our finest edible ghee, ensuring each bite is a taste of pure bliss."
    },
    {
      title: "Social Responsibility",
      image: "/images/social-responsibility.jpg",
      description: "We not only delight taste buds but also nurture minds. By establishing schools and colleges for students, we embody a commitment to uplift the community and pave the way for a brighter future."
    }
  ];

  return (
    <div className="bg-[#f8f5f0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-[#5e2d1b] text-center mb-12">
          Our Sweet Traditions
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {traditions.map((tradition, index) => (
            <div 
              key={index}
              className="flex-1 flex flex-col bg-white rounded-lg overflow-hidden shadow-sm border border-[#e8d9c5]"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={tradition.image}
                  alt={tradition.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-[#5e2d1b] mb-4">
                  {tradition.title}
                </h3>
                <p className="text-[#6b5a4a] font-sans leading-relaxed">
                  {tradition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraditionsSection;