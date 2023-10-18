const Display = ({ bgColor, textDark, hexColorValue }) => {
    const bgDisplayColor = {
        backgroundColor:`${bgColor}`,
        color: textDark ? '#000' : '#FFF'
    }

    return (
    <div className="border-2 border-black rounded-lg h-96 w-96 flex flex-col justify-center items-center"
        style={bgDisplayColor}
    >
        <p className="">
            {bgColor==='' ? `Empty Value` : `${bgColor}`}
        </p>
        <p className="">
            {hexColorValue===''||hexColorValue===undefined ? null : `${hexColorValue}`}
        </p>
    </div>
    )
}

Display.defaultProps = {
    bgColor: "Empty Color Value"
}

export default Display