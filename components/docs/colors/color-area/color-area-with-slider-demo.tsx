"use client"

import { useState } from "react"

import { parseColor } from "@react-stately/color"
import { ColorArea, ColorField, ColorSlider } from "ui"

export default function ColorAreaWithSliderDemo() {
  const [color, setColor] = useState(parseColor("hsl(50, 100%, 50%)"))
  return (
    <div className="flex flex-col gap-y-2 max-w-60">
      <ColorArea
        className="w-full shrink-0"
        value={color}
        onChange={setColor}
        xChannel="saturation"
        yChannel="lightness"
      />
      <ColorSlider
        label="Fill Color"
        className="orientation-horizontal:w-full"
        channel="hue"
        value={color}
        onChange={setColor}
      />

      <ColorField label="Current Color" enableColorPicker={false} value={color.toString("hex")} />
    </div>
  )
}