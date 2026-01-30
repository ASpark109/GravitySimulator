let bodyArr = []
let bodyNum;

const bodyRadius = 3;
const startSpeedX = 1;
const startSpeedY = 1;

let kilometersPerPixel;
let G_forse;
let t;

/*
 *  The function that initializes a real system of space bodies with respect to scale,
 *  this system includes the Earth, an artificial satellite in orbit 400 km (International Space Station),
 *  an artificial satellite in geostationary orbit (24 hours rotation) and
 *  an artificial satellite in high elliptical orbit - "Lightning" (peregei - 500 km, apogee - 40000 km)
 *
 *  If desired, you can add new space bodies,
 *  the variable kilometersPerPixel indicates the scale of the kilometer per 1 pixel
*/
function initRealSystem()
{
    bodyNum = 4;
    t = 60;
    kilometersPerPixel = 150;
    G_forse = 6.67408 * Math.pow(10, -11);
    bodyArr[0] = new Body(500, 300, 0, 0, 5.9722 * Math.pow(10, 24), 0)
    bodyArr[1] = new Body(500, 255, 7700, 0, 440000, 0)
    bodyArr[2] = new Body(500, 13, 3070, 0, 3000, 0)
    bodyArr[3] = new Body(234, 300, 0, -1500, 600, 0)
}


/*
 *  A function that generates many bodies, while the real scale is not preserved,
 *  the variable of the gravitational constant can be changed.
*/
function initRandomSystem()
{
    bodyNum = 100;
    kilometersPerPixel = 0.001
    t = 1;
    G_forse = 1;
    for(let i = 0; i < bodyNum; i++)
    {
        bodyArr[i] = new Body(
            random(0, width), // X
            random(0, height),  // Y
            random(-startSpeedX, startSpeedX), // X start speed
            random(-startSpeedY, startSpeedY), // Y start speed
            random(1, 10),    // weight
            random(0, 100),  // fill
        )
    }
}


/*
    A function that generates a centric system of bodies
    In the center of the field is a massive body, 
    around which many bodies of insignificant mass are generated
*/
function initRandomCentricSystem()
{
    bodyNum = 20
    kilometersPerPixel = 0.001
    t = 1;
    G_forse = 1;
    for(let i = 0; i < bodyNum-1; i++)
    {
        bodyArr[i] = new Body(
            width / 2, // X
            height/ 2 - 100,  // Y
            random(startSpeedX), // X start speed
            0, // Y start speed
            random(100, 200),    // weight
            random(10, 80),  // fill
        )
    }

    bodyArr[bodyNum-1] = new Body(width / 2, height/ 2, 0, 0, 10000, 100)
}