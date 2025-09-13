import trainingTips from '../../data/trainingTips';
function TrainingTips() {
  return (
  <div className="row mb-5">
  <div className="col-12">
    <h3><i className="fas fa-graduation-cap me-2" />Training Tips</h3>
  </div>

  {trainingTips.map(({ id, icon, title, description, subheading, steps, audioSrc }) => (
    <div className="col-lg-6 mb-4" key={id}>
      <div className="card pet-care-card h-100">
        <div className="card-body d-flex flex-column">
          <h3><i className={icon + " me-2"} />{title}</h3>
          <p>{description}</p>
          <h5 className="mt-3">{subheading}</h5>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <audio controls className="audio-player mt-auto">
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  ))}
</div>

  );
}
export default TrainingTips;