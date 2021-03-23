const customTransition = `

float random(vec2 co)
{
    highp float a = seed + 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

float noise(vec2 p) {
   
    vec2 i = floor(p);
    vec2 f = fract(p);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    
    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

vec4 transition(vec2 uv) {
    vec4 from = getFromColor(uv);
    vec4 to = getToColor(uv);
    float n = noise(uv * 10.0);

    float p = mix(-0.01, 1.0 + 0.01, progress);
    float lower = p - 0.01;
    float higher = p + 0.01;
    float q = smoothstep(lower, higher, n);

    return mix(
        to,
        from,
        q
      );
}
`

export default customTransition;