const paths = {
  phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" /></>,
  whatsapp: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z" /><path d="M8.5 9.5c.6 2 2 3.4 4 4l1-1 2 1-1 2c-4-.4-7-3.4-7.5-7.5l2-1 1 2-1.5 1.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  arrow: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  wrench: <><path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 12l-3-3 3.7-2.7Z" /><path d="m5 19 1 1" /></>,
  pipe: <><path d="M4 4v5a3 3 0 0 0 3 3h7a3 3 0 0 1 3 3v5" /><path d="M2 4h4M15 20h4M14 4h6v4h-6zM4 16h6v4H4z" /></>,
  droplet: <><path d="M12 22a8 8 0 0 0 8-8c0-4-8-12-8-12S4 10 4 14a8 8 0 0 0 8 8Z" /><path d="M8 15a4 4 0 0 0 4 4" /></>,
  drain: <><path d="M4 4h16v6H4zM7 10v10M12 10v10M17 10v10M5 20h14" /><path d="M8 7h.01M12 7h.01M16 7h.01" /></>,
  geyser: <><rect x="6" y="3" width="12" height="18" rx="3" /><path d="M10 7h4M10 17h4M9 12h6" /><path d="M3 7h3M18 7h3M3 17h3M18 17h3" /></>,
  shower: <><path d="M4 8a8 8 0 0 1 16 0M12 8v4M7 14l-1 2M11 14l-1 2M15 14l-1 2M19 14l-1 2" /><path d="M12 12h8" /></>,
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  star: <><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" /></>,
  drop: <><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z" /></>,
};

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.wrench}
    </svg>
  );
}
