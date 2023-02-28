import PropTypes from 'prop-types';
import className from 'classnames'


const Button = ({children, primary, secondary, success, warning, danger, rounded, outline}) => {
    const classes = className('px-3 py-1.5 border text-white', {
        'border-blue-600  bg-blue-500': primary,
        'border-gray-900 bg-gray-900': secondary,
        'border-green-600 bg-green-500': success,
        'border-yellow-600 bg-yellow-500': warning,
        'border-red-600 bg-red-500': danger,
        'rounded-full': rounded,
        'bg-white text-blue-500': outline && primary,
        'bg-white text-yellow-500': outline && warning,
        'bg-white text-green-500': outline && success,
        'bg-white text-gray-500': outline && secondary,
        'bg-white text-red-500': outline && danger,
    })
    return (
        <button className={classes}>{children}</button>
    )
}

Button.propTypes = {
     checkValueGaven : ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
                    + Number(!!secondary)
                    + Number(!!success)
                    + Number(!!warning)
                    + Number(!!danger)

        if (count > 1) {
            return new Error("sorry, but you can only choose one type of buttons")
        }

        return;
    }
}

export default Button