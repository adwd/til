export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ButtonSection = {
  __typename?: 'ButtonSection';
  text: Scalars['String'];
  onClickAction?: Maybe<IAction>;
};

export type GpResponse = {
  sections?: Maybe<Array<Maybe<SectionContainer>>>;
  screens?: Maybe<Array<Maybe<ScreenContainer>>>;
};

export type HeroSection = {
  __typename?: 'HeroSection';
  images: Array<Scalars['String']>;
};

export type IAction = {
  name?: Maybe<Scalars['String']>;
};

export type ILayout = {
  name?: Maybe<Scalars['String']>;
};

export type LayoutsPerFormFactor = {
  __typename?: 'LayoutsPerFormFactor';
  compact?: Maybe<ILayout>;
  wide?: Maybe<ILayout>;
};

export type MultipleSectionsPlacement = {
  __typename?: 'MultipleSectionsPlacement';
  sectionDetails: Array<SectionDetail>;
};

export type NavigateToScreen = IAction & {
  __typename?: 'NavigateToScreen';
  name?: Maybe<Scalars['String']>;
  screenId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  rootScreen: RootScreenResponse;
};

export type RootScreenResponse = GpResponse & {
  __typename?: 'RootScreenResponse';
  sections?: Maybe<Array<Maybe<SectionContainer>>>;
  screens?: Maybe<Array<Maybe<ScreenContainer>>>;
};

export type ScreenContainer = {
  __typename?: 'ScreenContainer';
  id?: Maybe<Scalars['String']>;
  layout?: Maybe<LayoutsPerFormFactor>;
};

export type Section = HeroSection | TitleSection | ToolbarSection | ButtonSection;

export type SectionComponentType =
  | 'HERO'
  | 'TITLE'
  | 'TOOLBAR'
  | 'BOOK_BAR_FOOTER';

export type SectionContainer = {
  __typename?: 'SectionContainer';
  id: Scalars['String'];
  sectionComponentType?: Maybe<SectionComponentType>;
  section?: Maybe<Section>;
};

export type SectionDetail = {
  __typename?: 'SectionDetail';
  sectionId?: Maybe<Scalars['String']>;
  topPadding?: Maybe<Scalars['Int']>;
  bottomPadding?: Maybe<Scalars['Int']>;
};

export type SingleColumnLayout = ILayout & {
  __typename?: 'SingleColumnLayout';
  name?: Maybe<Scalars['String']>;
  nav?: Maybe<SingleSectionPlacement>;
  main?: Maybe<MultipleSectionsPlacement>;
  floatingFooter?: Maybe<SingleSectionPlacement>;
};

export type SingleScreenLayout = ILayout & {
  __typename?: 'SingleScreenLayout';
  name?: Maybe<Scalars['String']>;
  main?: Maybe<SingleSectionPlacement>;
};

export type SingleSectionPlacement = {
  __typename?: 'SingleSectionPlacement';
  sectionDetail: SectionDetail;
};

export type TitleSection = {
  __typename?: 'TitleSection';
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  onSubtitleClickAction?: Maybe<IAction>;
};

export type ToolbarSection = {
  __typename?: 'ToolbarSection';
  onClickAction?: Maybe<IAction>;
};

export type RootScreenQueryVariables = Exact<{ [key: string]: never; }>;


export type RootScreenQuery = (
  { __typename?: 'Query' }
  & { rootScreen: (
    { __typename?: 'RootScreenResponse' }
    & { sections?: Maybe<Array<Maybe<(
      { __typename?: 'SectionContainer' }
      & Pick<SectionContainer, 'id' | 'sectionComponentType'>
      & { section?: Maybe<(
        { __typename: 'HeroSection' }
        & Pick<HeroSection, 'images'>
      ) | (
        { __typename: 'TitleSection' }
        & Pick<TitleSection, 'title' | 'subtitle'>
        & { onSubtitleClickAction?: Maybe<(
          { __typename?: 'NavigateToScreen' }
          & ActionFragmentFragment
        )> }
      ) | (
        { __typename: 'ToolbarSection' }
        & { onClickAction?: Maybe<(
          { __typename?: 'NavigateToScreen' }
          & ActionFragmentFragment
        )> }
      ) | (
        { __typename: 'ButtonSection' }
        & Pick<ButtonSection, 'text'>
        & { onClickAction?: Maybe<(
          { __typename?: 'NavigateToScreen' }
          & ActionFragmentFragment
        )> }
      )> }
    )>>>, screens?: Maybe<Array<Maybe<(
      { __typename?: 'ScreenContainer' }
      & Pick<ScreenContainer, 'id'>
      & { layout?: Maybe<(
        { __typename?: 'LayoutsPerFormFactor' }
        & { compact?: Maybe<(
          { __typename: 'SingleColumnLayout' }
          & Pick<SingleColumnLayout, 'name'>
          & { nav?: Maybe<(
            { __typename?: 'SingleSectionPlacement' }
            & { sectionDetail: (
              { __typename?: 'SectionDetail' }
              & SectionDetailFragmentFragment
            ) }
          )>, main?: Maybe<(
            { __typename?: 'MultipleSectionsPlacement' }
            & { sectionDetails: Array<(
              { __typename?: 'SectionDetail' }
              & SectionDetailFragmentFragment
            )> }
          )>, floatingFooter?: Maybe<(
            { __typename?: 'SingleSectionPlacement' }
            & { sectionDetail: (
              { __typename?: 'SectionDetail' }
              & SectionDetailFragmentFragment
            ) }
          )> }
        ) | { __typename: 'SingleScreenLayout' }> }
      )> }
    )>>> }
  ) }
);

export type SectionDetailFragmentFragment = (
  { __typename?: 'SectionDetail' }
  & Pick<SectionDetail, 'sectionId' | 'topPadding' | 'bottomPadding'>
);

export type ActionFragmentFragment = (
  { __typename?: 'NavigateToScreen' }
  & Pick<NavigateToScreen, 'name' | 'screenId'>
);
