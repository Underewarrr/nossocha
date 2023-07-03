import React, { useEffect } from "react";
import Header from "../../././../components/Header";
import ProtectedRoute from "../../../components/ProtectedRoute";
import axios from "axios";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import { Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function Index() {

 const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const { data } = await axios.post('/api/user/get', { email: window.localStorage.getItem('email') });
      setProfile({
        id: data.message.id,
        balance: data.message.balance,
        email: data.message.email,
        hasPremium: data.message.premdays > 0,
        premdays: data.message.premdays,
        type: data.message.type
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

    



    return (
        <>
        <ProtectedRoute />
        <Header />
            <MDBContainer className="py-5">
               
                    <Card.Header>
                        <MDBRow>
                            <MDBCol>
                                <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4">
                                    <MDBBreadcrumbItem>
                                        <a href='/user/panel'>Panel</a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem active>View Profile</MDBBreadcrumbItem>
                                </MDBBreadcrumb>
                            </MDBCol>
                        </MDBRow>
                    </Card.Header>
                    <Card
                    bg="dark"
                    text="white"
                >
                    <br></br>
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="bg-dark mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '150px' }}
                                        fluid />
                                    <p className="text-muted mb-1">{profile.id}</p>
                                    <p className="text-muted mb-1">{profile.email}</p>
                                    <p className="text-muted mb-4">{profile.balance} R$</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Button 
                                        href="/user/balance/add"
                                        variant="light"

                                        >
Adicionar saldo
                                        </Button>
                                        <Button
                                        variant="warning"
                                        >
Reportar Erro
                                        </Button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>


                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4 bg-dark">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Possui Premium</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            {profile.hasPremium > 0 && (
                                            <MDBCardText className="d-flex justify-content-between align-items-center">
                                            Conta Premium
                                            <span className="badge bg-success rounded-pill">{profile.premdays} days</span>
                                            </MDBCardText>)}
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profile.email}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Saldo</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profile.balance} R$</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Tipo de conta:</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText>{profile.type === 1 ? "Jogador" : profile.type}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>


                        </MDBCol>
                    </MDBRow>
                </Card>
            </MDBContainer>
        </>
      );
}