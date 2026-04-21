interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  /** Optional id on the title element for aria-labelledby on sections */
  titleId?: string;
  /** Use on dark brand heroes (white typography + divider) */
  tone?: 'default' | 'onDark';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  titleId,
  tone = 'default',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const isDark = tone === 'onDark';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`font-body text-xs uppercase tracking-[0.18em] ${isDark ? 'text-white/75' : 'text-slate-500'}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={`font-display text-3xl leading-tight md:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`font-body max-w-3xl text-lg leading-relaxed ${isDark ? 'text-white/90' : 'text-slate-700'}`}
        >
          {description}
        </p>
      ) : null}
      <div className={`mt-2 h-px w-full max-w-5xl ${isDark ? 'bg-white/20' : 'bg-slate-200/80'}`} />
    </div>
  );
}

