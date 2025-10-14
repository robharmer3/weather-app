function ArchiveTemp({ maxTemp, minTemp, meanTemp, units }) {
  return (
    <>
      <h2 className="temp">
        Average Temperature: {meanTemp}
        {units}
      </h2>
      <h3>
        Maximum Temperature: {maxTemp}
        {units}
      </h3>
      <h3>
        Minimum Temperature: {minTemp}
        {units}
      </h3>
    </>
  );
}

export default ArchiveTemp;
