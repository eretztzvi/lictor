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