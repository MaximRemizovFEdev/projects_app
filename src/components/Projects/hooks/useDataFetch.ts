interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  technologies: string[];
  dateAdded: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "React Todo App",
    description:
      "Простое приложение для управления задачами, созданное с использованием React и TypeScript. Включает функциональность добавления, удаления и отметки выполненных задач.",
    link: "https://github.com/user/react-todo-app",
    technologies: ["React", "TypeScript", "CSS"],
    dateAdded: "2024-01-15",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Интерактивная панель для отображения погодных данных в реальном времени. Интегрируется с внешним API для получения актуальной информации о погоде.",
    link: "https://github.com/user/weather-dashboard",
    technologies: ["JavaScript", "API", "HTML", "CSS"],
    dateAdded: "2024-01-20",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Персональный сайт-портфолио с современным дизайном и адаптивной версткой. Включает секции для проектов, навыков и контактной информации.",
    link: "https://github.com/user/portfolio-website",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    dateAdded: "2024-01-25",
  },
];

export const useDataFecth = () => {
  return projectsData;
};
