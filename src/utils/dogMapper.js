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
      const temperament = breed.temperament
        ? breed.temperament.split(",").map((trait) => trait.trim()).slice(0, 5)
        : ["Friendly", "Loyal", "Companion"];

      return {
        id: item.id,
        name: `${breed.name} Puppy`,
        breed: breed.name,
        age: breed.life_span || "2 years",
        bestFor: breed.bred_for || "Companion home",
        size: breed.weight?.imperial ? `${breed.weight.imperial} lbs` : "Ask shelter for size",
        temperament,
        location: cities[Math.floor(Math.random() * cities.length)],
        type: "dog",
        img: item.url,
      };
    });
}
