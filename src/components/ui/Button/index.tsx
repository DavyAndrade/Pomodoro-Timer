import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "personalized";
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "lg" | "xl" | "full" | "none";
  size?: "sm" | "md" | "lg" | "personalized";
  children?: ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  fullWidth = false,
  rounded = "md",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    personalized: "",
  }[variant];

  const roundedClass = {
    none: styles.roundedNone,
    sm: styles.roundedSm,
    md: styles.roundedMd,
    lg: styles.roundedLg,
    xl: styles.roundedXl,
    full: styles.roundedFull,
  }[rounded];

  const sizeClass = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
    personalized: "",
  }[size];

  const classes = [
    styles.button,
    variantClass,
    roundedClass,
    sizeClass,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
