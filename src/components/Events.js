import React from "react";
import "./Events.css";
import eventImage from "../assets/Artificial intelligence-bro.svg";

function Card({ image, title, description, buttonText }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={eventImage} alt={title} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
}

function Events() {
  const events = [
    {
      id: 1,
      title: "AI Workshop",
      description: "Nov 5, 2024",
      image: { eventImage },
      buttonText: "Register Now",
    },
    {
      id: 2,
      title: "Tech Talk: AI Ethics",
      description: "Dec 1, 2024",
      image: { eventImage },
      buttonText: "Register Now",
    },
  ];

  return (
    <section className="events" id="events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event) =>
          // <div className="event-card" key={event.id}>
          //   <h3>{event.title}</h3>
          //   <p>{event.date}</p>
          // </div>
          Card(event)
        )}
      </div>
    </section>
  );
}

export default Events;
