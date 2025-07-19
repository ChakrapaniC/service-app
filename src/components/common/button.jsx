// components/Button.jsx
'use client';
import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  // Base styles
  const baseStyles = 'relative overflow-hidden font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 ';
  
  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-sm shadow-blue-500/25 hover:shadow-sm hover:shadow-blue-500/40',
    secondary: 'bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-800 shadow-lg shadow-slate-500/25 hover:shadow-xl hover:shadow-slate-500/40',
    outline: 'border-2 border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 bg-transparent hover:bg-blue-50 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20',
    ghost: 'text-slate-700 hover:text-blue-600 hover:bg-white/50 hover:backdrop-blur-sm',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40',
    success: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40'
  };
  
  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-xl',
    xl: 'px-10 py-5 text-lg rounded-2xl'
  };
  
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const ButtonContent = () => (
    <>
      <span className="relative z-10">{children}</span>
      
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {(variant === 'primary' || variant === 'danger' || variant === 'success') && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-current/20 to-current/10 animate-pulse"></div>
        </div>
      )}
    </>
  );
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles} {...props}>
        <ButtonContent />
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      {...props}
    >
      <ButtonContent />
    </button>
  );
};

export default Button;