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

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

export type SwapiDateTime = any
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
}
/** An object with an ID */
export interface SwapiNode {
  id: string /** The id of the object. */
}

export interface Query {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */
  sitePage?: SitePage | null
  sitePlugin?: SitePlugin | null
  site?: Site | null
  swapi?: Swapi | null
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePageEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (SitePageGroupConnectionConnection | null)[] | null
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  jsonName?: string | null
  internalComponentName?: string | null
  path?: string | null
  component?: string | null
  componentChunkName?: string | null
  pluginCreator?: SitePlugin | null
  pluginCreatorId?: string | null
  componentPath?: string | null
  internal?: Internal_4 | null
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  resolve?: string | null
  name?: string | null
  version?: string | null
  pluginOptions?: PluginOptions_2 | null
  nodeAPIs?: (string | null)[] | null
  browserAPIs?: (string | null)[] | null
  ssrAPIs?: (string | null)[] | null
  pluginFilepath?: string | null
  packageJson?: PackageJson_2 | null
  internal?: Internal_5 | null
}

export interface PluginOptions_2 {
  name?: string | null
  short_name?: string | null
  start_url?: string | null
  background_color?: string | null
  theme_color?: string | null
  display?: string | null
  icon?: string | null
  fieldName?: string | null
  url?: string | null
  typeName?: string | null
  path?: string | null
  pathCheck?: boolean | null
}

export interface PackageJson_2 {
  name?: string | null
  description?: string | null
  version?: string | null
  main?: string | null
  license?: string | null
  dependencies?: (Dependencies_2 | null)[] | null
  devDependencies?: (DevDependencies_2 | null)[] | null
  peerDependencies?: (PeerDependencies_2 | null)[] | null
  keywords?: (string | null)[] | null
}

export interface Dependencies_2 {
  name?: string | null
  version?: string | null
}

