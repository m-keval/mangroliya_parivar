import type { SVGProps } from "react";

export type IconName =
  | "heart"
  | "users"
  | "book"
  | "leaf"
  | "home"
  | "calendar"
  | "map-pin"
  | "mail"
  | "phone"
  | "search"
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "menu"
  | "close"
  | "clock"
  | "camera"
  | "sparkle"
  | "shield"
  | "graduation"
  | "quote"
  | "check"
  | "tree"
  | "star"
  | "globe";

const paths: Record<IconName, React.ReactNode> = {
  heart: (
    <path d="M12 20s-7-4.35-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.65 12 20 12 20Z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.8M17 14.5a5.5 5.5 0 0 1 4 5.5" />
    </>
  ),
  book: (
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v14H6.5A2.5 2.5 0 0 0 4 19.5v-14Zm0 0v14M8 7h7M8 11h7" />
  ),
  leaf: (
    <path d="M5 19c0-7 4.5-12 14-13-1 9-5 13-11 13-1.5 0-3-.3-3 0Zm0 0c1.5-3 3.5-5.5 7-7.5" />
  ),
  home: (
    <path d="M4 11.5 12 4l8 7.5M6.5 10v9h11v-9M10.5 19v-4.5h3V19" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s6.5-5.6 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.7 2 2 0 0 1 6 3.5Z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </>
  ),
  "arrow-right": <path d="M4 12h15m-6-6 6 6-6 6" />,
  "arrow-left": <path d="M20 12H5m6 6-6-6 6-6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8.5h3l1.5-2.5h7L17 8.5h3a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 18.5H4A1.5 1.5 0 0 1 2.5 17v-7A1.5 1.5 0 0 1 4 8.5Z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
  ),
  shield: <path d="M12 3.5 5 6v6c0 4 3 7 7 8.5 4-1.5 7-4.5 7-8.5V6l-7-2.5Z" />,
  graduation: (
    <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4ZM6.5 10.7V16c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-5.3" />
  ),
  quote: (
    <path d="M9 6.5C6.5 8 5.5 10 5.5 12.5H9v5H4v-5c0-3.5 1.5-6.5 5-8.5V6.5Zm10 0C16.5 8 15.5 10 15.5 12.5H19v5h-5v-5c0-3.5 1.5-6.5 5-8.5V6.5Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  tree: (
    <path d="M12 3.5v5m0 0-6 4m6-4 6 4M6 12.5v3m12-3v3M4.5 20.5h15M6 15.5v-3m12 3v-3M12 8.5v12" />
  ),
  star: (
    <path d="m12 4 2.5 5.2 5.5.8-4 3.9 1 5.6L12 16.9 7 19.5l1-5.6-4-3.9 5.5-.8L12 4Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5Z" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.6,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
