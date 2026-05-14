# Stripe setup for NEXUSDESK

Use Stripe Payment Links first. They are fast to launch, handle PCI scope for you, and work with this static site by pasting URLs into `config.js`.

## Products and prices

Create these Stripe products in GBP:

| Product | Stripe price type | Amount | Notes |
|---|---:|---:|---|
| NEXUSDESK Standard Session | One-time | £99 | Up to 60 minutes. |
| NEXUSDESK Priority Session | One-time | £179 | Up to 2 hours. |
| NEXUSDESK Urgent Session | One-time | £299 | Up to 4 hours. |
| NEXUSDESK Company Unlimited | Recurring monthly | £2,000/month | Unlimited online support for one company within support scope. |

## Payment Links

1. In Stripe, go to **Product catalog** and create each product above.
2. For the Company Unlimited product, choose **Recurring**, monthly billing, GBP, £2,000.
3. Create a Payment Link for each product.
4. Require customer email and phone number.
5. For Company Unlimited, require company name in custom fields.
6. Add checkout terms requiring acceptance of the site Terms, Privacy Policy, and Refund Policy.
7. Set the success page to your support intake or thank-you URL.
8. Set the cancel page back to `index.html#pricing`.
9. Copy each Payment Link URL into `config.js`.

Example:

```js
window.NEXUSDESK_CONFIG = {
  stripeCheckoutUrl: "https://buy.stripe.com/your-default-link",
  stripePlans: {
    standard: "https://buy.stripe.com/standard-link",
    priority: "https://buy.stripe.com/priority-link",
    urgent: "https://buy.stripe.com/urgent-link",
    company: "https://buy.stripe.com/test_bJe6oHaOU4Bw6fXfyY0x201",
  },
};
```

## Customer portal

Enable the Stripe Customer Portal so company subscribers can update cards, download invoices, and cancel future renewals. In the portal settings, allow subscription cancellation at period end unless you decide to handle cancellations manually.

## Operational checklist

- Turn on Stripe Radar defaults and require 3D Secure when Stripe recommends it.
- Add your support email, privacy URL, terms URL, and refund URL in Stripe business settings.
- Configure receipt emails and invoice emails.
- Add a post-payment automation: send receipt, support intake link, allowed remote support tools, and the pay-before-remote reminder.
- For Company Unlimited, verify the company domain and authorized contacts before providing support.
- Keep Stripe test mode links out of production `config.js`.
