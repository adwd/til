/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql'

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>
}

export type DateTime = any
/** An object with an ID */
export interface Node {
  id: string /** The id of the object. */
}

export interface Query {
  allAssets: Asset[]
  allFilms: Film[]
  allPersons: Person[]
  allPlanets: Planet[]
  allSpecies: Species[]
  allStarships: Starship[]
  allVehicles: Vehicle[]
  _allAssetsMeta: _QueryMeta
  _allFilmsMeta: _QueryMeta
  _allPersonsMeta: _QueryMeta
  _allPlanetsMeta: _QueryMeta
  _allSpeciesMeta: _QueryMeta
  _allStarshipsMeta: _QueryMeta
  _allVehiclesMeta: _QueryMeta
  Asset?: Asset | null
  Film?: Film | null
  Person?: Person | null
  Planet?: Planet | null
  Species?: Species | null
  Starship?: Starship | null
  Vehicle?: Vehicle | null
  node?: Node | null /** Fetches an object given its ID */
}
/** System model for Assets */
export interface Asset extends Node {
  createdAt: DateTime
  fileName: string /** Original File Name */
  handle: string /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  id: string
  mimeType?: string | null /** The Mime Type */
  size: number /** The Size Of The File */
  updatedAt: DateTime
  url: string /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}
/** A Film is a single film. */
export interface Film extends Node {
  characters?: Person[] | null
  createdAt: DateTime
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  planets?: Planet[] | null
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  species?: Species[] | null
  starships?: Starship[] | null
  title: string /** The title of this film */
  updatedAt: DateTime
  vehicles?: Vehicle[] | null
  _charactersMeta: _QueryMeta /** Meta information about the query. */
  _planetsMeta: _QueryMeta /** Meta information about the query. */
  _speciesMeta: _QueryMeta /** Meta information about the query. */
  _starshipsMeta: _QueryMeta /** Meta information about the query. */
  _vehiclesMeta: _QueryMeta /** Meta information about the query. */
}
/** A Person is an individual person or character within the Star Wars universe */
export interface Person extends Node {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  createdAt: DateTime
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  films?: Film[] | null
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  homeworld?: Planet | null
  id: string
  isPublished: boolean /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  species?: Species[] | null
  starships?: Starship[] | null
  updatedAt: DateTime
  vehicles?: Vehicle[] | null
  _filmsMeta: _QueryMeta /** Meta information about the query. */
  _speciesMeta: _QueryMeta /** Meta information about the query. */
  _starshipsMeta: _QueryMeta /** Meta information about the query. */
  _vehiclesMeta: _QueryMeta /** Meta information about the query. */
}
/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export interface Planet extends Node {
  climate?: string[] | null /** The climate of this planet. */
  createdAt: DateTime
  diameter?: number | null /** The diameter of this planet in kilometers. */
  films?: Film[] | null
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  name: string /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  residents?: Person[] | null
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  updatedAt: DateTime
  _filmsMeta: _QueryMeta /** Meta information about the query. */
  _residentsMeta: _QueryMeta /** Meta information about the query. */
}
/** Meta information about the query. */
export interface _QueryMeta {
  count: number
}
/** A Species is a type of person or character within the Star Wars Universe. */
export interface Species extends Node {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  createdAt: DateTime
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  films?: Film[] | null
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  people?: Person[] | null
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  updatedAt: DateTime
  _filmsMeta: _QueryMeta /** Meta information about the query. */
  _peopleMeta: _QueryMeta /** Meta information about the query. */
}
/** A Starship is a single transport craft that has hyperdrive capability. */
export interface Starship extends Node {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  createdAt: DateTime
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  films?: Film[] | null
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  pilots?: Person[] | null
  updatedAt: DateTime
  _filmsMeta: _QueryMeta /** Meta information about the query. */
  _pilotsMeta: _QueryMeta /** Meta information about the query. */
}
/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export interface Vehicle extends Node {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  createdAt: DateTime
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  films?: Film[] | null
  id: string
  isPublished: boolean /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name: string /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  pilots?: Person[] | null
  updatedAt: DateTime
  _filmsMeta: _QueryMeta /** Meta information about the query. */
  _pilotsMeta: _QueryMeta /** Meta information about the query. */
}

export interface Mutation {
  createAsset?: Asset | null
  createFilm?: Film | null
  createPerson?: Person | null
  createPlanet?: Planet | null
  createSpecies?: Species | null
  createStarship?: Starship | null
  createVehicle?: Vehicle | null
  updateAsset?: Asset | null
  updateFilm?: Film | null
  updatePerson?: Person | null
  updatePlanet?: Planet | null
  updateSpecies?: Species | null
  updateStarship?: Starship | null
  updateVehicle?: Vehicle | null
  updateOrCreateAsset?: Asset | null
  updateOrCreateFilm?: Film | null
  updateOrCreatePerson?: Person | null
  updateOrCreatePlanet?: Planet | null
  updateOrCreateSpecies?: Species | null
  updateOrCreateStarship?: Starship | null
  updateOrCreateVehicle?: Vehicle | null
  deleteAsset?: Asset | null
  deleteFilm?: Film | null
  deletePerson?: Person | null
  deletePlanet?: Planet | null
  deleteSpecies?: Species | null
  deleteStarship?: Starship | null
  deleteVehicle?: Vehicle | null
  addToFilmPlanets?: AddToFilmPlanetsPayload | null
  addToFilmSpecies?: AddToFilmSpeciesPayload | null
  addToFilmStarships?: AddToFilmStarshipsPayload | null
  addToFilmVehicles?: AddToFilmVehiclesPayload | null
  addToPeopleFilm?: AddToPeopleFilmPayload | null
  addToPeoplePlanet?: AddToPeoplePlanetPayload | null
  addToPeopleSpecies?: AddToPeopleSpeciesPayload | null
  addToPeopleStarships?: AddToPeopleStarshipsPayload | null
  addToPeopleVehicles?: AddToPeopleVehiclesPayload | null
  removeFromFilmPlanets?: RemoveFromFilmPlanetsPayload | null
  removeFromFilmSpecies?: RemoveFromFilmSpeciesPayload | null
  removeFromFilmStarships?: RemoveFromFilmStarshipsPayload | null
  removeFromFilmVehicles?: RemoveFromFilmVehiclesPayload | null
  removeFromPeopleFilm?: RemoveFromPeopleFilmPayload | null
  removeFromPeoplePlanet?: RemoveFromPeoplePlanetPayload | null
  removeFromPeopleSpecies?: RemoveFromPeopleSpeciesPayload | null
  removeFromPeopleStarships?: RemoveFromPeopleStarshipsPayload | null
  removeFromPeopleVehicles?: RemoveFromPeopleVehiclesPayload | null
  invokeFunction?: InvokeFunctionPayload | null
}

export interface AddToFilmPlanetsPayload {
  filmsFilm?: Film | null
  planetsPlanet?: Planet | null
}

export interface AddToFilmSpeciesPayload {
  filmsFilm?: Film | null
  speciesSpecies?: Species | null
}

export interface AddToFilmStarshipsPayload {
  filmsFilm?: Film | null
  starshipsStarship?: Starship | null
}

export interface AddToFilmVehiclesPayload {
  filmsFilm?: Film | null
  vehiclesVehicle?: Vehicle | null
}

export interface AddToPeopleFilmPayload {
  charactersPerson?: Person | null
  filmsFilm?: Film | null
}

export interface AddToPeoplePlanetPayload {
  residentsPerson?: Person | null
  homeworldPlanet?: Planet | null
}

export interface AddToPeopleSpeciesPayload {
  peoplePerson?: Person | null
  speciesSpecies?: Species | null
}

export interface AddToPeopleStarshipsPayload {
  pilotsPerson?: Person | null
  starshipsStarship?: Starship | null
}

export interface AddToPeopleVehiclesPayload {
  pilotsPerson?: Person | null
  vehiclesVehicle?: Vehicle | null
}

export interface RemoveFromFilmPlanetsPayload {
  filmsFilm?: Film | null
  planetsPlanet?: Planet | null
}

export interface RemoveFromFilmSpeciesPayload {
  filmsFilm?: Film | null
  speciesSpecies?: Species | null
}

export interface RemoveFromFilmStarshipsPayload {
  filmsFilm?: Film | null
  starshipsStarship?: Starship | null
}

export interface RemoveFromFilmVehiclesPayload {
  filmsFilm?: Film | null
  vehiclesVehicle?: Vehicle | null
}

export interface RemoveFromPeopleFilmPayload {
  charactersPerson?: Person | null
  filmsFilm?: Film | null
}

export interface RemoveFromPeoplePlanetPayload {
  residentsPerson?: Person | null
  homeworldPlanet?: Planet | null
}

export interface RemoveFromPeopleSpeciesPayload {
  peoplePerson?: Person | null
  speciesSpecies?: Species | null
}

export interface RemoveFromPeopleStarshipsPayload {
  pilotsPerson?: Person | null
  starshipsStarship?: Starship | null
}

export interface RemoveFromPeopleVehiclesPayload {
  pilotsPerson?: Person | null
  vehiclesVehicle?: Vehicle | null
}

export interface InvokeFunctionPayload {
  result: string
  clientMutationId?: string | null
}

export interface Subscription {
  Asset?: AssetSubscriptionPayload | null
  Film?: FilmSubscriptionPayload | null
  Person?: PersonSubscriptionPayload | null
  Planet?: PlanetSubscriptionPayload | null
  Species?: SpeciesSubscriptionPayload | null
  Starship?: StarshipSubscriptionPayload | null
  Vehicle?: VehicleSubscriptionPayload | null
}

export interface AssetSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Asset | null
  updatedFields?: string[] | null
  previousValues?: AssetPreviousValues | null
}

export interface AssetPreviousValues {
  createdAt: DateTime
  fileName: string /** Original File Name */
  handle: string /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  id: string
  mimeType?: string | null /** The Mime Type */
  size: number /** The Size Of The File */
  updatedAt: DateTime
  url: string /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}

export interface FilmSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Film | null
  updatedFields?: string[] | null
  previousValues?: FilmPreviousValues | null
}

export interface FilmPreviousValues {
  createdAt: DateTime
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  updatedAt: DateTime
}

export interface PersonSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Person | null
  updatedFields?: string[] | null
  previousValues?: PersonPreviousValues | null
}

export interface PersonPreviousValues {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  createdAt: DateTime
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  updatedAt: DateTime
}

export interface PlanetSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Planet | null
  updatedFields?: string[] | null
  previousValues?: PlanetPreviousValues | null
}

export interface PlanetPreviousValues {
  climate?: string[] | null /** The climate of this planet. */
  createdAt: DateTime
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  name: string /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  updatedAt: DateTime
}

export interface SpeciesSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Species | null
  updatedFields?: string[] | null
  previousValues?: SpeciesPreviousValues | null
}

export interface SpeciesPreviousValues {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  createdAt: DateTime
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  updatedAt: DateTime
}

export interface StarshipSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Starship | null
  updatedFields?: string[] | null
  previousValues?: StarshipPreviousValues | null
}

export interface StarshipPreviousValues {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  createdAt: DateTime
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  updatedAt: DateTime
}

export interface VehicleSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Vehicle | null
  updatedFields?: string[] | null
  previousValues?: VehiclePreviousValues | null
}

export interface VehiclePreviousValues {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  createdAt: DateTime
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name: string /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  updatedAt: DateTime
}

export interface AssetFilter {
  AND?: AssetFilter[] | null /** Logical AND on all given filters. */
  OR?: AssetFilter[] | null /** Logical OR on all given filters. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  fileName?: string | null
  fileName_not?:
    | string
    | null /** All values that are not equal to given value. */
  fileName_in?:
    | string[]
    | null /** All values that are contained in given list. */
  fileName_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  fileName_lt?: string | null /** All values less than the given value. */
  fileName_lte?:
    | string
    | null /** All values less than or equal the given value. */
  fileName_gt?: string | null /** All values greater than the given value. */
  fileName_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  fileName_contains?:
    | string
    | null /** All values containing the given string. */
  fileName_not_contains?:
    | string
    | null /** All values not containing the given string. */
  fileName_starts_with?:
    | string
    | null /** All values starting with the given string. */
  fileName_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  fileName_ends_with?:
    | string
    | null /** All values ending with the given string. */
  fileName_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  handle?: string | null
  handle_not?:
    | string
    | null /** All values that are not equal to given value. */
  handle_in?:
    | string[]
    | null /** All values that are contained in given list. */
  handle_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  handle_lt?: string | null /** All values less than the given value. */
  handle_lte?:
    | string
    | null /** All values less than or equal the given value. */
  handle_gt?: string | null /** All values greater than the given value. */
  handle_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  handle_contains?: string | null /** All values containing the given string. */
  handle_not_contains?:
    | string
    | null /** All values not containing the given string. */
  handle_starts_with?:
    | string
    | null /** All values starting with the given string. */
  handle_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  handle_ends_with?:
    | string
    | null /** All values ending with the given string. */
  handle_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  height?: number | null
  height_not?:
    | number
    | null /** All values that are not equal to given value. */
  height_in?:
    | number[]
    | null /** All values that are contained in given list. */
  height_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  height_lt?: number | null /** All values less than the given value. */
  height_lte?:
    | number
    | null /** All values less than or equal the given value. */
  height_gt?: number | null /** All values greater than the given value. */
  height_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  mimeType?: string | null
  mimeType_not?:
    | string
    | null /** All values that are not equal to given value. */
  mimeType_in?:
    | string[]
    | null /** All values that are contained in given list. */
  mimeType_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  mimeType_lt?: string | null /** All values less than the given value. */
  mimeType_lte?:
    | string
    | null /** All values less than or equal the given value. */
  mimeType_gt?: string | null /** All values greater than the given value. */
  mimeType_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  mimeType_contains?:
    | string
    | null /** All values containing the given string. */
  mimeType_not_contains?:
    | string
    | null /** All values not containing the given string. */
  mimeType_starts_with?:
    | string
    | null /** All values starting with the given string. */
  mimeType_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  mimeType_ends_with?:
    | string
    | null /** All values ending with the given string. */
  mimeType_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  size?: number | null
  size_not?: number | null /** All values that are not equal to given value. */
  size_in?: number[] | null /** All values that are contained in given list. */
  size_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  size_lt?: number | null /** All values less than the given value. */
  size_lte?: number | null /** All values less than or equal the given value. */
  size_gt?: number | null /** All values greater than the given value. */
  size_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  url?: string | null
  url_not?: string | null /** All values that are not equal to given value. */
  url_in?: string[] | null /** All values that are contained in given list. */
  url_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  url_lt?: string | null /** All values less than the given value. */
  url_lte?: string | null /** All values less than or equal the given value. */
  url_gt?: string | null /** All values greater than the given value. */
  url_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  url_contains?: string | null /** All values containing the given string. */
  url_not_contains?:
    | string
    | null /** All values not containing the given string. */
  url_starts_with?:
    | string
    | null /** All values starting with the given string. */
  url_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  url_ends_with?: string | null /** All values ending with the given string. */
  url_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  width?: number | null
  width_not?: number | null /** All values that are not equal to given value. */
  width_in?: number[] | null /** All values that are contained in given list. */
  width_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  width_lt?: number | null /** All values less than the given value. */
  width_lte?:
    | number
    | null /** All values less than or equal the given value. */
  width_gt?: number | null /** All values greater than the given value. */
  width_gte?:
    | number
    | null /** All values greater than or equal the given value. */
}

export interface FilmFilter {
  AND?: FilmFilter[] | null /** Logical AND on all given filters. */
  OR?: FilmFilter[] | null /** Logical OR on all given filters. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  director?: string | null
  director_not?:
    | string
    | null /** All values that are not equal to given value. */
  director_in?:
    | string[]
    | null /** All values that are contained in given list. */
  director_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  director_lt?: string | null /** All values less than the given value. */
  director_lte?:
    | string
    | null /** All values less than or equal the given value. */
  director_gt?: string | null /** All values greater than the given value. */
  director_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  director_contains?:
    | string
    | null /** All values containing the given string. */
  director_not_contains?:
    | string
    | null /** All values not containing the given string. */
  director_starts_with?:
    | string
    | null /** All values starting with the given string. */
  director_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  director_ends_with?:
    | string
    | null /** All values ending with the given string. */
  director_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  episodeId?: number | null
  episodeId_not?:
    | number
    | null /** All values that are not equal to given value. */
  episodeId_in?:
    | number[]
    | null /** All values that are contained in given list. */
  episodeId_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  episodeId_lt?: number | null /** All values less than the given value. */
  episodeId_lte?:
    | number
    | null /** All values less than or equal the given value. */
  episodeId_gt?: number | null /** All values greater than the given value. */
  episodeId_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  openingCrawl?: string | null
  openingCrawl_not?:
    | string
    | null /** All values that are not equal to given value. */
  openingCrawl_in?:
    | string[]
    | null /** All values that are contained in given list. */
  openingCrawl_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  openingCrawl_lt?: string | null /** All values less than the given value. */
  openingCrawl_lte?:
    | string
    | null /** All values less than or equal the given value. */
  openingCrawl_gt?:
    | string
    | null /** All values greater than the given value. */
  openingCrawl_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  openingCrawl_contains?:
    | string
    | null /** All values containing the given string. */
  openingCrawl_not_contains?:
    | string
    | null /** All values not containing the given string. */
  openingCrawl_starts_with?:
    | string
    | null /** All values starting with the given string. */
  openingCrawl_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  openingCrawl_ends_with?:
    | string
    | null /** All values ending with the given string. */
  openingCrawl_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  releaseDate?: DateTime | null
  releaseDate_not?: DateTime | null /** All values that are not equal to given value. */
  releaseDate_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  releaseDate_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  releaseDate_lt?: DateTime | null /** All values less than the given value. */
  releaseDate_lte?: DateTime | null /** All values less than or equal the given value. */
  releaseDate_gt?: DateTime | null /** All values greater than the given value. */
  releaseDate_gte?: DateTime | null /** All values greater than or equal the given value. */
  title?: string | null
  title_not?: string | null /** All values that are not equal to given value. */
  title_in?: string[] | null /** All values that are contained in given list. */
  title_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  title_lt?: string | null /** All values less than the given value. */
  title_lte?:
    | string
    | null /** All values less than or equal the given value. */
  title_gt?: string | null /** All values greater than the given value. */
  title_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  title_contains?: string | null /** All values containing the given string. */
  title_not_contains?:
    | string
    | null /** All values not containing the given string. */
  title_starts_with?:
    | string
    | null /** All values starting with the given string. */
  title_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  title_ends_with?:
    | string
    | null /** All values ending with the given string. */
  title_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  characters_every?: PersonFilter | null
  characters_some?: PersonFilter | null
  characters_none?: PersonFilter | null
  planets_every?: PlanetFilter | null
  planets_some?: PlanetFilter | null
  planets_none?: PlanetFilter | null
  species_every?: SpeciesFilter | null
  species_some?: SpeciesFilter | null
  species_none?: SpeciesFilter | null
  starships_every?: StarshipFilter | null
  starships_some?: StarshipFilter | null
  starships_none?: StarshipFilter | null
  vehicles_every?: VehicleFilter | null
  vehicles_some?: VehicleFilter | null
  vehicles_none?: VehicleFilter | null
}

