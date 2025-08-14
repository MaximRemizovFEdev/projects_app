import React, { useState } from "react";
import "./style.css";

interface IProject {
  id: number;
  title: string;
  description: string;
  link: string;
  technologies: string[];
  dateAdded: string;
}

export const ProjectCard: React.FC<IProject> = (props) => {
  const { id, title, description, technologies, link, dateAdded } = props;

  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const handleCompleted = (id: number) => {
    console.log(`Проект ${id} отмечен как выполненный`);
  };

  const handleInteresting = (id: number) => {
    console.log(`Проект ${id} отмечен как интересный`);
  };

  return (
    <div key={id} className="project-card">
      <h3 className="project-title">{title}</h3>

      <p
        className={`project-description ${
          expandedCards.includes(id) ? "expanded" : ""
        }`}
      >
        {description}
      </p>

      {description.length > 100 && (
        <button onClick={() => toggleExpanded(id)} className="toggle-button">
          {expandedCards.includes(id) ? "Свернуть" : "Подробнее"}
        </button>
      )}

      <div className="technologies-section">
        <strong>Технологии:</strong>
        <div className="technologies-container">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="date-added">
        <strong>Дата добавления:</strong> {dateAdded}
      </div>

      <div className="action-buttons">
        <button onClick={() => handleCompleted(id)} className="btn-completed">
          Выполнено
        </button>
        <button
          onClick={() => handleInteresting(id)}
          className="btn-interesting"
        >
          Интересно
        </button>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Открыть на GitHub →
      </a>
    </div>
  );
};
