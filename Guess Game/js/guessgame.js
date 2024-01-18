var maxAttempts = 5;
        var randomNumber = Math.floor(Math.random()*10)+1;
        var attempts = 0;
        var balance=5;
        console.log(randomNumber);
        function checkGuess() 
        {
            var guessInput = document.querySelector("#guessInput").value;
            var message = document.getElementById("message");
            var image=document.querySelector("#image1");
            image.style.display="block";
            var button1=document.querySelector("#button1");
            var userGuess = parseInt(guessInput, 10);
            if (isNaN(userGuess))
            {
                message.innerHTML="Please enter the number, The number must be 1 to 10";
                image.src="images/boom.png";
            }
            else if (userGuess<=0 || userGuess>10)
            {
                message.innerHTML="The number must be 1 to 10";
                image.src="images/1to10.png";
                const ph="";
                document.querySelector("#guessInput").value=ph;
            }
            else if(/^0+/.test(guessInput))
            {
                message.innerHTML="Avoid Leading zeros";
                image.src="images/leadzero.jpg";
                const ph="";
                document.querySelector("#guessInput").value=ph;
            }
            else if (userGuess>0 && userGuess<=10 && /^\d+$/.test(guessInput))
            {
            attempts++;
            balance--;
            if (userGuess === randomNumber) 
            {
//                guessInput.disabled = true;
                const guessInput = document.querySelector("#guessInput");
                const button1 = document.querySelector("#button1");
                const para1=document.querySelector("#para1");
                const sec3t=document.querySelector("#sec3table");
                sec3t.style.display="none";
                guessInput.style.display="none";
                button1.style.display="none";
                para1.style.display="none";
/*                var div1=document.querySelector("#section3");
                div1.style.background="yellow";
                div1.style.margin="0px";
                div1.style.margin="0px";*/
//                guessInput.parentNode.removeChild(guessInput);
//                button1.parentNode.removeChild(button1);
//                para1.parentNode.removeChild(para1);
//                button1.disabled=true;
                var button2=document.querySelector("#button2");
                button2.style.display="block";
                var divbut=document.querySelector("#butdiv");
                divbut.style.display="block";
                button2.addEventListener("click",function1);
                message.innerHTML="Your Guess is correct, The number is: "+randomNumber+" Your total attempts is: "+attempts;
                image.src="images/correct.png";
                function function1()
                {
                    location.reload();
                }                
 /*               button2.parentNode.insertBefore(button2,image,message);
                button2.style.margin = "20px";
                button2.style.border = "2px solid #3498db";
                button2.style.padding = "10px";
                button2.style.color = "#3498db";
                button2.style.outline = "2px solid #3498db";*/
            } 
            else if (attempts === maxAttempts) 
            {
                message.innerHTML="Your attempt is over, The correct number is: "+randomNumber;
             //   guessInput.disabled = true;
             //   button1.disabled=true;
                image.src="images/wrong.png";
                var button2=document.querySelector("#button2");
                button2.style.display="block";
                button2.addEventListener("click",function1)
                function function1()
                {
                    location.reload();
                }             
                const guessInput = document.querySelector("#guessInput");
                const button1 = document.querySelector("#button1");
                const para1=document.querySelector("#para1");
                const sec3t=document.querySelector("#sec3table");
                sec3t.style.display="none";
                guessInput.style.display="none";
                button1.style.display="none";
                para1.style.display="none";

                var divbut=document.querySelector("#butdiv");
                divbut.style.display="block";   
            } 
            else if (userGuess > randomNumber) 
            {
                message.innerHTML="Your no is too high, "+"Your attempts is "+attempts+", Remaining attempts is: "+balance;
                image.src="images/high.png";
            } 
            else 
            {
                message.innerHTML="Your no is too low, "+"Your attempts is "+attempts+", Remaining attempts is: "+balance;
                image.src="images/low.png";
            }

            guessInput.value = "";
        }
        else
        {
            const ph="";
            document.querySelector("#guessInput").value=ph;
            message.innerHTML="Please enter the valid number, The number must be 1 to 10";
            image.src="images/1 to 10.png";
        }
        }