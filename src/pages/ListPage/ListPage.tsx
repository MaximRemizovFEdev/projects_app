import { Projects as ProjectCards } from "../../components/Projects/Projects";

export const ListPage = () => {
    return (
    <>
        <header className="app-header">
            <h1>GitHub Проекты</h1>
            <p>Коллекция интересных проектов с GitHub</p>
        </header>

        <main className="app-main">
            <ProjectCards />
        </main>
    </>
  )
}