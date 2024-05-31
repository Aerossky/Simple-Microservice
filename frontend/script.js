document.addEventListener('DOMContentLoaded', function () {
    const RESEP_API_URL = 'http://localhost:4000/reseps';
    const PERMINTAAN_RESEP_API_URL = 'http://localhost:4000/permintaans';

    // Function to fetch and display resep
    function fetchResep() {
        fetch(RESEP_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
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
                    throw new Error('Network response was not ok');
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

    // Initial fetch
    fetchResep();
    fetchPermintaanResep();
});
