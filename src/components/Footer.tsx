import { useState, FC, FormEvent } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send, Check } from 'lucide-react';

export const Footer: FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Summary */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-serif font-bold text-amber-50">HARVEST & HEARTH</span>
          </div>
          <p className="text-stone-400 leading-relaxed font-light">
            Authentic farm-to-table cuisine cooked over real wood flame, bringing community farms directly to your plate.
          </p>
          <div className="flex items-center space-x-3 text-stone-300">
            <a href="#" className="p-2 bg-stone-900 rounded-lg hover:text-amber-400 transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-stone-900 rounded-lg hover:text-amber-400 transition">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hours of Operation */}
        <div className="space-y-3">
          <h3 className="font-serif font-bold text-amber-100 text-sm tracking-wide">Kitchen & Bakery Hours</h3>
          <ul className="space-y-2 text-stone-300">
            <li className="flex justify-between border-b border-stone-800/60 pb-1.5">
              <span>Tuesday – Thursday:</span>
              <span className="text-amber-300 font-medium">5:00 PM – 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-stone-800/60 pb-1.5">
              <span>Friday – Saturday:</span>
              <span className="text-amber-300 font-medium">5:00 PM – 11:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-stone-800/60 pb-1.5">
              <span>Sunday Brunch & Hearth:</span>
              <span className="text-amber-300 font-medium">10:00 AM – 8:00 PM</span>
            </li>
            <li className="flex justify-between text-stone-500 pt-1">
              <span>Monday:</span>
              <span>Closed for Harvesting</span>
            </li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="space-y-3">
          <h3 className="font-serif font-bold text-amber-100 text-sm tracking-wide">Visit Our Kitchen</h3>
          <div className="space-y-2.5 text-stone-300">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>142 River Valley Road, Harvest Valley, CA 95401</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+1 (555) 843-2784</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>hello@harvestandhearth.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-3">
          <h3 className="font-serif font-bold text-amber-100 text-sm tracking-wide">Seasonal Menu Newsletter</h3>
          <p className="text-stone-400 leading-relaxed font-light">
            Subscribe to receive notifications when new autumn crop menus & chef tasting events drop.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 px-3 py-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition"
              >
                {subscribed ? <Check className="w-4 h-4 text-white" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            {subscribed && (
              <span className="text-[11px] text-emerald-400 font-medium block">
                ✓ Thank you! You're subscribed to seasonal menu drops.
              </span>
            )}
          </form>
        </div>

      </div>

      {/* Bottom copyright strip */}
      <div className="border-t border-stone-800 py-6 text-center text-[11px] text-stone-500">
        <p>© 2026 Harvest & Hearth Kitchen. All rights reserved. Crafted with care for local food lovers.</p>
      </div>
    </footer>
  );
};
