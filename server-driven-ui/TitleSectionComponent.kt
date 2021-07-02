// This annotation builds a Map<SectionComponentType, SectionComponent> that GP uses to render sections
@SectionComponentType(SectionComponentType.TITLE)
class TitleSectionComponent : SectionComponent<TitleSection>() {
 
    // Developers override this method and build UI from TitleSection corresponding to TITLE
    override fun buildSectionUI(section: TitleSection) {

        // Text() Turns our title into a styled TextView
        Text(
            text = section.title,
            style = section.titleStyle
        )

        // Optionally build a subtitle if present in the TitleSection data model
        if (!section.subtitle.isNullOrEmpty() {

            Text(
                text = section.subtitle,
                style = section.subtitleStyle
            )
        }
    }
}