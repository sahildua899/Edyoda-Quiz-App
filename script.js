var mainContainer = document.getElementById('main-container');
var questionSection = document.getElementById('question-section');
var mainScore = document.getElementById('score');
let score = 0;
var submitButton = document.querySelector('submit-btn');

var http = new XMLHttpRequest();
http.open ('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz', true);
http.onreadystatechange = function () {
    if(this.readyState === 4) {
        var apiResult = JSON.parse(this.responseText);
            for (i=0; i<apiResult.length; i++ ) {
                var mainForm = document.createElement('form');
                mainForm.classList.add('main-form');
                var questionText = document.createElement('h3');
                questionText.classList.add('question');
                questionText.innerHTML = apiResult[i].question;
                questionSection.appendChild(questionText);
                for (j=0; j<apiResult[i].options.length; j++) {
                    var optionOutput = apiResult[i].options[j];
                    var optionContiner = document.createElement("div");
                    optionContiner.classList.add('option-container');
                    var inputMain = document.createElement("input");
                    inputMain.setAttribute('id', optionOutput + j.toString());
                    inputMain.value = optionOutput;
                    inputMain.type = "radio";
                    inputMain.name = "option" + i.toString();
                    inputMain.classList.add('option');
                    var inputMainID = inputMain.id;
                    optionContiner.appendChild(inputMain);
                    var labelEl = document.createElement("label");
                    labelEl.setAttribute("for", optionOutput + j.toString());
                    labelEl.textContent = optionOutput;
                    labelEl.classList.add('select-option')
                    optionContiner.appendChild(labelEl)
                    var breakEl = document.createElement("br");
                    optionContiner.appendChild(breakEl);
                    hrline = document.createElement("hr");
                    hrline.classList.add('hr-line')
                    mainForm.appendChild(optionContiner);
                    questionSection.appendChild(mainForm);
                    
                }
                mainForm.appendChild(hrline);
            }
            let submitBtn = document.createElement("input");
            submitBtn.type = "submit";
            submitBtn.value = "submit";
            submitBtn.classList.add('submit-btn');
            mainForm.appendChild(submitBtn);
            


            try {
                // 1 Question Answer
                let harry1 = document.getElementById("Harry0");
        let Nagini2 = document.getElementById("Nagini1");
        let Helga3 = document.getElementById("Helga's Diadem2");
        let Riddle4 = document.getElementById("Tom Riddle's Diary3");

        harry1.addEventListener("change", function (event) {
            result1 = event.target.value;
        });
        Nagini2.addEventListener("change", function (event) {
            result1 = event.target.value;
        });
        Helga3.addEventListener("change", function (event) {
            result1 = event.target.value;
        });
        Riddle4.addEventListener("change", function (event) {
            result1 = event.target.value;
        });


        // 2 Question Answer
        let Grawp5 = document.getElementById("Grawp0");
        let Fluffy6 = document.getElementById("Fluffy1");
        let Aragog7 = document.getElementById("Aragog2");
        let Noberta8 = document.getElementById("Noberta3");

        Grawp5.addEventListener("change", function (event) {
            result2 = event.target.value;
        });
        Fluffy6.addEventListener("change", function (event) {
            result2 = event.target.value;
        });
        Aragog7.addEventListener("change", function (event) {
            result2 = event.target.value;
        });
        Noberta8.addEventListener("change", function (event) {
            result2 = event.target.value;
        });

        // 3 Question Answer
        let Potions9 = document.getElementById("Potions0");
        let Charms1 = document.getElementById("Charms1");
        let Defense2 = document.getElementById("Defense Against Dark Arts2");
        let Transfiguration3 = document.getElementById("Transfiguration3");

        Potions9.addEventListener("change", function (event) {
            result3 = event.target.value;
        });
        Charms1.addEventListener("change", function (event) {
            result3 = event.target.value;
        });
        Defense2.addEventListener("change", function (event) {
            result3 = event.target.value;
        });
        Transfiguration3.addEventListener("change", function (event) {
            result3 = event.target.value;
        });

        // 4 Question Answer
        let Gryffindor4 = document.getElementById("Gryffindor0");
        let Slytherin5 = document.getElementById("Slytherin1");
        let Ravenclaw6 = document.getElementById("Ravenclaw2");
        let Hufflepuff7 = document.getElementById("Hufflepuff3");

        Gryffindor4.addEventListener("change", function (event) {
            result4 = event.target.value;
        });
        Slytherin5.addEventListener("change", function (event) {
            result4 = event.target.value;
        });
        Ravenclaw6.addEventListener("change", function (event) {
            result4 = event.target.value;
        });
        Hufflepuff7.addEventListener("change", function (event) {
            result4 = event.target.value;
        });


        // 5 Question Answer
        let Astronomy8 = document.getElementById("Astronomy0");
        let Herbology9 = document.getElementById("Herbology1");
        let Charms10 = document.getElementById("Charms2");
        let Muggle11 = document.getElementById("Muggle Studies3");

        Astronomy8.addEventListener("change", function (event) {
            result5 = event.target.value;
        });
        Herbology9.addEventListener("change", function (event) {
            result5 = event.target.value;
        });
        Charms10.addEventListener("change", function (event) {
            result5 = event.target.value;
        });
        Muggle11.addEventListener("change", function (event) {
            result5 = event.target.value;
        });


                mainForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    var inputs = inputMain
                    let score = 0;
                    
                    if(result1 == "Helga's Diadem") {
                        score+=1;
                    }
                    if(result2 == "Grawp") {
                        score+=1;
                    }
                    if(result3 == "Defense Against Dark Arts") {
                        score+=1;
                    }
                    if(result4 == "Ravenclaw") {
                        score+=1;
                    }
                    if(result5 == "Herbology") {
                        score+=1;
                    }
                        
                    mainScore.textContent = score;
                    
                    
                    
                });
                

            } catch(e) {
                console.log(e);
            }
           
            }
           
        }
         
        
http.send()