const baseUrl = 'http://localhost:5000'

function getAll(category = '') {
    let url = `${baseUrl}/pets`;
    url += category && category != 'all' ? `?category=${category}` : '';

    return fetch(`${url}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function getOne(petId) {
    return fetch(`${baseUrl}/pets/${petId}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function addPet(formData) {
    return fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            description: formData.get('description'),
            imageURL: formData.get('imageURL'),
            category: formData.get('category'),
            likes: 0
        })
    })
        .catch(err => console.log(err))
}

function deletePet(petId) {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch(err => console.log(err))
}

function editPet(petId, formData) {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            description: formData.get('description')
        })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

function petPet(petId, likes) {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            likes
        })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default {
    getAll,
    getOne,
    addPet,
    deletePet,
    editPet,
    petPet,
}