import { ComponentLink } from "../../components";
import { tools } from "../../services/tools";
import * as S from "./styles"

export function Tools() {
    return (
        <>
        <h1>Ferramentas</h1>
        <S.DivGlobal>
            {tools.map(section => (
                <S.Section>
                    <h2>{section.title}</h2>
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
        </>
    );
}
