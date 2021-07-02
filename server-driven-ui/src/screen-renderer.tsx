import React from "react";
import { ILayout, Section, SingleColumnLayout } from "./generated/graphql";

export const LayoutRenderer = ({
  layout,
}: {
  layout: SingleColumnLayout | ILayout;
}) => {
  if ("__typename" in layout) {
    switch (layout.__typename) {
      case "SingleColumnLayout":
        return (
          <div>
            <div>
              <SectionRenderer section={layout.nav} />
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return null;
};

const SectionRenderer = ({
  section,
}: {
  section: Section | null | undefined;
}) => {
  if (section == null) {
    return null;
  }

  switch (section.__typename) {
    case "HeroSection":
    case "TitleSection":
    case "ToolbarSection":
    case "ButtonSection":
      return <div>{section.__typename}</div>;
    default:
      return null;
  }
};
