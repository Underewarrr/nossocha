import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import { Card, Container } from "react-bootstrap";
import { BeatLoader } from 'react-spinners';
const list = ( ) => {
  const router = useRouter();
  const { id } = router.query;
  const [present, setPresent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/api/present/list`);
        setPresent(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) {
    return <p>Loading</p>
  }

  if (!present) {
    return <div>Present not found</div>;
  }

  return (
    <>
      <Header />
      <Container>

      <Card>
        TESTE
      </Card>
      </Container>
    </>
  );
};

export default list;