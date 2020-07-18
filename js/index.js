let current;
function playAudio(type) {
	const audios = {
		"padrao": `./audio/agua-coca-latao-pra-gringo-e-mais-caro.mp3`,
		"ratinho": `./audio/agua-coca-latao-versao-ratinho-negao-da-bl.mp3`,
		"loli": `./audio/loli.mp3`,
		"japanese": `./audio/japones.mp3`,
		"english": `./audio/negao-da-bl-em-ingles.mp3`,
		"russian": `./audio/savetweetvid_zwidN7WQvX696RY7.mp3`
	};
	const audio = new Audio();
	audio.src = audios[type];
	if (current) { 
		current.pause();
	}
	current = audio;
	current.play();
}