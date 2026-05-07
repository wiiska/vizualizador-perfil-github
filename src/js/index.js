const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`)

            if (!response.ok) {
                alert(`Usuário ${userName} não encontrado.`);
                profileResults.innerHTML = "";
                return;
            }

            const userData = await response.json();
            console.log(userData);

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="${userData.name}'s avatar" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || `Sem biografia disponivel.`}</p>
                </div>
            </div>`
        } catch (error) {
            alert(`Ocorreu um erro ao buscar o usuário: ${error.message}`);
                profileResults.innerHTML = "";
        }

    } else {
        alert(`Por favor, digite um nome de usuário do GitHub.`);
        profileResults.innerHTML = "";
    }
});

inputSearch.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        btnSearch.click();
    }
});