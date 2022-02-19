function setup()
{
    createCanvas(1000, 600);
    let f = initRealSystem //initRandomSystem //initRandomCentricSystem
    f();
}

function draw()
{
    background(228, 228, 228, 10);

    for(let i = 0; i < bodyNum-1; i++)
    {
        for(let j = i+1; j < bodyNum; j++)
        {
            //Determination of the distance between two bodies along the X axis
            let a = Math.abs(bodyArr[i].x - bodyArr[j].x);

            //Determination of the distance between two bodies along the Y axis
            let b = Math.abs(bodyArr[i].y - bodyArr[j].y);

            //Finding the distance between two bodies
            let distA = dist(bodyArr[i].x, bodyArr[i].y, bodyArr[j].x, bodyArr[j].y);

            /*
                If the distance between two bodies is too small, the speed does not increase
                (too much acceleration of the body, which leads to the departure of the body outside the field)
            */
            if(distA < 3 && distA > -3)
            {
                distA = 10;
            }
            
            //The force of gravitational interaction between two bodies
            let force = G_forse * bodyArr[i].weight * bodyArr[j].weight / Math.pow(distA, 2);

            /*
                Adjusting the direction of gravity force vectors depending on the relative position of the two bodies.
                Both bodies receive the same in value and opposite in direction vectors of gravitational interaction along the X and Y axes.
            */
            if(bodyArr[j].x > bodyArr[i].x)
            {
                a *= -1;
            }
            else{
                a *= 1;
            }
            if(bodyArr[j].y < bodyArr[i].y)
            {
                b *= -1;
            }
            else
            {
                b *= 1;
            }
            
            //Calculation of the acceleration of the first body along the X and Y axes (Newton's second law -> F = ma)
            bodyArr[i].acсX += -a/distA * force / bodyArr[i].weight;
            bodyArr[i].acсY += b/distA * force / bodyArr[i].weight;
            
            //Calculation of the acceleration of the second body along the X and Y axes (Newton's second law -> F = ma)
            bodyArr[j].acсX += a/distA * force / bodyArr[j].weight;
            bodyArr[j].acсY += -b/distA * force / bodyArr[j].weight;
        }
    }
    
    for(let i = 0; i < bodyNum; i++)
    {
        bodyArr[i].move();
        bodyArr[i].display();
        bodyArr[i].acсX = 0;
        bodyArr[i].acсY = 0;
    }

    if(frameCount == 1000)
    {
        frameCount = 0;
        console.log("A")
    }
}

//The point class
class  Body
{   
    /*
        The constructor accepts 6 arguments:
            x - coordinates x
            y - coordinates x
            sX - initial velocity X axis
            sY - initial velocity Y axis
            weight - body weight
            color - Body color
    */
    constructor(x, y, sX, sY, weight, color)
    {     
        this.x = x * kilometersPerPixel * 1000;
        this.y = y * kilometersPerPixel * 1000;    

        this.speedX = sX;
        this.speedY = sY;

        this.weight = weight;

        this.acсX = 0;
        this.acсY = 0;

        this.color = color;
    }
    
    //Method for calculating new coordinates of the object
    move()
    {
        //Calculation of the instantaneous velocity of the body along the Y axis
        this.speedY = this.speedY + this.acсY * t

        //Calculation of the instantaneous velocity of the body along the X axis
        this.speedX = this.speedX + this.acсX * t
        
        //Calculation of new coordinates of the X axis
        this.x = this.x + this.speedX * t + this.acсX * Math.pow(t, 2) / 2

        //Calculation of new coordinates of the X axis
        this.y = this.y + this.speedY * t + this.acсY * Math.pow(t, 2) / 2


            //this.x += this.speedX;
            //this.y += this.speedY;
    }

    //A method for displaying a point
    display()
    {
        noStroke();
        fill(this.color);
        ellipse(this.x / kilometersPerPixel / 1000, this.y / kilometersPerPixel / 1000, bodyRadius * 2, bodyRadius * 2)  
    }
}


function mousePressed()
{
    f();
}
