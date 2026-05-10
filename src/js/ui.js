export const elements = {
    inputSearch: document.getElementById('input-search'),
    btnSearch: document.getElementById('btn-search'),
    profileResults: document.querySelector('.profile-results'),
};

export function renderLoading() {
    elements.profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearProfileResults() {
    elements.profileResults.innerHTML = '';
}

export function renderUserProfile(userData, userRepos) {
    const repositoriesHTML = userRepos.length > 0 ? userRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank" class="repository-link">
            <div class="repository-card">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                    <span>👀 ${repo.watchers_count}</span>
                    <span>💻 Language: ${repo.language || 'Não informada'}</span>
                </div>
            </div>
        </a>
    `).join('') : '<p>Este usuário não possui repositórios públicos.</p>';

    elements.profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="${userData.name || 'Usuário'}'s avatar" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || 'Não possui nome cadastrado.'}</h2>
                <p>${userData.bio || 'Sem biografia disponível.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2> Repositórios </h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
            
        </div>
    `;
}

export function showAlert(message) {
    alert(message);
}
