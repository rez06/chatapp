import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Sidebar() {
  const rooms = ['first room', 'second room', 'third room'];
  return (
    <>
      <h2>Available rooms</h2>
    <ListGroup>
        {rooms.map((rooms, idx) => (
        <ListGroup.Item key={idx}>{rooms}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
    
  )
}
