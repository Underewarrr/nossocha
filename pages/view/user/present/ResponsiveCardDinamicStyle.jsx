import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaChevronRight, FaHeart } from 'react-icons/fa';
import { useRouter } from "next/router";

const ResponsiveCard = ({ presentId, presentName, phoneNumber, presentDonator, courseLikes, courseAuthor, courseHearts, coursePrice }) => {
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
          <p>Presente name :{presentName}</p>
          <p>Donator name :{presentDonator}</p>
          <p>Phone number:{phoneNumber}</p>
          <div class="d-flex justify-content-between">

          </div>
         
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResponsiveCard;
