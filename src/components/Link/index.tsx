import {ImFirefox} from "react-icons/im"
import {AiFillChrome} from "react-icons/ai"
import {BsArrowUpRight} from "react-icons/bs"
interface LinkProps {
    name: string;
    link_chrome?: string;
    link_firefox?: string;
    link?: string;
    description?: string;
}

export function Link({ name, link_chrome, link_firefox, link, description }: LinkProps) {
    return (
        <div  title={description}>
            {name} 
            {link_chrome && <a target="_blank" href={link_chrome}><AiFillChrome/></a>}
            {link_firefox && <a target="_blank" href={link_firefox}><ImFirefox/></a>}
            {link && <a target="_blank" href={link}><BsArrowUpRight/></a>}
        </div>
    );
}