export interface DevDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface PeerDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface Internal_5 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface Internal_4 {
  type?: string | null
  contentDigest?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePageGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePluginEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (SitePluginGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (SitePluginGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  siteMetadata?: SiteMetadata_2 | null
  port?: Date | null
  host?: string | null
  pathPrefix?: string | null
  polyfill?: boolean | null
  buildTime?: Date | null
  internal?: Internal_6 | null
}

export interface SiteMetadata_2 {
  title?: string | null
}

export interface Internal_6 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface Swapi {
  allAssets: SwapiAsset[]
  allFilms: SwapiFilm[]
  allPersons: SwapiPerson[]
  allPlanets: SwapiPlanet[]
  allSpecies: SwapiSpecies[]
  allStarships: SwapiStarship[]
  allVehicles: SwapiVehicle[]
  _allAssetsMeta: SwapiQueryMeta
  _allFilmsMeta: SwapiQueryMeta
  _allPersonsMeta: SwapiQueryMeta
  _allPlanetsMeta: SwapiQueryMeta
  _allSpeciesMeta: SwapiQueryMeta
  _allStarshipsMeta: SwapiQueryMeta
  _allVehiclesMeta: SwapiQueryMeta
  Asset?: SwapiAsset | null
  Film?: SwapiFilm | null
  Person?: SwapiPerson | null
  Planet?: SwapiPlanet | null
  Species?: SwapiSpecies | null
  Starship?: SwapiStarship | null
  Vehicle?: SwapiVehicle | null
  node?: SwapiNode | null /** Fetches an object given its ID */
}
/** System model for Assets */
export interface SwapiAsset extends SwapiNode {
  createdAt: SwapiDateTime
  fileName: string /** Original File Name */
  handle: string /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  id: string
  mimeType?: string | null /** The Mime Type */
  size: number /** The Size Of The File */
  updatedAt: SwapiDateTime
  url: string /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}
/** A Film is a single film. */
export interface SwapiFilm extends SwapiNode {
  characters?: SwapiPerson[] | null
  createdAt: SwapiDateTime
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  planets?: SwapiPlanet[] | null
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  species?: SwapiSpecies[] | null
  starships?: SwapiStarship[] | null
  title: string /** The title of this film */
  updatedAt: SwapiDateTime
  vehicles?: SwapiVehicle[] | null
  _charactersMeta: SwapiQueryMeta /** Meta information about the query. */
  _planetsMeta: SwapiQueryMeta /** Meta information about the query. */
  _speciesMeta: SwapiQueryMeta /** Meta information about the query. */
  _starshipsMeta: SwapiQueryMeta /** Meta information about the query. */
  _vehiclesMeta: SwapiQueryMeta /** Meta information about the query. */
}
/** A Person is an individual person or character within the Star Wars universe */
export interface SwapiPerson extends SwapiNode {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  createdAt: SwapiDateTime
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  films?: SwapiFilm[] | null
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  homeworld?: SwapiPlanet | null
  id: string
  isPublished: boolean /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  species?: SwapiSpecies[] | null
  starships?: SwapiStarship[] | null
  updatedAt: SwapiDateTime
  vehicles?: SwapiVehicle[] | null
  _filmsMeta: SwapiQueryMeta /** Meta information about the query. */
  _speciesMeta: SwapiQueryMeta /** Meta information about the query. */
  _starshipsMeta: SwapiQueryMeta /** Meta information about the query. */
  _vehiclesMeta: SwapiQueryMeta /** Meta information about the query. */
}
/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export interface SwapiPlanet extends SwapiNode {
  climate?: string[] | null /** The climate of this planet. */
  createdAt: SwapiDateTime
  diameter?: number | null /** The diameter of this planet in kilometers. */
  films?: SwapiFilm[] | null
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  name: string /** The name of the planet */
  orbitalPeriod?:
    | number
    | null /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  population?:
    | number
    | null /** The average population of sentient beings inhabiting this planet. */
  residents?: SwapiPerson[] | null
  rotationPeriod?:
    | number
    | null /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  surfaceWater?:
    | number
    | null /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  terrain?: string[] | null /** The terrain of this planet. */
  updatedAt: SwapiDateTime
  _filmsMeta: SwapiQueryMeta /** Meta information about the query. */
  _residentsMeta: SwapiQueryMeta /** Meta information about the query. */
}
/** Meta information about the query. */
export interface SwapiQueryMeta {
  count: number
}
/** A Species is a type of person or character within the Star Wars Universe. */
export interface SwapiSpecies extends SwapiNode {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  createdAt: SwapiDateTime
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SwapiSpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  films?: SwapiFilm[] | null
  hairColor?:
    | SwapiSpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  people?: SwapiPerson[] | null
  skinColor?:
    | SwapiSpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  updatedAt: SwapiDateTime
  _filmsMeta: SwapiQueryMeta /** Meta information about the query. */
  _peopleMeta: SwapiQueryMeta /** Meta information about the query. */
}
/** A Starship is a single transport craft that has hyperdrive capability. */
export interface SwapiStarship extends SwapiNode {
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
  createdAt: SwapiDateTime
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this starship. */
  films?: SwapiFilm[] | null
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
    | null /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  pilots?: SwapiPerson[] | null
  updatedAt: SwapiDateTime
  _filmsMeta: SwapiQueryMeta /** Meta information about the query. */
  _pilotsMeta: SwapiQueryMeta /** Meta information about the query. */
}
/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export interface SwapiVehicle extends SwapiNode {
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
  createdAt: SwapiDateTime
  crew?:
    | number
    | null /** The number of personnel needed to run or pilot this vehicle. */
  films?: SwapiFilm[] | null
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
  pilots?: SwapiPerson[] | null
  updatedAt: SwapiDateTime
  _filmsMeta: SwapiQueryMeta /** Meta information about the query. */
  _pilotsMeta: SwapiQueryMeta /** Meta information about the query. */
}

export interface SwapiAddToFilmPlanetsPayload {
  filmsFilm?: SwapiFilm | null
  planetsPlanet?: SwapiPlanet | null
}

export interface SwapiAddToFilmSpeciesPayload {
  filmsFilm?: SwapiFilm | null
  speciesSpecies?: SwapiSpecies | null
}

export interface SwapiAddToFilmStarshipsPayload {
  filmsFilm?: SwapiFilm | null
  starshipsStarship?: SwapiStarship | null
}

export interface SwapiAddToFilmVehiclesPayload {
  filmsFilm?: SwapiFilm | null
  vehiclesVehicle?: SwapiVehicle | null
}

export interface SwapiAddToPeopleFilmPayload {
  charactersPerson?: SwapiPerson | null
  filmsFilm?: SwapiFilm | null
}

export interface SwapiAddToPeoplePlanetPayload {
  residentsPerson?: SwapiPerson | null
  homeworldPlanet?: SwapiPlanet | null
}

export interface SwapiAddToPeopleSpeciesPayload {
  peoplePerson?: SwapiPerson | null
  speciesSpecies?: SwapiSpecies | null
}

export interface SwapiAddToPeopleStarshipsPayload {
  pilotsPerson?: SwapiPerson | null
  starshipsStarship?: SwapiStarship | null
}

export interface SwapiAddToPeopleVehiclesPayload {
  pilotsPerson?: SwapiPerson | null
  vehiclesVehicle?: SwapiVehicle | null
}

export interface SwapiRemoveFromFilmPlanetsPayload {
  filmsFilm?: SwapiFilm | null
  planetsPlanet?: SwapiPlanet | null
}

export interface SwapiRemoveFromFilmSpeciesPayload {
  filmsFilm?: SwapiFilm | null
  speciesSpecies?: SwapiSpecies | null
}

export interface SwapiRemoveFromFilmStarshipsPayload {
  filmsFilm?: SwapiFilm | null
  starshipsStarship?: SwapiStarship | null
}

export interface SwapiRemoveFromFilmVehiclesPayload {
  filmsFilm?: SwapiFilm | null
  vehiclesVehicle?: SwapiVehicle | null
}

export interface SwapiRemoveFromPeopleFilmPayload {
  charactersPerson?: SwapiPerson | null
  filmsFilm?: SwapiFilm | null
}

export interface SwapiRemoveFromPeoplePlanetPayload {
  residentsPerson?: SwapiPerson | null
  homeworldPlanet?: SwapiPlanet | null
}

export interface SwapiRemoveFromPeopleSpeciesPayload {
  peoplePerson?: SwapiPerson | null
  speciesSpecies?: SwapiSpecies | null
}

export interface SwapiRemoveFromPeopleStarshipsPayload {
  pilotsPerson?: SwapiPerson | null
  starshipsStarship?: SwapiStarship | null
}

export interface SwapiRemoveFromPeopleVehiclesPayload {
  pilotsPerson?: SwapiPerson | null
  vehiclesVehicle?: SwapiVehicle | null
}

export interface SwapiInvokeFunctionPayload {
  result: string
  clientMutationId?: string | null
}

export interface SwapiAssetSubscriptionPayload {
  mutation: SwapiModelMutationType
  node?: SwapiAsset | null
  updatedFields?: string[] | null
  previousValues?: SwapiAssetPreviousValues | null
}

export interface SwapiAssetPreviousValues {
  createdAt: SwapiDateTime
  fileName: string /** Original File Name */
  handle: string /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  id: string
  mimeType?: string | null /** The Mime Type */
  size: number /** The Size Of The File */
  updatedAt: SwapiDateTime
  url: string /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}

export interface SwapiFilmSubscriptionPayload {
  mutation: SwapiModelMutationType
  node?: SwapiFilm | null
  updatedFields?: string[] | null
  previousValues?: SwapiFilmPreviousValues | null
}

export interface SwapiFilmPreviousValues {
  createdAt: SwapiDateTime
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  updatedAt: SwapiDateTime
}

export interface SwapiPersonSubscriptionPayload {
  mutation: SwapiModelMutationType
  node?: SwapiPerson | null
  updatedFields?: string[] | null
  previousValues?: SwapiPersonPreviousValues | null
}

export interface SwapiPersonPreviousValues {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  createdAt: SwapiDateTime
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  updatedAt: SwapiDateTime
}

export interface SwapiPlanetSubscriptionPayload {
  mutation: SwapiModelMutationType
  node?: SwapiPlanet | null
  updatedFields?: string[] | null
  previousValues?: SwapiPlanetPreviousValues | null
}

export interface SwapiPlanetPreviousValues {
  climate?: string[] | null /** The climate of this planet. */
  createdAt: SwapiDateTime
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
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
  updatedAt: SwapiDateTime
}

export interface SwapiSpeciesSubscriptionPayload {
  mutation: SwapiModelMutationType
  node?: SwapiSpecies | null
  updatedFields?: string[] | null
  previousValues?: SwapiSpeciesPreviousValues | null
}

export interface SwapiSpeciesPreviousValues {
  averageHeight?:
    | number
    | null /** The average height of this species in centimeters. */
  averageLifespan?:
    | number
    | null /** The average lifespan of this species in years. */
  classification?:
    | string
    | null /** The classification of this species, such as "mammal" or "reptile". */
  createdAt: SwapiDateTime
  designation?:
    | string
    | null /** The designation of this species, such as "sentient". */
  eyeColor?:
    | SwapiSpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SwapiSpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  id: string
  isPublished: boolean /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SwapiSpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  updatedAt: SwapiDateTime
}

export interface SwapiStarshipSubscriptionPayload {
  mutation: SwapiModelMutationType
  node?: SwapiStarship | null
  updatedFields?: string[] | null
  previousValues?: SwapiStarshipPreviousValues | null
}

export interface SwapiStarshipPreviousValues {
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
  createdAt: SwapiDateTime
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
    | null /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  updatedAt: SwapiDateTime
}

export interface SwapiVehicleSubscriptionPayload {
  mutation: SwapiModelMutationType
  node?: SwapiVehicle | null
  updatedFields?: string[] | null
  previousValues?: SwapiVehiclePreviousValues | null
}

export interface SwapiVehiclePreviousValues {
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
  createdAt: SwapiDateTime
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
  updatedAt: SwapiDateTime
}

export interface SitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[]
  order?: SitePageConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null
  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null
  path?: SitePageConnectionPathQueryString_2 | null
  component?: SitePageConnectionComponentQueryString | null
  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null
  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null
  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null
  componentPath?: SitePageConnectionComponentPathQueryString | null
  id?: SitePageConnectionIdQueryString_2 | null
  internal?: SitePageConnectionInternalInputObject_2 | null
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null
  id?: SitePageConnectionPluginCreatorIdQueryString | null
  name?: SitePageConnectionPluginCreatorNameQueryString | null
  version?: SitePageConnectionPluginCreatorVersionQueryString | null
  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePageConnectionPluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null
  parent?: SitePageConnectionPluginCreatorParentQueryString | null
  internal?: SitePageConnectionPluginCreatorInternalInputObject | null
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null
  short_name?: SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString | null
  start_url?: SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null
  background_color?: SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null
  theme_color?: SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString | null
  display?: SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString | null
  icon?: SitePageConnectionPluginCreatorPluginOptionsIconQueryString | null
  fieldName?: SitePageConnectionPluginCreatorPluginOptionsFieldNameQueryString | null
  url?: SitePageConnectionPluginCreatorPluginOptionsUrlQueryString | null
  typeName?: SitePageConnectionPluginCreatorPluginOptionsTypeNameQueryString | null
  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null
  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsFieldNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsTypeNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null
  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null
  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null
  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null
  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null
  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null
  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null
  description?: SitePageConnectionInternalDescriptionQueryString | null
  owner?: SitePageConnectionInternalOwnerQueryString_2 | null
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[]
  order?: SitePluginConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null
  id?: SitePluginConnectionIdQueryString_2 | null
  name?: SitePluginConnectionNameQueryString_2 | null
  version?: SitePluginConnectionVersionQueryString_2 | null
  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginConnectionBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null
  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null
  internal?: SitePluginConnectionInternalInputObject_2 | null
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null
  short_name?: SitePluginConnectionPluginOptionsShortNameQueryString_2 | null
  start_url?: SitePluginConnectionPluginOptionsStartUrlQueryString_2 | null
  background_color?: SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 | null
  theme_color?: SitePluginConnectionPluginOptionsThemeColorQueryString_2 | null
  display?: SitePluginConnectionPluginOptionsDisplayQueryString_2 | null
  icon?: SitePluginConnectionPluginOptionsIconQueryString_2 | null
  fieldName?: SitePluginConnectionPluginOptionsFieldNameQueryString_2 | null
  url?: SitePluginConnectionPluginOptionsUrlQueryString_2 | null
  typeName?: SitePluginConnectionPluginOptionsTypeNameQueryString_2 | null
  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null
  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsIconQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsFieldNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsTypeNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null
  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null
  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null
  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null
  type?: SitePluginConnectionInternalTypeQueryString_2 | null
  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null
  id?: SitePagePluginCreatorIdQueryString | null
  name?: SitePagePluginCreatorNameQueryString | null
  version?: SitePagePluginCreatorVersionQueryString | null
  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePagePluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null
  parent?: SitePagePluginCreatorParentQueryString | null
  internal?: SitePagePluginCreatorInternalInputObject | null
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  name?: SitePagePluginCreatorPluginOptionsNameQueryString | null
  short_name?: SitePagePluginCreatorPluginOptionsShortNameQueryString | null
  start_url?: SitePagePluginCreatorPluginOptionsStartUrlQueryString | null
  background_color?: SitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null
  theme_color?: SitePagePluginCreatorPluginOptionsThemeColorQueryString | null
  display?: SitePagePluginCreatorPluginOptionsDisplayQueryString | null
  icon?: SitePagePluginCreatorPluginOptionsIconQueryString | null
  fieldName?: SitePagePluginCreatorPluginOptionsFieldNameQueryString | null
  url?: SitePagePluginCreatorPluginOptionsUrlQueryString | null
  typeName?: SitePagePluginCreatorPluginOptionsTypeNameQueryString | null
  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null
  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsIconQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsFieldNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsTypeNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null
  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null
  main?: SitePagePluginCreatorPackageJsonMainQueryString | null
  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null
  type?: SitePagePluginCreatorInternalTypeQueryString | null
  owner?: SitePagePluginCreatorInternalOwnerQueryString | null
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null
  contentDigest?: SitePageInternalContentDigestQueryString_2 | null
  description?: SitePageInternalDescriptionQueryString | null
  owner?: SitePageInternalOwnerQueryString_2 | null
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsInputObject_2 {
  name?: SitePluginPluginOptionsNameQueryString_2 | null
  short_name?: SitePluginPluginOptionsShortNameQueryString_2 | null
  start_url?: SitePluginPluginOptionsStartUrlQueryString_2 | null
  background_color?: SitePluginPluginOptionsBackgroundColorQueryString_2 | null
  theme_color?: SitePluginPluginOptionsThemeColorQueryString_2 | null
  display?: SitePluginPluginOptionsDisplayQueryString_2 | null
  icon?: SitePluginPluginOptionsIconQueryString_2 | null
  fieldName?: SitePluginPluginOptionsFieldNameQueryString_2 | null
  url?: SitePluginPluginOptionsUrlQueryString_2 | null
  typeName?: SitePluginPluginOptionsTypeNameQueryString_2 | null
  path?: SitePluginPluginOptionsPathQueryString_2 | null
  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsIconQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsFieldNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsTypeNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null
  description?: SitePluginPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginPackageJsonVersionQueryString_2 | null
  main?: SitePluginPackageJsonMainQueryString_2 | null
  license?: SitePluginPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null
  type?: SitePluginInternalTypeQueryString_2 | null
  owner?: SitePluginInternalOwnerQueryString_2 | null
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteSiteMetadataInputObject_2 {
  title?: SiteSiteMetadataTitleQueryString_2 | null
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePortQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteHostQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null
  type?: SiteInternalTypeQueryString_2 | null
  owner?: SiteInternalOwnerQueryString_2 | null
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SwapiAssetFilter {
  AND?: SwapiAssetFilter[] | null /** Logical AND on all given filters. */
  OR?: SwapiAssetFilter[] | null /** Logical OR on all given filters. */
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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

export interface SwapiFilmFilter {
  AND?: SwapiFilmFilter[] | null /** Logical AND on all given filters. */
  OR?: SwapiFilmFilter[] | null /** Logical OR on all given filters. */
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  releaseDate?: SwapiDateTime | null
  releaseDate_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  releaseDate_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  releaseDate_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  releaseDate_lt?: SwapiDateTime | null /** All values less than the given value. */
  releaseDate_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  releaseDate_gt?: SwapiDateTime | null /** All values greater than the given value. */
  releaseDate_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  characters_every?: SwapiPersonFilter | null
  characters_some?: SwapiPersonFilter | null
  characters_none?: SwapiPersonFilter | null
  planets_every?: SwapiPlanetFilter | null
  planets_some?: SwapiPlanetFilter | null
  planets_none?: SwapiPlanetFilter | null
  species_every?: SwapiSpeciesFilter | null
  species_some?: SwapiSpeciesFilter | null
  species_none?: SwapiSpeciesFilter | null
  starships_every?: SwapiStarshipFilter | null
  starships_some?: SwapiStarshipFilter | null
  starships_none?: SwapiStarshipFilter | null
  vehicles_every?: SwapiVehicleFilter | null
  vehicles_some?: SwapiVehicleFilter | null
  vehicles_none?: SwapiVehicleFilter | null
}

export interface SwapiPersonFilter {
  AND?: SwapiPersonFilter[] | null /** Logical AND on all given filters. */
  OR?: SwapiPersonFilter[] | null /** Logical OR on all given filters. */
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  gender?: SwapiPersonGender | null
  gender_not?: SwapiPersonGender | null /** All values that are not equal to given value. */
  gender_in?:
    | SwapiPersonGender[]
    | null /** All values that are contained in given list. */
  gender_not_in?:
    | SwapiPersonGender[]
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  homeworld?: SwapiPlanetFilter | null
  species_every?: SwapiSpeciesFilter | null
  species_some?: SwapiSpeciesFilter | null
  species_none?: SwapiSpeciesFilter | null
  starships_every?: SwapiStarshipFilter | null
  starships_some?: SwapiStarshipFilter | null
  starships_none?: SwapiStarshipFilter | null
  vehicles_every?: SwapiVehicleFilter | null
  vehicles_some?: SwapiVehicleFilter | null
  vehicles_none?: SwapiVehicleFilter | null
}

export interface SwapiPlanetFilter {
  AND?: SwapiPlanetFilter[] | null /** Logical AND on all given filters. */
  OR?: SwapiPlanetFilter[] | null /** Logical OR on all given filters. */
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  residents_every?: SwapiPersonFilter | null
  residents_some?: SwapiPersonFilter | null
  residents_none?: SwapiPersonFilter | null
}

export interface SwapiSpeciesFilter {
  AND?: SwapiSpeciesFilter[] | null /** Logical AND on all given filters. */
  OR?: SwapiSpeciesFilter[] | null /** Logical OR on all given filters. */
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  people_every?: SwapiPersonFilter | null
  people_some?: SwapiPersonFilter | null
  people_none?: SwapiPersonFilter | null
}

export interface SwapiStarshipFilter {
  AND?: SwapiStarshipFilter[] | null /** Logical AND on all given filters. */
  OR?: SwapiStarshipFilter[] | null /** Logical OR on all given filters. */
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  pilots_every?: SwapiPersonFilter | null
  pilots_some?: SwapiPersonFilter | null
  pilots_none?: SwapiPersonFilter | null
}

export interface SwapiVehicleFilter {
  AND?: SwapiVehicleFilter[] | null /** Logical AND on all given filters. */
  OR?: SwapiVehicleFilter[] | null /** Logical OR on all given filters. */
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  pilots_every?: SwapiPersonFilter | null
  pilots_some?: SwapiPersonFilter | null
  pilots_none?: SwapiPersonFilter | null
}

export interface SwapiFilmcharactersPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: SwapiPersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: SwapiPersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: SwapiPersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiPersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiPersonvehiclesVehicle[] | null
}

export interface SwapiPersonhomeworldPlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
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
  films?: SwapiPlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: SwapiPlanetresidentsPerson[] | null
}

export interface SwapiPlanetfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: SwapiFilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: SwapiFilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: SwapiFilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiFilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiFilmvehiclesVehicle[] | null
}

export interface SwapiFilmplanetsPlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
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
  films?: SwapiPlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: SwapiPlanetresidentsPerson[] | null
}

export interface SwapiPlanetresidentsPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  filmsIds?: string[] | null
  films?: SwapiPersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: SwapiPersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiPersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiPersonvehiclesVehicle[] | null
}

