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
            nome: {name} 
            {link_chrome && <a href={link_chrome}>Chrome</a>}
            {link_firefox && <a href={link_firefox}>Firefox</a>}
            {link && <a href={link}>Link</a>}
        </div>
    );
}