import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Alert, Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";

export default function Index() {
  const [phone_number, setPhone_number] = useState("");
  const [name, setName] = useState("");
  const [present, setPresent] = useState("");
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const [sucessRegister, setSucessRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [presentsList, setPresentsList] = useState([]);

  useEffect(() => {
    // Fetch presents list from the API
    const fetchPresents = async () => {
      try {
        const { data } = await axios.get("/api/present-list/list");
        setPresentsList(data);
      } catch (error) {
        console.error("Error fetching presents:", error);
      }
    };

    fetchPresents();
  }, []);

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

  const router = useRouter();

  const register = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true);

    try {
      const { data } = await axios.post("/api/present-list/add", {
        present,
        name,
      });
      setSucessRegister(true);
      setFailedTryRegister(false);
      return data;
    } catch (error) {
      setFailedTryRegister(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <Card
        bg="dark"
        style={{
          width: "",
          marginTop: "1rem",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setName(value)}
            name="name"
            type="name"
            placeholder="name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Present:</Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setPresent(value)}
            placeholder="Enter a present"
            name="present"
            type="text"
          />
        </Form.Group>

        {loading ? <Loading isLoading={loading} /> : null}

        <div className="d-grid gap-2 mt-2">
          <Button
            onClick={register}
            className="LoginButton"
            variant="light"
            type="submit"
          >
            Registrar
          </Button>
          {sucessRegister ? (
            <Alert
              variant="success"
              onClose={() => setSucessRegister(false)}
              dismissible
            >
              Presente registrado
            </Alert>
          ) : null}
          {failedTryRegister ? (
            <Alert
              variant="danger"
              onClose={() => setFailedTryRegister(false)}
              dismissible
            >
              Algo deu errado, tente novamente.
            </Alert>
          ) : null}
        </div>
      </Card>
    </>
  );
}