export interface SwapiPersonfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: SwapiFilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: SwapiFilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: SwapiFilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiFilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiFilmvehiclesVehicle[] | null
}

export interface SwapiFilmspeciesSpecies {
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
    | SwapiSpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SwapiSpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SwapiSpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SwapiSpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SwapiSpeciespeoplePerson[] | null
}

export interface SwapiSpeciesfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: SwapiFilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: SwapiFilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: SwapiFilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiFilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiFilmvehiclesVehicle[] | null
}

export interface SwapiFilmstarshipsStarship {
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
    | null /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: SwapiStarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiStarshippilotsPerson[] | null
}

export interface SwapiStarshipfilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: SwapiFilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: SwapiFilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: SwapiFilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiFilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiFilmvehiclesVehicle[] | null
}

export interface SwapiFilmvehiclesVehicle {
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
  films?: SwapiVehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiVehiclepilotsPerson[] | null
}

export interface SwapiVehiclefilmsFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: SwapiFilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: SwapiFilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: SwapiFilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiFilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiFilmvehiclesVehicle[] | null
}

export interface SwapiVehiclepilotsPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: SwapiPersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: SwapiPersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: SwapiPersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiPersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiPersonvehiclesVehicle[] | null
}

export interface SwapiPersonspeciesSpecies {
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
    | SwapiSpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SwapiSpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SwapiSpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SwapiSpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SwapiSpeciespeoplePerson[] | null
}

export interface SwapiSpeciespeoplePerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: SwapiPersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: SwapiPersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: SwapiPersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiPersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiPersonvehiclesVehicle[] | null
}

export interface SwapiPersonstarshipsStarship {
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
    | null /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: SwapiStarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiStarshippilotsPerson[] | null
}

export interface SwapiStarshippilotsPerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: SwapiPersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: SwapiPersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: SwapiPersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiPersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiPersonvehiclesVehicle[] | null
}

export interface SwapiPersonvehiclesVehicle {
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
  films?: SwapiVehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiVehiclepilotsPerson[] | null
}

export interface SwapiUpdateAsset {
  fileName?: string | null /** Original File Name */
  handle?: string | null /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  id: string
  mimeType?: string | null /** The Mime Type */
  size?: number | null /** The Size Of The File */
  url?: string | null /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}

export interface SwapiCreateAsset {
  fileName: string /** Original File Name */
  handle: string /** The File Handle */
  height?: number | null /** The height of the file in case it is an image */
  mimeType?: string | null /** The Mime Type */
  size: number /** The Size Of The File */
  url: string /** The Url Of The Asset */
  width?: number | null /** The width of the file in case it is an image */
}

export interface SwapiUpdateFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId?: number | null /** The episode number of this film. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title?: string | null /** The title of this film */
  charactersIds?: string[] | null
  characters?: SwapiFilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: SwapiFilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: SwapiFilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiFilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiFilmvehiclesVehicle[] | null
}

export interface SwapiCreateFilm {
  director?: string | null /** The name of the director of this film. */
  episodeId: number /** The episode number of this film. */
  isPublished?: boolean | null /** indicates if the record is published */
  openingCrawl?:
    | string
    | null /** The opening paragraphs at the beginning of this film. */
  producers?: string[] | null /** The names of the producers of this film. */
  releaseDate?: SwapiDateTime | null /** The ISO 8601 date format of film release at original creator country. */
  title: string /** The title of this film */
  charactersIds?: string[] | null
  characters?: SwapiFilmcharactersPerson[] | null
  planetsIds?: string[] | null
  planets?: SwapiFilmplanetsPlanet[] | null
  speciesIds?: string[] | null
  species?: SwapiFilmspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiFilmstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiFilmvehiclesVehicle[] | null
}

export interface SwapiUpdatePerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name?: string | null /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: SwapiPersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: SwapiPersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: SwapiPersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiPersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiPersonvehiclesVehicle[] | null
}

export interface SwapiCreatePerson {
  birthYear?:
    | string
    | null /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  eyeColor?:
    | SwapiPersonEyeColor[]
    | null /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  gender?: SwapiPersonGender | null /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  hairColor?:
    | SwapiPersonHairColor[]
    | null /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  height?: number | null /** The height of the person in centimeters. */
  isPublished?: boolean | null /** indicates if the record is published */
  mass?: number | null /** The mass of the person in kilograms. */
  name: string /** The name of this person. */
  skinColor?:
    | SwapiPersonSkinColor[]
    | null /** The skin color of this person. */
  homeworldId?: string | null
  homeworld?: SwapiPersonhomeworldPlanet | null
  filmsIds?: string[] | null
  films?: SwapiPersonfilmsFilm[] | null
  speciesIds?: string[] | null
  species?: SwapiPersonspeciesSpecies[] | null
  starshipsIds?: string[] | null
  starships?: SwapiPersonstarshipsStarship[] | null
  vehiclesIds?: string[] | null
  vehicles?: SwapiPersonvehiclesVehicle[] | null
}

