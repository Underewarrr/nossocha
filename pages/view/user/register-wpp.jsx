import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const WhatsAppForm = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const handleItemSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleNumberChange = (e) => {
    setWhatsappNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any actions with the selected items and WhatsApp number here

    // Reset form fields
    setSelectedItems([]);
    setWhatsappNumber("");
  };

  return (
    <Card>
        <Card.Header>
            Selecione
        </Card.Header>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="itemSelect">
        <Form.Label>Select items:</Form.Label>
        <Form.Check
          type="checkbox"
          label="Item 1"
          checked={selectedItems.includes("Item 1")}
          onChange={() => handleItemSelect("Item 1")}
        />
        <Form.Check
          type="checkbox"
          label="Item 2"
          checked={selectedItems.includes("Item 2")}
          onChange={() => handleItemSelect("Item 2")}
        />
        <Form.Check
          type="checkbox"
          label="Item 3"
          checked={selectedItems.includes("Item 3")}
          onChange={() => handleItemSelect("Item 3")}
        />
      </Form.Group>
      <Form.Group controlId="whatsappNumber">
        <Form.Label>WhatsApp number:</Form.Label>
        <Form.Control
          type="text"
          value={whatsappNumber}
          onChange={handleNumberChange}
        />
      </Form.Group>
      <div className="d-grid gap-2 mt-2">
      <Button type="submit">Send Information</Button>
      </div>
      
    </Form>
    </Card>
  );
};

export default WhatsAppForm;
