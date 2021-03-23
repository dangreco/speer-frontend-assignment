import React, { Component } from "react";
import { Shaders, Node, GLSL } from "gl-react";

const shaders = Shaders.create({
    gradients: {
        frag: GLSL`
  precision highp float;
  varying vec2 uv;
  uniform float time;
  void main() {
    gl_FragColor = vec4(uv.x, uv.y, time, 1.0);
  }` },
    rotate: {
        frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float angle, scale;
uniform sampler2D children;
void main() {
  mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  vec2 p = (uv - vec2(0.5)) * rotation / scale + vec2(0.5);
  gl_FragColor =
    p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0
    ? vec4(0.0)
    : texture2D(children, p);
}`,
    },
        
});



type GradientsProps = {
    time: number
}

const Gradients: React.FC<GradientsProps> = ({ time }) => {
    return (
        <Node
            shader={shaders.rotate}
            uniforms={{
                angle: time * 2 * Math.PI,
                scale: 2.0,
                children: (
                    <Node
                        shader={shaders.gradients}
                        uniforms={{ time: time }}
                    />
                )
            }}
        />

    )
}

export default Gradients;
