import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Circle = ({ className }: Props) => {
  return (
    <div className={cn(
      "h-12 w-12 bg-purple-500/60 rounded-full",
      className
    )} />
  )
}