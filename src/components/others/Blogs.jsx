// // import React from 'react';

// // const BlogSection = () => {
// //   const blogs = [
// //     {
// //       title: "Belian Summdalu: Traditional Indian Sweet with a Modern Twist",
// //     },
// //     {
// //       title: "Satisfy your sweet tooth: Unveiling G.Pulla Reddy-Hyderabad Top Most Sweet Shop",
// //     },
// //     {
// //       title: "G.Pulla Reddy Sweets – Experience Tradition With Every Bite",
// //     },
// //   ];

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //       <div className="text-center mb-10">
// //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Blogs</h2>
// //       </div>
      
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {blogs.map((blog, index) => (
// //           <div 
// //             key={index} 
// //             className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
// //           >
// //             <div className="p-6 flex-grow">
// //               <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-4">
// //                 {blog.title}
// //               </h3>
// //             </div>
// //             <div className="px-6 pb-6">
// //               <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200">
// //                 READ MORE
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogSection;
// // src/components/BlogSection.jsx
// import React from 'react';

// const BlogSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Latest Blogs</h1>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Blog Card 1 */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
//               Belian Summdalu: Traditional Indian Sweet with a Modern Twist
//             </h3>
//             <div className="mt-8">
//               <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200">
//                 READ MORE
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Blog Card 2 */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
//               Satisfy your sweet tooth: Unveiling G.Pulla Reddy-Hyderabad Top Most Sweet Shop
//             </h3>
//             <div className="mt-8">
//               <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200">
//                 READ MORE
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Blog Card 3 */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
//               G.Pulla Reddy Sweets – Experience Tradition With Every Bite
//             </h3>
//             <div className="mt-8">
//               <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200">
//                 READ MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSection;

// src/components/BlogSection.jsx
import React from 'react';
// import image1 from '../assets/blog1.jpg'; // Replace with your actual image paths
// import image2 from '../assets/blog2.jpg';
// import image3 from '../assets/blog3.jpg';

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Latest Blogs</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="h-48 overflow-hidden">
            <img 
            //   src={image1}  
              alt="Belian Summdalu" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
              Belian Summdalu: Traditional Indian Sweet with a Modern Twist
            </h3>
            <div className="mt-6">
              <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        
        {/* Blog Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="h-48 overflow-hidden">
            <img 
            //   src={image2} 
              alt="G.Pulla Reddy Sweet Shop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
              Satisfy your sweet tooth: Unveiling G.Pulla Reddy-Hyderabad Top Most Sweet Shop
            </h3>
            <div className="mt-6">
              <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        
        {/* Blog Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="h-48 overflow-hidden">
            <img 
            //   src={image3} 
              alt="G.Pulla Reddy Sweets" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
              G.Pulla Reddy Sweets – Experience Tradition With Every Bite
            </h3>
            <div className="mt-6">
              <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;