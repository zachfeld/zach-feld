"use client";

import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function BackgroundGradient() {
    return (
        <ShaderGradientCanvas
        importedfiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=0&cDistance=3&cPolarAngle=50&cameraZoom=9.1&color1=%23387780&color2=%23DAD2D2&color3=%23D2CCA1&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=10&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=80&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0.4&uDensity=2&uFrequency=0&uSpeed=0.08&uStrength=1.8&uTime=0&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas>
    )
}

