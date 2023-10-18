import { useState } from "react"
import Display from "./components/Display"
import InputColor from "./components/InputColor"

export default function App() {
  const [bgColor, setBgColor] = useState('')
  const [hexColorValue, setHexColorValue] = useState('')
  const [textDark, setTextDark] = useState('true')
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Display
        bgColor={bgColor}
        textDark={textDark}
        hexColorValue={hexColorValue}
      />
      <InputColor
        bgColor={bgColor}
        setBgColor={setBgColor}
        setHexColorValue={setHexColorValue}
        textDark={textDark}
        setTextDark={setTextDark}
      />
    </div>
  )
}