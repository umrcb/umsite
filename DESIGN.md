# Premium Hero Section Design Standard

To maintain a cohesive, high-end look across the Umrah Cab Services platform, all hero sections MUST follow this standardized design pattern.

## Core Layout Structure
The hero section must be a full-width container with a background image, a gradient overlay, and left-aligned text content.

```tsx
<section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-black">
    {/* 1. Background Image */}
    <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
            src="URL_HERE"
            alt="Descriptive Alt Text"
            fill
            className="object-cover object-center"
            priority
        />
        {/* 2. Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
    </div>

    {/* 3. Content Container */}
    <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-24 pb-16 lg:pt-32 lg:pb-32">
        <div className="flex flex-col items-start gap-8 max-w-3xl">
            {/* TEXT CONTENT GOES HERE */}
        </div>
    </div>
</section>
```

## Styling Tokens

### 1. Section Container
- **Classes**: `relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-black`
- *Note*: Use `min-h-[90vh]` for the Homepage, and `min-h-[70vh]` for internal pages.

### 2. Gradient Overlay
- **Classes**: `absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30`
- **Purpose**: Ensures high contrast for white text on any background image.

### 3. Typography
- **Heading (`h1`)**: 
  - Classes: `text-5xl md:text-6xl lg:text-7xl font-poppins font-[800] text-white leading-[1.1]`
  - Highlights: Use `<span className="text-primary">...</span>` for accent words.
- **Subheading (`p`)**:
  - Classes: `text-lg md:text-xl text-gray-200 max-w-xl font-normal leading-relaxed`

### 4. Buttons (CTAs)
- **Primary Button**: `btn-primary py-4 px-8 text-lg hover:scale-105 transition-transform duration-300`
- **WhatsApp Button**: `bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg py-4 px-8 text-lg flex items-center justify-center transition-all duration-300 hover:scale-105`

### 5. Badges (Optional)
- **Trust/Info Badge**: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm`

## Rules
- NO right-side or split layout images.
- Images must be high resolution (e.g., Unsplash 80+ quality, 2000px+ width).
- Always use `priority` on the `Image` component since it's above the fold.
