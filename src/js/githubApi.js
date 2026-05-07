const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error(`Usuário ${userName} não encontrado.`);
    }

    return response.json();
}

export async function fetchGitHubRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=updated`);
    
    if (!response.ok) {
        throw new Error(`Repositórios de ${userName} não encontrados.`);
    }

    return response.json();
}