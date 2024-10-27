import React from 'react';
import './Events.css';

function Events() {
  const events = [
    { id: 1, title: 'AI Workshop', date: 'Nov 5, 2024' },
    { id: 2, title: 'Tech Talk: AI Ethics', date: 'Dec 1, 2024' },
  ];

  return (
    <section className="events" id="events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
