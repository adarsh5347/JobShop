interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', size = 'md', variant = 'dark' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const circleSize = {
    sm: 'w-[0.65em] h-[0.70em]',
    md: 'w-[0.65em] h-[0.70em]',
    lg: 'w-[0.65em] h-[0.70em]',
  };

  const textColor = variant === 'dark' ? 'text-[#111111]' : 'text-white';
  const circleColor = variant === 'dark' ? 'bg-[#111111]' : 'bg-white';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`${sizeClasses[size]} ${textColor} font-bold tracking-tight leading-none flex items-center`}>
        THE J
        <span className={`inline-block ${circleSize[size]} ${circleColor} rounded-full mx-[0.05em] translate-y-[-0.05em]`}></span>
        B SH
        <span className={`inline-block ${circleSize[size]} ${circleColor} rounded-full mx-[0.05em] translate-y-[-0.05em]`}></span>
        P
      </span>
    </div>
  );
}