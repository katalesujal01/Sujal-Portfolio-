import { cn } from "../../lib/cn";

type Variant = "primary" | "outline";

export function Button({
  className,
  variant = "primary",
  ...props
}: any & { variant?: Variant }) {
  const variantCls =
    variant === "primary"
      ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/30 hover:shadow-glow"
      : "bg-white/5 text-white/90 border border-cyan-400/30 hover:shadow-glow";
  return (
    <button
      {...props}
      className={cn(
        "hover-lift px-5 py-2.5 rounded-lg transition",
        variantCls,
        className
      )}
    />
  );
}
