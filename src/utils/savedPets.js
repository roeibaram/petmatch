const SAVED_PETS_STORAGE_KEY = "petmatch_saved_pet_ids";

export function readSavedPetIds() {
  try {
    const savedValue = window.localStorage.getItem(SAVED_PETS_STORAGE_KEY);
    const parsedValue = savedValue ? JSON.parse(savedValue) : [];

    return Array.isArray(parsedValue)
      ? parsedValue.filter((id) => typeof id === "string")
      : [];
  } catch {
    return [];
  }
}

export function savePetIds(petIds) {
  window.localStorage.setItem(SAVED_PETS_STORAGE_KEY, JSON.stringify(petIds));
}
