/** Home page: single source for the three core offerings (avoids duplicate copy blocks). */
export interface HomeServiceOffering {
  id: string;
  title: string;
  path: string;
  summary: string;
  bullets: string[];
  cta: string;
}

export const HOME_SERVICE_OFFERINGS: HomeServiceOffering[] = [
  {
    id: 'home-care',
    title: 'Home health care',
    path: '/home-care-services',
    summary: 'Personal care, companionship, and tailored support delivered with respect.',
    bullets: ['Personal care and companionship', 'Support with daily routines', 'Dignified, respectful assistance'],
    cta: 'Explore home care',
  },
  {
    id: 'transportation',
    title: 'Transportation',
    path: '/transportation-services',
    summary: 'Safe, dependable rides to appointments, programs, and community activities.',
    bullets: ['Safe, reliable rides', 'Appointments, programs, outings', 'Trained, consistent drivers'],
    cta: 'Explore transportation',
  },
  {
    id: 'day-center',
    title: 'Activity day center',
    path: '/activity-day-center',
    summary: 'Person-centered activities and life skills in a supportive social environment.',
    bullets: ['Person-centered activities', 'Life skills and social connection', 'Supportive, structured environment'],
    cta: 'Explore the day center',
  },
];