export interface SwapiUpdatePlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
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
  films?: SwapiPlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: SwapiPlanetresidentsPerson[] | null
}

export interface SwapiCreatePlanet {
  climate?: string[] | null /** The climate of this planet. */
  diameter?: number | null /** The diameter of this planet in kilometers. */
  gravity?:
    | string
    | null /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
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
  films?: SwapiPlanetfilmsFilm[] | null
  residentsIds?: string[] | null
  residents?: SwapiPlanetresidentsPerson[] | null
}

export interface SwapiUpdateSpecies {
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
    | SwapiSpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SwapiSpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  id: string
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name?: string | null /** The name of this species. */
  skinColor?:
    | SwapiSpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SwapiSpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SwapiSpeciespeoplePerson[] | null
}

export interface SwapiCreateSpecies {
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
    | SwapiSpeciesEyeColor[]
    | null /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  hairColor?:
    | SwapiSpeciesHairColor[]
    | null /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  isPublished?: boolean | null /** indicates if the record is published */
  language?: string | null /** The language commonly spoken by this species. */
  name: string /** The name of this species. */
  skinColor?:
    | SwapiSpeciesSkinColor[]
    | null /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  filmsIds?: string[] | null
  films?: SwapiSpeciesfilmsFilm[] | null
  peopleIds?: string[] | null
  people?: SwapiSpeciespeoplePerson[] | null
}

export interface SwapiUpdateStarship {
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
    | null /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
  name?:
    | string
    | null /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: SwapiStarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiStarshippilotsPerson[] | null
}

export interface SwapiCreateStarship {
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
    | null /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
  name: string /** The name of this starship. The common name, such as "Death Star". */
  passengers?:
    | number
    | null /** The number of non-essential people this starship can transport. */
  filmsIds?: string[] | null
  films?: SwapiStarshipfilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiStarshippilotsPerson[] | null
}

export interface SwapiUpdateVehicle {
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
  films?: SwapiVehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiVehiclepilotsPerson[] | null
}

export interface SwapiCreateVehicle {
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
  films?: SwapiVehiclefilmsFilm[] | null
  pilotsIds?: string[] | null
  pilots?: SwapiVehiclepilotsPerson[] | null
}

export interface SwapiInvokeFunctionInput {
  name: string
  input: string
  clientMutationId?: string | null
}

export interface SwapiAssetSubscriptionFilter {
  AND?:
    | SwapiAssetSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SwapiAssetSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | SwapiModelMutationType[]
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
  node?: SwapiAssetSubscriptionFilterNode | null
}