export interface PersonFilter {
  AND?: PersonFilter[] | null /** Logical AND on all given filters. */
  OR?: PersonFilter[] | null /** Logical OR on all given filters. */
  birthYear?: string | null
  birthYear_not?:
    | string
    | null /** All values that are not equal to given value. */
  birthYear_in?:
    | string[]
    | null /** All values that are contained in given list. */
  birthYear_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  birthYear_lt?: string | null /** All values less than the given value. */
  birthYear_lte?:
    | string
    | null /** All values less than or equal the given value. */
  birthYear_gt?: string | null /** All values greater than the given value. */
  birthYear_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  birthYear_contains?:
    | string
    | null /** All values containing the given string. */
  birthYear_not_contains?:
    | string
    | null /** All values not containing the given string. */
  birthYear_starts_with?:
    | string
    | null /** All values starting with the given string. */
  birthYear_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  birthYear_ends_with?:
    | string
    | null /** All values ending with the given string. */
  birthYear_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  gender?: PersonGender | null
  gender_not?: PersonGender | null /** All values that are not equal to given value. */
  gender_in?:
    | PersonGender[]
    | null /** All values that are contained in given list. */
  gender_not_in?:
    | PersonGender[]
    | null /** All values that are not contained in given list. */
  height?: number | null
  height_not?:
    | number
    | null /** All values that are not equal to given value. */
  height_in?:
    | number[]
    | null /** All values that are contained in given list. */
  height_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  height_lt?: number | null /** All values less than the given value. */
  height_lte?:
    | number
    | null /** All values less than or equal the given value. */
  height_gt?: number | null /** All values greater than the given value. */
  height_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  mass?: number | null
  mass_not?: number | null /** All values that are not equal to given value. */
  mass_in?: number[] | null /** All values that are contained in given list. */
  mass_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  mass_lt?: number | null /** All values less than the given value. */
  mass_lte?: number | null /** All values less than or equal the given value. */
  mass_gt?: number | null /** All values greater than the given value. */
  mass_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  homeworld?: PlanetFilter | null
  species_every?: SpeciesFilter | null
  species_some?: SpeciesFilter | null
  species_none?: SpeciesFilter | null
  starships_every?: StarshipFilter | null
  starships_some?: StarshipFilter | null
  starships_none?: StarshipFilter | null
  vehicles_every?: VehicleFilter | null
  vehicles_some?: VehicleFilter | null
  vehicles_none?: VehicleFilter | null
}

export interface PlanetFilter {
  AND?: PlanetFilter[] | null /** Logical AND on all given filters. */
  OR?: PlanetFilter[] | null /** Logical OR on all given filters. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  diameter?: number | null
  diameter_not?:
    | number
    | null /** All values that are not equal to given value. */
  diameter_in?:
    | number[]
    | null /** All values that are contained in given list. */
  diameter_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  diameter_lt?: number | null /** All values less than the given value. */
  diameter_lte?:
    | number
    | null /** All values less than or equal the given value. */
  diameter_gt?: number | null /** All values greater than the given value. */
  diameter_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  gravity?: string | null
  gravity_not?:
    | string
    | null /** All values that are not equal to given value. */
  gravity_in?:
    | string[]
    | null /** All values that are contained in given list. */
  gravity_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  gravity_lt?: string | null /** All values less than the given value. */
  gravity_lte?:
    | string
    | null /** All values less than or equal the given value. */
  gravity_gt?: string | null /** All values greater than the given value. */
  gravity_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  gravity_contains?:
    | string
    | null /** All values containing the given string. */
  gravity_not_contains?:
    | string
    | null /** All values not containing the given string. */
  gravity_starts_with?:
    | string
    | null /** All values starting with the given string. */
  gravity_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  gravity_ends_with?:
    | string
    | null /** All values ending with the given string. */
  gravity_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  orbitalPeriod?: number | null
  orbitalPeriod_not?:
    | number
    | null /** All values that are not equal to given value. */
  orbitalPeriod_in?:
    | number[]
    | null /** All values that are contained in given list. */
  orbitalPeriod_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  orbitalPeriod_lt?: number | null /** All values less than the given value. */
  orbitalPeriod_lte?:
    | number
    | null /** All values less than or equal the given value. */
  orbitalPeriod_gt?:
    | number
    | null /** All values greater than the given value. */
  orbitalPeriod_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  population?: number | null
  population_not?:
    | number
    | null /** All values that are not equal to given value. */
  population_in?:
    | number[]
    | null /** All values that are contained in given list. */
  population_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  population_lt?: number | null /** All values less than the given value. */
  population_lte?:
    | number
    | null /** All values less than or equal the given value. */
  population_gt?: number | null /** All values greater than the given value. */
  population_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  rotationPeriod?: number | null
  rotationPeriod_not?:
    | number
    | null /** All values that are not equal to given value. */
  rotationPeriod_in?:
    | number[]
    | null /** All values that are contained in given list. */
  rotationPeriod_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  rotationPeriod_lt?: number | null /** All values less than the given value. */
  rotationPeriod_lte?:
    | number
    | null /** All values less than or equal the given value. */
  rotationPeriod_gt?:
    | number
    | null /** All values greater than the given value. */
  rotationPeriod_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  surfaceWater?: number | null
  surfaceWater_not?:
    | number
    | null /** All values that are not equal to given value. */
  surfaceWater_in?:
    | number[]
    | null /** All values that are contained in given list. */
  surfaceWater_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  surfaceWater_lt?: number | null /** All values less than the given value. */
  surfaceWater_lte?:
    | number
    | null /** All values less than or equal the given value. */
  surfaceWater_gt?:
    | number
    | null /** All values greater than the given value. */
  surfaceWater_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  residents_every?: PersonFilter | null
  residents_some?: PersonFilter | null
  residents_none?: PersonFilter | null
}

export interface SpeciesFilter {
  AND?: SpeciesFilter[] | null /** Logical AND on all given filters. */
  OR?: SpeciesFilter[] | null /** Logical OR on all given filters. */
  averageHeight?: number | null
  averageHeight_not?:
    | number
    | null /** All values that are not equal to given value. */
  averageHeight_in?:
    | number[]
    | null /** All values that are contained in given list. */
  averageHeight_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  averageHeight_lt?: number | null /** All values less than the given value. */
  averageHeight_lte?:
    | number
    | null /** All values less than or equal the given value. */
  averageHeight_gt?:
    | number
    | null /** All values greater than the given value. */
  averageHeight_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  averageLifespan?: number | null
  averageLifespan_not?:
    | number
    | null /** All values that are not equal to given value. */
  averageLifespan_in?:
    | number[]
    | null /** All values that are contained in given list. */
  averageLifespan_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  averageLifespan_lt?:
    | number
    | null /** All values less than the given value. */
  averageLifespan_lte?:
    | number
    | null /** All values less than or equal the given value. */
  averageLifespan_gt?:
    | number
    | null /** All values greater than the given value. */
  averageLifespan_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  classification?: string | null
  classification_not?:
    | string
    | null /** All values that are not equal to given value. */
  classification_in?:
    | string[]
    | null /** All values that are contained in given list. */
  classification_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  classification_lt?: string | null /** All values less than the given value. */
  classification_lte?:
    | string
    | null /** All values less than or equal the given value. */
  classification_gt?:
    | string
    | null /** All values greater than the given value. */
  classification_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  classification_contains?:
    | string
    | null /** All values containing the given string. */
  classification_not_contains?:
    | string
    | null /** All values not containing the given string. */
  classification_starts_with?:
    | string
    | null /** All values starting with the given string. */
  classification_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  classification_ends_with?:
    | string
    | null /** All values ending with the given string. */
  classification_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  designation?: string | null
  designation_not?:
    | string
    | null /** All values that are not equal to given value. */
  designation_in?:
    | string[]
    | null /** All values that are contained in given list. */
  designation_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  designation_lt?: string | null /** All values less than the given value. */
  designation_lte?:
    | string
    | null /** All values less than or equal the given value. */
  designation_gt?: string | null /** All values greater than the given value. */
  designation_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  designation_contains?:
    | string
    | null /** All values containing the given string. */
  designation_not_contains?:
    | string
    | null /** All values not containing the given string. */
  designation_starts_with?:
    | string
    | null /** All values starting with the given string. */
  designation_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  designation_ends_with?:
    | string
    | null /** All values ending with the given string. */
  designation_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  language?: string | null
  language_not?:
    | string
    | null /** All values that are not equal to given value. */
  language_in?:
    | string[]
    | null /** All values that are contained in given list. */
  language_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  language_lt?: string | null /** All values less than the given value. */
  language_lte?:
    | string
    | null /** All values less than or equal the given value. */
  language_gt?: string | null /** All values greater than the given value. */
  language_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  language_contains?:
    | string
    | null /** All values containing the given string. */
  language_not_contains?:
    | string
    | null /** All values not containing the given string. */
  language_starts_with?:
    | string
    | null /** All values starting with the given string. */
  language_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  language_ends_with?:
    | string
    | null /** All values ending with the given string. */
  language_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  people_every?: PersonFilter | null
  people_some?: PersonFilter | null
  people_none?: PersonFilter | null
}

export interface StarshipFilter {
  AND?: StarshipFilter[] | null /** Logical AND on all given filters. */
  OR?: StarshipFilter[] | null /** Logical OR on all given filters. */
  cargoCapacity?: number | null
  cargoCapacity_not?:
    | number
    | null /** All values that are not equal to given value. */
  cargoCapacity_in?:
    | number[]
    | null /** All values that are contained in given list. */
  cargoCapacity_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  cargoCapacity_lt?: number | null /** All values less than the given value. */
  cargoCapacity_lte?:
    | number
    | null /** All values less than or equal the given value. */
  cargoCapacity_gt?:
    | number
    | null /** All values greater than the given value. */
  cargoCapacity_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  class?: string | null
  class_not?: string | null /** All values that are not equal to given value. */
  class_in?: string[] | null /** All values that are contained in given list. */
  class_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  class_lt?: string | null /** All values less than the given value. */
  class_lte?:
    | string
    | null /** All values less than or equal the given value. */
  class_gt?: string | null /** All values greater than the given value. */
  class_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  class_contains?: string | null /** All values containing the given string. */
  class_not_contains?:
    | string
    | null /** All values not containing the given string. */
  class_starts_with?:
    | string
    | null /** All values starting with the given string. */
  class_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  class_ends_with?:
    | string
    | null /** All values ending with the given string. */
  class_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  consumables?: string | null
  consumables_not?:
    | string
    | null /** All values that are not equal to given value. */
  consumables_in?:
    | string[]
    | null /** All values that are contained in given list. */
  consumables_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  consumables_lt?: string | null /** All values less than the given value. */
  consumables_lte?:
    | string
    | null /** All values less than or equal the given value. */
  consumables_gt?: string | null /** All values greater than the given value. */
  consumables_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  consumables_contains?:
    | string
    | null /** All values containing the given string. */
  consumables_not_contains?:
    | string
    | null /** All values not containing the given string. */
  consumables_starts_with?:
    | string
    | null /** All values starting with the given string. */
  consumables_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  consumables_ends_with?:
    | string
    | null /** All values ending with the given string. */
  consumables_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  costInCredits?: number | null
  costInCredits_not?:
    | number
    | null /** All values that are not equal to given value. */
  costInCredits_in?:
    | number[]
    | null /** All values that are contained in given list. */
  costInCredits_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  costInCredits_lt?: number | null /** All values less than the given value. */
  costInCredits_lte?:
    | number
    | null /** All values less than or equal the given value. */
  costInCredits_gt?:
    | number
    | null /** All values greater than the given value. */
  costInCredits_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  crew?: number | null
  crew_not?: number | null /** All values that are not equal to given value. */
  crew_in?: number[] | null /** All values that are contained in given list. */
  crew_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  crew_lt?: number | null /** All values less than the given value. */
  crew_lte?: number | null /** All values less than or equal the given value. */
  crew_gt?: number | null /** All values greater than the given value. */
  crew_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  hyperdriveRating?: number | null
  hyperdriveRating_not?:
    | number
    | null /** All values that are not equal to given value. */
  hyperdriveRating_in?:
    | number[]
    | null /** All values that are contained in given list. */
  hyperdriveRating_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  hyperdriveRating_lt?:
    | number
    | null /** All values less than the given value. */
  hyperdriveRating_lte?:
    | number
    | null /** All values less than or equal the given value. */
  hyperdriveRating_gt?:
    | number
    | null /** All values greater than the given value. */
  hyperdriveRating_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  length?: number | null
  length_not?:
    | number
    | null /** All values that are not equal to given value. */
  length_in?:
    | number[]
    | null /** All values that are contained in given list. */
  length_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  length_lt?: number | null /** All values less than the given value. */
  length_lte?:
    | number
    | null /** All values less than or equal the given value. */
  length_gt?: number | null /** All values greater than the given value. */
  length_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  maxAtmospheringSpeed?: number | null
  maxAtmospheringSpeed_not?:
    | number
    | null /** All values that are not equal to given value. */
  maxAtmospheringSpeed_in?:
    | number[]
    | null /** All values that are contained in given list. */
  maxAtmospheringSpeed_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  maxAtmospheringSpeed_lt?:
    | number
    | null /** All values less than the given value. */
  maxAtmospheringSpeed_lte?:
    | number
    | null /** All values less than or equal the given value. */
  maxAtmospheringSpeed_gt?:
    | number
    | null /** All values greater than the given value. */
  maxAtmospheringSpeed_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  mglt?: number | null
  mglt_not?: number | null /** All values that are not equal to given value. */
  mglt_in?: number[] | null /** All values that are contained in given list. */
  mglt_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  mglt_lt?: number | null /** All values less than the given value. */
  mglt_lte?: number | null /** All values less than or equal the given value. */
  mglt_gt?: number | null /** All values greater than the given value. */
  mglt_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  passengers?: number | null
  passengers_not?:
    | number
    | null /** All values that are not equal to given value. */
  passengers_in?:
    | number[]
    | null /** All values that are contained in given list. */
  passengers_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  passengers_lt?: number | null /** All values less than the given value. */
  passengers_lte?:
    | number
    | null /** All values less than or equal the given value. */
  passengers_gt?: number | null /** All values greater than the given value. */
  passengers_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  pilots_every?: PersonFilter | null
  pilots_some?: PersonFilter | null
  pilots_none?: PersonFilter | null
}

export interface VehicleFilter {
  AND?: VehicleFilter[] | null /** Logical AND on all given filters. */
  OR?: VehicleFilter[] | null /** Logical OR on all given filters. */
  cargoCapacity?: number | null
  cargoCapacity_not?:
    | number
    | null /** All values that are not equal to given value. */
  cargoCapacity_in?:
    | number[]
    | null /** All values that are contained in given list. */
  cargoCapacity_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  cargoCapacity_lt?: number | null /** All values less than the given value. */
  cargoCapacity_lte?:
    | number
    | null /** All values less than or equal the given value. */
  cargoCapacity_gt?:
    | number
    | null /** All values greater than the given value. */
  cargoCapacity_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  class?: string | null
  class_not?: string | null /** All values that are not equal to given value. */
  class_in?: string[] | null /** All values that are contained in given list. */
  class_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  class_lt?: string | null /** All values less than the given value. */
  class_lte?:
    | string
    | null /** All values less than or equal the given value. */
  class_gt?: string | null /** All values greater than the given value. */
  class_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  class_contains?: string | null /** All values containing the given string. */
  class_not_contains?:
    | string
    | null /** All values not containing the given string. */
  class_starts_with?:
    | string
    | null /** All values starting with the given string. */
  class_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  class_ends_with?:
    | string
    | null /** All values ending with the given string. */
  class_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  consumables?: string | null
  consumables_not?:
    | string
    | null /** All values that are not equal to given value. */
  consumables_in?:
    | string[]
    | null /** All values that are contained in given list. */
  consumables_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  consumables_lt?: string | null /** All values less than the given value. */
  consumables_lte?:
    | string
    | null /** All values less than or equal the given value. */
  consumables_gt?: string | null /** All values greater than the given value. */
  consumables_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  consumables_contains?:
    | string
    | null /** All values containing the given string. */
  consumables_not_contains?:
    | string
    | null /** All values not containing the given string. */
  consumables_starts_with?:
    | string
    | null /** All values starting with the given string. */
  consumables_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  consumables_ends_with?:
    | string
    | null /** All values ending with the given string. */
  consumables_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  costInCredits?: number | null
  costInCredits_not?:
    | number
    | null /** All values that are not equal to given value. */
  costInCredits_in?:
    | number[]
    | null /** All values that are contained in given list. */
  costInCredits_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  costInCredits_lt?: number | null /** All values less than the given value. */
  costInCredits_lte?:
    | number
    | null /** All values less than or equal the given value. */
  costInCredits_gt?:
    | number
    | null /** All values greater than the given value. */
  costInCredits_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  crew?: number | null
  crew_not?: number | null /** All values that are not equal to given value. */
  crew_in?: number[] | null /** All values that are contained in given list. */
  crew_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  crew_lt?: number | null /** All values less than the given value. */
  crew_lte?: number | null /** All values less than or equal the given value. */
  crew_gt?: number | null /** All values greater than the given value. */
  crew_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  length?: number | null
  length_not?:
    | number
    | null /** All values that are not equal to given value. */
  length_in?:
    | number[]
    | null /** All values that are contained in given list. */
  length_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  length_lt?: number | null /** All values less than the given value. */
  length_lte?:
    | number
    | null /** All values less than or equal the given value. */
  length_gt?: number | null /** All values greater than the given value. */
  length_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  maxAtmospheringSpeed?: number | null
  maxAtmospheringSpeed_not?:
    | number
    | null /** All values that are not equal to given value. */
  maxAtmospheringSpeed_in?:
    | number[]
    | null /** All values that are contained in given list. */
  maxAtmospheringSpeed_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  maxAtmospheringSpeed_lt?:
    | number
    | null /** All values less than the given value. */
  maxAtmospheringSpeed_lte?:
    | number
    | null /** All values less than or equal the given value. */
  maxAtmospheringSpeed_gt?:
    | number
    | null /** All values greater than the given value. */
  maxAtmospheringSpeed_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  model?: string | null
  model_not?: string | null /** All values that are not equal to given value. */
  model_in?: string[] | null /** All values that are contained in given list. */
  model_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  model_lt?: string | null /** All values less than the given value. */
  model_lte?:
    | string
    | null /** All values less than or equal the given value. */
  model_gt?: string | null /** All values greater than the given value. */
  model_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  model_contains?: string | null /** All values containing the given string. */
  model_not_contains?:
    | string
    | null /** All values not containing the given string. */
  model_starts_with?:
    | string
    | null /** All values starting with the given string. */
  model_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  model_ends_with?:
    | string
    | null /** All values ending with the given string. */
  model_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  passengers?: number | null
  passengers_not?:
    | number
    | null /** All values that are not equal to given value. */
  passengers_in?:
    | number[]
    | null /** All values that are contained in given list. */
  passengers_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  passengers_lt?: number | null /** All values less than the given value. */
  passengers_lte?:
    | number
    | null /** All values less than or equal the given value. */
  passengers_gt?: number | null /** All values greater than the given value. */
  passengers_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  pilots_every?: PersonFilter | null
  pilots_some?: PersonFilter | null
  pilots_none?: PersonFilter | null
}

