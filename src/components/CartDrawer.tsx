import { useState, FC, FormEvent } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleDone = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-l border-stone-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-serif font-bold text-amber-50">
                {checkoutStep === 'cart' && 'Your Pickup Cart'}
                {checkoutStep === 'checkout' && 'Pickup Contact Details'}
                {checkoutStep === 'success' && 'Order Placed!'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {checkoutStep === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <span className="text-5xl block">🛍️</span>
                    <p className="text-stone-300 font-serif font-semibold text-lg">Your cart is empty</p>
                    <p className="text-xs text-stone-500 max-w-xs mx-auto">
                      Explore our seasonal farm menu and add delicious wood-fired dishes to your order!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.menuItem.id}
                        className="bg-stone-950 border border-stone-800 rounded-2xl p-4 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{item.menuItem.imageEmoji}</span>
                          <div>
                            <h4 className="font-serif font-bold text-stone-100 text-sm">{item.menuItem.name}</h4>
                            <span className="text-xs text-amber-400 font-semibold block">
                              ${item.menuItem.price.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controller */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                            className="p-1 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-stone-100 w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                            className="p-1 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id)}
                            className="p-1.5 text-stone-500 hover:text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
                <div className="bg-amber-950/40 border border-amber-800/40 p-4 rounded-xl text-amber-200">
                  📍 <span className="font-bold">Pickup Location:</span> Harvest & Hearth, 142 River Valley Road. Estimated prep time: <span className="font-bold text-amber-300">25-30 minutes</span>.
                </div>

                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Miller"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Mobile Phone Number (For SMS Ready Alert)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-amber-50">Order Confirmed!</h3>
                <p className="text-xs text-stone-300">
                  Thank you <span className="font-bold text-amber-300">{customerName}</span>! Your order has been sent to our wood-fired kitchen.
                </p>
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs text-left space-y-2">
                  <div className="flex justify-between">
                    <span>Estimated Pickup:</span>
                    <span className="font-bold text-amber-300">In ~25 Minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Paid:</span>
                    <span className="font-bold text-stone-100">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Summary & Actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-800 bg-stone-950 space-y-4">
              
              {checkoutStep !== 'success' && (
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-stone-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Estimated Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-100 font-bold text-sm pt-2 border-t border-stone-800">
                    <span>Total Order Amount</span>
                    <span className="text-amber-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {checkoutStep === 'cart' && (
                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Proceed To Pickup Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {checkoutStep === 'checkout' && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setCheckoutStep('cart')}
                    className="w-1/3 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-300 font-bold text-xs rounded-xl"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    className="w-2/3 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg"
                  >
                    Place Pickup Order
                  </button>
                </div>
              )}

              {checkoutStep === 'success' && (
                <button
                  onClick={handleDone}
                  className="w-full py-3.5 bg-stone-800 hover:bg-stone-700 text-amber-100 font-bold text-xs uppercase tracking-wider rounded-xl transition"
                >
                  Done
                </button>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
