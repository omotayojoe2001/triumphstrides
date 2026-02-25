import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OrderConfirmationPage() {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order') || 'TS-XXXXXX';

  return (
    <div className="container-tight py-16 text-center">
      <div className="max-w-lg mx-auto">
        <div className="h-20 w-20 bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        
        <p className="text-muted-foreground mb-2">
          Thank you for your order. We've received your request and will process it shortly.
        </p>
        
        <div className="bg-muted p-4 my-6">
          <p className="text-sm text-muted-foreground">Order Number</p>
          <p className="text-xl font-bold">{orderNumber}</p>
        </div>

        <div className="text-left bg-muted p-6 mb-8">
          <h3 className="font-semibold mb-3">Next Steps:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• You'll receive an email confirmation shortly</li>
            <li>• We'll contact you to confirm delivery/pickup details</li>
            <li>• Payment instructions will be included if not yet paid</li>
            <li>• For questions, contact us via WhatsApp or phone</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/shop">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;
