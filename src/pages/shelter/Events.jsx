import React, { useState } from 'react';
import Layout from '../../components/Layout';
import eventsData from '../../data/shelter/events.json'
// import "./Input.css";

function Events() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter(({ title, description }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section id="events" className="py-5">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              className="custom-search-input mx-auto d-block"
              placeholder="Search events by title or description..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="row">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(({ id, title, date, time, description, link, linkText }) => (
                <div className="col-lg-6" key={id}>
                  <div className="event-card p-4">
                    <h4 style={{ color: "#ff6b6b"}}>{title}</h4>
                    <p className="text-muted">
                      <i className="far fa-calendar-alt me-2" />
                      {date} | {time}
                    </p>
                    <p>{description}</p>
                 
                  </div>
                </div>
              ))
            ) : (
              <p>No events match your search.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Events;
