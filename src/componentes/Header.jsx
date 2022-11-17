import propTypes  from "prop-types";

const Header = ({ bgColor , color}) => {

    return(
        <header style={{ backgroundColor: bgColor,
                        color: color  }}>
            Encabezado
        </header>
    )
}

//Valores por defecto para los props suministrados
Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

//validar las props con ProTypes
Header.propTypes = {
    bgColor: propTypes.string.isRequired,
    color: propTypes.string
}
export default Header;