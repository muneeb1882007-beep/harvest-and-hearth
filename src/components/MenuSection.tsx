import { useState, FC } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Plus, Info, Check, Leaf } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const categories = [
    { id: 'all', label: 'All Seasonal Items' },
    { id: 'starters', label: 'Starters & Soups' },
    { id: 'mains', label: 'Hearth Mains' },
    { id: 'bakery', label: 'Bakery & Desserts' },
    { id: 'drinks', label: 'Craft Drinks' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-8 py-20 bg-stone-950 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <Leaf className="w-3.5 h-3.5" />
            <span>Farm-Fresh & Seasonal</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Our Seasonal Menu
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Every dish is cooked over open wood flame, celebrating raw seasonal produce grown by our local community farmers.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition border ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-stone-950 border-amber-500 shadow-lg shadow-amber-600/20'
                  : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-600/50 transition duration-300 group shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Dish Top Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-3xl group-hover:scale-105 transition transform">
                    {item.imageEmoji}
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          tag === 'Vegan'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                            : tag === 'GF'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800/50'
                            : 'bg-stone-800 text-stone-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-bold text-amber-100 text-lg group-hover:text-amber-300 transition">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-amber-400 font-serif font-bold text-xl block">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Farm Origin Badge */}
                <div className="pt-2 flex items-center space-x-1.5 text-[11px] text-amber-400/90 font-medium border-t border-stone-800/60">
                  <span>🌾</span>
                  <span className="truncate">Farm: {item.farmSource}</span>
                </div>
              </div>

              {/* Action Row */}
              <div className="pt-5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedDish(item)}
                  className="text-xs text-stone-400 hover:text-amber-300 underline flex items-center space-x-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Farm Origins</span>
                </button>

                <button
                  onClick={() => handleAdd(item)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition ${
                    addedItemIds[item.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-md'
                  }`}
                >
                  {addedItemIds[item.id] ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DISH DETAIL MODAL */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-stone-900 border border-stone-800 max-w-md w-full rounded-2xl p-6 shadow-2xl space-y-5 relative">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <span className="text-6xl block">{selectedDish.imageEmoji}</span>
              <h3 className="text-2xl font-serif font-bold text-amber-100">{selectedDish.name}</h3>
              <span className="text-amber-400 font-serif font-bold text-xl block">${selectedDish.price.toFixed(2)}</span>
            </div>

            <div className="space-y-3 bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs">
              <h4 className="font-bold text-amber-300 uppercase tracking-wider">Ingredient Traceability</h4>
              <p className="text-stone-300">{selectedDish.description}</p>
              <div className="pt-2 border-t border-stone-800 text-amber-400 font-medium">
                📍 Direct Sourced From: {selectedDish.farmSource}
              </div>
              {selectedDish.calories && (
                <div className="text-stone-400">🔥 Estimated Calories: {selectedDish.calories} kcal</div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  handleAdd(selectedDish);
                  setSelectedDish(null);
                }}
                className="w-full py-3 bg-amber-600 text-stone-950 font-bold rounded-xl text-xs uppercase tracking-wider"
              >
                Add Dish To Order (${selectedDish.price.toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
