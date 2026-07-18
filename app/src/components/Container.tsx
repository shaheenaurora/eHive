import type { ReactNode } from "react";

type ContainerSize = "narrow" | "default" | "wide";

const sizes: Record<ContainerSize, string> = {
  narrow: "max-w-3xl", // long-form reading measure
  default: "max-w-6xl", // standard content width
  wide: "max-w-7xl", // nav, footer, media-led sections
};

export default function Container({
  size = "default",
  className = "",
  children,
}: {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full px-6 md:px-10 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
