import { DOG_API_URL, DOG_API_KEY } from "./constants";

export function fetchDogs() {
  return fetch(`${DOG_API_URL}/images/search?limit=30&has_breeds=true`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": DOG_API_KEY,
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(new Error("API request failed"));
    }
    return res.json();
  });
}
