import React, { useState } from 'react';
import './TimeSlots.css'; // Custom styles (optional)
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';

const timeSlotsData = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM',
];

const TimeSlots = () => {
    const [bookedSlots, setBookedSlots] = useState(['10:00 AM', '12:30 PM']);

    const handleSlotClick = (slot) => {
        if (!bookedSlots.includes(slot)) {
            setBookedSlots([...bookedSlots, slot]);
            alert(`Appointment booked for ${slot}`);
        }
    };
    return (
        <Layout>
            <Hero title={`Available Time Slots`} description={`Select your convenient time slot`} btnLink={``} />
            <div className="container py-5">

                <div className="time-slots-wrapper">
                    {timeSlotsData.map((slot, index) => (
                        <div
                            key={index}
                            className={`time-slot ${bookedSlots.includes(slot) ? 'booked' : 'available'}`}
                            onClick={() => handleSlotClick(slot)}
                        >
                            {slot}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>

    );
};

export default TimeSlots;
