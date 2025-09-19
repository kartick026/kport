interface PlaceholderImageProps {
  title: string;
  gradient?: string;
  className?: string;
}

const PlaceholderImage = ({ title, gradient = 'from-accent to-accent/60', className = '' }: PlaceholderImageProps) => (
  <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
    <div className="text-center text-white">
      <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl">🚀</span>
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  </div>
);

export default PlaceholderImage;
