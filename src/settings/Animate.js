import { bounce, flipInX, rubberBand, swing, bounceInDown, bounceInLeft, bounceInRight, hinge, fadeInUp, fadeInRightBig, tada, shake , slideOutUp, bounceOutLeft} from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import PropTypes from 'prop-types';
import { useEffect } from 'react';


Animate.propTypes = {
    children: PropTypes.node.isRequired,
    anima: PropTypes.oneOf(['bounce', 'flipInX', 'rubberBand', 'swing', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'hinge', 'fadeInUp', 'fadeInRightBig', 'tada', 'shake', 'slideOutUp', 'bounceOutLeft'])
}

export default function Animate({ children, anima }) {

    let styles = {
        animate: {
            width: '100%',
            height: '100%',
            animation: 'x 2s',
            // animationName: Radium.keyframes(bounce, `bounce`)
        }
    }

    switch (anima) {
        case 'flipInX':
            styles.animate.animationName = Radium.keyframes(flipInX, 'flipInX')
            break;
        case 'bounce':
            styles.animate.animationName = Radium.keyframes(bounce, 'bounce')
            break;
        case 'rubberBand':
            styles.animate.animationName = Radium.keyframes(rubberBand, 'rubberBand')
            break;
        case 'swing':
            styles.animate.animationName = Radium.keyframes(swing, 'swing')
            break;
        case 'bounceInDown':
            styles.animate.animationName = Radium.keyframes(bounceInDown, 'bounceInDown')
            break;
        case 'bounceInRight':
            styles.animate.animationName = Radium.keyframes(bounceInRight, 'bounceInRight')
            break;
        case 'bounceOutLeft':
            styles.animate.animationName = Radium.keyframes(bounceOutLeft, 'bounceOutLeft')
            break;
        case 'bounceInLeft':
            styles.animate.animationName = Radium.keyframes(bounceInLeft, 'bounceInLeft')
            break;
        case 'hinge':
            styles.animate.animationName = Radium.keyframes(hinge, 'hinge')
            break;
        case 'fadeInUp':
            styles.animate.animationName = Radium.keyframes(fadeInUp, 'fadeInUp')
            break;
        case 'fadeInRightBig':
            styles.animate.animationName = Radium.keyframes(fadeInRightBig, 'fadeInRightBig')
            break;
        case 'tada':
            styles.animate.animationName = Radium.keyframes(tada, 'tada')
            break;
        case 'shake':
            styles.animate.animationName = Radium.keyframes(shake, 'shake')
            break;
        case 'slideOutUp':
            styles.animate.animationName = Radium.keyframes(slideOutUp, 'slideOutUp')
            break;
    }

    return (
        <StyleRoot>
            <div style={styles.animate}>
                {children}
            </div>
        </StyleRoot>
    )
}
