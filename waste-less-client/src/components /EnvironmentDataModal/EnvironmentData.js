function EnvironmentData({ selectedItem, environmentalImpact }) {
  if (!environmentalImpact) {
    return null;
  }
  const {
    carbon_footprint,
    land_usage,
    water_usage,
    packaging,
    energy_consumption,
  } = environmentalImpact[0];

  return (
    <div className="environment-data">
      <div className="environment-data__container">
        <div className="environment-data__header"></div>
        <p className="environment-data__close">&times;</p>
        <h3 className="environment-data__item-name">{selectedItem}</h3>
        <div className="environment-data__content"></div>
        <p>{carbon_footprint}</p>
        <p>{water_usage}</p>
        <p>{land_usage}</p>
        <p>{packaging}</p>
        <p>{energy_consumption}</p>
      </div>
    </div>
  );
}

export default EnvironmentData;
