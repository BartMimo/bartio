import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  type?: undefined;
  onClick?: undefined;
  disabled?: undefined;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-700 focus-visible:ring-zinc-900",
  secondary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-600",
  ghost:
    "bg-transparent text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:ring-zinc-300",
  outline:
    "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:ring-zinc-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonAsButtonProps)}
    >
      {children}
    </button>
  );
}
