import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default function Index() {
  const [presentList, setPresentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [present, setPresent] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [successRegister, setSuccessRegister] = useState(false);
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  useEffect(() => {
    fetchPresentList();
  }, []);

  const fetchPresentList = async () => {
    try {
      const response = await axios.get('/api/present-list/list');
      setPresentList(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching present list:', error);
      setLoading(false);
    }
  };

  const register = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const { data } = await axios.post('/api/present/add', {
        present,
        name,
        phone_number: phoneNumber,
      });
      setSuccessRegister(true);
      setFailedTryRegister(false);
      console.log('Registration successful:', data);
      // Optionally, you can refresh the present list after successful registration
      fetchPresentList();
    } catch (error) {
      console.error('Error registering:', error);
      setFailedTryRegister(true);
    }
  };

  return (
    <>
      <div id="gift-list" className="styles giftList">
        <Container>
          <h1>Lista de Presente</h1>
          <p>Confira abaixo nossa lista de presentes:</p>
          <div className="styles giftListItems">
            {loading ? (
              <p>Loading...</p>
            ) : (
              presentList.map((present) => (
                <div key={present.id} className="styles giftItem">
                  {/* Use a placeholder image if the actual image is not available */}
                  <img
                    className="img-fluid"
                    src={present.image || 'placeholder-image-url'}
                    alt={present.title || 'No Title'}
                  />
                  <div className="styles giftText">
                    <h2>{present.present}</h2>
                    <p>{present.name}</p>
                    <p>{present.phone_number}</p>
                    <p>{present.acepted ? 'Aceito' : 'Não aceito'}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Container>
      </div>

      <div id="rsvp" className="styles rsvp">
        <Container>
          <h1>Confirme seu presente!</h1>
          <form className="styles rsvpForm" onSubmit={register}>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Número de telefone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <select
              value={present}
              onChange={(e) => setPresent(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              {/* Populate options dynamically based on the presentList */}
              {presentList.map((present) => (
                <option key={present.id} value={present.id}>
                  {present.present}
                </option>
              ))}
            </select>
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
          {successRegister && <p>Registration successful!</p>}
          {failedTryRegister && <p>Failed to register. Please try again.</p>}
        </Container>
      </div>
    </>
  );
}
