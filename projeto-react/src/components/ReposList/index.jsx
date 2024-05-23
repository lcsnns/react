import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/lcsnns/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
    }, []);

    return (
        <>
            {setEstaCarregando && (
            <h1>Carregando...</h1>
            )}
            <ul>
                {repos.map(repositorio => (
                    <li key={repositorio.id}>
                        <b>Nome:</b> {repositorio.name} <br />
                        <b>Linguagem:</b> {repositorio.language} <br />
                        <a target='_blank' href={repositorio.html_url}>Visitar no GitHub</a> <br />
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
            </>
            )
}

export default ReposList;