import classNames from "classnames"


const  Panel = ({children, className, ... rest}) => {
    const  finalClassName = classNames(
        'border rounded bg-white w-full p-3 shadow',
        className
        )

    return (
        <div {...rest} className={finalClassName}>{children}</div>
    )
}

export default Panel
