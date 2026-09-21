# EPIC DEVICES 3.0 — Customer experience guide

## The collection slider

The homepage now has three complete visual scenes, each linking to its relevant collection. The layout adapts from a wide composition on desktop to stacked copy and artwork on mobile.

- Select a thumbnail or use the previous/next arrows.
- Swipe horizontally on a touch screen.
- When the slider has keyboard focus, use Left/Right, Home or End.
- The circle around Play/Pause and the active thumbnail's bottom line show elapsed slide time.
- Autoplay pauses while hovered, outside the viewport or in a hidden browser tab. Selecting a slide or entering it with the keyboard stops autoplay until Play is selected again.
- Reduced-motion preferences turn off autoplay and slide transitions.

The collection illustrations are conceptual campaign artwork, not photos of a verified product model or a stock promise. Actual product information comes from your catalog.

## Product finder

Open **Find my upgrade** from the navigation, slider, mobile menu or homepage discovery panel.

1. Choose audio, a laptop, workspace essentials or power accessories.
2. Set a budget, choose a sort preference and decide whether to show only in-stock products.
3. Open a matching product or carry the choices into the full catalog.

The finder checks active products and their current promotional prices. It does not use an AI model or invent recommendations. If nothing matches, customers can change their choices or open an email draft containing their requirements. The customer sends that draft from their own email app.

## Quick view

Product cards have a **Quick view** action. On desktop it appears when a card is hovered or focused; on touch screens it stays visible.

The panel shows the product's available photos, price and recorded specifications. Customers can adjust quantity, add to the shared shopping bag, save to the wishlist, add to comparison or open the full product page. Quantities account for units already in the bag. Unavailable products offer an email enquiry.

## Comparison

Choose two to four products using their comparison buttons, then open the comparison tray. **Only show differences** hides identical rows. Remove individual products or clear the selection. The lowest listed price is highlighted; missing specifications are identified as not listed. The table scrolls horizontally on small screens.

## Search and keyboard use

- Ctrl+K or Command+K focuses the header search.
- Up/Down moves through suggestions; Enter opens the selected result.
- With no suggestion selected, Enter searches the full catalog.
- Escape dismisses suggestions or the active dialog.
- Finder, quick view and comparison use native modal focus containment, with a close button that stays available while scrolling.

## Deployment and operating limits

Upload the extracted project contents to your GitHub repository root and deploy them to Hostinger's website document root. `index.html` and its referenced bundle in `assets/` must be deployed together. The build is already included.

This upgrade preserves the supplied application's front-end architecture. Console records and shopper selections are session-only; authentication is a demonstration and checkout is a preview. Publishing static files does not provide a database, secure authentication, live orders, emails or payment processing. See `README.md` for deployment and backend requirements.
