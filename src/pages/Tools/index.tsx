import { ComponentLink } from "../../components";
import { tools } from "../../services/tools";
import * as S from "./styles"
interface ITool {
    name: string;
    link_chrome?: string;
    link_firefox?: string;
    link?: string;
    description?: string;
}   

export function Tools() {
    
    
    return (
        <>
        <h1>Ferramentas</h1>
        <S.DivGlobal>
            {tools.map(section => (
                <S.Section>
                    <h2>{section.title}</h2>
                    {section.links.map((link : ITool) => (
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
