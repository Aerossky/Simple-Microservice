document.addEventListener('DOMContentLoaded', function () {
    const RESEP_API_URL = 'http://localhost:4000/reseps';
    const PERMINTAAN_RESEP_API_URL = 'http://localhost:4000/permintaans';
    const KOMENTAR_API_URL = 'http://localhost:4000/komentars';
    const USER_API_URL = 'http://localhost:4000/laravel/api/users';

    // Function to fetch and display resep
    function fetchResep() {
        fetch(RESEP_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network did not respond');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const resepList = document.getElementById('resep-list');
                resepList.innerHTML = '';
                data.forEach(resep => {
                    const listItem = document.createElement('div');
                    listItem.className = 'col-md-4';
                    listItem.innerHTML = `
                        <div class="card mb-4 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${resep.nama}</h5>
                                <p class="card-text"><strong>Bahan:</strong> ${resep.bahan}</p>
                                <p class="card-text">${resep.deskripsi}</p>
                                <p class="card-text"><small class="text-muted">Created at: ${new Date(resep.createdAt).toLocaleString()}</small></p>
                                <p class="card-text"><small class="text-muted">Updated at: ${new Date(resep.updatedAt).toLocaleString()}</small></p>
                            </div>
                        </div>
                    `;
                    resepList.appendChild(listItem);
                });
            })
            .catch(error => {
                const resepList = document.getElementById('resep-list');
                resepList.innerHTML = `<div class="alert alert-danger" role="alert">${error.message}</div>`;
                console.error('Error fetching resep:', error);
            });
    }

    // Function to fetch and display permintaan resep
    function fetchPermintaanResep() {
        fetch(PERMINTAAN_RESEP_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network did not respond');
                }
                return response.json();
            })
            .then(data => {
                const permintaanResepList = document.getElementById('permintaan-resep-list');
                permintaanResepList.innerHTML = '';
                data.forEach(permintaan => {
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.textContent = permintaan.nama_makanan;
                    permintaanResepList.appendChild(listItem);
                });
            })
            .catch(error => {
                const permintaanResepList = document.getElementById('permintaan-resep-list');
                permintaanResepList.innerHTML = `<div class="alert alert-danger" role="alert">Error fetching permintaan resep: ${error.message}</div>`;
                console.error('Error fetching permintaan resep:', error);
            });
    }

    // Function to fetch and display komentar
    function fetchKomentar() {
        fetch(KOMENTAR_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network did not respond');
                }
                return response.json();
            })
            .then(data => {
                const komentarList = document.getElementById('komentar-list');
                komentarList.innerHTML = '';
                data.forEach(komentars => {
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.textContent = komentars.komentar;
                    komentarList.appendChild(listItem);
                });
            })
            .catch(error => {
                const komentarList = document.getElementById('komentar-list');
                komentarList.innerHTML = `<div class="alert alert-danger" role="alert">Error fetching komentar: ${error.message}</div>`;
                console.error('Error fetching komentar:', error);
            });
    }

    // Function to fetch and display user
    function fetchUser() {
        fetch(USER_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network did not respond');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const userList = document.getElementById('user-list');
                userList.innerHTML = '';
                data.forEach(user => {
                    const listItem = document.createElement('div');
                    listItem.className = 'col-md-4';
                    listItem.innerHTML = `
                        <div class="card mb-4 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text"><strong>Bahan:</strong> ${user.email}</p>
                                <p class="card-text"><small class="text-muted">Created at: ${new Date(user.createdAt).toLocaleString()}</small></p>
                                <p class="card-text"><small class="text-muted">Updated at: ${new Date(user.updatedAt).toLocaleString()}</small></p>
                            </div>
                        </div>
                    `;
                    userList.appendChild(listItem);
                });
            })
            .catch(error => {
                const userList = document.getElementById('user-list');
                userList.innerHTML = `<div class="alert alert-danger" role="alert">${error.message}</div>`;
                console.error('Error fetching user:', error);
            });
    }

    // Initial fetch
    fetchResep();
    fetchPermintaanResep();
    fetchKomentar();
    fetchUser();
});