export interface FilmcharactersPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}

export interface PersonhomeworldPlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  isPublished?: boolean | null /** indicates if the record is published */
  name: string /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  filmsIds?: string[] | null
  films?: PlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: PlanetresidentsPerson[] | null
}

export interface PlanetfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}

export interface FilmplanetsPlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  isPublished?: boolean | null /** indicates if the record is published */
  name: string /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  filmsIds?: string[] | null
  films?: PlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: PlanetresidentsPerson[] | null
}

export interface PlanetresidentsPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}

export interface PersonfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}

export interface FilmspeciesSpecies {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SpeciespeoplePerson[] | null
}

export interface SpeciesfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}

export interface FilmstarshipsStarship {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: StarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: StarshippilotsPerson[] | null
}

export interface StarshipfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}

export interface FilmvehiclesVehicle {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name: string /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  filmsIds?: string[] | null
  films?: VehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: VehiclepilotsPerson[] | null
}

export interface VehiclefilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}

export interface VehiclepilotsPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}

export interface PersonspeciesSpecies {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SpeciespeoplePerson[] | null
}

export interface SpeciespeoplePerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}

export interface PersonstarshipsStarship {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: StarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: StarshippilotsPerson[] | null
}

export interface StarshippilotsPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}

export interface PersonvehiclesVehicle {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name: string /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  filmsIds?: string[] | null
  films?: VehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: VehiclepilotsPerson[] | null
}

export interface UpdateAsset {
  fileName?: string | null /** Original File Name */
  handle?: string | null /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  id: string
  mimeType?: string | null /** The Mime Type */
  size?: number | null /** The Size Of The File */
  url?: string | null /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}

export interface CreateAsset {
  fileName: string /** Original File Name */
  handle: string /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  mimeType?: string | null /** The Mime Type */
  size: number /** The Size Of The File */
  url: string /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}

export interface UpdateFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId?: number | null /** The episode number of this film. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title?: string | null /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}

export interface CreateFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}

export interface UpdatePerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name?: string | null /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}

export interface CreatePerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}

export interface UpdatePlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  name?: string | null /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  filmsIds?: string[] | null
  films?: PlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: PlanetresidentsPerson[] | null
}

export interface CreatePlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  isPublished?: boolean | null /** indicates if the record is published */
  name: string /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  filmsIds?: string[] | null
  films?: PlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: PlanetresidentsPerson[] | null
}

export interface UpdateSpecies {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name?: string | null /** The name of this species. */
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SpeciespeoplePerson[] | null
}

export interface CreateSpecies {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SpeciespeoplePerson[] | null
}

export interface UpdateStarship {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name?:
    | string
    | null /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: StarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: StarshippilotsPerson[] | null
}

export interface CreateStarship {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: StarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: StarshippilotsPerson[] | null
}

export interface UpdateVehicle {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name?:
    | string
    | null /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  filmsIds?: string[] | null
  films?: VehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: VehiclepilotsPerson[] | null
}

export interface CreateVehicle {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name: string /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  filmsIds?: string[] | null
  films?: VehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: VehiclepilotsPerson[] | null
}

export interface InvokeFunctionInput {
  name: string
  input: string
  clientMutationId?: string | null
}

export interface AssetSubscriptionFilter {
  AND?:
    | AssetSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?: AssetSubscriptionFilter[] | null /** Logical OR on all given filters. */
  mutation_in?:
    | _ModelMutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: AssetSubscriptionFilterNode | null
}

export interface AssetSubscriptionFilterNode {
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  fileName?: string | null
  fileName_not?:
    | string
    | null /** All values that are not equal to given value. */
  fileName_in?:
    | string[]
    | null /** All values that are contained in given list. */
  fileName_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  fileName_lt?: string | null /** All values less than the given value. */
  fileName_lte?:
    | string
    | null /** All values less than or equal the given value. */
  fileName_gt?: string | null /** All values greater than the given value. */
  fileName_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  fileName_contains?:
    | string
    | null /** All values containing the given string. */
  fileName_not_contains?:
    | string
    | null /** All values not containing the given string. */
  fileName_starts_with?:
    | string
    | null /** All values starting with the given string. */
  fileName_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  fileName_ends_with?:
    | string
    | null /** All values ending with the given string. */
  fileName_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  handle?: string | null
  handle_not?:
    | string
    | null /** All values that are not equal to given value. */
  handle_in?:
    | string[]
    | null /** All values that are contained in given list. */
  handle_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  handle_lt?: string | null /** All values less than the given value. */
  handle_lte?:
    | string
    | null /** All values less than or equal the given value. */
  handle_gt?: string | null /** All values greater than the given value. */
  handle_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  handle_contains?: string | null /** All values containing the given string. */
  handle_not_contains?:
    | string
    | null /** All values not containing the given string. */
  handle_starts_with?:
    | string
    | null /** All values starting with the given string. */
  handle_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  handle_ends_with?:
    | string
    | null /** All values ending with the given string. */
  handle_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  height?: number | null
  height_not?:
    | number
    | null /** All values that are not equal to given value. */
  height_in?:
    | number[]
    | null /** All values that are contained in given list. */
  height_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  height_lt?: number | null /** All values less than the given value. */
  height_lte?:
    | number
    | null /** All values less than or equal the given value. */
  height_gt?: number | null /** All values greater than the given value. */
  height_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  mimeType?: string | null
  mimeType_not?:
    | string
    | null /** All values that are not equal to given value. */
  mimeType_in?:
    | string[]
    | null /** All values that are contained in given list. */
  mimeType_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  mimeType_lt?: string | null /** All values less than the given value. */
  mimeType_lte?:
    | string
    | null /** All values less than or equal the given value. */
  mimeType_gt?: string | null /** All values greater than the given value. */
  mimeType_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  mimeType_contains?:
    | string
    | null /** All values containing the given string. */
  mimeType_not_contains?:
    | string
    | null /** All values not containing the given string. */
  mimeType_starts_with?:
    | string
    | null /** All values starting with the given string. */
  mimeType_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  mimeType_ends_with?:
    | string
    | null /** All values ending with the given string. */
  mimeType_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  size?: number | null
  size_not?: number | null /** All values that are not equal to given value. */
  size_in?: number[] | null /** All values that are contained in given list. */
  size_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  size_lt?: number | null /** All values less than the given value. */
  size_lte?: number | null /** All values less than or equal the given value. */
  size_gt?: number | null /** All values greater than the given value. */
  size_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  url?: string | null
  url_not?: string | null /** All values that are not equal to given value. */
  url_in?: string[] | null /** All values that are contained in given list. */
  url_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  url_lt?: string | null /** All values less than the given value. */
  url_lte?: string | null /** All values less than or equal the given value. */
  url_gt?: string | null /** All values greater than the given value. */
  url_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  url_contains?: string | null /** All values containing the given string. */
  url_not_contains?:
    | string
    | null /** All values not containing the given string. */
  url_starts_with?:
    | string
    | null /** All values starting with the given string. */
  url_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  url_ends_with?: string | null /** All values ending with the given string. */
  url_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  width?: number | null
  width_not?: number | null /** All values that are not equal to given value. */
  width_in?: number[] | null /** All values that are contained in given list. */
  width_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  width_lt?: number | null /** All values less than the given value. */
  width_lte?:
    | number
    | null /** All values less than or equal the given value. */
  width_gt?: number | null /** All values greater than the given value. */
  width_gte?:
    | number
    | null /** All values greater than or equal the given value. */
}

export interface FilmSubscriptionFilter {
  AND?: FilmSubscriptionFilter[] | null /** Logical AND on all given filters. */
  OR?: FilmSubscriptionFilter[] | null /** Logical OR on all given filters. */
  mutation_in?:
    | _ModelMutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: FilmSubscriptionFilterNode | null
}

export interface FilmSubscriptionFilterNode {
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  director?: string | null
  director_not?:
    | string
    | null /** All values that are not equal to given value. */
  director_in?:
    | string[]
    | null /** All values that are contained in given list. */
  director_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  director_lt?: string | null /** All values less than the given value. */
  director_lte?:
    | string
    | null /** All values less than or equal the given value. */
  director_gt?: string | null /** All values greater than the given value. */
  director_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  director_contains?:
    | string
    | null /** All values containing the given string. */
  director_not_contains?:
    | string
    | null /** All values not containing the given string. */
  director_starts_with?:
    | string
    | null /** All values starting with the given string. */
  director_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  director_ends_with?:
    | string
    | null /** All values ending with the given string. */
  director_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  episodeId?: number | null
  episodeId_not?:
    | number
    | null /** All values that are not equal to given value. */
  episodeId_in?:
    | number[]
    | null /** All values that are contained in given list. */
  episodeId_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  episodeId_lt?: number | null /** All values less than the given value. */
  episodeId_lte?:
    | number
    | null /** All values less than or equal the given value. */
  episodeId_gt?: number | null /** All values greater than the given value. */
  episodeId_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  openingCrawl?: string | null
  openingCrawl_not?:
    | string
    | null /** All values that are not equal to given value. */
  openingCrawl_in?:
    | string[]
    | null /** All values that are contained in given list. */
  openingCrawl_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  openingCrawl_lt?: string | null /** All values less than the given value. */
  openingCrawl_lte?:
    | string
    | null /** All values less than or equal the given value. */
  openingCrawl_gt?:
    | string
    | null /** All values greater than the given value. */
  openingCrawl_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  openingCrawl_contains?:
    | string
    | null /** All values containing the given string. */
  openingCrawl_not_contains?:
    | string
    | null /** All values not containing the given string. */
  openingCrawl_starts_with?:
    | string
    | null /** All values starting with the given string. */
  openingCrawl_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  openingCrawl_ends_with?:
    | string
    | null /** All values ending with the given string. */
  openingCrawl_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  releaseDate?: DateTime | null
  releaseDate_not?: DateTime | null /** All values that are not equal to given value. */
  releaseDate_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  releaseDate_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  releaseDate_lt?: DateTime | null /** All values less than the given value. */
  releaseDate_lte?: DateTime | null /** All values less than or equal the given value. */
  releaseDate_gt?: DateTime | null /** All values greater than the given value. */
  releaseDate_gte?: DateTime | null /** All values greater than or equal the given value. */
  title?: string | null
  title_not?: string | null /** All values that are not equal to given value. */
  title_in?: string[] | null /** All values that are contained in given list. */
  title_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  title_lt?: string | null /** All values less than the given value. */
  title_lte?:
    | string
    | null /** All values less than or equal the given value. */
  title_gt?: string | null /** All values greater than the given value. */
  title_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  title_contains?: string | null /** All values containing the given string. */
  title_not_contains?:
    | string
    | null /** All values not containing the given string. */
  title_starts_with?:
    | string
    | null /** All values starting with the given string. */
  title_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  title_ends_with?:
    | string
    | null /** All values ending with the given string. */
  title_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  characters_every?: PersonFilter | null
  characters_some?: PersonFilter | null
  characters_none?: PersonFilter | null
  planets_every?: PlanetFilter | null
  planets_some?: PlanetFilter | null
  planets_none?: PlanetFilter | null
  species_every?: SpeciesFilter | null
  species_some?: SpeciesFilter | null
  species_none?: SpeciesFilter | null
  starships_every?: StarshipFilter | null
  starships_some?: StarshipFilter | null
  starships_none?: StarshipFilter | null
  vehicles_every?: VehicleFilter | null
  vehicles_some?: VehicleFilter | null
  vehicles_none?: VehicleFilter | null
}

export interface PersonSubscriptionFilter {
  AND?:
    | PersonSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?: PersonSubscriptionFilter[] | null /** Logical OR on all given filters. */
  mutation_in?:
    | _ModelMutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: PersonSubscriptionFilterNode | null
}

export interface PersonSubscriptionFilterNode {
  birthYear?: string | null
  birthYear_not?:
    | string
    | null /** All values that are not equal to given value. */
  birthYear_in?:
    | string[]
    | null /** All values that are contained in given list. */
  birthYear_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  birthYear_lt?: string | null /** All values less than the given value. */
  birthYear_lte?:
    | string
    | null /** All values less than or equal the given value. */
  birthYear_gt?: string | null /** All values greater than the given value. */
  birthYear_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  birthYear_contains?:
    | string
    | null /** All values containing the given string. */
  birthYear_not_contains?:
    | string
    | null /** All values not containing the given string. */
  birthYear_starts_with?:
    | string
    | null /** All values starting with the given string. */
  birthYear_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  birthYear_ends_with?:
    | string
    | null /** All values ending with the given string. */
  birthYear_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  gender?: PersonGender | null
  gender_not?: PersonGender | null /** All values that are not equal to given value. */
  gender_in?:
    | PersonGender[]
    | null /** All values that are contained in given list. */
  gender_not_in?:
    | PersonGender[]
    | null /** All values that are not contained in given list. */
  height?: number | null
  height_not?:
    | number
    | null /** All values that are not equal to given value. */
  height_in?:
    | number[]
    | null /** All values that are contained in given list. */
  height_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  height_lt?: number | null /** All values less than the given value. */
  height_lte?:
    | number
    | null /** All values less than or equal the given value. */
  height_gt?: number | null /** All values greater than the given value. */
  height_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  mass?: number | null
  mass_not?: number | null /** All values that are not equal to given value. */
  mass_in?: number[] | null /** All values that are contained in given list. */
  mass_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  mass_lt?: number | null /** All values less than the given value. */
  mass_lte?: number | null /** All values less than or equal the given value. */
  mass_gt?: number | null /** All values greater than the given value. */
  mass_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  homeworld?: PlanetFilter | null
  species_every?: SpeciesFilter | null
  species_some?: SpeciesFilter | null
  species_none?: SpeciesFilter | null
  starships_every?: StarshipFilter | null
  starships_some?: StarshipFilter | null
  starships_none?: StarshipFilter | null
  vehicles_every?: VehicleFilter | null
  vehicles_some?: VehicleFilter | null
  vehicles_none?: VehicleFilter | null
}

export interface PlanetSubscriptionFilter {
  AND?:
    | PlanetSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?: PlanetSubscriptionFilter[] | null /** Logical OR on all given filters. */
  mutation_in?:
    | _ModelMutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: PlanetSubscriptionFilterNode | null
}

export interface PlanetSubscriptionFilterNode {
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  diameter?: number | null
  diameter_not?:
    | number
    | null /** All values that are not equal to given value. */
  diameter_in?:
    | number[]
    | null /** All values that are contained in given list. */
  diameter_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  diameter_lt?: number | null /** All values less than the given value. */
  diameter_lte?:
    | number
    | null /** All values less than or equal the given value. */
  diameter_gt?: number | null /** All values greater than the given value. */
  diameter_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  gravity?: string | null
  gravity_not?:
    | string
    | null /** All values that are not equal to given value. */
  gravity_in?:
    | string[]
    | null /** All values that are contained in given list. */
  gravity_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  gravity_lt?: string | null /** All values less than the given value. */
  gravity_lte?:
    | string
    | null /** All values less than or equal the given value. */
  gravity_gt?: string | null /** All values greater than the given value. */
  gravity_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  gravity_contains?:
    | string
    | null /** All values containing the given string. */
  gravity_not_contains?:
    | string
    | null /** All values not containing the given string. */
  gravity_starts_with?:
    | string
    | null /** All values starting with the given string. */
  gravity_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  gravity_ends_with?:
    | string
    | null /** All values ending with the given string. */
  gravity_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  orbitalPeriod?: number | null
  orbitalPeriod_not?:
    | number
    | null /** All values that are not equal to given value. */
  orbitalPeriod_in?:
    | number[]
    | null /** All values that are contained in given list. */
  orbitalPeriod_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  orbitalPeriod_lt?: number | null /** All values less than the given value. */
  orbitalPeriod_lte?:
    | number
    | null /** All values less than or equal the given value. */
  orbitalPeriod_gt?:
    | number
    | null /** All values greater than the given value. */
  orbitalPeriod_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  population?: number | null
  population_not?:
    | number
    | null /** All values that are not equal to given value. */
  population_in?:
    | number[]
    | null /** All values that are contained in given list. */
  population_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  population_lt?: number | null /** All values less than the given value. */
  population_lte?:
    | number
    | null /** All values less than or equal the given value. */
  population_gt?: number | null /** All values greater than the given value. */
  population_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  rotationPeriod?: number | null
  rotationPeriod_not?:
    | number
    | null /** All values that are not equal to given value. */
  rotationPeriod_in?:
    | number[]
    | null /** All values that are contained in given list. */
  rotationPeriod_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  rotationPeriod_lt?: number | null /** All values less than the given value. */
  rotationPeriod_lte?:
    | number
    | null /** All values less than or equal the given value. */
  rotationPeriod_gt?:
    | number
    | null /** All values greater than the given value. */
  rotationPeriod_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  surfaceWater?: number | null
  surfaceWater_not?:
    | number
    | null /** All values that are not equal to given value. */
  surfaceWater_in?:
    | number[]
    | null /** All values that are contained in given list. */
  surfaceWater_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  surfaceWater_lt?: number | null /** All values less than the given value. */
  surfaceWater_lte?:
    | number
    | null /** All values less than or equal the given value. */
  surfaceWater_gt?:
    | number
    | null /** All values greater than the given value. */
  surfaceWater_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  residents_every?: PersonFilter | null
  residents_some?: PersonFilter | null
  residents_none?: PersonFilter | null
}

