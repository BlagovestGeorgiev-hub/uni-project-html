$(document).ready(start_app);

function start_app(){
	let playing = false;
	
	$("#play_stop_hans_zimmer").on("click", play_stop_hans_zimmer);
	
    function play_stop_hans_zimmer() {
        let musicButtonElement = $("#change_picture_on_click");
        if (playing) {
            musicButtonElement.attr("src", "pictures/Resized-Muted-VZSMZ.jpg");
            $('#embed_song_on_background')[0].pause();
            playing = false;
        } else {
            musicButtonElement.attr("src", "pictures/Resized-VZSMZ.jpg");
            $('#embed_song_on_background')[0].play();
            playing = true;
        }
    }
	
	setInterval(change_adds_in_a_loop,3000);
	
	function change_adds_in_a_loop(){
		let all_showed_adds = $(".adds_pictures_showed");
		let all_hidden_adds = $(".adds_pictures_hidden");
		let showed_count = all_showed_adds.length;
		let hidden_count = all_hidden_adds.length;
		let current_showed = all_showed_adds[getRandomInt(0, showed_count - 1)];
		let current_hidden = all_hidden_adds[getRandomInt(0, hidden_count - 1)];
		$(current_showed).attr("class","adds_pictures_hidden");
		$(current_showed).fadeOut();
		$(current_hidden).attr("class","adds_pictures_showed");
		$(current_hidden).css("display","block");
	}
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$(".body_button_containers").hover(display_all_buttons, hide_minor_buttons);

	function display_all_buttons(ev){
		let children = $("#" + ev.target.id).parent().children();
		for(let i = 0; i < children.length; i++){
			$(children[i]).show();
		}
	}
	
	function hide_minor_buttons(ev){
		let children = $("#" + ev.target.id).parent().children();
		for(let i = 0; i < children.length; i++){
			if(!$(children[i]).attr("major")){	
				$(children[i]).hide();
			}
		}
	}
	
	$("#company_information_container_partners").on("click", display_partners);
	$("#company_information_container_company_development").on("click", display_company_development);
	
	function hide_previous_displayed(){
		let info_children = $("#main_page_info_container").children();
		for(let i =0; i < info_children.length; i++){
			$(info_children[i]).css("display","none");
		}
	}
	
	function display_partners(){
		hide_previous_displayed();
		
	}
	
	function display_company_development(){
		hide_previous_displayed();
		$("#object_container").css("display","block");
		$("#main_object_displayer").attr("src","other_pages/chart.html");
		
	}
	
	$("#owner_information_container_CV").on("click", display_cv)
	
	function display_cv(){
		hide_previous_displayed();
		$("#main_object_displayer").attr("src","other_pages/cv_homework.html");
		$("#object_container").css("display","block");
	}
	
	$("#assignment_information_assignment_seven").on("click", display_assigment_seven);
	
	let counter = 0;
	function display_assigment_seven(){
		hide_previous_displayed();
		let assignment_urls = [ "other_pages/Изработено от Мария Пендова/game2.html", 
							"other_pages/Изработено от Мария Пендова/game5.html", 
							"other_pages/Изработено от Милен Хинков/sixth_task/sixth_task.html",
							"other_pages/Изработено от Милен Хинков/third_task/Task3.html",
							"other_pages/Изработено от Стоил Димов/1-задача.html",
							"other_pages/Изработено от Стоил Димов/4-задача.html"];
		let url = assignment_urls[counter % 6];
		$("#main_object_displayer").attr("src",url);
		$("#object_container").css("display","block");
		counter++;
	}
	
	$("#assignment_information_assignment_eight").on("click", display_assigment_eight);
	
	function display_assigment_eight(){
		hide_previous_displayed();
		$("#main_object_displayer").attr("src","other_pages/clock_homework.html");
		$("#object_container").css("display","block");
	}
	
	$("#assignment_information_assignment_nine").on("click", display_assigment_nine);
	
	function display_assigment_nine(){
		hide_previous_displayed();
		$("#main_object_displayer").attr("src","other_pages/gameCubes.html");
		$("#object_container").css("display","block");
	}
	
	$("#owner_information_favourite_movie").on("click", display_movie);
	
	function display_movie(){
		hide_previous_displayed();
		$("#main_object_displayer").attr("src","other_pages/favouriteMovie.html");
		$("#object_container").css("display","block");
	}
	
}