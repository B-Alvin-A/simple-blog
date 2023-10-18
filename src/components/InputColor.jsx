import colorNames from "colornames"

const InputColor = ({ bgColor, setBgColor, setHexColorValue, textDark, setTextDark }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
        <input
            className="border-2 w-72 border-black p-2 rounded"
            type="text"
            placeholder="Add color name"
            value={bgColor}
            onChange={(e) => {
                setBgColor(e.target.value)
                setHexColorValue(colorNames(e.target.value))
              }
            }
        />
        <button 
          role="button"
          className="border-2 border-black p-2 rounded-lg shadow-lg"
          onClick={() => setTextDark(!textDark)}
        >
          Toggle Text Color
        </button>
    </form>
  )
}

export default InputColor