import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ContactMap = ({ contacts }) => {
    return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh' ,width:'100vw' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {contacts.map((contact) => (
            <Marker
                key={contact.id}
                position={[contact.latitude, contact.longitude]}
            >
                <Popup>
                    <strong>{contact.name}</strong>
                    <br />
                    Phone: {contact.phone}
                </Popup>
            </Marker>
        ))}
    </MapContainer>
    );
};

export default ContactMap;
