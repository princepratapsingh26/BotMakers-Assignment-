
type IconProps = {
  className?: string
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31 10a7 7 0 0 0-9.4 8.6L11 29.2a3.2 3.2 0 0 0 4.5 4.5L26.1 23a7 7 0 0 0 8.6-9.4l-4.6 4.6a2.6 2.6 0 0 1-3.7-3.7L31 10Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16.5l-4-4 2-2 4 4M8 34l6 6"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LandmarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 6c2.2 2 3.6 4.3 3.6 7 0 1.6-.6 2.7-1.4 3.6 2 .6 3.4 2.4 3.4 4.6 0 1.1-.4 2-1 2.8h3.8v3.4H16.6V24h3.8c-.6-.8-1-1.7-1-2.8 0-2.2 1.4-4 3.4-4.6-.8-.9-1.4-2-1.4-3.6 0-2.7 1.4-5 3.6-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="8.6" r="1.4" fill="currentColor" />
      <path d="M10 34v-6.6h28V34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 41v-4.6h36V41" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 34v-5M35 34v-5M24 30v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 27.4a2.2 2.2 0 1 1 4.4 0M35.1 27.4a2.2 2.2 0 1 1 4.4 0" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function PodiumStarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 6.5l2.3 4.8 5.2.8-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.8L24 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 41V27h9v14M19 41V21h10v20M29 41V30h9v11" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  )
}

export function PeopleGroupIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="14" r="5.2" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="10" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 41v-4.5c0-5 4.5-9 10-9s10 4 10 9V41"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 33.5v-2.3c0-3.5 3-6.4 7-6.9M44 33.5v-2.3c0-3.5-3-6.4-7-6.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GearMIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="4.5" />
      <path
        d="M17 40V22.5L24.5 32 32 22.5V40M32 40V22.5L39.5 32 47 22.5V40"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BulbIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 8a16 16 0 0 0-9 29.2c1.7 1.2 2.8 2.6 2.8 4.4V44h12.4v-2.4c0-1.8 1.1-3.2 2.8-4.4A16 16 0 0 0 32 8Z"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path d="M25.5 50h13M27 56h10" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M32 16v14M26 26l6 4 6-4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 22l5 2M58 22l-5 2M12 8l3.5 4M52 8l-3.5 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function PersonGearsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="18" r="7" stroke="currentColor" strokeWidth="3.4" />
      <path
        d="M12 46c0-8 6.3-14 14-14s14 6 14 14"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="47" cy="38" r="7.5" stroke="currentColor" strokeWidth="3" />
      <path
        d="M47 27v3.4M47 44.6V48M36 38h3.4M54.6 38H58M39.7 30.7l2.4 2.4M52 43.3l2.4 2.4M39.7 45.3l2.4-2.4M52 32.7l2.4-2.4"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BrainCoinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27 10c-5.5 0-9 4-9 8-3 1-5 4-5 7.5 0 2 .8 3.7 2 5-1 1.3-1.6 3-1.6 4.8 0 4 3 7 6.8 7.4.7 3 3.4 5.3 7 5.3 3.9 0 7-3.1 7-7V17c0-4-3-7-7.2-7Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path d="M27 17.5c-3 0-5 2-5.3 4.4M22 32c1.6 0 3-1 3.6-2.4M23.4 41c1.4 0 2.6-.8 3.2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="46" cy="40" r="10" stroke="currentColor" strokeWidth="2.8" />
      <path d="M46 34.5v11M42.5 38.3c0-1.8 1.6-2.8 3.5-2.8s3.5 1 3.5 2.6c0 3.4-7 1.8-7 5.2 0 1.6 1.6 2.7 3.5 2.7s3.5-1 3.5-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function MedalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4h14l-6 11h-2L13 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="20" cy="25" r="10.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M20 19.5l1.8 3.7 4 .6-3 2.9.8 4-3.6-1.9-3.6 1.9.8-4-3-2.9 4-.6L20 19.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function GavelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 8.5l7 7-3 3-7-7 3-3Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M16 14l7 7-9.5 9.5-7-7L16 14Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M6 33h13M4.5 34.5l3-3" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M27 5l3 3M31 9l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="13" width="30" height="19" rx="2.4" stroke="currentColor" strokeWidth="2.1" />
      <path d="M14 13V9.5A2.5 2.5 0 0 1 16.5 7h7a2.5 2.5 0 0 1 2.5 2.5V13" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M5 21h30M17 21v3.4h6V21" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
    </svg>
  )
}

export function LightningIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4L9 23h8l-3 13 15-19h-8l1-13Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l7 3v5.5c0 4.6-3 8.4-7 9.5-4-1.1-7-4.9-7-9.5V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.3 9.3v5.4l4.8-2.7-4.8-2.7Z" fill="currentColor" />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5 21v-7.5h2.5l.5-3H14.5V8.4c0-.9.3-1.6 1.7-1.6h1.4V4.2C17.3 4.1 16.3 4 15.1 4c-2.6 0-4.4 1.6-4.4 4.6v2.9H8v3h2.7V21h3.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 5.5c-.7.4-1.5.6-2.3.8a3.6 3.6 0 0 0-6.2 3.3A10.2 10.2 0 0 1 5 5.9a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6a3.7 3.7 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 3 17.9a10.3 10.3 0 0 0 5.5 1.6c6.6 0 10.2-5.4 10.2-10.2v-.5c.7-.5 1.3-1.1 1.8-1.8-.6.3-1.3.5-2 .6.7-.4 1.3-1.2 1.5-2Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
