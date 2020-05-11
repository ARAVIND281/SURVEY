class Form {
    constructor(){
       }
    display(){
        var title = createElement('h2');
        title.html("SURVEY");
        title.position(130,0);
        var input = createInput("NAME");
        input.position(130,160);
        var button = createButton('PLAY');
        button.position(250,200);
        button.mousePressed(function () {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.updateName(name);
            player.updateCount(playerCount);
            var question1 = createElement('h3');
            question1.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor");
            question1.position(130,160);
            var input1 = createInput("YES OR NO");
            input1.position(130,230);
            var button1 = createButton('SUBMET');
            button1.position(250,255);
            button1.mousePressed(function () {
                question1.hide();
                input1.hide();
                button1.hide();
                var question2 = createElement('h3');
                question2.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poorWould you be willing to contribute a small amount every month for such a program?");
                question2.position(130,160);
                var input2 = createInput("YES OR NO");
                input2.position(130,230);
                var button2 = createButton('SUBMET');
                button2.position(250,255);
                button2.mousePressed(function () {
                question2.hide();
                input2.hide();
                button2.hide();
                var question3 = createElement('h3');
                question3.html("How much per month would you be willing to pay?");
                question3.position(130,160);
                var input3 = createInput("100,500,1000 OR MORE");
                input3.position(130,190);
                var button3 = createButton('SUBMET');
                button3.position(250,230);
                var greeting = createElement('h3');
                button3.mousePressed(function () {
                    question3.hide();
                    input3.hide();
                    button3.hide();
                    greeting.html("THANK YOU YOUR SURVEY");
                    greeting.position(130,160);
           })
       })
       })
       })
    }   
}

