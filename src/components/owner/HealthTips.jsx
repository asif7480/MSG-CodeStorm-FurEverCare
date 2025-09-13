import React from 'react'
import healthTips from "../../data/healthTips.json"

function HealthTips() {
    return (
        <>
            <div className="row mb-5">
                <div className="col-12">
                    <h3><i className="fas fa-medkit me-2" />Health Tips</h3>
                </div>

                {healthTips.map(({ id, iconClass, title, description, tipsHeading, tips, audioSrc }) => (
                    <div className="col-lg-4" key={id}>
                        <div className="card pet-care-card">
                            <div className="card-body">
                                <h3><i className={iconClass} />{title}</h3>
                                <p>{description}</p>
                                <h5 className="mt-3">{tipsHeading}</h5>
                                <ul>
                                    {tips.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                                <audio controls className="audio-player">
                                    <source src={audioSrc} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HealthTips
