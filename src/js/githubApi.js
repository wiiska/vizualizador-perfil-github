const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error(`Usuário ${userName} não encontrado.`);
    }

    return response.json();
}
