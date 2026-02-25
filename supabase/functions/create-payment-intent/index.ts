const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY")

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: getCorsHeaders() })
  }

  try {                   
    const body = await req.json()
    const { amount, currency } = body

    // Validate input
    if (!amount || !currency) {
      return new Response(
        JSON.stringify({ error: "Missing amount or currency" }),
        { status: 400, headers: getCorsHeaders() }
      )
    }

    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({ error: "Stripe secret key not configured" }),
        { status: 500, headers: getCorsHeaders() }
      )
    }

    console.log(`Creating payment intent: ${amount} ${currency}`)

    // Call Stripe API directly - avoid URLSearchParams to prevent Node.js compat issues
    const formBody = `amount=${Math.round(amount)}&currency=${currency.toLowerCase()}&payment_method_types=card`
    
    const stripeResponse = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })

    if (!stripeResponse.ok) {
      const error = await stripeResponse.json()
      console.error("Stripe error:", error)
      throw new Error(error.error?.message || "Stripe API error")
    }

    const paymentIntent = await stripeResponse.json()
    console.log(`Payment intent created: ${paymentIntent.id}`)

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        headers: getCorsHeaders(),
        status: 200,
      }
    )
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 400,
        headers: getCorsHeaders(),
      }
    )
  }
})

function getCorsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  }
}
