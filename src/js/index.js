import { elements, renderLoading, renderUserProfile, clearProfileResults, showAlert } from './ui.js';
import { fetchGitHubUser, fetchGitHubRepos } from './githubApi.js';

async function handleSearch() {
    const userName = elements.inputSearch.value.trim();

    if (!userName) {
        showAlert('Por favor, digite um nome de usuário do GitHub.');
        clearProfileResults();
        return;
    }

    renderLoading();

    try {
        const userData = await fetchGitHubUser(userName);
        const userRepos = await fetchGitHubRepos(userName);
        renderUserProfile(userData, userRepos);
    } catch (error) {
        showAlert(error.message);
        clearProfileResults();
    }
}

elements.btnSearch.addEventListener('click', handleSearch);

elements.inputSearch.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});