const MenuItem = ({
    id,
    onClick,
    children
}) => {
    return (
        <li className="listItem">
            <a href="#" onClick={() => onClick(id)}>
                {children}
            </a>
        </li>
    );
}

export default MenuItem;