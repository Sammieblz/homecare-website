const MapEmbed = () => {
  return (
    <div className="mt-4 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm ring-1 ring-slate-200/60">
      <div className="aspect-[4/3] min-h-[220px] w-full sm:min-h-[280px] md:aspect-auto md:h-80 lg:h-[420px]">
        <iframe
          title="Oghosa office location on Google Maps"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=26250%20Euclid%20Ave%20suite%20417,%20Euclid,%20OH%2044132+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};
  
  export default MapEmbed;
  