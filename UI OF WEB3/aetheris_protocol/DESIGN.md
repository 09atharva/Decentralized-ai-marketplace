# Design System Specification: The Synthetic Ether

## 1. Overview & Creative North Star

### The Creative North Star: "The Synthetic Ether"
This design system is built to facilitate the exchange of high-compute intelligence. It moves away from the "flatness" of traditional SaaS and instead embraces **The Synthetic Ether**—a visual metaphor where AI models are treated as crystalline structures floating within a pressurized, dark void. 

To achieve this, we reject standard "boxed" layouts. We use **intentional asymmetry**, where content is anchored by heavy typographic weight and balanced by vast, purposeful negative space. Elements should feel like they are "projected" rather than "printed." By utilizing overlapping glass surfaces and tonal shifts rather than lines, we create an interface that feels as high-performance as the models it hosts.

---

## 2. Colors & Surface Architecture

The palette is rooted in a deep charcoal foundation, punctuated by high-energy neon pulses. We use light not just for decoration, but as a functional tool to guide the user's eye through complex data.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. 
In this design system, boundaries are created through **tonal transitions**. A sidebar is distinguished from the main feed because it sits on `surface-container-low` while the feed sits on `surface`. This creates a sophisticated, "app-like" feel that mimics high-end hardware interfaces.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent layers.
*   **Base:** `surface` (#10131a) - The infinite void.
*   **Sub-level:** `surface-container-lowest` (#0b0e14) - Used for deeply recessed areas like code blocks or terminal outputs.
*   **Raised Level:** `surface-container-high` (#272a31) - For primary interaction cards.
*   **Floating Level:** `surface-bright` (#363940) - Reserved for navigation bars and floating menus.

### The "Glass & Gradient" Rule
To bridge the gap between "Professional" and "Decentralized," use glassmorphism for floating elements.
*   **Glass Recipe:** Apply `surface-variant` at 60% opacity with a `24px` backdrop-blur.
*   **Signature Gradients:** Primary CTAs should never be flat. Use a linear gradient from `primary` (#adc6ff) to `secondary` (#ddb7ff) at a 135-degree angle. This "Neon Pulse" signifies active computation.

---

## 3. Typography: The Developer’s Editorial

We use **Inter** for its mathematical precision and readability. The goal is to balance the "human" aspect of AI with the "technical" aspect of the marketplace.

*   **Display Scale (`display-lg` to `display-sm`):** Reserved for hero sections and model titles. Use a negative letter-spacing of `-0.02em` to create a "tight," editorial look.
*   **Headline & Title:** Use `headline-sm` for section headers. These should be paired with `primary` color accents to denote importance.
*   **The Metadata Layer (`label-md` and `label-sm`):** This is the "Developer Voice." Use these for model parameters (e.g., "70B Parameters," "FP16"). These should often be in all-caps with `+0.05em` letter spacing to feel like instrument readouts.

---

## 4. Elevation & Depth: Tonal Layering

We ignore traditional box-shadows in favor of **Ambient Glows** and **Tonal Lift**.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-highest` card placed on a `surface` background provides all the "lift" necessary. 
*   **Ambient Shadows:** If an element must float (like a modal), use a diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow color is derived from the background, not pure black, to keep the dark theme from feeling "muddy."
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism Depth:** When using glass components, add a top-inner-stroke of `1px` using `outline` at 20% opacity. This "specular highlight" simulates light hitting the edge of a glass pane.

---

## 5. Components

### Buttons
*   **Primary (The Pulse):** Gradient background (`primary` to `secondary`), white text (`on-primary-fixed`). No border. `md` (0.375rem) roundedness.
*   **Secondary (The Ghost):** `outline-variant` ghost border, `on-surface` text. Subtle `surface-container-high` fill on hover.
*   **Tertiary:** Plain text with `label-md` styling, shifting to `primary` color on hover.

### Cards & Lists
*   **The Rule of Zero Lines:** Lists items are separated by vertical white space (16px - 24px) or a subtle background change. 
*   **Model Cards:** Use `surface-container-low`. On hover, transition to `surface-container-high` and apply a subtle `primary` outer glow (4px blur).

### Input Fields
*   **Style:** Minimalist. Background `surface-container-lowest`. 
*   **Focus State:** No thick rings. Instead, the "Ghost Border" increases in opacity to 50%, and the label shifts to the `tertiary` (#3cddc7) color.

### Chips (Model Tags)
*   **Style:** Small, `label-sm` text. Use `secondary-container` backgrounds with `on-secondary-container` text. This provides a soft purple "haze" that distinguishes model tags (e.g., "LLM," "Computer Vision") from UI actions.

---

## 6. Do’s and Don'ts

### Do
*   **Do** use `tertiary` (#3cddc7) for "Success" or "Verified" states. It provides a technical, mint-green clarity.
*   **Do** allow for "breathing room." High-end systems feel premium because they aren't crowded.
*   **Do** use `surface-container-lowest` for code snippets to simulate a terminal inset.

### Don't
*   **Don't** use pure black (#000000). Always use the `surface` (#10131a) to maintain the charcoal depth.
*   **Don't** use 1px solid white borders. They break the "Ether" illusion and look "bootstrap."
*   **Don't** use standard ease-in-out animations. Use "Spring" physics (e.g., `stiffness: 300, damping: 30`) for interactions to make the UI feel reactive and tactile.
*   **Don't** use dividers. If you feel you need a divider, you likely need more white space or a subtle change in the `surface-container` tier.

---

## 7. Context-Specific Components

### The "Model Registry" Table
Instead of a standard table, use a "Striped Layer" approach. Header row is `surface`. Body rows alternate between `surface-container-lowest` and `surface-container-low`. Remove all vertical and horizontal lines.

### The "Compute Progress" Bar
A thin (4px) track using `surface-container-highest`. The progress fill is a gradient from `tertiary` to `primary`. Add a subtle `2px` glow to the leading edge of the progress bar to simulate "moving data."