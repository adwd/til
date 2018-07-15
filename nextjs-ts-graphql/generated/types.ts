

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPosts
// ====================================================

export interface allPosts_allPosts {
  __typename: "Post";
  id: string;
  title: string;
  votes: number | null;
  url: string;
  createdAt: any | null;
}

export interface allPosts__allPostsMeta {
  __typename: "_QueryMeta";
  count: number;
}

export interface allPosts {
  allPosts: allPosts_allPosts[];
  _allPostsMeta: allPosts__allPostsMeta;
}

export interface allPostsVariables {
  first: number;
  skip: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================