# PetMatch

PetMatch is a pet-adoption finder built with React.  
Users can search for pets by ZIP code, filter by type (dogs, cats, others), filter by age range, and breed. Each pet card opens a details page with more information.

## API Change Note

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
- Save favorite pets locally
- Empty-state messaging when no pets match the current filters

## Tech Stack

- React
- React Router DOM
- Vite
- CSS
- GitHub Pages (deployment)

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/roeibaram/petmatch
cd petmatch
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

## Useful Scripts

- `npm run dev` starts the local Vite dev server
- `npm run build` creates the production build
- `npm run preview` previews the production build locally
- `npm run deploy` publishes the `dist` folder to GitHub Pages
