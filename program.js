
$(function() {
	$(".thumbnail a").on("click",function() {
		var url=$(this).attr("href");
		if(url.indexOf("youtube.com")>-1) {
			var title=$(this).parent().find(".caption").text();
			var pos=url.indexOf("v=");
			var hash=url.substr(pos+2);
			var video='<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/'+hash+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
			$("#player .modal-title").html(title);
			$("#player .modal-body").html(video);
			$("#player").modal("show");
			return false;
		}
	});
});
