var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    milage: 88000,
    started: false,
    fuel: 0,

    start: function()
    {
        if(this.fuel > 0)
        {
            this.started = true;
            document.write(this.make + " " + this.model + " engine starts.<br/>")
        }

        else
        {
            document.write("The car is on empty, fill up before starting! <br/>")
        }
    },

    stop: function()
    {
        this.started = false;
        document.write(this.make + " " + this.model + " engine stops.<br/>")
    },

    drive: function()
    {
        if(this.started)
        {
            if(this.fuel > 0)
            {
                document.write(this.make + " " + this.model + " goes Zoom Zoom!<br/>");
                this.fuel--;
            }

            else
            {
                document.write("Uh oh, out of fuel. <br/>");
                this.stop();
            }
        }

        else
        {
            document.write("You need to start the engine before driving!<br/>")
        }
    },

    addFuel: function(amount)
    {
        this.fuel = this.fuel + amount;
        document.write(this.make + " " + this.model + " gains "+ amount + " fuel. <br/>")
    }
}

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive(); 