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
        <li className={classes.join(' ')}>
            <a href="#" onClick={() => onClick(id)} >
                {children}
            </a>
        </li>
    );
}

export default MenuItem;