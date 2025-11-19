const cities = [
  "New York, NY",
  "Los Angeles, CA",
  "Miami, FL",
  "Atlanta, GA",
  "Chicago, IL",
  "Dallas, TX",
];

export function mapDogData(apiDogs) {
  return apiDogs
    .filter((item) => item.breeds && item.breeds.length > 0)
    .map((item) => {
      const breed = item.breeds[0];

      return {
        id: item.id,
        name: `${breed.name} Puppy`,
        breed: breed.name,
        age: breed.life_span || "2 years",
        location: cities[Math.floor(Math.random() * cities.length)],
        type: "dog",
        img: item.url,
      };
    });
}
