function getAll() {
    return fetch(`http://localhost:5000/posts/`)
        .then(res => res.json())
        .catch(() => console.log(`fetch error`))
}

export default {
    getAll
}