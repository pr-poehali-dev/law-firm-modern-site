import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

export default function AnimatedHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop" 
          className="absolute object-cover w-full h-[140vh] top-0 left-0 z-[1] rounded-lg brightness-75" 
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          alt="Background"
        />
        
        <div className="relative z-[2] pt-48 pb-32 px-12">
          <h1 className="font-bold text-8xl leading-[0.92] tracking-tight text-white mb-24 w-3/4">
            Защита прав.<br />
            Надёжность.<br />
            Результат.
          </h1>
          
          <div className="mt-32 px-12">
            <div className="border-t border-gray-400 w-full mb-8"></div>
            <div className="flex justify-between">
              <span className="text-white text-xl">О компании</span>
              <span className="text-white text-xl">1.0</span>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-3 gap-12 px-12">
            <div>
              <div className="text-white text-7xl font-bold mb-2">15+</div>
              <div className="text-gray-300">лет опыта работы</div>
            </div>
            <div>
              <div className="text-white text-7xl font-bold mb-2">500+</div>
              <div className="text-gray-300">выигранных дел</div>
            </div>
            <div>
              <div className="text-white text-7xl font-bold mb-2">98%</div>
              <div className="text-gray-300">успешных кейсов</div>
            </div>
          </div>

          <div className="mt-32 flex justify-end items-center gap-4 px-12">
            <span className="text-white">Листайте вниз</span>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
              <Icon name="ChevronDown" className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
