import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "transparent";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg" | "icon";
  children?: ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  fullWidth = false,
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-sm hover:cursor-pointer transition-colors font-medium";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    transparent: "",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3",
    icon: "",
  };

  return (
    <button
      {...props}
      className={`${className} ${baseStyles} ${variantStyles[variant]} ${
        sizeStyles[size]
      } ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
};
