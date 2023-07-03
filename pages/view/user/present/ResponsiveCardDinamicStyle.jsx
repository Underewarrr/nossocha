import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { FaChevronRight, FaHeart } from 'react-icons/fa';
import { useRouter } from "next/router";

const ResponsiveCard = ({ presentId, presentName, phoneNumber, presentDonator, acepted }) => {
  const router = useRouter();

  const handleCourse = () => {
    router.push(`/view/user/course/underewar/tibia-fullstack/details/${courseId}`);
  }

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
              <Alert variant="success">
                Your present has been accepted.
              </Alert>
            ) : (
              <Alert variant="danger">
                Your present has not been approved yet.
              </Alert>
            )}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResponsiveCard;
