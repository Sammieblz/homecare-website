import type { IconType } from 'react-icons';
import { FaAccessibleIcon, FaCar, FaClinicMedical, FaSchool, FaUsers } from 'react-icons/fa';

/** Service highlights - aligned with FAQ transportation answer (faq.tsx id: transportation). */
export const TRANSPORTATION_SERVICE_POINTS: {
  title: string;
  description: string;
  Icon: IconType;
}[] = [
  {
    Icon: FaAccessibleIcon,
    title: 'Developmental disabilities',
    description:
      'Door-to-door rides for individuals we serve, with consistent drivers who understand dignity, safety, and scheduling.',
  },
  {
    Icon: FaClinicMedical,
    title: 'Medical & NEMT',
    description:
      'Scheduled medical appointments and non-emergency medical transportation so clients get to care on time.',
  },
  {
    Icon: FaCar,
    title: 'Activity Day Center',
    description:
      'Transportation to and from our Activity Day Center for eligible participants in Greater Cleveland.',
  },
  {
    Icon: FaUsers,
    title: 'Seniors & community',
    description:
      'Senior transportation and community outings that help clients stay connected, not isolated.',
  },
  {
    Icon: FaSchool,
    title: 'Cleveland schools',
    description:
      'District-related transportation where we are contracted: safe, reliable routes and communication.',
  },
];
