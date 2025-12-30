interface CarImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CarImageWithFrame({ src, alt, className = "" }: CarImageProps) {
  return (
    <div className={`relative w-full overflow-hidden bg-[#080808] ${className}`}>
      {/* 1. THE CAR IMAGE (Background Layer) 
          We scale it slightly (scale-110) to ensure it bleeds past the inner window edges
          so you don't see any gaps between the car and the frame. 
      */}
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover p-4 md:p-6 pt-4 md:pt-8 scale-[1.01] transform group-hover:scale-90 transition duration-700 ease-in-out z-0" 
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gray-900 flex items-center justify-center text-gray-500 text-xs uppercase tracking-widest z-0">
          No Image
        </div>
      )}

      {/* 2. THE OVERLAY FRAME (Foreground Layer) 
          This sits ON TOP. Since it's a PNG with a hole, the car shows through.
          pointer-events-none is CRITICAL so clicks pass through to the link.
      */}
      <img 
          src="/car-frame.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-fill z-10 pointer-events-none" 
      />
      
      {/* 3. OPTIONAL: Gradient Overlay (For text readability)
          We put this z-20 (on top of frame) or z-0 (behind frame) depending on preference.
          Usually, you want this BEHIND the frame so it doesn't darken your cool borders.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0 pointer-events-none"></div>
    </div>
  );
}