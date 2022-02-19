# GravitySimulator
Calculations are made on the basis of the formula of gravitational interaction of two bodies. Newton's second law is used to calculate the acceleration of a body.

The program has prepared several templates, including a large-scale (real) system:

<ul>
  <li>Earth</li>
  <li>An artificial satellite in low orbit Earth</li>
  <li>A satellite in geostationary orbit</li>
  <li>A satellite in high elliptical orbit).</li>
</ul>

You can select the desired template by commenting on it in the `setup()` function:

`initRealSystem()`
`initRandomSystem()`
`initRandomCentricSystem()`


![sim1](https://user-images.githubusercontent.com/75342698/154808209-4c4f87f5-e155-4091-a6d0-b05c045e0137.png)


Since each cycle of calculations changes the speed and acceleration of the body, you need to pay attention to the time interval between each cycle of calculations, in the program the variable `let t` is responsible for this parameter.
For example, `t = 1`, means that calculations will be performed every second, `t = 0.1` - calculations are performed 10 times per second, the smaller the value of `t`, the more accurate the final coordinates of the bodies.
Therefore, the speed of calculation (respectively, the speed of motion of bodies) depends on the computing power of the computer.
In the future, the ability to write data to a file for further reproduction of the movement of bodies in accelerated mode will be added.

`kilometersPerPixel` is also an important variable.
It indicates how many conditionally kilometers fit in one pixel of the monitor, this variable was entered to adjust the scale.
For example, for the field`width = 1000px`, `height = 600px`:
- For the Earth - artificial satellite system (orbit height 400 km), the optimal value of `kilometersPerPixel = 50 to 100`.
- For the Earth - Moon system, `kilometersPerPixel = 1500`.
- For the Earth-Sun system `kilometersPerPixel = 530000` (This means that 1 pixel contains 530,000 kilometers).



There are also 2 templates that do not follow the scale.
The first randomly generates a field with bodies.
The second builds a centric system, in the center of which is a massive body, around which are generated bodies with much less mass.

![sim2](https://user-images.githubusercontent.com/75342698/154808609-ee5be4de-012b-4564-92d6-7139edec48e8.png)
