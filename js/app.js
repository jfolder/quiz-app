$(document).ready(function() {

/**********************************************
Global Variables
***********************************************/
	var i = 0;
	var numberCorrect = 0;

/**********************************************
Question Constructor
***********************************************/
	function Question(question, choice1, choice2, choice3, choice4, answer) {
		this.question = question;
		this.choice1  = choice1;
		this.choice2  = choice2;
		this.choice3  = choice3;
		this.choice4  = choice4;
		this.answer   = answer;
		this.getAnswer = function() {
			return answer;
		};
	}


/**********************************************
Health Quiz Question Builder
***********************************************/
	var healthQuiz = new Array();
	healthQuiz[0] = new Question(
		"What are one of the benefits of blueberries?","A) Lowers blood pressure","B) Builds muscle","C) Helps skin tone","D) Healthy hair","a");
	healthQuiz[1] = new Question("Which of these is considered top-notch for brain health?", "A) Fish", "B) Milk", "C) Potatoes", "D) Beef", "a");
	healthQuiz[2] = new Question("Which of these is considered best for joint health?", "A) Vitamin B", "B) Glucosamine", "C) Honey", "D) Ginger", "b");
	healthQuiz[3] = new Question("What is a severe deficiency in Vitamin C called?", "A) Tourettes", "B) GERD", "C) Scurvy", "D) Gout", "c");
	healthQuiz[4] = new Question("Which of these is considered a good liquid base when jucing?", "A) Celery", "B) Kale", "C) Swiss Chard", "D) Ginger", "a");
	healthQuiz[5] = new Question("Which fruit is usually considered the most powerful?", "A) Cantaloupe", "B) Plums", "C) Bananas", "D) Blueberries", "d");
	healthQuiz[6] = new Question("Given the current options, which vegetable is the most powerful?", "A) Cucumbers", "B) Tomatoes", "C) Carrots", "D) Broccoli", "d");
	healthQuiz[7] = new Question("Which tea will increase your levels of EGCG?", "A) Green Tea", "B) Rooibos Tea", "C) Moringa Tea", "D) Pau D' Arco Tea", "a");
	healthQuiz[8] = new Question("Which one is a good source of Vitamin D?", "A) Exercise", "B) The Sun", "C) Oranges", "D) Hummus", "b");
	healthQuiz[9] = new Question("About how much does intestinal bacteria weigh?", "A) 1-2 Pounds", "B) Roughly 16 ounces", "C) 5-7 Pounds", "D) Has no weight", "c");



/**********************************************
Pre-populate Fields (maybe have a pre-populate fields function)
***********************************************/
	if(i == 0) {
		$("#question-number>span").text((i+1));
		$("#status-box>span").text(i);
		$("#question-container").empty().text(healthQuiz[i].question);
		$("li#a").empty().text(healthQuiz[i].choice1);
		$("li#b").empty().text(healthQuiz[i].choice2);
		$("li#c").empty().text(healthQuiz[i].choice3);
		$("li#d").empty().text(healthQuiz[i].choice4);
	}




/**********************************************
Listen For Answer
***********************************************/
	$(this).on("click", "#choices > li", function() {
		if(i >= 0 && i <= 9) {
			if($(this).attr("id") == healthQuiz[i].answer) {
				$("#pop-up-bg").css({"display":"block"});
				$("#pop-up-correct").css({"display":"block"});
				i++;
				numberCorrect += 1;
				if(i == 10) {
					$("#pop-up-bg").css({"display":"block"});
					$("#pop-up-end").css({"display":"block"});
					$("#result>span").text((numberCorrect * 10) + "%");
					return;
				}
				$("#question-number>span").text((i+1));
				$("#status-box>span").text(numberCorrect);
				$("#question-container").empty().text(healthQuiz[i].question);
				$("li#a").empty().text(healthQuiz[i].choice1);
				$("li#b").empty().text(healthQuiz[i].choice2);
				$("li#c").empty().text(healthQuiz[i].choice3);
				$("li#d").empty().text(healthQuiz[i].choice4);

			}
			else {
				$("#pop-up-bg").css({"display":"block"});
				$("#pop-up-incorrect").css({"display":"block"});
				i++;
				if(i == 10) {
					$("#pop-up-bg").css({"display":"block"});
					$("#pop-up-end").css({"display":"block"});
					$("#result>span").text((numberCorrect * 10) + "%");
					return;
				}
				$("#question-number>span").text((i+1));
				$("#question-container").empty().text(healthQuiz[i].question);
				$("li#a").empty().text(healthQuiz[i].choice1);
				$("li#b").empty().text(healthQuiz[i].choice2);
				$("li#c").empty().text(healthQuiz[i].choice3);
				$("li#d").empty().text(healthQuiz[i].choice4);
			}
	    }
	});


/**********************************************
Next Button
***********************************************/
	$(this).on("click", "#next-button", function() {
		$(this).closest("#pop-up-bg").css({"display":"none"});
		$("#pop-up-correct").css({"display":"none"});
		$("#pop-up-incorrect").css({"display":"none"});
		$("#pop-up-end").css({"display":"none"});
	});


/**********************************************
Start Over.
***********************************************/
    $(this).on("click", "#start-over", function() {
    	i = 0;
    	numberCorrect = 0;
    	$("#question-number>span").text((i+1));
    	$("#status-box>span").text(numberCorrect);
    	$("#question-container").empty().text(healthQuiz[i].question);
		$("li#a").empty().text(healthQuiz[i].choice1);
		$("li#b").empty().text(healthQuiz[i].choice2);
		$("li#c").empty().text(healthQuiz[i].choice3);
		$("li#d").empty().text(healthQuiz[i].choice4);
    });

    $(this).on("click", "#restartBtn", function() {
    	$(this).closest("#pop-up-bg").css({"display":"none"});
		$("#pop-up-correct").css({"display":"none"});
		$("#pop-up-incorrect").css({"display":"none"});
		$("#pop-up-end").css({"display":"none"});

		i = 0;
    	numberCorrect = 0;
    	$("#question-number>span").text((i+1));
    	$("#status-box>span").text(numberCorrect);
    	$("#question-container").empty().text(healthQuiz[i].question);
		$("li#a").empty().text(healthQuiz[i].choice1);
		$("li#b").empty().text(healthQuiz[i].choice2);
		$("li#c").empty().text(healthQuiz[i].choice3);
		$("li#d").empty().text(healthQuiz[i].choice4);
    });

});