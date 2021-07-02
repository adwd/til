import { RootScreenQuery } from "./generated/graphql";

export const rootScreenQueryData: RootScreenQuery = {
  __typename: "Query",
  rootScreen: {
    __typename: "RootScreenResponse",
    screens: [
      {
        __typename: "ScreenContainer",
        id: "ROOT",
        layout: {
          __typename: "LayoutsPerFormFactor",
          compact: {
            __typename: "SingleColumnLayout",
            name: "SingleColumnLayout",
            nav: {
              __typename: "SingleSectionPlacement",
              sectionDetail: {
                __typename: "SectionDetail",
                sectionId: "toolbar_section",
              },
            },
            main: {
              __typename: "MultipleSectionsPlacement",
              sectionDetails: [
                {
                  __typename: "SectionDetail",
                  sectionId: "hero_section",
                },
                {
                  __typename: "SectionDetail",
                  sectionId: "title_section",
                },
              ],
            },
            floatingFooter: {
              __typename: "SingleSectionPlacement",
              sectionDetail: {
                __typename: "SectionDetail",
                sectionId: "book_bar_footer",
              },
            },
          },
        },
      },
    ],
    sections: [
      {
        __typename: "SectionContainer",
        id: "toolbar_section",
        sectionComponentType: "TOOLBAR",
        section: {
          __typename: "ToolbarSection",
          onClickAction: {
            __typename: "NavigateToScreen",
            name: "foo",
            screenId: "TODO",
          },
        },
      },
      {
        __typename: "SectionContainer",
        id: "hero_section",
        sectionComponentType: "HERO",
        section: {
          __typename: "HeroSection",
          images: ["https://example.com/image.jpg"],
        },
      },
      {
        __typename: "SectionContainer",
        id: "title_section",
        sectionComponentType: "TITLE",
        section: {
          __typename: "TitleSection",
          title: "title",
          subtitle: "Seamist Beach Cottage, Private Beach & Ocean Views",
        },
      },
      {
        __typename: "SectionContainer",
        id: "book_bar_footer",
        sectionComponentType: "BOOK_BAR_FOOTER",
        section: {
          __typename: "ButtonSection",
          text: "$450/night",
        },
      },
    ],
  },
};
