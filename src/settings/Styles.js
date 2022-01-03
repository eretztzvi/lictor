
export const COLORS = {
    background: {
        main: "#FFF2FE",
        second: '#9c27b0'
    },
    text: {
        main: "black"
    }
}

export const centerAll = ({ display = 'flex', justifyContent = "center", alignItems = "center", flexDirection = "column" }) => {
    return {
        display,
        justifyContent,
        alignItems,
        flexDirection
    }
}

export const MainButtonStyle = () => {
    return {
        width: "200px",
        height: "80px",
        backgroundColor: "black",
        color: "white",
        marginTop: 6,
        borderRadius: 50,
        transition: '.2s',
        '&:hover': {
            backgroundColor: COLORS.background.second
        }
    }
}

export function isInViewport(element) {
    if (element) {

        const rect = element.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

export const SearchInputStyle = () => {
    return {
        width: "100%",
        height: "60px",
        backgroundColor: "transparent",
        color: COLORS.text.main,
        outline: 'none',
        border: `none`,
        direction: 'rtl',
        fontSize: "18px",
    }
}
export const SearchButtonStyle = () => {
    return {
        height: "60px",
        width: 120, 
        // backgroundColor: COLORS.background.second,
        backgroundColor: '#121212',
        color: COLORS.text.main,
        // borderRadius: 50,
        outline: 'none',
        border: `none`,
        color: 'white',
        // padding: '0 40px',
        direction: 'rtl',
        fontSize: "18px",
        cursor: "pointer"
    }
}

export const SearchBoxStyle = () => {
    return {
        width: "50%",
        height: "60px",
        backgroundColor: "white",
        color: COLORS.text.main,
        // borderRadius: 50,
        transition: '.2s',
        outline: 'none',
        // border: `5px solid ${COLORS.background.second}`,
        padding: '0 30px 0 0px',
        direction: 'rtl',
        fontSize: "18px",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    }
}