export interface SpeciesSubscriptionFilter {
  AND?:
    | SpeciesSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SpeciesSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | _ModelMutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: SpeciesSubscriptionFilterNode | null
}

export interface SpeciesSubscriptionFilterNode {
  averageHeight?: number | null
  averageHeight_not?:
    | number
    | null /** All values that are not equal to given value. */
  averageHeight_in?:
    | number[]
    | null /** All values that are contained in given list. */
  averageHeight_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  averageHeight_lt?: number | null /** All values less than the given value. */
  averageHeight_lte?:
    | number
    | null /** All values less than or equal the given value. */
  averageHeight_gt?:
    | number
    | null /** All values greater than the given value. */
  averageHeight_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  averageLifespan?: number | null
  averageLifespan_not?:
    | number
    | null /** All values that are not equal to given value. */
  averageLifespan_in?:
    | number[]
    | null /** All values that are contained in given list. */
  averageLifespan_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  averageLifespan_lt?:
    | number
    | null /** All values less than the given value. */
  averageLifespan_lte?:
    | number
    | null /** All values less than or equal the given value. */
  averageLifespan_gt?:
    | number
    | null /** All values greater than the given value. */
  averageLifespan_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  classification?: string | null
  classification_not?:
    | string
    | null /** All values that are not equal to given value. */
  classification_in?:
    | string[]
    | null /** All values that are contained in given list. */
  classification_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  classification_lt?: string | null /** All values less than the given value. */
  classification_lte?:
    | string
    | null /** All values less than or equal the given value. */
  classification_gt?:
    | string
    | null /** All values greater than the given value. */
  classification_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  classification_contains?:
    | string
    | null /** All values containing the given string. */
  classification_not_contains?:
    | string
    | null /** All values not containing the given string. */
  classification_starts_with?:
    | string
    | null /** All values starting with the given string. */
  classification_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  classification_ends_with?:
    | string
    | null /** All values ending with the given string. */
  classification_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  designation?: string | null
  designation_not?:
    | string
    | null /** All values that are not equal to given value. */
  designation_in?:
    | string[]
    | null /** All values that are contained in given list. */
  designation_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  designation_lt?: string | null /** All values less than the given value. */
  designation_lte?:
    | string
    | null /** All values less than or equal the given value. */
  designation_gt?: string | null /** All values greater than the given value. */
  designation_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  designation_contains?:
    | string
    | null /** All values containing the given string. */
  designation_not_contains?:
    | string
    | null /** All values not containing the given string. */
  designation_starts_with?:
    | string
    | null /** All values starting with the given string. */
  designation_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  designation_ends_with?:
    | string
    | null /** All values ending with the given string. */
  designation_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  language?: string | null
  language_not?:
    | string
    | null /** All values that are not equal to given value. */
  language_in?:
    | string[]
    | null /** All values that are contained in given list. */
  language_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  language_lt?: string | null /** All values less than the given value. */
  language_lte?:
    | string
    | null /** All values less than or equal the given value. */
  language_gt?: string | null /** All values greater than the given value. */
  language_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  language_contains?:
    | string
    | null /** All values containing the given string. */
  language_not_contains?:
    | string
    | null /** All values not containing the given string. */
  language_starts_with?:
    | string
    | null /** All values starting with the given string. */
  language_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  language_ends_with?:
    | string
    | null /** All values ending with the given string. */
  language_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  people_every?: PersonFilter | null
  people_some?: PersonFilter | null
  people_none?: PersonFilter | null
}

export interface StarshipSubscriptionFilter {
  AND?:
    | StarshipSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | StarshipSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | _ModelMutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: StarshipSubscriptionFilterNode | null
}

export interface StarshipSubscriptionFilterNode {
  cargoCapacity?: number | null
  cargoCapacity_not?:
    | number
    | null /** All values that are not equal to given value. */
  cargoCapacity_in?:
    | number[]
    | null /** All values that are contained in given list. */
  cargoCapacity_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  cargoCapacity_lt?: number | null /** All values less than the given value. */
  cargoCapacity_lte?:
    | number
    | null /** All values less than or equal the given value. */
  cargoCapacity_gt?:
    | number
    | null /** All values greater than the given value. */
  cargoCapacity_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  class?: string | null
  class_not?: string | null /** All values that are not equal to given value. */
  class_in?: string[] | null /** All values that are contained in given list. */
  class_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  class_lt?: string | null /** All values less than the given value. */
  class_lte?:
    | string
    | null /** All values less than or equal the given value. */
  class_gt?: string | null /** All values greater than the given value. */
  class_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  class_contains?: string | null /** All values containing the given string. */
  class_not_contains?:
    | string
    | null /** All values not containing the given string. */
  class_starts_with?:
    | string
    | null /** All values starting with the given string. */
  class_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  class_ends_with?:
    | string
    | null /** All values ending with the given string. */
  class_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  consumables?: string | null
  consumables_not?:
    | string
    | null /** All values that are not equal to given value. */
  consumables_in?:
    | string[]
    | null /** All values that are contained in given list. */
  consumables_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  consumables_lt?: string | null /** All values less than the given value. */
  consumables_lte?:
    | string
    | null /** All values less than or equal the given value. */
  consumables_gt?: string | null /** All values greater than the given value. */
  consumables_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  consumables_contains?:
    | string
    | null /** All values containing the given string. */
  consumables_not_contains?:
    | string
    | null /** All values not containing the given string. */
  consumables_starts_with?:
    | string
    | null /** All values starting with the given string. */
  consumables_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  consumables_ends_with?:
    | string
    | null /** All values ending with the given string. */
  consumables_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  costInCredits?: number | null
  costInCredits_not?:
    | number
    | null /** All values that are not equal to given value. */
  costInCredits_in?:
    | number[]
    | null /** All values that are contained in given list. */
  costInCredits_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  costInCredits_lt?: number | null /** All values less than the given value. */
  costInCredits_lte?:
    | number
    | null /** All values less than or equal the given value. */
  costInCredits_gt?:
    | number
    | null /** All values greater than the given value. */
  costInCredits_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  crew?: number | null
  crew_not?: number | null /** All values that are not equal to given value. */
  crew_in?: number[] | null /** All values that are contained in given list. */
  crew_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  crew_lt?: number | null /** All values less than the given value. */
  crew_lte?: number | null /** All values less than or equal the given value. */
  crew_gt?: number | null /** All values greater than the given value. */
  crew_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  hyperdriveRating?: number | null
  hyperdriveRating_not?:
    | number
    | null /** All values that are not equal to given value. */
  hyperdriveRating_in?:
    | number[]
    | null /** All values that are contained in given list. */
  hyperdriveRating_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  hyperdriveRating_lt?:
    | number
    | null /** All values less than the given value. */
  hyperdriveRating_lte?:
    | number
    | null /** All values less than or equal the given value. */
  hyperdriveRating_gt?:
    | number
    | null /** All values greater than the given value. */
  hyperdriveRating_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  length?: number | null
  length_not?:
    | number
    | null /** All values that are not equal to given value. */
  length_in?:
    | number[]
    | null /** All values that are contained in given list. */
  length_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  length_lt?: number | null /** All values less than the given value. */
  length_lte?:
    | number
    | null /** All values less than or equal the given value. */
  length_gt?: number | null /** All values greater than the given value. */
  length_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  maxAtmospheringSpeed?: number | null
  maxAtmospheringSpeed_not?:
    | number
    | null /** All values that are not equal to given value. */
  maxAtmospheringSpeed_in?:
    | number[]
    | null /** All values that are contained in given list. */
  maxAtmospheringSpeed_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  maxAtmospheringSpeed_lt?:
    | number
    | null /** All values less than the given value. */
  maxAtmospheringSpeed_lte?:
    | number
    | null /** All values less than or equal the given value. */
  maxAtmospheringSpeed_gt?:
    | number
    | null /** All values greater than the given value. */
  maxAtmospheringSpeed_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  mglt?: number | null
  mglt_not?: number | null /** All values that are not equal to given value. */
  mglt_in?: number[] | null /** All values that are contained in given list. */
  mglt_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  mglt_lt?: number | null /** All values less than the given value. */
  mglt_lte?: number | null /** All values less than or equal the given value. */
  mglt_gt?: number | null /** All values greater than the given value. */
  mglt_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  passengers?: number | null
  passengers_not?:
    | number
    | null /** All values that are not equal to given value. */
  passengers_in?:
    | number[]
    | null /** All values that are contained in given list. */
  passengers_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  passengers_lt?: number | null /** All values less than the given value. */
  passengers_lte?:
    | number
    | null /** All values less than or equal the given value. */
  passengers_gt?: number | null /** All values greater than the given value. */
  passengers_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  pilots_every?: PersonFilter | null
  pilots_some?: PersonFilter | null
  pilots_none?: PersonFilter | null
}

export interface VehicleSubscriptionFilter {
  AND?:
    | VehicleSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | VehicleSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | _ModelMutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: VehicleSubscriptionFilterNode | null
}

