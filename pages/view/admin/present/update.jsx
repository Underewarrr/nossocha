import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const ResponsiveCard = ({
  presentId,
  presentName,
  phoneNumber,
  presentDonator,
  accepted,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleAcceptance = async () => {
    setIsLoading(true);
    try {
      const email = localStorage.getItem('email');
      const response = await axios.put(`/api/present/update?id=${presentId}`, {
        accepted: !accepted,
        email: email,
      });
      console.log('API response:', response.data);
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
            {accepted ? (
              <Alert variant="success">Your present has been accepted.</Alert>
            ) : (
              <Alert variant="danger">Your present has not been approved yet.</Alert>
            )}
            {!accepted && isEmailAvailable && (
              <Button onClick={handleToggleAcceptance} variant="primary" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Accept'}
              </Button>
            )}
            {accepted && isEmailAvailable && (
              <Button onClick={handleToggleAcceptance} variant="primary" disabled={isLoading}>
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
