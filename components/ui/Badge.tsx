import { cn } from "../../lib/cn";

type Variant = "cyan" | "indigo" | "purple" | "muted";

export function Badge({
  className,
  variant = "cyan",
  ...props
}: any & { variant?: Variant }) {
  const styles: Record<Variant, string> = {
    cyan: "text-neon-blue border-neon-blue/40 bg-neon-blue/10",
    indigo: "text-neon-indigo border-neon-indigo/40 bg-neon-indigo/10",
    purple: "text-neon-purple border-neon-purple/40 bg-neon-purple/10",
    muted: "text-white/80 border-cyan-400/25 bg-white/5"
  };
  const key = (variant ?? "cyan") as keyof typeof styles;
  return (
    <span
      {...props}
      className={cn(
        "px-3 py-1 rounded-full text-xs border",
        styles[key],
        className
      )}
    />
  );
}
