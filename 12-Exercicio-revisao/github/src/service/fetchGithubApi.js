export function fetchUniqueUser (user) {
  const url = `https://api.github.com/users/${user}`;
  return fetch(url)
    .then((response) => response.json());
}

export function fetchAllUsers (user) {
  const url = `https://api.github.com/search/users?q=${user}&per_page=5`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result.items);
}