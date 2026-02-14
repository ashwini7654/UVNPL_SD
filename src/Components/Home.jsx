import React from "react";
import ServiceCard from "./ServiceCard";
import busImage from "../assets/bus.avif";
import trainImage from "../assets/train.avif";
import flightImage from "../assets/flight.jpg";
import hotelImage from "../assets/hotel.jpg";
import movieImage from "../assets/movies.jpg";
import eventImage from "../assets/event.jpg";

export default function Home() {
  const services = [
    { title: "Bus Tickets",
      desc: "Book bus tickets with best offers.",
      bgImage: busImage ,
      link: "/bus"
    },
    { title: "Train Tickets", 
      desc: "Book train tickets instantly.", 
      bgImage: trainImage ,
      link: "/train"
    },
    { title: "Flight Tickets",
      desc: "Get cheap flights in seconds.",
      bgImage:flightImage ,
      link: "/flight"
    },
    { title: "Hotels",
     desc: "Book hotels with luxury comfort.",
     bgImage:hotelImage,
     link: "/hotel"
     },
    { title: "Movies",
      desc: "Book movie tickets with ease.",
      bgImage:movieImage,
      link: "/movie"
    },
    { title: "Events",
      desc: "Concerts, shows and events booking.",
      bgImage:eventImage,
      link: "/event"
     },
     {
    title: "Tour Packages",
    desc: "Explore tour packages with customized plans.",
    bgImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    link: "/tour"
  },
  {
    title: "Cruise Booking",
    desc: "Book cruise tickets with premium facilities.",
    bgImage: "https://images.unsplash.com/photo-1671886790198-85d6cd66b741?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VyaXNlfGVufDB8fDB8fHww",
    link: "/cruise"
  },
  {
    title: "Sports Tickets",
    desc: "Book cricket, football and other sports tickets.",
    bgImage: "https://plus.unsplash.com/premium_photo-1677870728119-52aef052d7ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZXN8ZW58MHx8MHx8fDA%3D",
    link: "/sports"
  }, 
  {
    title: "Cab Booking",
    desc: "Book cab rides with secure and fast service.",
    bgImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    link: "/cab"
  },
  ];

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heading}>
          One Platform for <span style={styles.accent}>All Bookings</span>
        </h1>

        <p style={styles.subtext}>
          Book bus, train, flight, hotels, movies and events from one universal platform.
        </p>

        <div style={styles.searchBox}>
          <input style={styles.input} type="text" placeholder="Search tickets, hotels, movies..." />
          <button style={styles.searchBtn}>Search</button>
        </div>
      </section>

      <section style={styles.grid}>
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            desc={item.desc}
            bgImage={item.bgImage}
            link={item.link}
          />
        ))}
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px 40px",
  },
  hero: {
    textAlign: "center",
    padding: "50px 10px",
    borderRadius: "20px",
    background: "rgba(69,69,69,0.15)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.1)",
    marginBottom: "40px"
  },
  heading: {
    fontSize: "42px",
    fontWeight: "900",
    marginBottom: "10px",
  },
  accent: {
    color: "#0000ee",
  },
  subtext: {
    fontSize: "15px",
    fontWeight: "300",
    color: "#eee",
    maxWidth: "650px",
    margin: "0 auto 25px auto",
    lineHeight: "22px"
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  input: {
    width: "320px",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    outline: "none",
    fontWeight: "500"
  },
  searchBtn: {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    background: "#0000ee",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  }
};
