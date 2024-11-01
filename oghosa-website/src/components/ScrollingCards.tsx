import { useRef } from 'react';
import '../styles/ScrollingCardsStyles.css';

const cardData = [
  { name: "Maria Mejia", review: "★★★★☆", description: "Oghosa has been a life saver for me. They are very accommodating.  They go above and beyond for my son. They have rushed to support him when I have an emergency.  I am very grateful and wish them nothing but the best." },
  { name: "Christine Hart", review: "★★★★★", description: "I have had Oghosa homecare for my son for about 7 1/2 years. They have been responsible, accommodating, loving and caring with Christopher. I would not want any other agency working with him. All of the staff is awesome but some are exceptional. Stephanie Reed, Miles McHugh, just to mention a couple who go above and beyond. I appreciate and thank all the staff that work with Chris. Don't know what I would do without them." },
  { name: "Christine Loiselle", review: "★★★★☆", description: "Oghosa provides transportation services to my son and they have done a wonderful job!  They are on time and reliable, which is so important to me.  My son loves his driver (Miles).  Thanks to Stephanie and the whole team!" },
  { name: "StayRaxxz Nike", review: "★★★★★", description: "They truly care about their clients." },
  { name: "Captain Pink", review: "★★★★☆", description: "Reliable and responsive. Great service!" }
];

const ScrollingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollToPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="scrolling-cards-container bg-gradient-to-r from-blue-950 via-slate-700 to-slate-500 justify-center shadow-lg rounded-lg p-4">
      <div ref={containerRef} className="card-container relative flex overflow-hidden w-full h-full">
        {cardData.map((card, index) => (
          <div key={index} className="cards flex-none w-full max-w-lg h-full flex flex-col items-center justify-center bg-white shadow-md border m-2 p-6 rounded-lg">
            <div className="image mb-2">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-2xl font-semibold">{card.name[0]}</span>
              </div>
            </div>
            <div className="name text-lg font-bold">{card.name}</div>
            <div className="stars text-yellow-400 text-xl">{card.review}</div>
            <p className="description text-sm text-gray-500 text-center mt-2">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="actions flex justify-center space-x-4 mt-4">
        <button onClick={scrollToPrev} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Prev</button>
        <button onClick={scrollToNext} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};

export default ScrollingCards;
