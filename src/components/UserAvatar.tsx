type UserAvatarProps = {
  name?: string | null;
  level?: number;
  avatarType?: "abstract" | "initials";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-12 w-12 text-sm",
  md: "h-24 w-24 text-2xl",
  lg: "h-36 w-36 text-4xl sm:h-44 sm:w-44 sm:text-5xl",
};

export function UserAvatar({
  name,
  level = 0,
  avatarType = "abstract",
  size = "lg",
}: UserAvatarProps) {
  const initials =
    name
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "CI";

  return (
    <div
      className={`relative flex items-center justify-center rounded-full border-[1.5px] border-border bg-white text-accent shadow-[0_12px_40px_-24px_rgba(255,59,46,0.55)] ${sizeClasses[size]}`}
      aria-hidden="true"
    >
      {avatarType === "initials" ? (
        <span className="font-display tracking-wide">{initials}</span>
      ) : (
        <svg viewBox="0 0 100 100" className="h-[70%] w-[70%] text-accent">
          <circle
            cx="50"
            cy="36"
            r={16 + Math.min(level, 4)}
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d={`M22 ${78 - level} C22 ${62 - level / 2} 35 ${54} 50 ${54} C65 ${54} 78 ${62 - level / 2} 78 ${78 - level} V88 H22 Z`}
            fill="currentColor"
            fillOpacity="0.16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
