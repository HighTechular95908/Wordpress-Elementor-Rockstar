import React from "react";
import { Card, Button } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiNestjs, SiMysql } from "react-icons/si";
import styles from "./ProjectCard.module.css";

const assets = {
  "Project1": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project1}
      alt="Project1"
      className="card-img"
    />
  ),
  "Project2": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project2}
      alt="Project2"
      className="card-img"
    />
  ),
  "Project3": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project3}
      alt="Project3"
      className="card-img"
    />
  ),
  "Project4": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project4}
      alt="Project4"
      className="card-img"
    />
  ),
  "Project5": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project5}
      alt="Project5"
      className="card-img"
    />
  ),
  "Project6": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project6}
      alt="Project6"
      className="card-img"
    />
  ),
  "Project7": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project7}
      alt="Project7"
      className="card-img"
    />
  ),
  "Project8": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project8}
      alt="Project8"
      className="card-img"
    />
  ),
  "Project9": (
    <ImageHolder
      // primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.Project9}
      alt="Project9"
      className="card-img"
    />
  ),
};

const icons = {
  React: <FaReact className={styles.icon} style={{ color: "#61DAFB" }} />,
  CSS: <FaCss3Alt className={styles.icon} style={{ color: "#1572B6" }} />,
  HTML: <FaHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  Bootstrap: (
    <FaBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
  ),
  NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
};

const ProjectCard = (props) => {
  return (
    <Card className={styles.container}>
      {assets[props.title]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack.map((tech, index) => icons[tech])}
        </Card.Text>
        <Card.Text>{props.content}</Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant="primary"
            href={props.liveUrl}
            target="_blank"
          >
            View Live
          </Button>
        ) : null}
        {props.gitHubUrl ? (
          <Button
            className={styles.button}
            variant="dark"
            href={props.gitHubUrl}
            target="_blank"
          >
            View on GitHub
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
