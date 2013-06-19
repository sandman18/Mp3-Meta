Template.video.rendered = function () {
	jwplayer('my-video').setup({
		file: 'http://localhost:3000/my.mp3',
		height: '25'
	});
};


Template.youtube.rendered = function () {
    jwplayer('kenpo').setup({
        file: 'http://youtu.be/jhHJGHQlE-0',
        width: '640',
        height: '360'
    });
};

 

function mp3meta() {

 function test1() {
	var file = "http://localhost:3000/my.mp3";

	var out = document.getElementById("output");
	out.value = "Loading file \"" + file + "\"..\r\n";

	function callback() {
		out.value += "Getting all tags\r\n";

		var tags = ID3.getAllTags(file);

		out.value += "Found: \r\n"
			+ "artist: " + tags["artist"] + "\r\n"
			+ "title: " + tags["title"] + "\r\n"
			+ "album: " + tags["album"] + "\r\n"
			+ "year: " + tags["year"] + "\r\n"
			+ "comment: " + tags["comment"] + "\r\n"
			+ "genre: " + tags["genre"] + "\r\n"
			+ "track: " + tags["track"] + "\r\n"
	};

	ID3.loadTags(file, callback);

};

};
