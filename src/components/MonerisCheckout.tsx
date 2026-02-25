import { useEffect, useRef } from 'react';

interface MonerisCheckoutProps {
  amount: number;
  onSuccess: (response: any) => void;
  onError: (error: any) => void;
  onCancel: () => void;
}

declare global {
  interface Window {
    monerisCheckout: any;
  }
}

export function MonerisCheckout({ amount, onSuccess, onError, onCancel }: MonerisCheckoutProps) {
  const checkoutRef = useRef<HTMLDivElement>(null);
  const MONERIS_CHECKOUT_ID = 'chktESN5E07935'; // Public - safe to expose

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://gateway.moneris.com/chktv2/js/chkt_v2.00.js';
    script.async = true;
    
    script.onload = () => {
      if (window.monerisCheckout && checkoutRef.current) {
        const checkout = new window.monerisCheckout();
        
        checkout.setMode('prod');
        checkout.setCheckoutDiv('monerisCheckout');
        
        checkout.startCheckout(MONERIS_CHECKOUT_ID);
        
        checkout.setCallback('page_loaded', () => {
          console.log('Moneris checkout loaded');
        });
        
        checkout.setCallback('payment_receipt', (response: any) => {
          onSuccess(response);
        });
        
        checkout.setCallback('payment_error', (error: any) => {
          onError(error);
        });
        
        checkout.setCallback('cancel_transaction', () => {
          onCancel();
        });
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, [amount, onSuccess, onError, onCancel]);

  return (
    <div>
      <div id="monerisCheckout" ref={checkoutRef} className="min-h-[400px]" />
    </div>
  );
}
