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

export function renderUserProfile(userData) {
    elements.profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="${userData.name}'s avatar" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
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
    `;
}

export function showAlert(message) {
    alert(message);
}
