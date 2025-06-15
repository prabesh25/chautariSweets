
// import React, { useEffect, useRef } from 'react';

// const InfiniteScroll = () => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const texts = [
//     "Free shipping on orders over Rs.500",
//     "New products added weekly!",
//     "Festive specials - 20% off select items",
//     "Subscribe to our newsletter for exclusive offers",
//     "Earn rewards with every purchase"
//   ];

//   useEffect(() => {
//     const container = containerRef.current;
//     const content = contentRef.current;
//     let animationFrameId;
//     let scrollPosition = 0;
//     const speed = 1;

//     // Double the content width for seamless looping
//     content.style.width = `${content.scrollWidth * 2}px`;

//     const scroll = () => {
//       scrollPosition += speed;
      
//       // Reset to start when we've scrolled the original content width
//       if (scrollPosition >= content.scrollWidth / 2) {
//         scrollPosition = 0;
//       }
      
//       container.scrollLeft = scrollPosition;
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     // Start the animation after a small delay to allow rendering
//     const startTimer = setTimeout(() => {
//       animationFrameId = requestAnimationFrame(scroll);
//     }, 100);

//     return () => {
//       clearTimeout(startTimer);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="bg-green-900 h-[50px] w-full overflow-x-hidden relative"
//     >
//       <div 
//         ref={contentRef}
//         className="absolute h-full flex items-center whitespace-nowrap"
//       >
//         {[...texts, ...texts].map((text, index) => (
//           <React.Fragment key={index}>
//             <span className="mx-8 text-lg font-medium text-gray-100">
//               {text}
//             </span>
//             {index < texts.length * 2 - 1 && (
//               <span className="text-amber-600">•</span>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfiniteScroll;























//////////////////////////////////////////
















import React, { useEffect, useRef, useState } from 'react';

const InfiniteScroll = () => {
  const contentRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const speed = 1;

  const texts = [
    "Free shipping on orders over Rs.500",
    "New products added weekly!",
    "Festive specials - 20% off select items",
    "Subscribe to our newsletter for exclusive offers",
    "Earn rewards with every purchase"
  ];

  useEffect(() => {
    let animationFrameId;
    let currentOffset = 0;

    const scroll = () => {
      if (!contentRef.current) return;

      currentOffset -= speed;
      const contentWidth = contentRef.current.scrollWidth / 2;

      if (Math.abs(currentOffset) >= contentWidth) {
        currentOffset = 0;
      }

      setOffset(currentOffset);
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-green-900 h-[50px] w-full overflow-hidden relative">
      <div
        ref={contentRef}
        className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap"
        style={{
          transform: `translateX(${offset}px)`,
          willChange: 'transform',
        }}
      >
        {[...texts, ...texts].map((text, index) => (
          <React.Fragment key={index}>
            <span className="mx-8 text-lg font-medium text-gray-100">
              {text}
            </span>
            {index < texts.length * 2 - 1 && (
              <span className="text-amber-600">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
