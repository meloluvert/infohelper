import { ComponentLink } from "../../components";
import { tools } from "../../services/tools";
import * as S from "./styles"

export function Tools() {
    return (
        <S.DivGlobal>
            {tools.map(section => (
                <S.Section>
                    <h3>{section.title}</h3>
                    {section.links.map(link => (
                        <ComponentLink
                            key={link.name}
                            name={link.name}
                            link_chrome={link.link_chrome}
                            link_firefox={link.link_firefox}
                            link={link.link}
                            description={link.description}
                        />
                    ))}
                </S.Section>
            ))}
        </S.DivGlobal>
    );
}
