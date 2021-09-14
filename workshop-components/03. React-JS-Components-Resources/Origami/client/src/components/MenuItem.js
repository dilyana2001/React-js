const MenuItem = ({
    id,
    onClick,
    isSelected,
    children
}) => {
    let classes = ['listItem'];

    if (isSelected) {
        classes.push('menu-item-selected');
    }

    return (
        <li className={classes.join(' ')} onClick={() => onClick(id)} >
            {children}
        </li>
    );
}

export default MenuItem;