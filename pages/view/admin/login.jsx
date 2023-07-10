import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const login = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      router.push("/view/admin/present/list");
      setToken(data.message);
      window.localStorage.setItem("key", data.message);
      window.localStorage.setItem("email", email);

      return data;
    } catch (error) {
      setFailedTryLogin(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <Header />
      <Card bg="dark" style={{ width: "", marginTop: "1rem" }} className="flex container p-2">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {loading ? (
           <Loading isLoading={loading} />
          ) : null}

          <div className="d-grid gap-2 mt-2 text-dark">
            <Button
              className="LoginButton"
              variant="light"
              type="submit"
              onClick={login}
            >
              Login
            </Button>
            {/* <Button className="RegisterButton" variant="light" type="submit">
              <Link href="/user/register" className="text-dark">
                Ainda não tenho conta
              </Link>
            </Button> */}
            {failedTryLogin ? (
              <Alert
                variant="danger"
                onClose={() => setFailedTryLogin(false)}
                dismissible
              >
                O endereço de e-mail ou a senha não estão corretos. Por favor,
                tente novamente.
              </Alert>
            ) : null}
          </div>
        </Form>
      </Card>
    </>
  );
}
