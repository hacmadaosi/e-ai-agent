import React from 'react'

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: "default" | "rounded";
  className?: string;
}

const Button = ({ text, onClick, className, variant = "default" }: ButtonProps) => {
  const variantStyles = {
    default: 'cursor-pointer active:scale-95 rounded-md',
    rounded: "rounded-full border bg-white"
  }

  return (
    <button className={`whitespace-nowrap py-2 px-6 font-semibold border-2 select-none flex justify-center w-fit text-sm ${className} ${variantStyles[variant] }`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