export interface SwapiAssetSubscriptionFilterNode {
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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

export interface SwapiFilmSubscriptionFilter {
  AND?:
    | SwapiFilmSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SwapiFilmSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | SwapiModelMutationType[]
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
  node?: SwapiFilmSubscriptionFilterNode | null
}

export interface SwapiFilmSubscriptionFilterNode {
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  releaseDate?: SwapiDateTime | null
  releaseDate_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  releaseDate_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  releaseDate_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  releaseDate_lt?: SwapiDateTime | null /** All values less than the given value. */
  releaseDate_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  releaseDate_gt?: SwapiDateTime | null /** All values greater than the given value. */
  releaseDate_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  characters_every?: SwapiPersonFilter | null
  characters_some?: SwapiPersonFilter | null
  characters_none?: SwapiPersonFilter | null
  planets_every?: SwapiPlanetFilter | null
  planets_some?: SwapiPlanetFilter | null
  planets_none?: SwapiPlanetFilter | null
  species_every?: SwapiSpeciesFilter | null
  species_some?: SwapiSpeciesFilter | null
  species_none?: SwapiSpeciesFilter | null
  starships_every?: SwapiStarshipFilter | null
  starships_some?: SwapiStarshipFilter | null
  starships_none?: SwapiStarshipFilter | null
  vehicles_every?: SwapiVehicleFilter | null
  vehicles_some?: SwapiVehicleFilter | null
  vehicles_none?: SwapiVehicleFilter | null
}

export interface SwapiPersonSubscriptionFilter {
  AND?:
    | SwapiPersonSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SwapiPersonSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | SwapiModelMutationType[]
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
  node?: SwapiPersonSubscriptionFilterNode | null
}

export interface SwapiPersonSubscriptionFilterNode {
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  gender?: SwapiPersonGender | null
  gender_not?: SwapiPersonGender | null /** All values that are not equal to given value. */
  gender_in?:
    | SwapiPersonGender[]
    | null /** All values that are contained in given list. */
  gender_not_in?:
    | SwapiPersonGender[]
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  homeworld?: SwapiPlanetFilter | null
  species_every?: SwapiSpeciesFilter | null
  species_some?: SwapiSpeciesFilter | null
  species_none?: SwapiSpeciesFilter | null
  starships_every?: SwapiStarshipFilter | null
  starships_some?: SwapiStarshipFilter | null
  starships_none?: SwapiStarshipFilter | null
  vehicles_every?: SwapiVehicleFilter | null
  vehicles_some?: SwapiVehicleFilter | null
  vehicles_none?: SwapiVehicleFilter | null
}

export interface SwapiPlanetSubscriptionFilter {
  AND?:
    | SwapiPlanetSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SwapiPlanetSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | SwapiModelMutationType[]
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
  node?: SwapiPlanetSubscriptionFilterNode | null
}

export interface SwapiPlanetSubscriptionFilterNode {
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  residents_every?: SwapiPersonFilter | null
  residents_some?: SwapiPersonFilter | null
  residents_none?: SwapiPersonFilter | null
}

export interface SwapiSpeciesSubscriptionFilter {
  AND?:
    | SwapiSpeciesSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SwapiSpeciesSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | SwapiModelMutationType[]
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
  node?: SwapiSpeciesSubscriptionFilterNode | null
}

export interface SwapiSpeciesSubscriptionFilterNode {
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  people_every?: SwapiPersonFilter | null
  people_some?: SwapiPersonFilter | null
  people_none?: SwapiPersonFilter | null
}

export interface SwapiStarshipSubscriptionFilter {
  AND?:
    | SwapiStarshipSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SwapiStarshipSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | SwapiModelMutationType[]
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
  node?: SwapiStarshipSubscriptionFilterNode | null
}

export interface SwapiStarshipSubscriptionFilterNode {
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  pilots_every?: SwapiPersonFilter | null
  pilots_some?: SwapiPersonFilter | null
  pilots_none?: SwapiPersonFilter | null
}

export interface SwapiVehicleSubscriptionFilter {
  AND?:
    | SwapiVehicleSubscriptionFilter[]
    | null /** Logical AND on all given filters. */
  OR?:
    | SwapiVehicleSubscriptionFilter[]
    | null /** Logical OR on all given filters. */
  mutation_in?:
    | SwapiModelMutationType[]
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
  node?: SwapiVehicleSubscriptionFilterNode | null
}

export interface SwapiVehicleSubscriptionFilterNode {
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
  createdAt?: SwapiDateTime | null
  createdAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  createdAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  createdAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  createdAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  createdAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  createdAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  createdAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
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
  updatedAt?: SwapiDateTime | null
  updatedAt_not?: SwapiDateTime | null /** All values that are not equal to given value. */
  updatedAt_in?:
    | SwapiDateTime[]
    | null /** All values that are contained in given list. */
  updatedAt_not_in?:
    | SwapiDateTime[]
    | null /** All values that are not contained in given list. */
  updatedAt_lt?: SwapiDateTime | null /** All values less than the given value. */
  updatedAt_lte?: SwapiDateTime | null /** All values less than or equal the given value. */
  updatedAt_gt?: SwapiDateTime | null /** All values greater than the given value. */
  updatedAt_gte?: SwapiDateTime | null /** All values greater than or equal the given value. */
  films_every?: SwapiFilmFilter | null
  films_some?: SwapiFilmFilter | null
  films_none?: SwapiFilmFilter | null
  pilots_every?: SwapiPersonFilter | null
  pilots_some?: SwapiPersonFilter | null
  pilots_none?: SwapiPersonFilter | null
}
export interface AllSitePageQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePageConnectionSort | null
  filter?: FilterSitePage | null
}
export interface AllSitePluginQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePluginConnectionSort | null
  filter?: FilterSitePlugin | null
}
export interface SitePageQueryArgs {
  jsonName?: SitePageJsonNameQueryString | null
  internalComponentName?: SitePageInternalComponentNameQueryString | null
  path?: SitePagePathQueryString_2 | null
  component?: SitePageComponentQueryString | null
  componentChunkName?: SitePageComponentChunkNameQueryString | null
  pluginCreator?: SitePagePluginCreatorInputObject | null
  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
  componentPath?: SitePageComponentPathQueryString | null
  id?: SitePageIdQueryString_2 | null
  internal?: SitePageInternalInputObject_2 | null
}
export interface SitePluginQueryArgs {
  resolve?: SitePluginResolveQueryString_2 | null
  id?: SitePluginIdQueryString_2 | null
  name?: SitePluginNameQueryString_2 | null
  version?: SitePluginVersionQueryString_2 | null
  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
  packageJson?: SitePluginPackageJsonInputObject_2 | null
  internal?: SitePluginInternalInputObject_2 | null
}
export interface SiteQueryArgs {
  siteMetadata?: SiteSiteMetadataInputObject_2 | null
  port?: SitePortQueryString_2 | null
  host?: SiteHostQueryString_2 | null
  pathPrefix?: SitePathPrefixQueryString_2 | null
  polyfill?: SitePolyfillQueryBoolean_2 | null
  buildTime?: SiteBuildTimeQueryString_2 | null
  id?: SiteIdQueryString_2 | null
  internal?: SiteInternalInputObject_2 | null
}
export interface DistinctSitePageConnectionArgs {
  field?: SitePageDistinctEnum | null
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePageGroupEnum | null
}
export interface DistinctSitePluginConnectionArgs {
  field?: SitePluginDistinctEnum | null
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePluginGroupEnum | null
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AllAssetsSwapiArgs {
  filter?: SwapiAssetFilter | null
  orderBy?: SwapiAssetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllFilmsSwapiArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllPersonsSwapiArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllPlanetsSwapiArgs {
  filter?: SwapiPlanetFilter | null
  orderBy?: SwapiPlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllSpeciesSwapiArgs {
  filter?: SwapiSpeciesFilter | null
  orderBy?: SwapiSpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllStarshipsSwapiArgs {
  filter?: SwapiStarshipFilter | null
  orderBy?: SwapiStarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AllVehiclesSwapiArgs {
  filter?: SwapiVehicleFilter | null
  orderBy?: SwapiVehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllAssetsMetaSwapiArgs {
  filter?: SwapiAssetFilter | null
  orderBy?: SwapiAssetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllFilmsMetaSwapiArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllPersonsMetaSwapiArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllPlanetsMetaSwapiArgs {
  filter?: SwapiPlanetFilter | null
  orderBy?: SwapiPlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllSpeciesMetaSwapiArgs {
  filter?: SwapiSpeciesFilter | null
  orderBy?: SwapiSpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllStarshipsMetaSwapiArgs {
  filter?: SwapiStarshipFilter | null
  orderBy?: SwapiStarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _AllVehiclesMetaSwapiArgs {
  filter?: SwapiVehicleFilter | null
  orderBy?: SwapiVehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface AssetSwapiArgs {
  id?: string | null
}
export interface FilmSwapiArgs {
  id?: string | null
  title?: string | null /** The title of this film */
}
export interface PersonSwapiArgs {
  id?: string | null
  name?: string | null /** The name of this person. */
}
export interface PlanetSwapiArgs {
  id?: string | null
  name?: string | null /** The name of the planet */
}
export interface SpeciesSwapiArgs {
  id?: string | null
  name?: string | null /** The name of this species. */
}
export interface StarshipSwapiArgs {
  id?: string | null
  name?:
    | string
    | null /** The name of this starship. The common name, such as "Death Star". */
}
export interface VehicleSwapiArgs {
  id?: string | null
  name?:
    | string
    | null /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
}
export interface NodeSwapiArgs {
  id: string /** The ID of an object */
}
export interface CharactersSwapiFilmArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PlanetsSwapiFilmArgs {
  filter?: SwapiPlanetFilter | null
  orderBy?: SwapiPlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface SpeciesSwapiFilmArgs {
  filter?: SwapiSpeciesFilter | null
  orderBy?: SwapiSpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface StarshipsSwapiFilmArgs {
  filter?: SwapiStarshipFilter | null
  orderBy?: SwapiStarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface VehiclesSwapiFilmArgs {
  filter?: SwapiVehicleFilter | null
  orderBy?: SwapiVehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _CharactersMetaSwapiFilmArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PlanetsMetaSwapiFilmArgs {
  filter?: SwapiPlanetFilter | null
  orderBy?: SwapiPlanetOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _SpeciesMetaSwapiFilmArgs {
  filter?: SwapiSpeciesFilter | null
  orderBy?: SwapiSpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _StarshipsMetaSwapiFilmArgs {
  filter?: SwapiStarshipFilter | null
  orderBy?: SwapiStarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _VehiclesMetaSwapiFilmArgs {
  filter?: SwapiVehicleFilter | null
  orderBy?: SwapiVehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsSwapiPersonArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface HomeworldSwapiPersonArgs {
  filter?: SwapiPlanetFilter | null
}
export interface SpeciesSwapiPersonArgs {
  filter?: SwapiSpeciesFilter | null
  orderBy?: SwapiSpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface StarshipsSwapiPersonArgs {
  filter?: SwapiStarshipFilter | null
  orderBy?: SwapiStarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface VehiclesSwapiPersonArgs {
  filter?: SwapiVehicleFilter | null
  orderBy?: SwapiVehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaSwapiPersonArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _SpeciesMetaSwapiPersonArgs {
  filter?: SwapiSpeciesFilter | null
  orderBy?: SwapiSpeciesOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _StarshipsMetaSwapiPersonArgs {
  filter?: SwapiStarshipFilter | null
  orderBy?: SwapiStarshipOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _VehiclesMetaSwapiPersonArgs {
  filter?: SwapiVehicleFilter | null
  orderBy?: SwapiVehicleOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsSwapiPlanetArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface ResidentsSwapiPlanetArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaSwapiPlanetArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _ResidentsMetaSwapiPlanetArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsSwapiSpeciesArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PeopleSwapiSpeciesArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaSwapiSpeciesArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PeopleMetaSwapiSpeciesArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsSwapiStarshipArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PilotsSwapiStarshipArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaSwapiStarshipArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PilotsMetaSwapiStarshipArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface FilmsSwapiVehicleArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface PilotsSwapiVehicleArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _FilmsMetaSwapiVehicleArgs {
  filter?: SwapiFilmFilter | null
  orderBy?: SwapiFilmOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface _PilotsMetaSwapiVehicleArgs {
  filter?: SwapiPersonFilter | null
  orderBy?: SwapiPersonOrderBy | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___fieldName = 'pluginOptions___fieldName',
  pluginOptions___url = 'pluginOptions___url',
  pluginOptions___typeName = 'pluginOptions___typeName',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___fieldName = 'pluginOptions___fieldName',
  pluginOptions___url = 'pluginOptions___url',
  pluginOptions___typeName = 'pluginOptions___typeName',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___fieldName = 'pluginOptions___fieldName',
  pluginOptions___url = 'pluginOptions___url',
  pluginOptions___typeName = 'pluginOptions___typeName',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SwapiAssetOrderBy {
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
export enum SwapiPersonGender {
  UNKNOWN = 'UNKNOWN',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  HERMAPHRODITE = 'HERMAPHRODITE',
}

export enum SwapiFilmOrderBy {
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

export enum SwapiPersonOrderBy {
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
export enum SwapiPersonEyeColor {
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
export enum SwapiPersonHairColor {
  AUBURN = 'AUBURN',
  BLACK = 'BLACK',
  BLONDE = 'BLONDE',
  BROWN = 'BROWN',
  GREY = 'GREY',
  UNKNOWN = 'UNKNOWN',
  WHITE = 'WHITE',
}
/** The skin color of this person. */
export enum SwapiPersonSkinColor {
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

export enum SwapiSpeciesOrderBy {
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
export enum SwapiSpeciesEyeColor {
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
export enum SwapiSpeciesHairColor {
  UNKNOWN = 'UNKNOWN',
  BROWN = 'BROWN',
  WHITE = 'WHITE',
  RED = 'RED',
  BLACK = 'BLACK',
  BLONDE = 'BLONDE',
}
/** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
export enum SwapiSpeciesSkinColor {
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

export enum SwapiStarshipOrderBy {
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

export enum SwapiVehicleOrderBy {
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

export enum SwapiPlanetOrderBy {
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

export enum SwapiModelMutationType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    allSitePage?: AllSitePageResolver<
      SitePageConnection | null,
      any,
      Context
    > /** Connection to all SitePage nodes */
    allSitePlugin?: AllSitePluginResolver<
      SitePluginConnection | null,
      any,
      Context
    > /** Connection to all SitePlugin nodes */
    sitePage?: SitePageResolver<SitePage | null, any, Context>
    sitePlugin?: SitePluginResolver<SitePlugin | null, any, Context>
    site?: SiteResolver<Site | null, any, Context>
    swapi?: SwapiResolver<Swapi | null, any, Context>
  }

  export type AllSitePageResolver<
    R = SitePageConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePageArgs>
  export interface AllSitePageArgs {
    skip?: number | null
    limit?: number | null
    sort?: SitePageConnectionSort | null
    filter?: FilterSitePage | null
  }

  export type AllSitePluginResolver<
    R = SitePluginConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePluginArgs>
  export interface AllSitePluginArgs {
    skip?: number | null
    limit?: number | null
    sort?: SitePluginConnectionSort | null
    filter?: FilterSitePlugin | null
  }

  export type SitePageResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePageArgs>
  export interface SitePageArgs {
    jsonName?: SitePageJsonNameQueryString | null
    internalComponentName?: SitePageInternalComponentNameQueryString | null
    path?: SitePagePathQueryString_2 | null
    component?: SitePageComponentQueryString | null
    componentChunkName?: SitePageComponentChunkNameQueryString | null
    pluginCreator?: SitePagePluginCreatorInputObject | null
    pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
    componentPath?: SitePageComponentPathQueryString | null
    id?: SitePageIdQueryString_2 | null
    internal?: SitePageInternalInputObject_2 | null
  }

  export type SitePluginResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePluginArgs>
  export interface SitePluginArgs {
    resolve?: SitePluginResolveQueryString_2 | null
    id?: SitePluginIdQueryString_2 | null
    name?: SitePluginNameQueryString_2 | null
    version?: SitePluginVersionQueryString_2 | null
    pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
    nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
    browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
    ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
    pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
    packageJson?: SitePluginPackageJsonInputObject_2 | null
    internal?: SitePluginInternalInputObject_2 | null
  }

  export type SiteResolver<
    R = Site | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SiteArgs>
  export interface SiteArgs {
    siteMetadata?: SiteSiteMetadataInputObject_2 | null
    port?: SitePortQueryString_2 | null
    host?: SiteHostQueryString_2 | null
    pathPrefix?: SitePathPrefixQueryString_2 | null
    polyfill?: SitePolyfillQueryBoolean_2 | null
    buildTime?: SiteBuildTimeQueryString_2 | null
    id?: SiteIdQueryString_2 | null
    internal?: SiteInternalInputObject_2 | null
  }

  export type SwapiResolver<
    R = Swapi | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePageEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (SitePageGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePageEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: SitePageDistinctEnum | null
  }

  export type GroupResolver<
    R = (SitePageGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: SitePageGroupEnum | null
  }
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    hasNextPage?: HasNextPageResolver<
      boolean,
      any,
      Context
    > /** When paginating, are there more items? */
  }

  export type HasNextPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePageEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type SitePage */
export namespace SitePageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    jsonName?: JsonNameResolver<string | null, any, Context>
    internalComponentName?: InternalComponentNameResolver<
      string | null,
      any,
      Context
    >
    path?: PathResolver<string | null, any, Context>
    component?: ComponentResolver<string | null, any, Context>
    componentChunkName?: ComponentChunkNameResolver<string | null, any, Context>
    pluginCreator?: PluginCreatorResolver<SitePlugin | null, any, Context>
    pluginCreatorId?: PluginCreatorIdResolver<string | null, any, Context>
    componentPath?: ComponentPathResolver<string | null, any, Context>
    internal?: InternalResolver<Internal_4 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type JsonNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalComponentNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentChunkNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginCreatorResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginCreatorIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentPathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_4 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type SitePlugin */
export namespace SitePluginResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    resolve?: ResolveResolver<string | null, any, Context>
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
    pluginOptions?: PluginOptionsResolver<PluginOptions_2 | null, any, Context>
    nodeAPIs?: NodeApIsResolver<(string | null)[] | null, any, Context>
    browserAPIs?: BrowserApIsResolver<(string | null)[] | null, any, Context>
    ssrAPIs?: SsrApIsResolver<(string | null)[] | null, any, Context>
    pluginFilepath?: PluginFilepathResolver<string | null, any, Context>
    packageJson?: PackageJsonResolver<PackageJson_2 | null, any, Context>
    internal?: InternalResolver<Internal_5 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ResolveResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginOptionsResolver<
    R = PluginOptions_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BrowserApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SsrApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginFilepathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PackageJsonResolver<
    R = PackageJson_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_5 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PluginOptions_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    short_name?: ShortNameResolver<string | null, any, Context>
    start_url?: StartUrlResolver<string | null, any, Context>
    background_color?: BackgroundColorResolver<string | null, any, Context>
    theme_color?: ThemeColorResolver<string | null, any, Context>
    display?: DisplayResolver<string | null, any, Context>
    icon?: IconResolver<string | null, any, Context>
    fieldName?: FieldNameResolver<string | null, any, Context>
    url?: UrlResolver<string | null, any, Context>
    typeName?: TypeNameResolver<string | null, any, Context>
    path?: PathResolver<string | null, any, Context>
    pathCheck?: PathCheckResolver<boolean | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ShortNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StartUrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BackgroundColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ThemeColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DisplayResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IconResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathCheckResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PackageJson_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
    main?: MainResolver<string | null, any, Context>
    license?: LicenseResolver<string | null, any, Context>
    dependencies?: DependenciesResolver<
      (Dependencies_2 | null)[] | null,
      any,
      Context
    >
    devDependencies?: DevDependenciesResolver<
      (DevDependencies_2 | null)[] | null,
      any,
      Context
    >
    peerDependencies?: PeerDependenciesResolver<
      (PeerDependencies_2 | null)[] | null,
      any,
      Context
    >
    keywords?: KeywordsResolver<(string | null)[] | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MainResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LicenseResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DependenciesResolver<
    R = (Dependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DevDependenciesResolver<
    R = (DevDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PeerDependenciesResolver<
    R = (PeerDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type KeywordsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Dependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace DevDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PeerDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_5Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_4Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePageGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePageGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePageGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePageGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePluginEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (SitePluginGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePluginEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: SitePluginDistinctEnum | null
  }

  export type GroupResolver<
    R = (SitePluginGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: SitePluginGroupEnum | null
  }
}
/** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePluginGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePluginGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePluginGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePluginGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type Site */
export namespace SiteResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    siteMetadata?: SiteMetadataResolver<SiteMetadata_2 | null, any, Context>
    port?: PortResolver<Date | null, any, Context>
    host?: HostResolver<string | null, any, Context>
    pathPrefix?: PathPrefixResolver<string | null, any, Context>
    polyfill?: PolyfillResolver<boolean | null, any, Context>
    buildTime?: BuildTimeResolver<Date | null, any, Context>
    internal?: InternalResolver<Internal_6 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SiteMetadataResolver<
    R = SiteMetadata_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PortResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PortArgs>
  export interface PortArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type HostResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathPrefixResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PolyfillResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BuildTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BuildTimeArgs>
  export interface BuildTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type InternalResolver<
    R = Internal_6 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SiteMetadata_2Resolvers {
  export interface Resolvers<Context = any> {
    title?: TitleResolver<string | null, any, Context>
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_6Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiResolvers {
  export interface Resolvers<Context = any> {
    allAssets?: AllAssetsResolver<SwapiAsset[], any, Context>
    allFilms?: AllFilmsResolver<SwapiFilm[], any, Context>
    allPersons?: AllPersonsResolver<SwapiPerson[], any, Context>
    allPlanets?: AllPlanetsResolver<SwapiPlanet[], any, Context>
    allSpecies?: AllSpeciesResolver<SwapiSpecies[], any, Context>
    allStarships?: AllStarshipsResolver<SwapiStarship[], any, Context>
    allVehicles?: AllVehiclesResolver<SwapiVehicle[], any, Context>
    _allAssetsMeta?: AllAssetsMetaResolver<SwapiQueryMeta, any, Context>
    _allFilmsMeta?: AllFilmsMetaResolver<SwapiQueryMeta, any, Context>
    _allPersonsMeta?: AllPersonsMetaResolver<SwapiQueryMeta, any, Context>
    _allPlanetsMeta?: AllPlanetsMetaResolver<SwapiQueryMeta, any, Context>
    _allSpeciesMeta?: AllSpeciesMetaResolver<SwapiQueryMeta, any, Context>
    _allStarshipsMeta?: AllStarshipsMetaResolver<SwapiQueryMeta, any, Context>
    _allVehiclesMeta?: AllVehiclesMetaResolver<SwapiQueryMeta, any, Context>
    Asset?: AssetResolver<SwapiAsset | null, any, Context>
    Film?: FilmResolver<SwapiFilm | null, any, Context>
    Person?: PersonResolver<SwapiPerson | null, any, Context>
    Planet?: PlanetResolver<SwapiPlanet | null, any, Context>
    Species?: SpeciesResolver<SwapiSpecies | null, any, Context>
    Starship?: StarshipResolver<SwapiStarship | null, any, Context>
    Vehicle?: VehicleResolver<SwapiVehicle | null, any, Context>
    node?: NodeResolver<
      SwapiNode | null,
      any,
      Context
    > /** Fetches an object given its ID */
  }

  export type AllAssetsResolver<
    R = SwapiAsset[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllAssetsArgs>
  export interface AllAssetsArgs {
    filter?: SwapiAssetFilter | null
    orderBy?: SwapiAssetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllFilmsResolver<
    R = SwapiFilm[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllFilmsArgs>
  export interface AllFilmsArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPersonsResolver<
    R = SwapiPerson[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPersonsArgs>
  export interface AllPersonsArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPlanetsResolver<
    R = SwapiPlanet[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPlanetsArgs>
  export interface AllPlanetsArgs {
    filter?: SwapiPlanetFilter | null
    orderBy?: SwapiPlanetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllSpeciesResolver<
    R = SwapiSpecies[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSpeciesArgs>
  export interface AllSpeciesArgs {
    filter?: SwapiSpeciesFilter | null
    orderBy?: SwapiSpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllStarshipsResolver<
    R = SwapiStarship[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllStarshipsArgs>
  export interface AllStarshipsArgs {
    filter?: SwapiStarshipFilter | null
    orderBy?: SwapiStarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllVehiclesResolver<
    R = SwapiVehicle[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllVehiclesArgs>
  export interface AllVehiclesArgs {
    filter?: SwapiVehicleFilter | null
    orderBy?: SwapiVehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllAssetsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllAssetsMetaArgs>
  export interface _AllAssetsMetaArgs {
    filter?: SwapiAssetFilter | null
    orderBy?: SwapiAssetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllFilmsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllFilmsMetaArgs>
  export interface _AllFilmsMetaArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPersonsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPersonsMetaArgs>
  export interface _AllPersonsMetaArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllPlanetsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPlanetsMetaArgs>
  export interface _AllPlanetsMetaArgs {
    filter?: SwapiPlanetFilter | null
    orderBy?: SwapiPlanetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllSpeciesMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSpeciesMetaArgs>
  export interface _AllSpeciesMetaArgs {
    filter?: SwapiSpeciesFilter | null
    orderBy?: SwapiSpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllStarshipsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllStarshipsMetaArgs>
  export interface _AllStarshipsMetaArgs {
    filter?: SwapiStarshipFilter | null
    orderBy?: SwapiStarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AllVehiclesMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllVehiclesMetaArgs>
  export interface _AllVehiclesMetaArgs {
    filter?: SwapiVehicleFilter | null
    orderBy?: SwapiVehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type AssetResolver<
    R = SwapiAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AssetArgs>
  export interface AssetArgs {
    id?: string | null
  }

  export type FilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmArgs>
  export interface FilmArgs {
    id?: string | null
    title?: string | null /** The title of this film */
  }

  export type PersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PersonArgs>
  export interface PersonArgs {
    id?: string | null
    name?: string | null /** The name of this person. */
  }

  export type PlanetResolver<
    R = SwapiPlanet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlanetArgs>
  export interface PlanetArgs {
    id?: string | null
    name?: string | null /** The name of the planet */
  }

  export type SpeciesResolver<
    R = SwapiSpecies | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesArgs>
  export interface SpeciesArgs {
    id?: string | null
    name?: string | null /** The name of this species. */
  }

  export type StarshipResolver<
    R = SwapiStarship | null,
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
    R = SwapiVehicle | null,
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
    R = SwapiNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, NodeArgs>
  export interface NodeArgs {
    id: string /** The ID of an object */
  }
}
/** System model for Assets */
export namespace SwapiAssetResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
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
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    url?: UrlResolver<string, any, Context> /** The Url Of The Asset */
    width?: WidthResolver<
      number | null,
      any,
      Context
    > /** The width of the file in case it is an image */
  }

  export type CreatedAtResolver<
    R = SwapiDateTime,
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
    R = SwapiDateTime,
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
export namespace SwapiFilmResolvers {
  export interface Resolvers<Context = any> {
    characters?: CharactersResolver<SwapiPerson[] | null, any, Context>
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
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
    planets?: PlanetsResolver<SwapiPlanet[] | null, any, Context>
    producers?: ProducersResolver<
      string[] | null,
      any,
      Context
    > /** The names of the producers of this film. */
    releaseDate?: ReleaseDateResolver<
      SwapiDateTime | null,
      any,
      Context
    > /** The ISO 8601 date format of film release at original creator country. */
    species?: SpeciesResolver<SwapiSpecies[] | null, any, Context>
    starships?: StarshipsResolver<SwapiStarship[] | null, any, Context>
    title?: TitleResolver<string, any, Context> /** The title of this film */
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    vehicles?: VehiclesResolver<SwapiVehicle[] | null, any, Context>
    _charactersMeta?: CharactersMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _planetsMeta?: PlanetsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _speciesMeta?: SpeciesMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _starshipsMeta?: StarshipsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _vehiclesMeta?: VehiclesMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
  }

  export type CharactersResolver<
    R = SwapiPerson[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CharactersArgs>
  export interface CharactersArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type CreatedAtResolver<
    R = SwapiDateTime,
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
    R = SwapiPlanet[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlanetsArgs>
  export interface PlanetsArgs {
    filter?: SwapiPlanetFilter | null
    orderBy?: SwapiPlanetOrderBy | null
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
    R = SwapiDateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesResolver<
    R = SwapiSpecies[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesArgs>
  export interface SpeciesArgs {
    filter?: SwapiSpeciesFilter | null
    orderBy?: SwapiSpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsResolver<
    R = SwapiStarship[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsArgs>
  export interface StarshipsArgs {
    filter?: SwapiStarshipFilter | null
    orderBy?: SwapiStarshipOrderBy | null
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesResolver<
    R = SwapiVehicle[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesArgs>
  export interface VehiclesArgs {
    filter?: SwapiVehicleFilter | null
    orderBy?: SwapiVehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type CharactersMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CharactersMetaArgs>
  export interface _CharactersMetaArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PlanetsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlanetsMetaArgs>
  export interface _PlanetsMetaArgs {
    filter?: SwapiPlanetFilter | null
    orderBy?: SwapiPlanetOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type SpeciesMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesMetaArgs>
  export interface _SpeciesMetaArgs {
    filter?: SwapiSpeciesFilter | null
    orderBy?: SwapiSpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsMetaArgs>
  export interface _StarshipsMetaArgs {
    filter?: SwapiStarshipFilter | null
    orderBy?: SwapiStarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type VehiclesMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesMetaArgs>
  export interface _VehiclesMetaArgs {
    filter?: SwapiVehicleFilter | null
    orderBy?: SwapiVehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Person is an individual person or character within the Star Wars universe */
export namespace SwapiPersonResolvers {
  export interface Resolvers<Context = any> {
    birthYear?: BirthYearResolver<
      string | null,
      any,
      Context
    > /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    eyeColor?: EyeColorResolver<
      SwapiPersonEyeColor[] | null,
      any,
      Context
    > /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
    films?: FilmsResolver<SwapiFilm[] | null, any, Context>
    gender?: GenderResolver<
      SwapiPersonGender | null,
      any,
      Context
    > /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
    hairColor?: HairColorResolver<
      SwapiPersonHairColor[] | null,
      any,
      Context
    > /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
    height?: HeightResolver<
      number | null,
      any,
      Context
    > /** The height of the person in centimeters. */
    homeworld?: HomeworldResolver<SwapiPlanet | null, any, Context>
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
      SwapiPersonSkinColor[] | null,
      any,
      Context
    > /** The skin color of this person. */
    species?: SpeciesResolver<SwapiSpecies[] | null, any, Context>
    starships?: StarshipsResolver<SwapiStarship[] | null, any, Context>
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    vehicles?: VehiclesResolver<SwapiVehicle[] | null, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _speciesMeta?: SpeciesMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _starshipsMeta?: StarshipsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _vehiclesMeta?: VehiclesMetaResolver<
      SwapiQueryMeta,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = SwapiPersonEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = SwapiFilm[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type GenderResolver<
    R = SwapiPersonGender | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HairColorResolver<
    R = SwapiPersonHairColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HomeworldResolver<
    R = SwapiPlanet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, HomeworldArgs>
  export interface HomeworldArgs {
    filter?: SwapiPlanetFilter | null
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
    R = SwapiPersonSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesResolver<
    R = SwapiSpecies[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesArgs>
  export interface SpeciesArgs {
    filter?: SwapiSpeciesFilter | null
    orderBy?: SwapiSpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsResolver<
    R = SwapiStarship[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsArgs>
  export interface StarshipsArgs {
    filter?: SwapiStarshipFilter | null
    orderBy?: SwapiStarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type UpdatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesResolver<
    R = SwapiVehicle[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesArgs>
  export interface VehiclesArgs {
    filter?: SwapiVehicleFilter | null
    orderBy?: SwapiVehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type FilmsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type SpeciesMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SpeciesMetaArgs>
  export interface _SpeciesMetaArgs {
    filter?: SwapiSpeciesFilter | null
    orderBy?: SwapiSpeciesOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type StarshipsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarshipsMetaArgs>
  export interface _StarshipsMetaArgs {
    filter?: SwapiStarshipFilter | null
    orderBy?: SwapiStarshipOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type VehiclesMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VehiclesMetaArgs>
  export interface _VehiclesMetaArgs {
    filter?: SwapiVehicleFilter | null
    orderBy?: SwapiVehicleOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export namespace SwapiPlanetResolvers {
  export interface Resolvers<Context = any> {
    climate?: ClimateResolver<
      string[] | null,
      any,
      Context
    > /** The climate of this planet. */
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    diameter?: DiameterResolver<
      number | null,
      any,
      Context
    > /** The diameter of this planet in kilometers. */
    films?: FilmsResolver<SwapiFilm[] | null, any, Context>
    gravity?: GravityResolver<
      string | null,
      any,
      Context
    > /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
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
    residents?: ResidentsResolver<SwapiPerson[] | null, any, Context>
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
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _residentsMeta?: ResidentsMetaResolver<
      SwapiQueryMeta,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DiameterResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = SwapiFilm[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
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
    R = SwapiPerson[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResidentsArgs>
  export interface ResidentsArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type ResidentsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResidentsMetaArgs>
  export interface _ResidentsMetaArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** Meta information about the query. */
export namespace SwapiQueryMetaResolvers {
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
export namespace SwapiSpeciesResolvers {
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
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    designation?: DesignationResolver<
      string | null,
      any,
      Context
    > /** The designation of this species, such as "sentient". */
    eyeColor?: EyeColorResolver<
      SwapiSpeciesEyeColor[] | null,
      any,
      Context
    > /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
    films?: FilmsResolver<SwapiFilm[] | null, any, Context>
    hairColor?: HairColorResolver<
      SwapiSpeciesHairColor[] | null,
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
    people?: PeopleResolver<SwapiPerson[] | null, any, Context>
    skinColor?: SkinColorResolver<
      SwapiSpeciesSkinColor[] | null,
      any,
      Context
    > /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _peopleMeta?: PeopleMetaResolver<
      SwapiQueryMeta,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DesignationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = SwapiSpeciesEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = SwapiFilm[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type HairColorResolver<
    R = SwapiSpeciesHairColor[] | null,
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
    R = SwapiPerson[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PeopleArgs>
  export interface PeopleArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type SkinColorResolver<
    R = SwapiSpeciesSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PeopleMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PeopleMetaArgs>
  export interface _PeopleMetaArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Starship is a single transport craft that has hyperdrive capability. */
export namespace SwapiStarshipResolvers {
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
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    crew?: CrewResolver<
      number | null,
      any,
      Context
    > /** The number of personnel needed to run or pilot this starship. */
    films?: FilmsResolver<SwapiFilm[] | null, any, Context>
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
    > /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
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
    pilots?: PilotsResolver<SwapiPerson[] | null, any, Context>
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _pilotsMeta?: PilotsMetaResolver<
      SwapiQueryMeta,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CrewResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = SwapiFilm[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
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
    R = SwapiPerson[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsArgs>
  export interface PilotsArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type UpdatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PilotsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsMetaArgs>
  export interface _PilotsMetaArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}
/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export namespace SwapiVehicleResolvers {
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
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    crew?: CrewResolver<
      number | null,
      any,
      Context
    > /** The number of personnel needed to run or pilot this vehicle. */
    films?: FilmsResolver<SwapiFilm[] | null, any, Context>
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
    pilots?: PilotsResolver<SwapiPerson[] | null, any, Context>
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    _filmsMeta?: FilmsMetaResolver<
      SwapiQueryMeta,
      any,
      Context
    > /** Meta information about the query. */
    _pilotsMeta?: PilotsMetaResolver<
      SwapiQueryMeta,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CrewResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsResolver<
    R = SwapiFilm[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsArgs>
  export interface FilmsArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
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
    R = SwapiPerson[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsArgs>
  export interface PilotsArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type UpdatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FilmsMetaArgs>
  export interface _FilmsMetaArgs {
    filter?: SwapiFilmFilter | null
    orderBy?: SwapiFilmOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }

  export type PilotsMetaResolver<
    R = SwapiQueryMeta,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PilotsMetaArgs>
  export interface _PilotsMetaArgs {
    filter?: SwapiPersonFilter | null
    orderBy?: SwapiPersonOrderBy | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }
}

export namespace SwapiAddToFilmPlanetsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    planetsPlanet?: PlanetsPlanetResolver<SwapiPlanet | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PlanetsPlanetResolver<
    R = SwapiPlanet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToFilmSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<SwapiSpecies | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = SwapiSpecies | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToFilmStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<
      SwapiStarship | null,
      any,
      Context
    >
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = SwapiStarship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToFilmVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<SwapiVehicle | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = SwapiVehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToPeopleFilmPayloadResolvers {
  export interface Resolvers<Context = any> {
    charactersPerson?: CharactersPersonResolver<
      SwapiPerson | null,
      any,
      Context
    >
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
  }

  export type CharactersPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToPeoplePlanetPayloadResolvers {
  export interface Resolvers<Context = any> {
    residentsPerson?: ResidentsPersonResolver<SwapiPerson | null, any, Context>
    homeworldPlanet?: HomeworldPlanetResolver<SwapiPlanet | null, any, Context>
  }

  export type ResidentsPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HomeworldPlanetResolver<
    R = SwapiPlanet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToPeopleSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    peoplePerson?: PeoplePersonResolver<SwapiPerson | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<SwapiSpecies | null, any, Context>
  }

  export type PeoplePersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = SwapiSpecies | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToPeopleStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<SwapiPerson | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<
      SwapiStarship | null,
      any,
      Context
    >
  }

  export type PilotsPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = SwapiStarship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAddToPeopleVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<SwapiPerson | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<SwapiVehicle | null, any, Context>
  }

  export type PilotsPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = SwapiVehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromFilmPlanetsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    planetsPlanet?: PlanetsPlanetResolver<SwapiPlanet | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PlanetsPlanetResolver<
    R = SwapiPlanet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromFilmSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<SwapiSpecies | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = SwapiSpecies | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromFilmStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<
      SwapiStarship | null,
      any,
      Context
    >
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = SwapiStarship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromFilmVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<SwapiVehicle | null, any, Context>
  }

  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = SwapiVehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromPeopleFilmPayloadResolvers {
  export interface Resolvers<Context = any> {
    charactersPerson?: CharactersPersonResolver<
      SwapiPerson | null,
      any,
      Context
    >
    filmsFilm?: FilmsFilmResolver<SwapiFilm | null, any, Context>
  }

  export type CharactersPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FilmsFilmResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromPeoplePlanetPayloadResolvers {
  export interface Resolvers<Context = any> {
    residentsPerson?: ResidentsPersonResolver<SwapiPerson | null, any, Context>
    homeworldPlanet?: HomeworldPlanetResolver<SwapiPlanet | null, any, Context>
  }

  export type ResidentsPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HomeworldPlanetResolver<
    R = SwapiPlanet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromPeopleSpeciesPayloadResolvers {
  export interface Resolvers<Context = any> {
    peoplePerson?: PeoplePersonResolver<SwapiPerson | null, any, Context>
    speciesSpecies?: SpeciesSpeciesResolver<SwapiSpecies | null, any, Context>
  }

  export type PeoplePersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpeciesSpeciesResolver<
    R = SwapiSpecies | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromPeopleStarshipsPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<SwapiPerson | null, any, Context>
    starshipsStarship?: StarshipsStarshipResolver<
      SwapiStarship | null,
      any,
      Context
    >
  }

  export type PilotsPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StarshipsStarshipResolver<
    R = SwapiStarship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiRemoveFromPeopleVehiclesPayloadResolvers {
  export interface Resolvers<Context = any> {
    pilotsPerson?: PilotsPersonResolver<SwapiPerson | null, any, Context>
    vehiclesVehicle?: VehiclesVehicleResolver<SwapiVehicle | null, any, Context>
  }

  export type PilotsPersonResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VehiclesVehicleResolver<
    R = SwapiVehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiInvokeFunctionPayloadResolvers {
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

export namespace SwapiAssetSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<SwapiModelMutationType, any, Context>
    node?: NodeResolver<SwapiAsset | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SwapiAssetPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = SwapiModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = SwapiAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SwapiAssetPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiAssetPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
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
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
    url?: UrlResolver<string, any, Context> /** The Url Of The Asset */
    width?: WidthResolver<
      number | null,
      any,
      Context
    > /** The width of the file in case it is an image */
  }

  export type CreatedAtResolver<
    R = SwapiDateTime,
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
    R = SwapiDateTime,
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

export namespace SwapiFilmSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<SwapiModelMutationType, any, Context>
    node?: NodeResolver<SwapiFilm | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SwapiFilmPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = SwapiModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = SwapiFilm | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SwapiFilmPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiFilmPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
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
      SwapiDateTime | null,
      any,
      Context
    > /** The ISO 8601 date format of film release at original creator country. */
    title?: TitleResolver<string, any, Context> /** The title of this film */
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
  }

  export type CreatedAtResolver<
    R = SwapiDateTime,
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
    R = SwapiDateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiPersonSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<SwapiModelMutationType, any, Context>
    node?: NodeResolver<SwapiPerson | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SwapiPersonPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = SwapiModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = SwapiPerson | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SwapiPersonPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiPersonPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    birthYear?: BirthYearResolver<
      string | null,
      any,
      Context
    > /** The birth year of the person, using the in-universe standard of BBY or ABY -Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavinis a battle that occurs at the end of Star Wars episode IV: A New Hope. */
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    eyeColor?: EyeColorResolver<
      SwapiPersonEyeColor[] | null,
      any,
      Context
    > /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
    gender?: GenderResolver<
      SwapiPersonGender | null,
      any,
      Context
    > /** The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
    hairColor?: HairColorResolver<
      SwapiPersonHairColor[] | null,
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
      SwapiPersonSkinColor[] | null,
      any,
      Context
    > /** The skin color of this person. */
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
  }

  export type BirthYearResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = SwapiPersonEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type GenderResolver<
    R = SwapiPersonGender | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HairColorResolver<
    R = SwapiPersonHairColor[] | null,
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
    R = SwapiPersonSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiPlanetSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<SwapiModelMutationType, any, Context>
    node?: NodeResolver<SwapiPlanet | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SwapiPlanetPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = SwapiModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = SwapiPlanet | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SwapiPlanetPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiPlanetPreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    climate?: ClimateResolver<
      string[] | null,
      any,
      Context
    > /** The climate of this planet. */
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    diameter?: DiameterResolver<
      number | null,
      any,
      Context
    > /** The diameter of this planet in kilometers. */
    gravity?: GravityResolver<
      string | null,
      any,
      Context
    > /** A number denoting the gravity of this planet, where "1" is normal or 1standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
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
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
  }

  export type ClimateResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CreatedAtResolver<
    R = SwapiDateTime,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiSpeciesSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<SwapiModelMutationType, any, Context>
    node?: NodeResolver<SwapiSpecies | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SwapiSpeciesPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = SwapiModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = SwapiSpecies | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SwapiSpeciesPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiSpeciesPreviousValuesResolvers {
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
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
    designation?: DesignationResolver<
      string | null,
      any,
      Context
    > /** The designation of this species, such as "sentient". */
    eyeColor?: EyeColorResolver<
      SwapiSpeciesEyeColor[] | null,
      any,
      Context
    > /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
    hairColor?: HairColorResolver<
      SwapiSpeciesHairColor[] | null,
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
      SwapiSpeciesSkinColor[] | null,
      any,
      Context
    > /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DesignationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EyeColorResolver<
    R = SwapiSpeciesEyeColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HairColorResolver<
    R = SwapiSpeciesHairColor[] | null,
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
    R = SwapiSpeciesSkinColor[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiStarshipSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<SwapiModelMutationType, any, Context>
    node?: NodeResolver<SwapiStarship | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SwapiStarshipPreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = SwapiModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = SwapiStarship | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SwapiStarshipPreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiStarshipPreviousValuesResolvers {
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
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
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
    > /** The Maximum number of Megalights this starship can travel in a standard hour.A "Megalight" is a standard unit of distance and has never been defined beforewithin the Star Wars universe. */
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
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
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
    R = SwapiDateTime,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiVehicleSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<SwapiModelMutationType, any, Context>
    node?: NodeResolver<SwapiVehicle | null, any, Context>
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>
    previousValues?: PreviousValuesResolver<
      SwapiVehiclePreviousValues | null,
      any,
      Context
    >
  }

  export type MutationResolver<
    R = SwapiModelMutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = SwapiVehicle | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousValuesResolver<
    R = SwapiVehiclePreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SwapiVehiclePreviousValuesResolvers {
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
    createdAt?: CreatedAtResolver<SwapiDateTime, any, Context>
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
    updatedAt?: UpdatedAtResolver<SwapiDateTime, any, Context>
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
    R = SwapiDateTime,
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
    R = SwapiDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SiteTitleQuery {
  export type Variables = {}

  export type Query = {
    __typename?: 'Query'
    site?: Site | null
  }

  export type Site = {
    __typename?: 'Site'
    siteMetadata?: SiteMetadata | null
  }

  export type SiteMetadata = {
    __typename?: 'siteMetadata_2'
    title?: string | null
  }
}

export namespace AnonymousQuery_1 {
  export type Variables = {}

  export type Query = {
    __typename?: 'Query'
    swapi?: Swapi | null
  }

  export type Swapi = {
    __typename?: 'SWAPI'
    Starship?: Starship | null
  }

  export type Starship = {
    __typename?: 'SWAPI_Starship'
    name: string
    hyperdriveRating?: number | null
    pilots?: Pilots[] | null
  }

  export type Pilots = {
    __typename?: 'SWAPI_Person'
    name: string
    height?: number | null
    homeworld?: Homeworld | null
  }

  export type Homeworld = {
    __typename?: 'SWAPI_Planet'
    name: string
  }
}
