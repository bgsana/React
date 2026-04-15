// Estrutura
const name = "Matheus";

const data = {
    age: 31,
    job: "Programador"
}

const skills = ["React", "WebApi", "Banco de dados Relacional"]

const projects = [
    { name: "Portfólio", tech: "React + CSS", status: "Finalizado"},
    { name: "Lista de Tarefas", tech: "C# + .NET", status: "Em andamento"}
];

const TemplateExpression = () => {
  return (
    <div>
        <p>A soma é {2+2}</p>

        <h3>Bem vindo, {name} </h3>
        <p>
            Sua idade é {data.age} anos e você é um {data.job}.
        </p>

        {/* Length devolve quanto itens existem no array. */}
        <p>Você tem {skills.length} habilidades</p>

        <h4>Habilidades</h4>

        <ul>
            {skills.map((skill) => (
                <li key={skill}> {skill} </li>
            ))}
        </ul>

        <h4>Projetos</h4>
        
        <ul>
            {projects.map((project) => (
                <li key={project.name}>
                    {project.name} - {project.tech} - {project.status}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TemplateExpression;