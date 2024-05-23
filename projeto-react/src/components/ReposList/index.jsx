import { useEffect } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/lcsnns/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
            console.log(resjson);
        })
    }, []);

    return (
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <b>Nome:</b> {repositorio.name}
                    <b>Linguagem:</b> {repositorio.language}
                    <a target='_blank' href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
    )
}

export default ReposList;