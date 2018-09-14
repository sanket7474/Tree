<script type="text/javascript">
//paste this code under the head tag or in a separate js file.
	// Wait for window load
	 $(function(){
        $('img').imgPreload()
    })
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});