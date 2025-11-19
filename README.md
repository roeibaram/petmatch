# PetMatch

PetMatch is a pet-adoption finder built with React.  
Users can search for pets by ZIP code, filter by type (dogs, cats, others), filter by age range, and breed. Each pet card opens a details page with more information.

## API Change Note!

Originally, the project was meant to use the Petfinder API. However, Petfinder recently disabled new API key generation, and became irrelevant. To keep the project functional, I switched to The Dog API, which still provides real dog breeds and images. The structure of and functionality remained the same — only the data source changed so the application could continue working properly. link to new API:
**https://docs.thedogapi.com/docs/intro**

## Deployed Frontend

**https://roeibaram.github.io/petmatch**

## Features

- Search by US ZIP code
- Filter by pet type (Dog / Cat / Other)
- Age range filtering
- Breed filtering based on selected type
- Responsive grid of pet cards
- Individual pet details page

## Tech Stack

- React
- React Router DOM
- Vite
- CSS
- GitHub Pages (deployment)

## How to Run Locally

1. Clone the repository:

git clone https://github.com/roeibaram/petmatch
