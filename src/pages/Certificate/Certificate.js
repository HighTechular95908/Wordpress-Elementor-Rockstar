import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, ProjectCard } from "../../components";
import CertificateData from "../../data/Certificate.json";
import styles from "./Certificate.module.css";

const Certificate = () => {
  return (
    <React.Fragment>
      <Header title="Certificate" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {CertificateData.map((obj, index) => (
            <ProjectCard
              key={index}
              title={obj.title}
              content={obj.content}
              gitHubUrl={obj.gitHubUrl}
              liveUrl={obj.liveUrl}
              techStack={obj.techStack}
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Certificate;
