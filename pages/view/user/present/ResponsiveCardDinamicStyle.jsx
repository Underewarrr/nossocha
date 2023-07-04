import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios';

const ResponsiveCard = ({
  presentId,
  presentName,
  phoneNumber,
  presentDonator,
  acepted,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState(acepted);
  const handleToggleAcceptance = async () => {
    setIsLoading(true);
  
    try {
      const email = localStorage.getItem('email');
      const { data } = await axios.post(
        `/api/present/update?id=${presentId}`,
        {
          acepted: !isAccepted,
          email: 'email@email.com',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('API response:', data);
      setIsAccepted(!isAccepted); // Update the acceptance state
      // Handle the response or update the UI as needed
      // You may consider updating the 'presents' state with the updated data
    } catch (error) {
      console.error('Error updating present acceptance:', error);
    } finally {
      setIsLoading(false);
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
            {isAccepted ? (
              <Alert variant="success">Your present has been accepted.</Alert>
            ) : (
              <Alert variant="danger">Your present has not been approved yet.</Alert>
            )}
            {!isAccepted && (
              <Button onClick={handleToggleAcceptance} variant="success" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Accept'}
              </Button>
            )}
            {isAccepted && (
              <Button onClick={handleToggleAcceptance} variant="danger" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Revoke'}
              </Button>
            )}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResponsiveCard;
