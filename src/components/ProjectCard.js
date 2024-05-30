import { Col } from "react-bootstrap";

function ProjectCard({
  title,
  description,
  implementation,
  imgUrl,
  projectLink,
}) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title-link"
            >
              {title}
            </a>
          </h4>

          <div className="description">{description}</div>
          <div className="implementation">{implementation}</div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
