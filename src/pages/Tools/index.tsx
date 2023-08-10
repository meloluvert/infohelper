import { ComponentLink } from "../../components";
import { tools } from "../../services/tools";

export function Tools() {
    return (
        <>
            {tools.map(section => (
                <div>
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
                </div>
            ))}
        </>
    );
}