export interface VehicleSubscriptionFilterNode {
  cargoCapacity?: number | null
  cargoCapacity_not?:
    | number
    | null /** All values that are not equal to given value. */
  cargoCapacity_in?:
    | number[]
    | null /** All values that are contained in given list. */
  cargoCapacity_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  cargoCapacity_lt?: number | null /** All values less than the given value. */
  cargoCapacity_lte?:
    | number
    | null /** All values less than or equal the given value. */
  cargoCapacity_gt?:
    | number
    | null /** All values greater than the given value. */
  cargoCapacity_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  class?: string | null
  class_not?: string | null /** All values that are not equal to given value. */
  class_in?: string[] | null /** All values that are contained in given list. */
  class_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  class_lt?: string | null /** All values less than the given value. */
  class_lte?:
    | string
    | null /** All values less than or equal the given value. */
  class_gt?: string | null /** All values greater than the given value. */
  class_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  class_contains?: string | null /** All values containing the given string. */
  class_not_contains?:
    | string
    | null /** All values not containing the given string. */
  class_starts_with?:
    | string
    | null /** All values starting with the given string. */
  class_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  class_ends_with?:
    | string
    | null /** All values ending with the given string. */
  class_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  consumables?: string | null
  consumables_not?:
    | string
    | null /** All values that are not equal to given value. */
  consumables_in?:
    | string[]
    | null /** All values that are contained in given list. */
  consumables_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  consumables_lt?: string | null /** All values less than the given value. */
  consumables_lte?:
    | string
    | null /** All values less than or equal the given value. */
  consumables_gt?: string | null /** All values greater than the given value. */
  consumables_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  consumables_contains?:
    | string
    | null /** All values containing the given string. */
  consumables_not_contains?:
    | string
    | null /** All values not containing the given string. */
  consumables_starts_with?:
    | string
    | null /** All values starting with the given string. */
  consumables_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  consumables_ends_with?:
    | string
    | null /** All values ending with the given string. */
  consumables_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  costInCredits?: number | null
  costInCredits_not?:
    | number
    | null /** All values that are not equal to given value. */
  costInCredits_in?:
    | number[]
    | null /** All values that are contained in given list. */
  costInCredits_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  costInCredits_lt?: number | null /** All values less than the given value. */
  costInCredits_lte?:
    | number
    | null /** All values less than or equal the given value. */
  costInCredits_gt?:
    | number
    | null /** All values greater than the given value. */
  costInCredits_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: DateTime | null /** All values less than the given value. */
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: DateTime | null /** All values greater than the given value. */
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  crew?: number | null
  crew_not?: number | null /** All values that are not equal to given value. */
  crew_in?: number[] | null /** All values that are contained in given list. */
  crew_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  crew_lt?: number | null /** All values less than the given value. */
  crew_lte?: number | null /** All values less than or equal the given value. */
  crew_gt?: number | null /** All values greater than the given value. */
  crew_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  isPublished?: boolean | null
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */
  length?: number | null
  length_not?:
    | number
    | null /** All values that are not equal to given value. */
  length_in?:
    | number[]
    | null /** All values that are contained in given list. */
  length_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  length_lt?: number | null /** All values less than the given value. */
  length_lte?:
    | number
    | null /** All values less than or equal the given value. */
  length_gt?: number | null /** All values greater than the given value. */
  length_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  maxAtmospheringSpeed?: number | null
  maxAtmospheringSpeed_not?:
    | number
    | null /** All values that are not equal to given value. */
  maxAtmospheringSpeed_in?:
    | number[]
    | null /** All values that are contained in given list. */
  maxAtmospheringSpeed_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  maxAtmospheringSpeed_lt?:
    | number
    | null /** All values less than the given value. */
  maxAtmospheringSpeed_lte?:
    | number
    | null /** All values less than or equal the given value. */
  maxAtmospheringSpeed_gt?:
    | number
    | null /** All values greater than the given value. */
  maxAtmospheringSpeed_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  model?: string | null
  model_not?: string | null /** All values that are not equal to given value. */
  model_in?: string[] | null /** All values that are contained in given list. */
  model_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  model_lt?: string | null /** All values less than the given value. */
  model_lte?:
    | string
    | null /** All values less than or equal the given value. */
  model_gt?: string | null /** All values greater than the given value. */
  model_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  model_contains?: string | null /** All values containing the given string. */
  model_not_contains?:
    | string
    | null /** All values not containing the given string. */
  model_starts_with?:
    | string
    | null /** All values starting with the given string. */
  model_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  model_ends_with?:
    | string
    | null /** All values ending with the given string. */
  model_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  name?: string | null
  name_not?: string | null /** All values that are not equal to given value. */
  name_in?: string[] | null /** All values that are contained in given list. */
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  name_lt?: string | null /** All values less than the given value. */
  name_lte?: string | null /** All values less than or equal the given value. */
  name_gt?: string | null /** All values greater than the given value. */
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  name_contains?: string | null /** All values containing the given string. */
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  name_ends_with?: string | null /** All values ending with the given string. */
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  passengers?: number | null
  passengers_not?:
    | number
    | null /** All values that are not equal to given value. */
  passengers_in?:
    | number[]
    | null /** All values that are contained in given list. */
  passengers_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */
  passengers_lt?: number | null /** All values less than the given value. */
  passengers_lte?:
    | number
    | null /** All values less than or equal the given value. */
  passengers_gt?: number | null /** All values greater than the given value. */
  passengers_gte?:
    | number
    | null /** All values greater than or equal the given value. */
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: DateTime | null /** All values less than the given value. */
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */
  films_every?: FilmFilter | null
  films_some?: FilmFilter | null
  films_none?: FilmFilter | null
  pilots_every?: PersonFilter | null
  pilots_some?: PersonFilter | null
  pilots_none?: PersonFilter | null
}
export interface AllAssetsQueryArgs {
  filter?: AssetFilter | null
  orderBy?: AssetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllFilmsQueryArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllPersonsQueryArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllPlanetsQueryArgs {
  filter?: PlanetFilter | null
  orderBy?: PlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllSpeciesQueryArgs {
  filter?: SpeciesFilter | null
  orderBy?: SpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllStarshipsQueryArgs {
  filter?: StarshipFilter | null
  orderBy?: StarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllVehiclesQueryArgs {
  filter?: VehicleFilter | null
  orderBy?: VehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllAssetsMetaQueryArgs {
  filter?: AssetFilter | null
  orderBy?: AssetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllFilmsMetaQueryArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllPersonsMetaQueryArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllPlanetsMetaQueryArgs {
  filter?: PlanetFilter | null
  orderBy?: PlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllSpeciesMetaQueryArgs {
  filter?: SpeciesFilter | null
  orderBy?: SpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllStarshipsMetaQueryArgs {
  filter?: StarshipFilter | null
  orderBy?: StarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllVehiclesMetaQueryArgs {
  filter?: VehicleFilter | null
  orderBy?: VehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AssetQueryArgs {
  id?: string | null
}
export interface FilmQueryArgs {
  id?: string | null
  title?: string | null /** The title of this film */
}
export interface PersonQueryArgs {
  id?: string | null
  name?: string | null /** The name of this person. */
}
export interface PlanetQueryArgs {
  id?: string | null
  name?: string | null /** The name of the planet */
}
export interface SpeciesQueryArgs {
  id?: string | null
  name?: string | null /** The name of this species. */
}
export interface StarshipQueryArgs {
  id?: string | null
  name?:
    | string
    | null /** The name of this starship. The common name, such as "Death Star". */
}
export interface VehicleQueryArgs {
  id?: string | null
  name?:
    | string
    | null /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
}
export interface NodeQueryArgs {
  id: string /** The ID of an object */
}
export interface CharactersFilmArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PlanetsFilmArgs {
  filter?: PlanetFilter | null
  orderBy?: PlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface SpeciesFilmArgs {
  filter?: SpeciesFilter | null
  orderBy?: SpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface StarshipsFilmArgs {
  filter?: StarshipFilter | null
  orderBy?: StarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface VehiclesFilmArgs {
  filter?: VehicleFilter | null
  orderBy?: VehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _CharactersMetaFilmArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PlanetsMetaFilmArgs {
  filter?: PlanetFilter | null
  orderBy?: PlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _SpeciesMetaFilmArgs {
  filter?: SpeciesFilter | null
  orderBy?: SpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _StarshipsMetaFilmArgs {
  filter?: StarshipFilter | null
  orderBy?: StarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _VehiclesMetaFilmArgs {
  filter?: VehicleFilter | null
  orderBy?: VehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsPersonArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface HomeworldPersonArgs {
  filter?: PlanetFilter | null
}
export interface SpeciesPersonArgs {
  filter?: SpeciesFilter | null
  orderBy?: SpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface StarshipsPersonArgs {
  filter?: StarshipFilter | null
  orderBy?: StarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface VehiclesPersonArgs {
  filter?: VehicleFilter | null
  orderBy?: VehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaPersonArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _SpeciesMetaPersonArgs {
  filter?: SpeciesFilter | null
  orderBy?: SpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _StarshipsMetaPersonArgs {
  filter?: StarshipFilter | null
  orderBy?: StarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _VehiclesMetaPersonArgs {
  filter?: VehicleFilter | null
  orderBy?: VehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsPlanetArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface ResidentsPlanetArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaPlanetArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _ResidentsMetaPlanetArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsSpeciesArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PeopleSpeciesArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaSpeciesArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PeopleMetaSpeciesArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsStarshipArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PilotsStarshipArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaStarshipArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PilotsMetaStarshipArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsVehicleArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PilotsVehicleArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaVehicleArgs {
  filter?: FilmFilter | null
  orderBy?: FilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PilotsMetaVehicleArgs {
  filter?: PersonFilter | null
  orderBy?: PersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface CreateAssetMutationArgs {
  fileName: string /** Original File Name */
  handle: string /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  mimeType?: string | null /** The Mime Type */
  size: number /** The Size Of The File */
  url: string /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}
export interface CreateFilmMutationArgs {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}
export interface CreatePersonMutationArgs {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}
export interface CreatePlanetMutationArgs {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  isPublished?: boolean | null /** indicates if the record is published */
  name: string /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  filmsIds?: string[] | null
  films?: PlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: PlanetresidentsPerson[] | null
}
export interface CreateSpeciesMutationArgs {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SpeciespeoplePerson[] | null
}
export interface CreateStarshipMutationArgs {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: StarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: StarshippilotsPerson[] | null
}
export interface CreateVehicleMutationArgs {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name: string /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  filmsIds?: string[] | null
  films?: VehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: VehiclepilotsPerson[] | null
}
export interface UpdateAssetMutationArgs {
  fileName?: string | null /** Original File Name */
  handle?: string | null /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  id: string
  mimeType?: string | null /** The Mime Type */
  size?: number | null /** The Size Of The File */
  url?: string | null /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}
export interface UpdateFilmMutationArgs {
  director?: string | null /** The name of the director of this film. */
  episodeId?: number | null /** The episode number of this film. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title?: string | null /** The title of this film */
  charactersIds?: string[] | null
  characters?: FilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: FilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: FilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: FilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: FilmvehiclesVehicle[] | null
}
export interface UpdatePersonMutationArgs {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | PersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | PersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name?: string | null /** The name of this person. */
  skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: PersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: PersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: PersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: PersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: PersonvehiclesVehicle[] | null
}
export interface UpdatePlanetMutationArgs {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  name?: string | null /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  filmsIds?: string[] | null
  films?: PlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: PlanetresidentsPerson[] | null
}
export interface UpdateSpeciesMutationArgs {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name?: string | null /** The name of this species. */
  skinColor?:
    | SpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SpeciespeoplePerson[] | null
}
export interface UpdateStarshipMutationArgs {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this starship can transport. */
  class?:
    | string
    | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  consumables?:
    | string
    | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this starship new, in galactic credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  hyperdriveRating?:
    | number
    | null /** The class of this starships hyperdrive. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this starship in meters. */
  manufacturer?: string[] | null /** The manufacturer of this starship. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  mglt?:
    | number
    | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
  name?:
    | string
    | null /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: StarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: StarshippilotsPerson[] | null
}
export interface UpdateVehicleMutationArgs {
  cargoCapacity?:
    | number
    | null /** The maximum number of kilograms that this vehicle can transport. */
  class?:
    | string
    | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  consumables?:
    | string
    | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  costInCredits?:
    | number
    | null /** The cost of this vehicle new, in Galactic Credits. */
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  length?: number | null /** The length of this vehicle in meters. */
  manufacturer?: string[] | null /** The manufacturer of this vehicle. */
  maxAtmospheringSpeed?:
    | number
    | null /** The maximum speed of this vehicle in the atmosphere. */
  model?:
    | string
    | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  name?:
    | string
    | null /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  passengers?:
    | number
    | null /** The number of non-essential people this vehicle can transport. */
  filmsIds?: string[] | null
  films?: VehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: VehiclepilotsPerson[] | null
}
export interface UpdateOrCreateAssetMutationArgs {
  update: UpdateAsset
  create: CreateAsset
}
export interface UpdateOrCreateFilmMutationArgs {
  update: UpdateFilm
  create: CreateFilm
}
export interface UpdateOrCreatePersonMutationArgs {
  update: UpdatePerson
  create: CreatePerson
}
export interface UpdateOrCreatePlanetMutationArgs {
  update: UpdatePlanet
  create: CreatePlanet
}
export interface UpdateOrCreateSpeciesMutationArgs {
  update: UpdateSpecies
  create: CreateSpecies
}
export interface UpdateOrCreateStarshipMutationArgs {
  update: UpdateStarship
  create: CreateStarship
}
export interface UpdateOrCreateVehicleMutationArgs {
  update: UpdateVehicle
  create: CreateVehicle
}
export interface DeleteAssetMutationArgs {
  id: string
}
export interface DeleteFilmMutationArgs {
  id: string
}
export interface DeletePersonMutationArgs {
  id: string
}
export interface DeletePlanetMutationArgs {
  id: string
}
export interface DeleteSpeciesMutationArgs {
  id: string
}
export interface DeleteStarshipMutationArgs {
  id: string
}
export interface DeleteVehicleMutationArgs {
  id: string
}
export interface AddToFilmPlanetsMutationArgs {
  planetsPlanetId: string
  filmsFilmId: string
}
export interface AddToFilmSpeciesMutationArgs {
  speciesSpeciesId: string
  filmsFilmId: string
}
export interface AddToFilmStarshipsMutationArgs {
  starshipsStarshipId: string
  filmsFilmId: string
}
export interface AddToFilmVehiclesMutationArgs {
  vehiclesVehicleId: string
  filmsFilmId: string
}
export interface AddToPeopleFilmMutationArgs {
  filmsFilmId: string
  charactersPersonId: string
}
export interface AddToPeoplePlanetMutationArgs {
  homeworldPlanetId: string
  residentsPersonId: string
}
export interface AddToPeopleSpeciesMutationArgs {
  speciesSpeciesId: string
  peoplePersonId: string
}
export interface AddToPeopleStarshipsMutationArgs {
  starshipsStarshipId: string
  pilotsPersonId: string
}
export interface AddToPeopleVehiclesMutationArgs {
  vehiclesVehicleId: string
  pilotsPersonId: string
}
export interface RemoveFromFilmPlanetsMutationArgs {
  planetsPlanetId: string
  filmsFilmId: string
}
export interface RemoveFromFilmSpeciesMutationArgs {
  speciesSpeciesId: string
  filmsFilmId: string
}
export interface RemoveFromFilmStarshipsMutationArgs {
  starshipsStarshipId: string
  filmsFilmId: string
}
export interface RemoveFromFilmVehiclesMutationArgs {
  vehiclesVehicleId: string
  filmsFilmId: string
}
export interface RemoveFromPeopleFilmMutationArgs {
  filmsFilmId: string
  charactersPersonId: string
}
export interface RemoveFromPeoplePlanetMutationArgs {
  homeworldPlanetId: string
  residentsPersonId: string
}
export interface RemoveFromPeopleSpeciesMutationArgs {
  speciesSpeciesId: string
  peoplePersonId: string
}
export interface RemoveFromPeopleStarshipsMutationArgs {
  starshipsStarshipId: string
  pilotsPersonId: string
}
export interface RemoveFromPeopleVehiclesMutationArgs {
  vehiclesVehicleId: string
  pilotsPersonId: string
}
export interface InvokeFunctionMutationArgs {
  input: InvokeFunctionInput
}
export interface AssetSubscriptionArgs {
  filter?: AssetSubscriptionFilter | null
}
export interface FilmSubscriptionArgs {
  filter?: FilmSubscriptionFilter | null
}
export interface PersonSubscriptionArgs {
  filter?: PersonSubscriptionFilter | null
}
export interface PlanetSubscriptionArgs {
  filter?: PlanetSubscriptionFilter | null
}
export interface SpeciesSubscriptionArgs {
  filter?: SpeciesSubscriptionFilter | null
}
export interface StarshipSubscriptionArgs {
  filter?: StarshipSubscriptionFilter | null
}
export interface VehicleSubscriptionArgs {
  filter?: VehicleSubscriptionFilter | null
}

export enum AssetOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  fileName_ASC = 'fileName_ASC',
  fileName_DESC = 'fileName_DESC',
  handle_ASC = 'handle_ASC',
  handle_DESC = 'handle_DESC',
  height_ASC = 'height_ASC',
  height_DESC = 'height_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
  width_ASC = 'width_ASC',
  width_DESC = 'width_DESC',
}
/** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
export enum PersonGender {
  UNKNOWN = 'UNKNOWN',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  HERMAPHRODITE = 'HERMAPHRODITE',
}

export enum FilmOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  director_ASC = 'director_ASC',
  director_DESC = 'director_DESC',
  episodeId_ASC = 'episodeId_ASC',
  episodeId_DESC = 'episodeId_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  openingCrawl_ASC = 'openingCrawl_ASC',
  openingCrawl_DESC = 'openingCrawl_DESC',
  releaseDate_ASC = 'releaseDate_ASC',
  releaseDate_DESC = 'releaseDate_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export enum PersonOrderBy {
  birthYear_ASC = 'birthYear_ASC',
  birthYear_DESC = 'birthYear_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  gender_ASC = 'gender_ASC',
  gender_DESC = 'gender_DESC',
  height_ASC = 'height_ASC',
  height_DESC = 'height_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  mass_ASC = 'mass_ASC',
  mass_DESC = 'mass_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}
/** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
export enum PersonEyeColor {
  UNKNOWN = 'UNKNOWN',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  RED = 'RED',
  BROWN = 'BROWN',
  BLUEGREY = 'BLUEGREY',
  BLACK = 'BLACK',
  ORANGE = 'ORANGE',
  HAZEL = 'HAZEL',
  PINK = 'PINK',
  GOLD = 'GOLD',
  GREEN = 'GREEN',
  WHITE = 'WHITE',
  DARK = 'DARK',
}
/** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
export enum PersonHairColor {
  AUBURN = 'AUBURN',
  BLACK = 'BLACK',
  BLONDE = 'BLONDE',
  BROWN = 'BROWN',
  GREY = 'GREY',
  UNKNOWN = 'UNKNOWN',
  WHITE = 'WHITE',
}
/** The skin color of this person. */
export enum PersonSkinColor {
  UNKNOWN = 'UNKNOWN',
  FAIR = 'FAIR',
  GOLD = 'GOLD',
  WHITE = 'WHITE',
  LIGHT = 'LIGHT',
  GREEN = 'GREEN',
  GREENTAN = 'GREENTAN',
  PALE = 'PALE',
  METAL = 'METAL',
  DARK = 'DARK',
  BROWNMOTTLE = 'BROWNMOTTLE',
  BROWN = 'BROWN',
  GREY = 'GREY',
  MOTTLEDGREEN = 'MOTTLEDGREEN',
  ORANGE = 'ORANGE',
  BLUE = 'BLUE',
  RED = 'RED',
  YELLOW = 'YELLOW',
  TAN = 'TAN',
  SILVER = 'SILVER',
}

export enum SpeciesOrderBy {
  averageHeight_ASC = 'averageHeight_ASC',
  averageHeight_DESC = 'averageHeight_DESC',
  averageLifespan_ASC = 'averageLifespan_ASC',
  averageLifespan_DESC = 'averageLifespan_DESC',
  classification_ASC = 'classification_ASC',
  classification_DESC = 'classification_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  designation_ASC = 'designation_ASC',
  designation_DESC = 'designation_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  language_ASC = 'language_ASC',
  language_DESC = 'language_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}
/** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
export enum SpeciesEyeColor {
  AMBER = 'AMBER',
  BLACK = 'BLACK',
  BLUE = 'BLUE',
  BROWN = 'BROWN',
  GOLD = 'GOLD',
  GREEN = 'GREEN',
  GREY = 'GREY',
  HAZEL = 'HAZEL',
  INDIGO = 'INDIGO',
  ORANGE = 'ORANGE',
  PINK = 'PINK',
  RED = 'RED',
  SILVER = 'SILVER',
  UNKNOWN = 'UNKNOWN',
  YELLOW = 'YELLOW',
  GOLDEN = 'GOLDEN',
}
/** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
export enum SpeciesHairColor {
  UNKNOWN = 'UNKNOWN',
  BROWN = 'BROWN',
  WHITE = 'WHITE',
  RED = 'RED',
  BLACK = 'BLACK',
  BLONDE = 'BLONDE',
}
/** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
export enum SpeciesSkinColor {
  BLUE = 'BLUE',
  BROWN = 'BROWN',
  CAUCASIAN = 'CAUCASIAN',
  DARK = 'DARK',
  GREEN = 'GREEN',
  GREY = 'GREY',
  MAGENTA = 'MAGENTA',
  ORANGE = 'ORANGE',
  PALE = 'PALE',
  PALEPINK = 'PALEPINK',
  PEACH = 'PEACH',
  PINK = 'PINK',
  PURPLE = 'PURPLE',
  RED = 'RED',
  TAN = 'TAN',
  UNKNOWN = 'UNKNOWN',
  WHITE = 'WHITE',
  YELLOW = 'YELLOW',
  BLACK = 'BLACK',
  ASIAN = 'ASIAN',
  HISPANIC = 'HISPANIC',
}

export enum StarshipOrderBy {
  cargoCapacity_ASC = 'cargoCapacity_ASC',
  cargoCapacity_DESC = 'cargoCapacity_DESC',
  class_ASC = 'class_ASC',
  class_DESC = 'class_DESC',
  consumables_ASC = 'consumables_ASC',
  consumables_DESC = 'consumables_DESC',
  costInCredits_ASC = 'costInCredits_ASC',
  costInCredits_DESC = 'costInCredits_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  crew_ASC = 'crew_ASC',
  crew_DESC = 'crew_DESC',
  hyperdriveRating_ASC = 'hyperdriveRating_ASC',
  hyperdriveRating_DESC = 'hyperdriveRating_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  length_ASC = 'length_ASC',
  length_DESC = 'length_DESC',
  maxAtmospheringSpeed_ASC = 'maxAtmospheringSpeed_ASC',
  maxAtmospheringSpeed_DESC = 'maxAtmospheringSpeed_DESC',
  mglt_ASC = 'mglt_ASC',
  mglt_DESC = 'mglt_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  passengers_ASC = 'passengers_ASC',
  passengers_DESC = 'passengers_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export enum VehicleOrderBy {
  cargoCapacity_ASC = 'cargoCapacity_ASC',
  cargoCapacity_DESC = 'cargoCapacity_DESC',
  class_ASC = 'class_ASC',
  class_DESC = 'class_DESC',
  consumables_ASC = 'consumables_ASC',
  consumables_DESC = 'consumables_DESC',
  costInCredits_ASC = 'costInCredits_ASC',
  costInCredits_DESC = 'costInCredits_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  crew_ASC = 'crew_ASC',
  crew_DESC = 'crew_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  length_ASC = 'length_ASC',
  length_DESC = 'length_DESC',
  maxAtmospheringSpeed_ASC = 'maxAtmospheringSpeed_ASC',
  maxAtmospheringSpeed_DESC = 'maxAtmospheringSpeed_DESC',
  model_ASC = 'model_ASC',
  model_DESC = 'model_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  passengers_ASC = 'passengers_ASC',
  passengers_DESC = 'passengers_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export enum PlanetOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  diameter_ASC = 'diameter_ASC',
  diameter_DESC = 'diameter_DESC',
  gravity_ASC = 'gravity_ASC',
  gravity_DESC = 'gravity_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  orbitalPeriod_ASC = 'orbitalPeriod_ASC',
  orbitalPeriod_DESC = 'orbitalPeriod_DESC',
  population_ASC = 'population_ASC',
  population_DESC = 'population_DESC',
  rotationPeriod_ASC = 'rotationPeriod_ASC',
  rotationPeriod_DESC = 'rotationPeriod_DESC',
  surfaceWater_ASC = 'surfaceWater_ASC',
  surfaceWater_DESC = 'surfaceWater_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export enum _ModelMutationType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    allAssets?: AllAssetsResolver<Asset[], any, Context>
    allFilms?: AllFilmsResolver<Film[], any, Context>
    allPersons?: AllPersonsResolver<Person[], any, Context>
    allPlanets?: AllPlanetsResolver<Planet[], any, Context>
    allSpecies?: AllSpeciesResolver<Species[], any, Context>
    allStarships?: AllStarshipsResolver<Starship[], any, Context>
    allVehicles?: AllVehiclesResolver<Vehicle[], any, Context>
    _allAssetsMeta?: AllAssetsMetaResolver<_QueryMeta, any, Context>
    _allFilmsMeta?: AllFilmsMetaResolver<_QueryMeta, any, Context>
    _allPersonsMeta?: AllPersonsMetaResolver<_QueryMeta, any, Context>
    _allPlanetsMeta?: AllPlanetsMetaResolver<_QueryMeta, any, Context>
    _allSpeciesMeta?: AllSpeciesMetaResolver<_QueryMeta, any, Context>
    _allStarshipsMeta?: AllStarshipsMetaResolver<_QueryMeta, any, Context>
    _allVehiclesMeta?: AllVehiclesMetaResolver<_QueryMeta, any, Context>
    Asset?: AssetResolver<Asset | null, any, Context>
    Film?: FilmResolver<Film | null, any, Context>
    Person?: PersonResolver<Person | null, any, Context>
    Planet?: PlanetResolver<Planet | null, any, Context>
    Species?: SpeciesResolver<Species | null, any, Context>
    Starship?: StarshipResolver<Starship | null, any, Context>
    Vehicle?: VehicleResolver<Vehicle | null, any, Context>
    node?: NodeResolver<
      Node | null,
      any,
      Context
    > /** Fetches an object given its ID */
  }

  export type AllAssetsResolver<
    R = Asset[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllAssetsArgs>
  export interface AllAssetsArgs {
    filter?: AssetFilter | null
    orderBy?: AssetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllFilmsResolver<
    R = Film[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllFilmsArgs>
  export interface AllFilmsArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPersonsResolver<
    R = Person[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPersonsArgs>
  export interface AllPersonsArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPlanetsResolver<
    R = Planet[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPlanetsArgs>
  export interface AllPlanetsArgs {
    filter?: PlanetFilter | null
    orderBy?: PlanetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllSpeciesResolver<
    R = Species[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSpeciesArgs>
  export interface AllSpeciesArgs {
    filter?: SpeciesFilter | null
    orderBy?: SpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllStarshipsResolver<
    R = Starship[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllStarshipsArgs>
  export interface AllStarshipsArgs {
    filter?: StarshipFilter | null
    orderBy?: StarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllVehiclesResolver<
    R = Vehicle[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllVehiclesArgs>
  export interface AllVehiclesArgs {
    filter?: VehicleFilter | null
    orderBy?: VehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllAssetsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllAssetsMetaArgs>
  export interface _AllAssetsMetaArgs {
    filter?: AssetFilter | null
    orderBy?: AssetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllFilmsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllFilmsMetaArgs>
  export interface _AllFilmsMetaArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPersonsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPersonsMetaArgs>
  export interface _AllPersonsMetaArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPlanetsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPlanetsMetaArgs>
  export interface _AllPlanetsMetaArgs {
    filter?: PlanetFilter | null
    orderBy?: PlanetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllSpeciesMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSpeciesMetaArgs>
  export interface _AllSpeciesMetaArgs {
    filter?: SpeciesFilter | null
    orderBy?: SpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllStarshipsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllStarshipsMetaArgs>
  export interface _AllStarshipsMetaArgs {
    filter?: StarshipFilter | null
    orderBy?: StarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllVehiclesMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllVehiclesMetaArgs>
  export interface _AllVehiclesMetaArgs {
    filter?: VehicleFilter | null
    orderBy?: VehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AssetResolver<
    R = Asset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AssetArgs>
  export interface AssetArgs {
    id?: string | null
  }

  export type FilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmArgs>
  export interface FilmArgs {
    id?: string | null
    title?: string | null /** The title of this film */
  }

  export type PersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PersonArgs>
  export interface PersonArgs {
    id?: string | null
    name?: string | null /** The name of this person. */
  }

  export type PlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlanetArgs>
  export interface PlanetArgs {
    id?: string | null
    name?: string | null /** The name of the planet */
  }

  export type SpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesArgs>
  export interface SpeciesArgs {
    id?: string | null
    name?: string | null /** The name of this species. */
  }

  export type StarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipArgs>
  export interface StarshipArgs {
    id?: string | null
    name?:
      | string
      | null /** The name of this starship. The common name, such as "Death Star". */
  }

  export type VehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehicleArgs>
  export interface VehicleArgs {
    id?: string | null
    name?:
      | string
      | null /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  }

  export type NodeResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, NodeArgs>
  export interface NodeArgs {
    id: string /** The ID of an object */
  }
}
/** System model for Assets */
export namespace AssetResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    fileName?: FileNameResolver<string, any, Context> /** Original File Name */
    handle?: HandleResolver<string, any, Context> /** The File Handle */
    height?: HeightResolver<
      number | null,
      any,
      Context
    > /** The height of the file in case it is an image */
    id?: IdResolver<string, any, Context>
    mimeType?: MimeTypeResolver<
      string | null,
      any,
      Context
    > /** The Mime Type */
    size?: SizeResolver<number, any, Context> /** The Size Of The File */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    url?: UrlResolver<string, any, Context> /** The Url Of The Asset */
    width?: WidthResolver<
      number | null,
      any,
      Context
    > /** The width of the file in case it is an image */
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FileNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HandleResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MimeTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SizeResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UrlResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A Film is a single film. */
export namespace FilmResolvers {
  export interface Resolvers<Context = any> {
    characters?: CharactersResolver<Person[] | null, any, Context>
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    director?: DirectorResolver<
      string | null,
      any,
      Context
    > /** The name of the director of this film. */
    episodeId?: EpisodeIdResolver<
      number,
      any,
      Context
    > /** The episode number of this film. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    openingCrawl?: OpeningCrawlResolver<
      string | null,
      any,
      Context
    > /** The opening paragraphs at the beginning of this film. */
    planets?: PlanetsResolver<Planet[] | null, any, Context>
    producers?: ProducersResolver<
      string[] | null,
      any,
      Context
    > /** The names of the producers of this film. */
    releaseDate?: ReleaseDateResolver<
      DateTime | null,
      any,
      Context
    > /** The ISO 8601 date format of film release at original creator country. */
    species?: SpeciesResolver<Species[] | null, any, Context>
    starships?: StarshipsResolver<Starship[] | null, any, Context>
    title?: TitleResolver<string, any, Context> /** The title of this film */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    vehicles?: VehiclesResolver<Vehicle[] | null, any, Context>
    _charactersMeta?: CharactersMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _planetsMeta?: PlanetsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _speciesMeta?: SpeciesMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _starshipsMeta?: StarshipsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _vehiclesMeta?: VehiclesMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
  }

  export type CharactersResolver<
    R = Person[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CharactersArgs>
  export interface CharactersArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DirectorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EpisodeIdResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OpeningCrawlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PlanetsResolver<
    R = Planet[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlanetsArgs>
  export interface PlanetsArgs {
    filter?: PlanetFilter | null
    orderBy?: PlanetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type ProducersResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ReleaseDateResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesResolver<
    R = Species[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesArgs>
  export interface SpeciesArgs {
    filter?: SpeciesFilter | null
    orderBy?: SpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsResolver<
    R = Starship[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsArgs>
  export interface StarshipsArgs {
    filter?: StarshipFilter | null
    orderBy?: StarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesResolver<
    R = Vehicle[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesArgs>
  export interface VehiclesArgs {
    filter?: VehicleFilter | null
    orderBy?: VehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type CharactersMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CharactersMetaArgs>
  export interface _CharactersMetaArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PlanetsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlanetsMetaArgs>
  export interface _PlanetsMetaArgs {
    filter?: PlanetFilter | null
    orderBy?: PlanetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type SpeciesMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesMetaArgs>
  export interface _SpeciesMetaArgs {
    filter?: SpeciesFilter | null
    orderBy?: SpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsMetaArgs>
  export interface _StarshipsMetaArgs {
    filter?: StarshipFilter | null
    orderBy?: StarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type VehiclesMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesMetaArgs>
  export interface _VehiclesMetaArgs {
    filter?: VehicleFilter | null
    orderBy?: VehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Person is an individual person or character within the Star Wars universe */
export namespace PersonResolvers {
  export interface Resolvers<Context = any> {
    birthYear?: BirthYearResolver<
      string | null,
      any,
      Context
    > /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    eyeColor?: EyeColorResolver<
      PersonEyeColor[] | null,
      any,
      Context
    > /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
    films?: FilmsResolver<Film[] | null, any, Context>
    gender?: GenderResolver<
      PersonGender | null,
      any,
      Context
    > /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
    hairColor?: HairColorResolver<
      PersonHairColor[] | null,
      any,
      Context
    > /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
    height?: HeightResolver<
      number | null,
      any,
      Context
    > /** The height of the person in centimeters. */
    homeworld?: HomeworldResolver<Planet | null, any, Context>
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    mass?: MassResolver<
      number | null,
      any,
      Context
    > /** The mass of the person in kilograms. */
    name?: NameResolver<string, any, Context> /** The name of this person. */
    skinColor?: SkinColorResolver<
      PersonSkinColor[] | null,
      any,
      Context
    > /** The skin color of this person. */
    species?: SpeciesResolver<Species[] | null, any, Context>
    starships?: StarshipsResolver<Starship[] | null, any, Context>
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    vehicles?: VehiclesResolver<Vehicle[] | null, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _speciesMeta?: SpeciesMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _starshipsMeta?: StarshipsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _vehiclesMeta?: VehiclesMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
  }

  export type BirthYearResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = PersonEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = Film[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type GenderResolver<
    R = PersonGender | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HairColorResolver<
    R = PersonHairColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HomeworldResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, HomeworldArgs>
  export interface HomeworldArgs {
    filter?: PlanetFilter | null
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MassResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type SkinColorResolver<
    R = PersonSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesResolver<
    R = Species[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesArgs>
  export interface SpeciesArgs {
    filter?: SpeciesFilter | null
    orderBy?: SpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsResolver<
    R = Starship[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsArgs>
  export interface StarshipsArgs {
    filter?: StarshipFilter | null
    orderBy?: StarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesResolver<
    R = Vehicle[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesArgs>
  export interface VehiclesArgs {
    filter?: VehicleFilter | null
    orderBy?: VehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type FilmsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type SpeciesMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesMetaArgs>
  export interface _SpeciesMetaArgs {
    filter?: SpeciesFilter | null
    orderBy?: SpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsMetaArgs>
  export interface _StarshipsMetaArgs {
    filter?: StarshipFilter | null
    orderBy?: StarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type VehiclesMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesMetaArgs>
  export interface _VehiclesMetaArgs {
    filter?: VehicleFilter | null
    orderBy?: VehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export namespace PlanetResolvers {
  export interface Resolvers<Context = any> {
    climate?: ClimateResolver<
      string[] | null,
      any,
      Context
    > /** The climate of this planet. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    diameter?: DiameterResolver<
      number | null,
      any,
      Context
    > /** The diameter of this planet in kilometers. */
    films?: FilmsResolver<Film[] | null, any, Context>
    gravity?: GravityResolver<
      string | null,
      any,
      Context
    > /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    name?: NameResolver<string, any, Context> /** The name of the planet */
    orbitalPeriod?: OrbitalPeriodResolver<
      number | null,
      any,
      Context
    > /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
    population?: PopulationResolver<
      number | null,
      any,
      Context
    > /** The average population of sentient beings inhabiting this planet. */
    residents?: ResidentsResolver<Person[] | null, any, Context>
    rotationPeriod?: RotationPeriodResolver<
      number | null,
      any,
      Context
    > /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
    surfaceWater?: SurfaceWaterResolver<
      number | null,
      any,
      Context
    > /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
    terrain?: TerrainResolver<
      string[] | null,
      any,
      Context
    > /** The terrain of this planet. */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _residentsMeta?: ResidentsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
  }

  export type ClimateResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DiameterResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = Film[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type GravityResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type OrbitalPeriodResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PopulationResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ResidentsResolver<
    R = Person[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResidentsArgs>
  export interface ResidentsArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type RotationPeriodResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SurfaceWaterResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TerrainResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type ResidentsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResidentsMetaArgs>
  export interface _ResidentsMetaArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** Meta information about the query. */
export namespace _QueryMetaResolvers {
  export interface Resolvers<Context = any> {
    count?: CountResolver<number, any, Context>
  }

  export type CountResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}
/** A Species is a type of person or character within the Star Wars Universe. */
export namespace SpeciesResolvers {
  export interface Resolvers<Context = any> {
    averageHeight?: AverageHeightResolver<
      number | null,
      any,
      Context
    > /** The average height of this species in centimeters. */
    averageLifespan?: AverageLifespanResolver<
      number | null,
      any,
      Context
    > /** The average lifespan of this species in years. */
    classification?: ClassificationResolver<
      string | null,
      any,
      Context
    > /** The classification of this species, such as "mammal" or "reptile". */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    designation?: DesignationResolver<
      string | null,
      any,
      Context
    > /** The designation of this species, such as "sentient". */
    eyeColor?: EyeColorResolver<
      SpeciesEyeColor[] | null,
      any,
      Context
    > /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
    films?: FilmsResolver<Film[] | null, any, Context>
    hairColor?: HairColorResolver<
      SpeciesHairColor[] | null,
      any,
      Context
    > /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    language?: LanguageResolver<
      string | null,
      any,
      Context
    > /** The language commonly spoken by this species. */
    name?: NameResolver<string, any, Context> /** The name of this species. */
    people?: PeopleResolver<Person[] | null, any, Context>
    skinColor?: SkinColorResolver<
      SpeciesSkinColor[] | null,
      any,
      Context
    > /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _peopleMeta?: PeopleMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
  }

  export type AverageHeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AverageLifespanResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ClassificationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DesignationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = SpeciesEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = Film[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type HairColorResolver<
    R = SpeciesHairColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LanguageResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type PeopleResolver<
    R = Person[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PeopleArgs>
  export interface PeopleArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type SkinColorResolver<
    R = SpeciesSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PeopleMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PeopleMetaArgs>
  export interface _PeopleMetaArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Starship is a single transport craft that has hyperdrive capability. */
export namespace StarshipResolvers {
  export interface Resolvers<Context = any> {
    cargoCapacity?: CargoCapacityResolver<
      number | null,
      any,
      Context
    > /** The maximum number of kilograms that this starship can transport. */
    class?: ClassResolver<
      string | null,
      any,
      Context
    > /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
    consumables?: ConsumablesResolver<
      string | null,
      any,
      Context
    > /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
    costInCredits?: CostInCreditsResolver<
      number | null,
      any,
      Context
    > /** The cost of this starship new, in galactic credits. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    crew?: CrewResolver<
      number | null,
      any,
      Context
    > /** The number of personnel needed to run or pilot this starship. */
    films?: FilmsResolver<Film[] | null, any, Context>
    hyperdriveRating?: HyperdriveRatingResolver<
      number | null,
      any,
      Context
    > /** The class of this starships hyperdrive. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    length?: LengthResolver<
      number | null,
      any,
      Context
    > /** The length of this starship in meters. */
    manufacturer?: ManufacturerResolver<
      string[] | null,
      any,
      Context
    > /** The manufacturer of this starship. */
    maxAtmospheringSpeed?: MaxAtmospheringSpeedResolver<
      number | null,
      any,
      Context
    > /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
    mglt?: MgltResolver<
      number | null,
      any,
      Context
    > /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
    name?: NameResolver<
      string,
      any,
      Context
    > /** The name of this starship. The common name, such as "Death Star". */
    passengers?: PassengersResolver<
      number | null,
      any,
      Context
    > /** The number of non-essential people this starship can transport. */
    pilots?: PilotsResolver<Person[] | null, any, Context>
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _pilotsMeta?: PilotsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
  }

  export type CargoCapacityResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ClassResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ConsumablesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CostInCreditsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CrewResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = Film[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type HyperdriveRatingResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LengthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ManufacturerResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MaxAtmospheringSpeedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MgltResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type PassengersResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PilotsResolver<
    R = Person[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsArgs>
  export interface PilotsArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PilotsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsMetaArgs>
  export interface _PilotsMetaArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export namespace VehicleResolvers {
  export interface Resolvers<Context = any> {
    cargoCapacity?: CargoCapacityResolver<
      number | null,
      any,
      Context
    > /** The maximum number of kilograms that this vehicle can transport. */
    class?: ClassResolver<
      string | null,
      any,
      Context
    > /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
    consumables?: ConsumablesResolver<
      string | null,
      any,
      Context
    > /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
    costInCredits?: CostInCreditsResolver<
      number | null,
      any,
      Context
    > /** The cost of this vehicle new, in Galactic Credits. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    crew?: CrewResolver<
      number | null,
      any,
      Context
    > /** The number of personnel needed to run or pilot this vehicle. */
    films?: FilmsResolver<Film[] | null, any, Context>
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    length?: LengthResolver<
      number | null,
      any,
      Context
    > /** The length of this vehicle in meters. */
    manufacturer?: ManufacturerResolver<
      string[] | null,
      any,
      Context
    > /** The manufacturer of this vehicle. */
    maxAtmospheringSpeed?: MaxAtmospheringSpeedResolver<
      number | null,
      any,
      Context
    > /** The maximum speed of this vehicle in the atmosphere. */
    model?: ModelResolver<
      string | null,
      any,
      Context
    > /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
    name?: NameResolver<
      string,
      any,
      Context
    > /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
    passengers?: PassengersResolver<
      number | null,
      any,
      Context
    > /** The number of non-essential people this vehicle can transport. */
    pilots?: PilotsResolver<Person[] | null, any, Context>
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _pilotsMeta?: PilotsMetaResolver<
      _QueryMeta,
      any,
      Context
    > /** Meta information about the query. */
  }

  export type CargoCapacityResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ClassResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ConsumablesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CostInCreditsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CrewResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = Film[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LengthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ManufacturerResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MaxAtmospheringSpeedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type PassengersResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PilotsResolver<
    R = Person[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsArgs>
  export interface PilotsArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: FilmFilter | null
    orderBy?: FilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PilotsMetaResolver<
    R = _QueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsMetaArgs>
  export interface _PilotsMetaArgs {
    filter?: PersonFilter | null
    orderBy?: PersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    createAsset?: CreateAssetResolver<Asset | null, any, Context>
    createFilm?: CreateFilmResolver<Film | null, any, Context>
    createPerson?: CreatePersonResolver<Person | null, any, Context>
    createPlanet?: CreatePlanetResolver<Planet | null, any, Context>
    createSpecies?: CreateSpeciesResolver<Species | null, any, Context>
    createStarship?: CreateStarshipResolver<Starship | null, any, Context>
    createVehicle?: CreateVehicleResolver<Vehicle | null, any, Context>
    updateAsset?: UpdateAssetResolver<Asset | null, any, Context>
    updateFilm?: UpdateFilmResolver<Film | null, any, Context>
    updatePerson?: UpdatePersonResolver<Person | null, any, Context>
    updatePlanet?: UpdatePlanetResolver<Planet | null, any, Context>
    updateSpecies?: UpdateSpeciesResolver<Species | null, any, Context>
    updateStarship?: UpdateStarshipResolver<Starship | null, any, Context>
    updateVehicle?: UpdateVehicleResolver<Vehicle | null, any, Context>
    updateOrCreateAsset?: UpdateOrCreateAssetResolver<
      Asset | null,
      any,
      Context
    >
    updateOrCreateFilm?: UpdateOrCreateFilmResolver<Film | null, any, Context>
    updateOrCreatePerson?: UpdateOrCreatePersonResolver<
      Person | null,
      any,
      Context
    >
    updateOrCreatePlanet?: UpdateOrCreatePlanetResolver<
      Planet | null,
      any,
      Context
    >
    updateOrCreateSpecies?: UpdateOrCreateSpeciesResolver<
      Species | null,
      any,
      Context
    >
    updateOrCreateStarship?: UpdateOrCreateStarshipResolver<
      Starship | null,
      any,
      Context
    >
    updateOrCreateVehicle?: UpdateOrCreateVehicleResolver<
      Vehicle | null,
      any,
      Context
    >
    deleteAsset?: DeleteAssetResolver<Asset | null, any, Context>
    deleteFilm?: DeleteFilmResolver<Film | null, any, Context>
    deletePerson?: DeletePersonResolver<Person | null, any, Context>
    deletePlanet?: DeletePlanetResolver<Planet | null, any, Context>
    deleteSpecies?: DeleteSpeciesResolver<Species | null, any, Context>
    deleteStarship?: DeleteStarshipResolver<Starship | null, any, Context>
    deleteVehicle?: DeleteVehicleResolver<Vehicle | null, any, Context>
    addToFilmPlanets?: AddToFilmPlanetsResolver<
      AddToFilmPlanetsPayload | null,
      any,
      Context
    >
    addToFilmSpecies?: AddToFilmSpeciesResolver<
      AddToFilmSpeciesPayload | null,
      any,
      Context
    >
    addToFilmStarships?: AddToFilmStarshipsResolver<
      AddToFilmStarshipsPayload | null,
      any,
      Context
    >
    addToFilmVehicles?: AddToFilmVehiclesResolver<
      AddToFilmVehiclesPayload | null,
      any,
      Context
    >
    addToPeopleFilm?: AddToPeopleFilmResolver<
      AddToPeopleFilmPayload | null,
      any,
      Context
    >
    addToPeoplePlanet?: AddToPeoplePlanetResolver<
      AddToPeoplePlanetPayload | null,
      any,
      Context
    >
    addToPeopleSpecies?: AddToPeopleSpeciesResolver<
      AddToPeopleSpeciesPayload | null,
      any,
      Context
    >
    addToPeopleStarships?: AddToPeopleStarshipsResolver<
      AddToPeopleStarshipsPayload | null,
      any,
      Context
    >
    addToPeopleVehicles?: AddToPeopleVehiclesResolver<
      AddToPeopleVehiclesPayload | null,
      any,
      Context
    >
    removeFromFilmPlanets?: RemoveFromFilmPlanetsResolver<
      RemoveFromFilmPlanetsPayload | null,
      any,
      Context
    >
    removeFromFilmSpecies?: RemoveFromFilmSpeciesResolver<
      RemoveFromFilmSpeciesPayload | null,
      any,
      Context
    >
    removeFromFilmStarships?: RemoveFromFilmStarshipsResolver<
      RemoveFromFilmStarshipsPayload | null,
      any,
      Context
    >
    removeFromFilmVehicles?: RemoveFromFilmVehiclesResolver<
      RemoveFromFilmVehiclesPayload | null,
      any,
      Context
    >
    removeFromPeopleFilm?: RemoveFromPeopleFilmResolver<
      RemoveFromPeopleFilmPayload | null,
      any,
      Context
    >
    removeFromPeoplePlanet?: RemoveFromPeoplePlanetResolver<
      RemoveFromPeoplePlanetPayload | null,
      any,
      Context
    >
    removeFromPeopleSpecies?: RemoveFromPeopleSpeciesResolver<
      RemoveFromPeopleSpeciesPayload | null,
      any,
      Context
    >
    removeFromPeopleStarships?: RemoveFromPeopleStarshipsResolver<
      RemoveFromPeopleStarshipsPayload | null,
      any,
      Context
    >
    removeFromPeopleVehicles?: RemoveFromPeopleVehiclesResolver<
      RemoveFromPeopleVehiclesPayload | null,
      any,
      Context
    >
    invokeFunction?: InvokeFunctionResolver<
      InvokeFunctionPayload | null,
      any,
      Context
    >
  }

  export type CreateAssetResolver<
    R = Asset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateAssetArgs>
  export interface CreateAssetArgs {
    fileName: string /** Original File Name */
    handle: string /** The File Handle */
    height?: number | null /** The height of the file in case it is an image */
    mimeType?: string | null /** The Mime Type */
    size: number /** The Size Of The File */
    url: string /** The Url Of The Asset */
    width?: number | null /** The width of the file in case it is an image */
  }

  export type CreateFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateFilmArgs>
  export interface CreateFilmArgs {
    director?: string | null /** The name of the director of this film. */
    episodeId: number /** The episode number of this film. */
    isPublished?: boolean | null /** indicates if the record is published */
    openingCrawl?:
      | string
      | null /** The opening paragraphs at the beginning of this film. */
    producers?: string[] | null /** The names of the producers of this film. */
    releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
    title: string /** The title of this film */
    charactersIds?: string[] | null
    characters?: FilmcharactersPerson[] | null
    planetsIds?: string[] | null
    planets?: FilmplanetsPlanet[] | null
    speciesIds?: string[] | null
    species?: FilmspeciesSpecies[] | null
    starshipsIds?: string[] | null
    starships?: FilmstarshipsStarship[] | null
    vehiclesIds?: string[] | null
    vehicles?: FilmvehiclesVehicle[] | null
  }

  export type CreatePersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatePersonArgs>
  export interface CreatePersonArgs {
    birthYear?:
      | string
      | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
    eyeColor?:
      | PersonEyeColor[]
      | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
    gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
    hairColor?:
      | PersonHairColor[]
      | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
    height?: number | null /** The height of the person in centimeters. */
    isPublished?: boolean | null /** indicates if the record is published */
    mass?: number | null /** The mass of the person in kilograms. */
    name: string /** The name of this person. */
    skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
    homeworldId?: string | null
    homeworld?: PersonhomeworldPlanet | null
    filmsIds?: string[] | null
    films?: PersonfilmsFilm[] | null
    speciesIds?: string[] | null
    species?: PersonspeciesSpecies[] | null
    starshipsIds?: string[] | null
    starships?: PersonstarshipsStarship[] | null
    vehiclesIds?: string[] | null
    vehicles?: PersonvehiclesVehicle[] | null
  }

  export type CreatePlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatePlanetArgs>
  export interface CreatePlanetArgs {
    climate?: string[] | null /** The climate of this planet. */
    diameter?: number | null /** The diameter of this planet in kilometers. */
    gravity?:
      | string
      | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
    isPublished?: boolean | null /** indicates if the record is published */
    name: string /** The name of the planet */
    orbitalPeriod?:
      | number
      | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
    population?:
      | number
      | null /** The average population of sentient beings inhabiting this planet. */
    rotationPeriod?:
      | number
      | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
    surfaceWater?:
      | number
      | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
    terrain?: string[] | null /** The terrain of this planet. */
    filmsIds?: string[] | null
    films?: PlanetfilmsFilm[] | null
    residentsIds?: string[] | null
    residents?: PlanetresidentsPerson[] | null
  }

  export type CreateSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateSpeciesArgs>
  export interface CreateSpeciesArgs {
    averageHeight?:
      | number
      | null /** The average height of this species in centimeters. */
    averageLifespan?:
      | number
      | null /** The average lifespan of this species in years. */
    classification?:
      | string
      | null /** The classification of this species, such as "mammal" or "reptile". */
    designation?:
      | string
      | null /** The designation of this species, such as "sentient". */
    eyeColor?:
      | SpeciesEyeColor[]
      | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
    hairColor?:
      | SpeciesHairColor[]
      | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
    isPublished?: boolean | null /** indicates if the record is published */
    language?:
      | string
      | null /** The language commonly spoken by this species. */
    name: string /** The name of this species. */
    skinColor?:
      | SpeciesSkinColor[]
      | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
    filmsIds?: string[] | null
    films?: SpeciesfilmsFilm[] | null
    peopleIds?: string[] | null
    people?: SpeciespeoplePerson[] | null
  }

  export type CreateStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateStarshipArgs>
  export interface CreateStarshipArgs {
    cargoCapacity?:
      | number
      | null /** The maximum number of kilograms that this starship can transport. */
    class?:
      | string
      | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
    consumables?:
      | string
      | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
    costInCredits?:
      | number
      | null /** The cost of this starship new, in galactic credits. */
    crew?:
      | number
      | null /** The number of personnel needed to run or pilot this starship. */
    hyperdriveRating?:
      | number
      | null /** The class of this starships hyperdrive. */
    isPublished?: boolean | null /** indicates if the record is published */
    length?: number | null /** The length of this starship in meters. */
    manufacturer?: string[] | null /** The manufacturer of this starship. */
    maxAtmospheringSpeed?:
      | number
      | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
    mglt?:
      | number
      | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
    name: string /** The name of this starship. The common name, such as "Death Star". */
    passengers?:
      | number
      | null /** The number of non-essential people this starship can transport. */
    filmsIds?: string[] | null
    films?: StarshipfilmsFilm[] | null
    pilotsIds?: string[] | null
    pilots?: StarshippilotsPerson[] | null
  }

  export type CreateVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateVehicleArgs>
  export interface CreateVehicleArgs {
    cargoCapacity?:
      | number
      | null /** The maximum number of kilograms that this vehicle can transport. */
    class?:
      | string
      | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
    consumables?:
      | string
      | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
    costInCredits?:
      | number
      | null /** The cost of this vehicle new, in Galactic Credits. */
    crew?:
      | number
      | null /** The number of personnel needed to run or pilot this vehicle. */
    isPublished?: boolean | null /** indicates if the record is published */
    length?: number | null /** The length of this vehicle in meters. */
    manufacturer?: string[] | null /** The manufacturer of this vehicle. */
    maxAtmospheringSpeed?:
      | number
      | null /** The maximum speed of this vehicle in the atmosphere. */
    model?:
      | string
      | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
    name: string /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
    passengers?:
      | number
      | null /** The number of non-essential people this vehicle can transport. */
    filmsIds?: string[] | null
    films?: VehiclefilmsFilm[] | null
    pilotsIds?: string[] | null
    pilots?: VehiclepilotsPerson[] | null
  }

  export type UpdateAssetResolver<
    R = Asset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateAssetArgs>
  export interface UpdateAssetArgs {
    fileName?: string | null /** Original File Name */
    handle?: string | null /** The File Handle */
    height?: number | null /** The height of the file in case it is an image */
    id: string
    mimeType?: string | null /** The Mime Type */
    size?: number | null /** The Size Of The File */
    url?: string | null /** The Url Of The Asset */
    width?: number | null /** The width of the file in case it is an image */
  }

  export type UpdateFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateFilmArgs>
  export interface UpdateFilmArgs {
    director?: string | null /** The name of the director of this film. */
    episodeId?: number | null /** The episode number of this film. */
    id: string
    isPublished?: boolean | null /** indicates if the record is published */
    openingCrawl?:
      | string
      | null /** The opening paragraphs at the beginning of this film. */
    producers?: string[] | null /** The names of the producers of this film. */
    releaseDate?: DateTime | null /** The ISO 8601 date format of film release at original creator country. */
    title?: string | null /** The title of this film */
    charactersIds?: string[] | null
    characters?: FilmcharactersPerson[] | null
    planetsIds?: string[] | null
    planets?: FilmplanetsPlanet[] | null
    speciesIds?: string[] | null
    species?: FilmspeciesSpecies[] | null
    starshipsIds?: string[] | null
    starships?: FilmstarshipsStarship[] | null
    vehiclesIds?: string[] | null
    vehicles?: FilmvehiclesVehicle[] | null
  }

  export type UpdatePersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatePersonArgs>
  export interface UpdatePersonArgs {
    birthYear?:
      | string
      | null /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
    eyeColor?:
      | PersonEyeColor[]
      | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
    gender?: PersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
    hairColor?:
      | PersonHairColor[]
      | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
    height?: number | null /** The height of the person in centimeters. */
    id: string
    isPublished?: boolean | null /** indicates if the record is published */
    mass?: number | null /** The mass of the person in kilograms. */
    name?: string | null /** The name of this person. */
    skinColor?: PersonSkinColor[] | null /** The skin color of this person. */
    homeworldId?: string | null
    homeworld?: PersonhomeworldPlanet | null
    filmsIds?: string[] | null
    films?: PersonfilmsFilm[] | null
    speciesIds?: string[] | null
    species?: PersonspeciesSpecies[] | null
    starshipsIds?: string[] | null
    starships?: PersonstarshipsStarship[] | null
    vehiclesIds?: string[] | null
    vehicles?: PersonvehiclesVehicle[] | null
  }

  export type UpdatePlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatePlanetArgs>
  export interface UpdatePlanetArgs {
    climate?: string[] | null /** The climate of this planet. */
    diameter?: number | null /** The diameter of this planet in kilometers. */
    gravity?:
      | string
      | null /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
    id: string
    isPublished?: boolean | null /** indicates if the record is published */
    name?: string | null /** The name of the planet */
    orbitalPeriod?:
      | number
      | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
    population?:
      | number
      | null /** The average population of sentient beings inhabiting this planet. */
    rotationPeriod?:
      | number
      | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
    surfaceWater?:
      | number
      | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
    terrain?: string[] | null /** The terrain of this planet. */
    filmsIds?: string[] | null
    films?: PlanetfilmsFilm[] | null
    residentsIds?: string[] | null
    residents?: PlanetresidentsPerson[] | null
  }

  export type UpdateSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateSpeciesArgs>
  export interface UpdateSpeciesArgs {
    averageHeight?:
      | number
      | null /** The average height of this species in centimeters. */
    averageLifespan?:
      | number
      | null /** The average lifespan of this species in years. */
    classification?:
      | string
      | null /** The classification of this species, such as "mammal" or "reptile". */
    designation?:
      | string
      | null /** The designation of this species, such as "sentient". */
    eyeColor?:
      | SpeciesEyeColor[]
      | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
    hairColor?:
      | SpeciesHairColor[]
      | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
    id: string
    isPublished?: boolean | null /** indicates if the record is published */
    language?:
      | string
      | null /** The language commonly spoken by this species. */
    name?: string | null /** The name of this species. */
    skinColor?:
      | SpeciesSkinColor[]
      | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
    filmsIds?: string[] | null
    films?: SpeciesfilmsFilm[] | null
    peopleIds?: string[] | null
    people?: SpeciespeoplePerson[] | null
  }

  export type UpdateStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateStarshipArgs>
  export interface UpdateStarshipArgs {
    cargoCapacity?:
      | number
      | null /** The maximum number of kilograms that this starship can transport. */
    class?:
      | string
      | null /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
    consumables?:
      | string
      | null /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
    costInCredits?:
      | number
      | null /** The cost of this starship new, in galactic credits. */
    crew?:
      | number
      | null /** The number of personnel needed to run or pilot this starship. */
    hyperdriveRating?:
      | number
      | null /** The class of this starships hyperdrive. */
    id: string
    isPublished?: boolean | null /** indicates if the record is published */
    length?: number | null /** The length of this starship in meters. */
    manufacturer?: string[] | null /** The manufacturer of this starship. */
    maxAtmospheringSpeed?:
      | number
      | null /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
    mglt?:
      | number
      | null /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
    name?:
      | string
      | null /** The name of this starship. The common name, such as "Death Star". */
    passengers?:
      | number
      | null /** The number of non-essential people this starship can transport. */
    filmsIds?: string[] | null
    films?: StarshipfilmsFilm[] | null
    pilotsIds?: string[] | null
    pilots?: StarshippilotsPerson[] | null
  }

  export type UpdateVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateVehicleArgs>
  export interface UpdateVehicleArgs {
    cargoCapacity?:
      | number
      | null /** The maximum number of kilograms that this vehicle can transport. */
    class?:
      | string
      | null /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
    consumables?:
      | string
      | null /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
    costInCredits?:
      | number
      | null /** The cost of this vehicle new, in Galactic Credits. */
    crew?:
      | number
      | null /** The number of personnel needed to run or pilot this vehicle. */
    id: string
    isPublished?: boolean | null /** indicates if the record is published */
    length?: number | null /** The length of this vehicle in meters. */
    manufacturer?: string[] | null /** The manufacturer of this vehicle. */
    maxAtmospheringSpeed?:
      | number
      | null /** The maximum speed of this vehicle in the atmosphere. */
    model?:
      | string
      | null /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
    name?:
      | string
      | null /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
    passengers?:
      | number
      | null /** The number of non-essential people this vehicle can transport. */
    filmsIds?: string[] | null
    films?: VehiclefilmsFilm[] | null
    pilotsIds?: string[] | null
    pilots?: VehiclepilotsPerson[] | null
  }

  export type UpdateOrCreateAssetResolver<
    R = Asset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateOrCreateAssetArgs>
  export interface UpdateOrCreateAssetArgs {
    update: UpdateAsset
    create: CreateAsset
  }

  export type UpdateOrCreateFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateOrCreateFilmArgs>
  export interface UpdateOrCreateFilmArgs {
    update: UpdateFilm
    create: CreateFilm
  }

  export type UpdateOrCreatePersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateOrCreatePersonArgs>
  export interface UpdateOrCreatePersonArgs {
    update: UpdatePerson
    create: CreatePerson
  }

  export type UpdateOrCreatePlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateOrCreatePlanetArgs>
  export interface UpdateOrCreatePlanetArgs {
    update: UpdatePlanet
    create: CreatePlanet
  }

  export type UpdateOrCreateSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateOrCreateSpeciesArgs>
  export interface UpdateOrCreateSpeciesArgs {
    update: UpdateSpecies
    create: CreateSpecies
  }

  export type UpdateOrCreateStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateOrCreateStarshipArgs>
  export interface UpdateOrCreateStarshipArgs {
    update: UpdateStarship
    create: CreateStarship
  }

  export type UpdateOrCreateVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateOrCreateVehicleArgs>
  export interface UpdateOrCreateVehicleArgs {
    update: UpdateVehicle
    create: CreateVehicle
  }

  export type DeleteAssetResolver<
    R = Asset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteAssetArgs>
  export interface DeleteAssetArgs {
    id: string
  }

  export type DeleteFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteFilmArgs>
  export interface DeleteFilmArgs {
    id: string
  }

  export type DeletePersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeletePersonArgs>
  export interface DeletePersonArgs {
    id: string
  }

  export type DeletePlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeletePlanetArgs>
  export interface DeletePlanetArgs {
    id: string
  }

  export type DeleteSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteSpeciesArgs>
  export interface DeleteSpeciesArgs {
    id: string
  }

  export type DeleteStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteStarshipArgs>
  export interface DeleteStarshipArgs {
    id: string
  }

  export type DeleteVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteVehicleArgs>
  export interface DeleteVehicleArgs {
    id: string
  }

  export type AddToFilmPlanetsResolver<
    R = AddToFilmPlanetsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToFilmPlanetsArgs>
  export interface AddToFilmPlanetsArgs {
    planetsPlanetId: string
    filmsFilmId: string
  }

  export type AddToFilmSpeciesResolver<
    R = AddToFilmSpeciesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToFilmSpeciesArgs>
  export interface AddToFilmSpeciesArgs {
    speciesSpeciesId: string
    filmsFilmId: string
  }

  export type AddToFilmStarshipsResolver<
    R = AddToFilmStarshipsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToFilmStarshipsArgs>
  export interface AddToFilmStarshipsArgs {
    starshipsStarshipId: string
    filmsFilmId: string
  }

  export type AddToFilmVehiclesResolver<
    R = AddToFilmVehiclesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToFilmVehiclesArgs>
  export interface AddToFilmVehiclesArgs {
    vehiclesVehicleId: string
    filmsFilmId: string
  }

  export type AddToPeopleFilmResolver<
    R = AddToPeopleFilmPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToPeopleFilmArgs>
  export interface AddToPeopleFilmArgs {
    filmsFilmId: string
    charactersPersonId: string
  }

  export type AddToPeoplePlanetResolver<
    R = AddToPeoplePlanetPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToPeoplePlanetArgs>
  export interface AddToPeoplePlanetArgs {
    homeworldPlanetId: string
    residentsPersonId: string
  }

  export type AddToPeopleSpeciesResolver<
    R = AddToPeopleSpeciesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToPeopleSpeciesArgs>
  export interface AddToPeopleSpeciesArgs {
    speciesSpeciesId: string
    peoplePersonId: string
  }

  export type AddToPeopleStarshipsResolver<
    R = AddToPeopleStarshipsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToPeopleStarshipsArgs>
  export interface AddToPeopleStarshipsArgs {
    starshipsStarshipId: string
    pilotsPersonId: string
  }

  export type AddToPeopleVehiclesResolver<
    R = AddToPeopleVehiclesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddToPeopleVehiclesArgs>
  export interface AddToPeopleVehiclesArgs {
    vehiclesVehicleId: string
    pilotsPersonId: string
  }

  export type RemoveFromFilmPlanetsResolver<
    R = RemoveFromFilmPlanetsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromFilmPlanetsArgs>
  export interface RemoveFromFilmPlanetsArgs {
    planetsPlanetId: string
    filmsFilmId: string
  }

  export type RemoveFromFilmSpeciesResolver<
    R = RemoveFromFilmSpeciesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromFilmSpeciesArgs>
  export interface RemoveFromFilmSpeciesArgs {
    speciesSpeciesId: string
    filmsFilmId: string
  }

  export type RemoveFromFilmStarshipsResolver<
    R = RemoveFromFilmStarshipsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromFilmStarshipsArgs>
  export interface RemoveFromFilmStarshipsArgs {
    starshipsStarshipId: string
    filmsFilmId: string
  }

  export type RemoveFromFilmVehiclesResolver<
    R = RemoveFromFilmVehiclesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromFilmVehiclesArgs>
  export interface RemoveFromFilmVehiclesArgs {
    vehiclesVehicleId: string
    filmsFilmId: string
  }

  export type RemoveFromPeopleFilmResolver<
    R = RemoveFromPeopleFilmPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromPeopleFilmArgs>
  export interface RemoveFromPeopleFilmArgs {
    filmsFilmId: string
    charactersPersonId: string
  }

  export type RemoveFromPeoplePlanetResolver<
    R = RemoveFromPeoplePlanetPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromPeoplePlanetArgs>
  export interface RemoveFromPeoplePlanetArgs {
    homeworldPlanetId: string
    residentsPersonId: string
  }

  export type RemoveFromPeopleSpeciesResolver<
    R = RemoveFromPeopleSpeciesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromPeopleSpeciesArgs>
  export interface RemoveFromPeopleSpeciesArgs {
    speciesSpeciesId: string
    peoplePersonId: string
  }

  export type RemoveFromPeopleStarshipsResolver<
    R = RemoveFromPeopleStarshipsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromPeopleStarshipsArgs>
  export interface RemoveFromPeopleStarshipsArgs {
    starshipsStarshipId: string
    pilotsPersonId: string
  }

  export type RemoveFromPeopleVehiclesResolver<
    R = RemoveFromPeopleVehiclesPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveFromPeopleVehiclesArgs>
  export interface RemoveFromPeopleVehiclesArgs {
    vehiclesVehicleId: string
    pilotsPersonId: string
  }

  export type InvokeFunctionResolver<
    R = InvokeFunctionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, InvokeFunctionArgs>
  export interface InvokeFunctionArgs {
    input: InvokeFunctionInput
  }
}

export namespace AddToFilmPlanetsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    planetsPlanet?: PlanetsPlanetResolver<Planet | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PlanetsPlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToFilmSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<Species | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToFilmStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<Starship | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToFilmVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<Vehicle | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToPeopleFilmPayloadResolvers {
  export interface Resolvers<Context = any> {
    charactersPerson?: CharactersPersonResolver<Person | null, any, Context>
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
  }

  export type CharactersPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToPeoplePlanetPayloadResolvers {
  export interface Resolvers<Context = any> {
    residentsPerson?: ResidentsPersonResolver<Person | null, any, Context>
    homeworldPlanet?: HomeworldPlanetResolver<Planet | null, any, Context>
  }

  export type ResidentsPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HomeworldPlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToPeopleSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    peoplePerson?: PeoplePersonResolver<Person | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<Species | null, any, Context>
  }

  export type PeoplePersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToPeopleStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<Person | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<Starship | null, any, Context>
  }

  export type PilotsPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AddToPeopleVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<Person | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<Vehicle | null, any, Context>
  }

  export type PilotsPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromFilmPlanetsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    planetsPlanet?: PlanetsPlanetResolver<Planet | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PlanetsPlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromFilmSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<Species | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromFilmStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<Starship | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromFilmVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<Vehicle | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromPeopleFilmPayloadResolvers {
  export interface Resolvers<Context = any> {
    charactersPerson?: CharactersPersonResolver<Person | null, any, Context>
    filmsFilm?: FilmsFilmResolver<Film | null, any, Context>
  }

  export type CharactersPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsFilmResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromPeoplePlanetPayloadResolvers {
  export interface Resolvers<Context = any> {
    residentsPerson?: ResidentsPersonResolver<Person | null, any, Context>
    homeworldPlanet?: HomeworldPlanetResolver<Planet | null, any, Context>
  }

  export type ResidentsPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HomeworldPlanetResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromPeopleSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    peoplePerson?: PeoplePersonResolver<Person | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<Species | null, any, Context>
  }

  export type PeoplePersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromPeopleStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<Person | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<Starship | null, any, Context>
  }

  export type PilotsPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace RemoveFromPeopleVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<Person | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<Vehicle | null, any, Context>
  }

  export type PilotsPersonResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace InvokeFunctionPayloadResolvers {
  export interface Resolvers<Context = any> {
    result?: ResultResolver<string, any, Context>
    clientMutationId?: ClientMutationIdResolver<string | null, any, Context>
  }

  export type ResultResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SubscriptionResolvers {
  export interface Resolvers<Context = any> {
    Asset?: AssetResolver<AssetSubscriptionPayload | null, any, Context>
    Film?: FilmResolver<FilmSubscriptionPayload | null, any, Context>
    Person?: PersonResolver<PersonSubscriptionPayload | null, any, Context>
    Planet?: PlanetResolver<PlanetSubscriptionPayload | null, any, Context>
    Species?: SpeciesResolver<SpeciesSubscriptionPayload | null, any, Context>
    Starship?: StarshipResolver<
      StarshipSubscriptionPayload | null,
      any,
      Context
    >
    Vehicle?: VehicleResolver<VehicleSubscriptionPayload | null, any, Context>
  }

  export type AssetResolver<
    R = AssetSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AssetArgs>
  export interface AssetArgs {
    filter?: AssetSubscriptionFilter | null
  }

  export type FilmResolver<
    R = FilmSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmArgs>
  export interface FilmArgs {
    filter?: FilmSubscriptionFilter | null
  }

  export type PersonResolver<
    R = PersonSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PersonArgs>
  export interface PersonArgs {
    filter?: PersonSubscriptionFilter | null
  }

  export type PlanetResolver<
    R = PlanetSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlanetArgs>
  export interface PlanetArgs {
    filter?: PlanetSubscriptionFilter | null
  }

  export type SpeciesResolver<
    R = SpeciesSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesArgs>
  export interface SpeciesArgs {
    filter?: SpeciesSubscriptionFilter | null
  }

  export type StarshipResolver<
    R = StarshipSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipArgs>
  export interface StarshipArgs {
    filter?: StarshipSubscriptionFilter | null
  }

  export type VehicleResolver<
    R = VehicleSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehicleArgs>
  export interface VehicleArgs {
    filter?: VehicleSubscriptionFilter | null
  }
}

export namespace AssetSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<_ModelMutationType, any, Context>
    node?: NodeResolver<Asset | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      AssetPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = _ModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Asset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = AssetPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace AssetPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    fileName?: FileNameResolver<string, any, Context> /** Original File Name */
    handle?: HandleResolver<string, any, Context> /** The File Handle */
    height?: HeightResolver<
      number | null,
      any,
      Context
    > /** The height of the file in case it is an image */
    id?: IdResolver<string, any, Context>
    mimeType?: MimeTypeResolver<
      string | null,
      any,
      Context
    > /** The Mime Type */
    size?: SizeResolver<number, any, Context> /** The Size Of The File */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
    url?: UrlResolver<string, any, Context> /** The Url Of The Asset */
    width?: WidthResolver<
      number | null,
      any,
      Context
    > /** The width of the file in case it is an image */
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FileNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HandleResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MimeTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SizeResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UrlResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace FilmSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<_ModelMutationType, any, Context>
    node?: NodeResolver<Film | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      FilmPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = _ModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Film | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = FilmPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace FilmPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    director?: DirectorResolver<
      string | null,
      any,
      Context
    > /** The name of the director of this film. */
    episodeId?: EpisodeIdResolver<
      number,
      any,
      Context
    > /** The episode number of this film. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    openingCrawl?: OpeningCrawlResolver<
      string | null,
      any,
      Context
    > /** The opening paragraphs at the beginning of this film. */
    producers?: ProducersResolver<
      string[] | null,
      any,
      Context
    > /** The names of the producers of this film. */
    releaseDate?: ReleaseDateResolver<
      DateTime | null,
      any,
      Context
    > /** The ISO 8601 date format of film release at original creator country. */
    title?: TitleResolver<string, any, Context> /** The title of this film */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DirectorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EpisodeIdResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OpeningCrawlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ProducersResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ReleaseDateResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PersonSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<_ModelMutationType, any, Context>
    node?: NodeResolver<Person | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      PersonPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = _ModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Person | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = PersonPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PersonPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    birthYear?: BirthYearResolver<
      string | null,
      any,
      Context
    > /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    eyeColor?: EyeColorResolver<
      PersonEyeColor[] | null,
      any,
      Context
    > /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
    gender?: GenderResolver<
      PersonGender | null,
      any,
      Context
    > /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
    hairColor?: HairColorResolver<
      PersonHairColor[] | null,
      any,
      Context
    > /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
    height?: HeightResolver<
      number | null,
      any,
      Context
    > /** The height of the person in centimeters. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    mass?: MassResolver<
      number | null,
      any,
      Context
    > /** The mass of the person in kilograms. */
    name?: NameResolver<string, any, Context> /** The name of this person. */
    skinColor?: SkinColorResolver<
      PersonSkinColor[] | null,
      any,
      Context
    > /** The skin color of this person. */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
  }

  export type BirthYearResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = PersonEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type GenderResolver<
    R = PersonGender | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HairColorResolver<
    R = PersonHairColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MassResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type SkinColorResolver<
    R = PersonSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PlanetSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<_ModelMutationType, any, Context>
    node?: NodeResolver<Planet | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      PlanetPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = _ModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Planet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = PlanetPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PlanetPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    climate?: ClimateResolver<
      string[] | null,
      any,
      Context
    > /** The climate of this planet. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    diameter?: DiameterResolver<
      number | null,
      any,
      Context
    > /** The diameter of this planet in kilometers. */
    gravity?: GravityResolver<
      string | null,
      any,
      Context
    > /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    name?: NameResolver<string, any, Context> /** The name of the planet */
    orbitalPeriod?: OrbitalPeriodResolver<
      number | null,
      any,
      Context
    > /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
    population?: PopulationResolver<
      number | null,
      any,
      Context
    > /** The average population of sentient beings inhabiting this planet. */
    rotationPeriod?: RotationPeriodResolver<
      number | null,
      any,
      Context
    > /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
    surfaceWater?: SurfaceWaterResolver<
      number | null,
      any,
      Context
    > /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
    terrain?: TerrainResolver<
      string[] | null,
      any,
      Context
    > /** The terrain of this planet. */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
  }

  export type ClimateResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DiameterResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type GravityResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type OrbitalPeriodResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PopulationResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RotationPeriodResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SurfaceWaterResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TerrainResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SpeciesSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<_ModelMutationType, any, Context>
    node?: NodeResolver<Species | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SpeciesPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = _ModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Species | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SpeciesPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SpeciesPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    averageHeight?: AverageHeightResolver<
      number | null,
      any,
      Context
    > /** The average height of this species in centimeters. */
    averageLifespan?: AverageLifespanResolver<
      number | null,
      any,
      Context
    > /** The average lifespan of this species in years. */
    classification?: ClassificationResolver<
      string | null,
      any,
      Context
    > /** The classification of this species, such as "mammal" or "reptile". */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    designation?: DesignationResolver<
      string | null,
      any,
      Context
    > /** The designation of this species, such as "sentient". */
    eyeColor?: EyeColorResolver<
      SpeciesEyeColor[] | null,
      any,
      Context
    > /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
    hairColor?: HairColorResolver<
      SpeciesHairColor[] | null,
      any,
      Context
    > /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    language?: LanguageResolver<
      string | null,
      any,
      Context
    > /** The language commonly spoken by this species. */
    name?: NameResolver<string, any, Context> /** The name of this species. */
    skinColor?: SkinColorResolver<
      SpeciesSkinColor[] | null,
      any,
      Context
    > /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
  }

  export type AverageHeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AverageLifespanResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ClassificationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DesignationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = SpeciesEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HairColorResolver<
    R = SpeciesHairColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LanguageResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type SkinColorResolver<
    R = SpeciesSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace StarshipSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<_ModelMutationType, any, Context>
    node?: NodeResolver<Starship | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      StarshipPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = _ModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Starship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = StarshipPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace StarshipPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    cargoCapacity?: CargoCapacityResolver<
      number | null,
      any,
      Context
    > /** The maximum number of kilograms that this starship can transport. */
    class?: ClassResolver<
      string | null,
      any,
      Context
    > /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
    consumables?: ConsumablesResolver<
      string | null,
      any,
      Context
    > /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
    costInCredits?: CostInCreditsResolver<
      number | null,
      any,
      Context
    > /** The cost of this starship new, in galactic credits. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    crew?: CrewResolver<
      number | null,
      any,
      Context
    > /** The number of personnel needed to run or pilot this starship. */
    hyperdriveRating?: HyperdriveRatingResolver<
      number | null,
      any,
      Context
    > /** The class of this starships hyperdrive. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    length?: LengthResolver<
      number | null,
      any,
      Context
    > /** The length of this starship in meters. */
    manufacturer?: ManufacturerResolver<
      string[] | null,
      any,
      Context
    > /** The manufacturer of this starship. */
    maxAtmospheringSpeed?: MaxAtmospheringSpeedResolver<
      number | null,
      any,
      Context
    > /** The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
    mglt?: MgltResolver<
      number | null,
      any,
      Context
    > /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. */
    name?: NameResolver<
      string,
      any,
      Context
    > /** The name of this starship. The common name, such as "Death Star". */
    passengers?: PassengersResolver<
      number | null,
      any,
      Context
    > /** The number of non-essential people this starship can transport. */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
  }

  export type CargoCapacityResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ClassResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ConsumablesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CostInCreditsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CrewResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HyperdriveRatingResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LengthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ManufacturerResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MaxAtmospheringSpeedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MgltResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type PassengersResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace VehicleSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<_ModelMutationType, any, Context>
    node?: NodeResolver<Vehicle | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      VehiclePreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = _ModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Vehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = VehiclePreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace VehiclePreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    cargoCapacity?: CargoCapacityResolver<
      number | null,
      any,
      Context
    > /** The maximum number of kilograms that this vehicle can transport. */
    class?: ClassResolver<
      string | null,
      any,
      Context
    > /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
    consumables?: ConsumablesResolver<
      string | null,
      any,
      Context
    > /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
    costInCredits?: CostInCreditsResolver<
      number | null,
      any,
      Context
    > /** The cost of this vehicle new, in Galactic Credits. */
    createdAt?: CreatedAtResolver<DateTime, any, Context>
    crew?: CrewResolver<
      number | null,
      any,
      Context
    > /** The number of personnel needed to run or pilot this vehicle. */
    id?: IdResolver<string, any, Context>
    isPublished?: IsPublishedResolver<
      boolean,
      any,
      Context
    > /** indicates if the record is published */
    length?: LengthResolver<
      number | null,
      any,
      Context
    > /** The length of this vehicle in meters. */
    manufacturer?: ManufacturerResolver<
      string[] | null,
      any,
      Context
    > /** The manufacturer of this vehicle. */
    maxAtmospheringSpeed?: MaxAtmospheringSpeedResolver<
      number | null,
      any,
      Context
    > /** The maximum speed of this vehicle in the atmosphere. */
    model?: ModelResolver<
      string | null,
      any,
      Context
    > /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
    name?: NameResolver<
      string,
      any,
      Context
    > /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
    passengers?: PassengersResolver<
      number | null,
      any,
      Context
    > /** The number of non-essential people this vehicle can transport. */
    updatedAt?: UpdatedAtResolver<DateTime, any, Context>
  }

  export type CargoCapacityResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ClassResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ConsumablesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CostInCreditsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CrewResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LengthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ManufacturerResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MaxAtmospheringSpeedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type PassengersResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Starship {
  export type Variables = {}

  export type Query = {
    __typename?: 'Query'
    Starship?: Starship | null
  }

  export type Starship = {
    __typename?: 'Starship'
    name: string
    hyperdriveRating?: number | null
    pilots?: Pilots[] | null
  }

  export type Pilots = {
    __typename?: 'Person'
    name: string
    height?: number | null
    homeworld?: Homeworld | null
  }

  export type Homeworld = {
    __typename?: 'Planet'
    name: string
  }
}
