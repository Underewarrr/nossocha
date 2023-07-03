import Link from "next/link";
import { Card, ListGroup, Container, Button, Alert } from "react-bootstrap";
import Header from "./components/Header";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";
import WhatsAppForm from './view/user/register-wpp'

export default function Index() {
  return (
    <>
      <Header />
    <WhatsAppForm />
      

    </>
  );
}
