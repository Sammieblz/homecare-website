const MapEmbed = () => {
    return (
      <div className="w-full h-64 md:h-96 lg:h-[500px] xl:h-[550px] mt-4 rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=26250%20Euclid%20Ave%20suite%20417,%20Euclid,%20OH%2044132+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    );
  };
  
  export default MapEmbed;
  