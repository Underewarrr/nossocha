import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from "axios"


const ResponsiveCard = ({
  presentId,
  presentName,
  phoneNumber,
  presentDonator,
  acepted,
}) => {
  const router = useRouter();



  const handleAcceptPresent = async (presentId) => {
    try {
      
      const response = await axios.put(`/api/present/update/${presentId}`, {
        accepted: true,
      });
      console.log('API response:', response.data);
      // Handle the response or update the UI as needed
      // You may consider updating the 'presents' state with the updated data
    } catch (error) {
      console.error('Error accepting present:', error);
    }
  };


  const isEmailAvailable = localStorage.getItem('email') !== null;

  return (
    <Card className="main">
      <Card.Header>
        <h1>{presentName}</h1>
      </Card.Header>
      <Card.Body className="container">
        <Card.Text className="text-container">
          <span></span>
          <p>Id: {presentId}</p>
          <p>Present name: {presentName}</p>
          <p>Donator name: {presentDonator}</p>
          <p>Phone number: {phoneNumber}</p>
          <div className="d-flex justify-content-between">
            {acepted ? (
              <Alert variant="success">Your present has been accepted.</Alert>
            ) : (
              <Alert variant="danger">Your present has not been approved yet.</Alert>
            )}
            {!acepted && isEmailAvailable && (
            <Button onClick={() => handleAcceptPresent(presentId)} variant="primary">
            Accept
          </Button>
          
            )}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResponsiveCard;
