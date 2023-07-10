import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Navbar, Nav, Card, ListGroup, Container, Button, Alert } from "react-bootstrap";
import PresentList from "./components/PresentList";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";
import styles from './App.module.css';
import Header from "./components/Header";

export default function Index() {
  const [presentList, setPresentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPresentList = async () => {
      try {
        const response = await axios.get('/api/present/list');
        setPresentList(response.data);
        setLoading(false);
        console.log('API response:', response.data);
      } catch (error) {
        console.error('Error fetching present list:', error);
        setLoading(false);
      }
    };

    fetchPresentList();
  }, []);

  return (
    <>
     <Header />

     
    </>
  );
}
