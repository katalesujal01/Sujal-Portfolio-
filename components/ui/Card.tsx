import { cn } from "../../lib/cn";

export function Card({
  className,
  ...props
}: any) {
  return (
    <div
      {...props}
      className={cn(
        "card bg-white/5 border border-cyan-400/20 rounded-card",
        className
      )}
    />
  );
}
