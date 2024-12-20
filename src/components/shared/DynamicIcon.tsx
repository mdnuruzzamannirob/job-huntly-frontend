'use client';

import dynamic from 'next/dynamic';

// Mapping for icon families to their respective imports
const iconLibraries: { [key: string]: string } = {
  ai: 'react-icons/ai',
  bi: 'react-icons/bi',
  bs: 'react-icons/bs',
  cg: 'react-icons/cg',
  ci: 'react-icons/ci',
  di: 'react-icons/di',
  fa: 'react-icons/fa',
  fa6: 'react-icons/fa6',
  fc: 'react-icons/fc',
  fi: 'react-icons/fi',
  gi: 'react-icons/gi',
  go: 'react-icons/go',
  gr: 'react-icons/gr',
  hi: 'react-icons/hi',
  hi2: 'react-icons/hi2',
  im: 'react-icons/im',
  io: 'react-icons/io',
  io5: 'react-icons/io5',
  lia: 'react-icons/lia',
  lib: 'react-icons/lib',
  lu: 'react-icons/lu',
  md: 'react-icons/md',
  pi: 'react-icons/pi',
  ri: 'react-icons/ri',
  rx: 'react-icons/rx',
  si: 'react-icons/si',
  sl: 'react-icons/sl',
  tb: 'react-icons/tb',
  tfi: 'react-icons/tfi',
  ti: 'react-icons/ti',
  vsc: 'react-icons/vsc',
  wi: 'react-icons/wi',
};

// Type for props passed into DynamicIcon
type DynamicIconProps = {
  iconFamily: keyof typeof iconLibraries; // The family of the icon (e.g., 'fa', 'fi', 'md', etc.)
  icon: string; // The specific icon name (e.g., 'FaHome', 'FiSettings', etc.)
  fallback?: React.ReactNode; // Optional custom fallback element
};

const DynamicIcon = ({
  iconFamily,
  icon,
  fallback = null,
}: DynamicIconProps) => {
  // Ensure the iconFamily and icon are valid
  if (!iconLibraries[iconFamily] || !icon) {
    return null;
  }

  // Dynamically import the icon from the appropriate library
  const IconComponent = dynamic(
    async () => {
      try {
        const mod = await import(`${iconLibraries[iconFamily]}`);
        return mod[icon] || null; // Return the icon if it exists, or null if not
      } catch {
        return null;
      }
    },
    { ssr: false, loading: () => <>{fallback}</> },
  );

  // If IconComponent is null, display a fallback or return null
  return IconComponent ? <IconComponent /> : null;
};

export default DynamicIcon;
