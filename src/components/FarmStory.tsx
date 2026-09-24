import { FC } from 'react';
import { FARM_PARTNERS } from '../data/restaurantData';
import { Tractor, MapPin } from 'lucide-react';

export const FarmStory: FC = () => {
  return (
    <section id="farms" className="px-4 sm:px-6 lg:px-8 py-20 bg-stone-900/40 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Tractor className="w-4 h-4 text-amber-400" />
            <span>Rooted In Community</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Our Local Farm Partners
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            We believe the shortest distance between farm and fork makes for the healthiest, most flavorful meals. Here are the local growers powering our hearth kitchen every week.
          </p>
        </div>

        {/* Farm Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FARM_PARTNERS.map((farm) => (
            <div
              key={farm.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4 hover:border-amber-600/50 transition duration-300 shadow-md relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{farm.imageEmoji}</span>
                <span className="px-2.5 py-1 bg-amber-950 text-amber-300 border border-amber-800/40 rounded-full text-[10px] font-bold flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{farm.distance}</span>
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-amber-100 text-lg group-hover:text-amber-300 transition">
                  {farm.name}
                </h3>
                <span className="text-xs text-amber-400 font-medium block pt-0.5">
                  {farm.produces}
                </span>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {farm.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hearth Story Banner */}
        <div id="story" className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 border border-amber-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-amber-400 text-3xl font-serif font-bold block">“</span>
            <p className="text-lg sm:text-2xl font-serif italic text-amber-100 leading-relaxed">
              When you slow down and cook over real oak wood with freshly harvested produce, food ceases to be routine—it becomes a celebration of life.
            </p>
            <div className="pt-2 text-xs uppercase font-semibold text-amber-400 tracking-widest">
              — Executive Chef Caleb Thorne & Harvest Team
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
