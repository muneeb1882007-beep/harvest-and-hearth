import { FC } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { Star } from 'lucide-react';

export const Reviews: FC = () => {
  return (
    <section id="reviews" className="px-4 sm:px-6 lg:px-8 py-20 bg-stone-950 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Guest Experiences</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Loved By Local Foodies
          </h2>
          <p className="text-stone-400 text-sm font-light">
            Read what our guests have to say about our hearth dining, sourdough bakery, and farm produce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 space-y-4 hover:border-amber-600/40 transition shadow-md relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-stone-300 leading-relaxed italic font-light">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-bold text-amber-100">{rev.author}</h4>
                  <span className="text-[10px] text-stone-500">{rev.role}</span>
                </div>
                <span className="text-[10px] text-amber-400/70 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
