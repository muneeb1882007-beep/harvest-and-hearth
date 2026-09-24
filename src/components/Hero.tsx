import { FC } from 'react';
import { Calendar, ShoppingBag, Star, Flame, Award, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenReservation, onOpenMenu }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-950/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hero Copy */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>100% Sourced From 18 Local Organic Family Farms</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-amber-50 leading-[1.1] tracking-tight">
            Wholesome Flavors <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 font-normal italic">
              Straight From Local Soils
            </span>
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Slow-cooked hearth stews, pasture-raised heritage meats, and freshly baked wild yeast breads crafted with ingredients harvested within 30 miles of our kitchen.
          </p>

          {/* Action CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-amber-600/20 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table</span>
            </button>

            <a
              href="#menu"
              onClick={onOpenMenu}
              className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs font-bold uppercase tracking-widest rounded-xl transition text-center flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Order Online Pickup</span>
            </a>
          </div>

          {/* Trust Badges Strip */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-stone-800/80 text-left">
            <div>
              <div className="flex items-center space-x-1 text-amber-400 text-base font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9 / 5</span>
              </div>
              <span className="text-xs text-stone-400 font-medium">850+ Google Reviews</span>
            </div>

            <div>
              <div className="flex items-center space-x-1 text-amber-400 text-base font-bold">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Wood-Fired</span>
              </div>
              <span className="text-xs text-stone-400 font-medium">Artisanal Hearth Oven</span>
            </div>

            <div>
              <div className="flex items-center space-x-1 text-amber-400 text-base font-bold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Top Farm-to-Table</span>
              </div>
              <span className="text-xs text-stone-400 font-medium">State Culinary Award</span>
            </div>
          </div>
        </div>

        {/* Right Hero Dish Card Preview */}
        <div className="lg:col-span-5 relative">
          <div className="bg-stone-900/90 border border-amber-800/40 rounded-3xl p-6 shadow-2xl space-y-5 relative backdrop-blur-md">
            
            <div className="h-64 rounded-2xl bg-amber-950/40 border border-amber-800/30 flex items-center justify-center text-8xl relative overflow-hidden group">
              <span className="transform group-hover:scale-110 transition duration-500">🥗</span>
              <span className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-stone-950 text-xs font-bold uppercase rounded-lg shadow-md">
                Chef's Daily Harvest
              </span>
              <div className="absolute bottom-3 left-3 right-3 bg-stone-950/90 backdrop-blur border border-amber-800/40 px-4 py-2 rounded-xl text-xs text-amber-200 font-medium flex justify-between items-center">
                <span>Wood-Fired Hearth Specials</span>
                <span className="text-amber-400 font-bold">$16 - $34</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-amber-100 text-xl">Cozy Hearth Dining & Garden Patio</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Enjoy rustic indoor dining next to our stone wood fireplace or outdoor seasonal garden patio under fairy lights.
              </p>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/40 font-bold text-xs uppercase tracking-wider rounded-xl transition"
            >
              Check Available Table Times ➔
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
