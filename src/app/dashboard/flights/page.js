'use client';
import { useEffect, useState } from 'react';
import { pool } from '../../../lib/db';

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (!userData) return;
    setUser(JSON.parse(userData));
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    const [rows] = await pool.query('SELECT * FROM flights');
    setFlights(rows);
  };

  const bookFlight = async (flightId) => {
    if (!user) return;
    await pool.query(
      'INSERT INTO bookings (user_id, flight_id) VALUES (?, ?)',
      [user.id, flightId]
    );
    alert('Booking successful!');
    fetchFlights();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Flights</h2>
      <div className="space-y-4">
        {flights.map(flight => (
          <div key={flight.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{flight.departure} → {flight.destination}</p >
              <p>Price: ${flight.price}</p >
              <p>Available seats: {flight.available_seats}</p >
            </div>
            <button 
              onClick={() => bookFlight(flight.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}