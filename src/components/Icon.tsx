import { SOLAR, type IconName } from "./solar-icons";

/** A Solar Bold icon. It takes the surrounding text color, so it follows the theme. */
export function Icon({ name, size = 18, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: SOLAR[name] }}
    />
  );
}
