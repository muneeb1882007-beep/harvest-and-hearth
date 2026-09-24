import { useState, FC, FormEvent } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '2026-09-25',
    time: '6:30 PM',
    seatingArea: 'Hearth Dining Room',
    notes: '',
  });

  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ref = 'HH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-stone-900 border border-amber-800/40 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-stone-400 hover:text-white text-xl font-bold p-1 rounded-lg hover:bg-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="inline-flex items-center space-x-1 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Harvest & Hearth Dining</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">Reserve Your Table</h3>
              <p className="text-xs text-stone-400">Experience cozy wood-fired dining or garden patio seating.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Guest Name */}
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Guests, Date, Time */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value={2}>2 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={6}>6 Guests</option>
                    <option value={8}>8+ Party</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-2 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Time Slot</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-2 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="9:30 PM">9:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Seating Area Preference */}
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Preferred Atmosphere / Seating</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Hearth Dining Room', 'Covered Garden Patio', 'Chef\'s Counter'] as const).map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingArea: area })}
                      className={`p-2.5 rounded-xl border text-center font-medium text-[11px] transition ${
                        formData.seatingArea === area
                          ? 'bg-amber-600 text-stone-950 border-amber-500 font-bold'
                          : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Dietary restrictions, anniversary celebration, high chair needed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-amber-600/20"
              >
                Confirm Table Reservation 🌾
              </button>
            </form>
          </div>
        ) : (
          /* CONFIRMATION SCREEN */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-amber-50">Reservation Confirmed!</h3>
              <p className="text-xs text-stone-300">
                We're delighted to welcome you to Harvest & Hearth, <span className="font-bold text-amber-300">{formData.name}</span>.
              </p>
            </div>

            <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 text-left space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-stone-800 text-amber-400 font-mono font-bold">
                <span>Confirmation Ref:</span>
                <span>{bookingRef}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Date & Time:</span>
                <span className="font-bold text-stone-100">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Party Size:</span>
                <span className="font-bold text-stone-100">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Seating Area:</span>
                <span className="font-bold text-amber-300">{formData.seatingArea}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-stone-800 hover:bg-stone-700 text-amber-100 font-bold text-xs uppercase tracking-wider rounded-xl transition"
            >
              Done & Return To Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
