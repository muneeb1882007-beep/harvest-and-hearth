import { useState, FC } from 'react';
import { ShoppingBag, Calendar, Menu as MenuIcon, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Header: FC<HeaderProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Banner */}
      <div className="bg-amber-900/90 text-amber-100 px-4 py-2 text-center text-xs font-medium border-b border-amber-800/40 flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Autumn Harvest Menu Live • Fresh Truffle & Wood-Fired Hearth Specials</span>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <span className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition transform">
              🌾
            </span>
            <div>
              <span className="block text-xl font-serif font-bold tracking-tight text-amber-50 group-hover:text-amber-300 transition">
                HARVEST & HEARTH
              </span>
              <span className="block text-[10px] text-amber-400/90 uppercase tracking-widest font-sans font-semibold">
                Farm-to-Table Kitchen & Bakery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-300">
            <a href="#menu" className="hover:text-amber-400 transition">Seasonal Menu</a>
            <a href="#farms" className="hover:text-amber-400 transition">Local Farmers</a>
            <a href="#story" className="hover:text-amber-400 transition">Our Story</a>
            <a href="#reviews" className="hover:text-amber-400 transition">Reviews</a>
            <a href="#contact" className="hover:text-amber-400 transition">Location</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            
            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700/60 transition shadow-sm flex items-center justify-center"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-600/20 transition transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-900 border-b border-stone-800 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-stone-200 font-medium text-base">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Seasonal Menu</a>
              <a href="#farms" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Local Farmers</a>
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Our Story</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Reviews</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Location</a>
            </nav>

            <div className="pt-4 border-t border-stone-800 flex flex-col space-y-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
                className="w-full py-3 bg-amber-600 text-stone-950 font-bold rounded-xl text-center text-xs uppercase tracking-wider"
              >
                Book a Table
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
