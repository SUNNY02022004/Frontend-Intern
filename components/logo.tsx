export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M75.5 35.5C88.5 48.5 88.5 69.5 75.5 82.5C62.5 95.5 41.5 95.5 28.5 82.5C15.5 69.5 15.5 48.5 28.5 35.5C41.5 22.5 62.5 22.5 75.5 35.5ZM65.5 45.5C72.5 52.5 72.5 63.5 65.5 70.5C58.5 77.5 47.5 77.5 40.5 70.5C33.5 63.5 33.5 52.5 40.5 45.5C47.5 38.5 58.5 38.5 65.5 45.5Z" />
      <path d="M35 25C35 25 45 5 65 15" strokeWidth="8" stroke="currentColor" fill="none" strokeLinecap="round" />
    </svg>
  )
}

