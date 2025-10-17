import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress >= 25 && animationPhase < 1) setAnimationPhase(1);
    if (progress >= 55 && animationPhase < 2) setAnimationPhase(2);
    if (progress >= 80 && animationPhase < 3) setAnimationPhase(3);
    if (progress >= 100 && animationPhase < 4) {
      setAnimationPhase(4);
      setTimeout(() => {
        setIsHiding(true);
      }, 600);
    }
  }, [progress, animationPhase]);

  return (
    <div
      className={`fixed z-[9999] top-0 left-0 w-screen h-screen bg-white pointer-events-none transition-transform duration-1000 delay-300 ${
        isHiding ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className={`absolute left-0 top-0 w-screen h-screen flex items-center justify-center transition-opacity duration-600 ${
          animationPhase >= 4 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-20 h-20 rounded-xl flex items-center justify-center">
            <span className="text-white text-3xl font-bold">L</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="relative overflow-hidden">
              <div
                className={`font-bold text-3xl text-gray-900 transition-transform duration-1000 delay-300 ${
                  animationPhase >= 1 ? 'translate-y-0' : 'translate-y-[120%]'
                }`}
              >
                LexPro
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div
                className={`text-lg text-gray-600 transition-transform duration-1000 delay-300 ${
                  animationPhase >= 1 ? 'translate-y-0' : 'translate-y-[120%]'
                }`}
              >
                Юридические услуги
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2">
        <div
          className={`absolute bottom-0 left-0 h-full bg-blue-600 rounded transition-all duration-600 ease-out ${
            animationPhase >= 4 ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
