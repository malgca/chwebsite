window.onload = function() {

	var setupPage = (function() {
	// create the links that we'll require right up front
	var imgLinks = {
		imgFacebook: document.getElementById("link-facebook"),
		imgTwitter: document.getElementById("link-twitter"),
		imgLinkedIn: document.getElementById("link-linkedin"),
		imgMail: document.getElementById("link-email")
	}

	// initialise the page to make sure we have the events required on startup
	init = function() {
		console.log(imgLinks.imgFacebook);
		var imgEvents = (function(event) {
			activateFacebook = function(event) {
				document.getElementById("link-facebook").src = "images/social/facebook-active.png";
			}

			deactivateFacebook = function(event) {
				document.getElementById("link-facebook").src = "images/social/facebook-inactive.png";
			}

			activateTwitter = function(event) {
				document.getElementById("link-twitter").src = "images/social/twitter-active.png";
			}

			deactivateTwitter = function(event) {
				document.getElementById("link-twitter").src = "images/social/twitter-inactive.png";
			}

			activateLinkedIn = function(event) {
				document.getElementById("link-linkedin").src = "images/social/linkedin-active.png";
			}

			deactivateLinkedIn = function(event) {
				document.getElementById("link-linkedin").src = "images/social/linkedin-inactive.png";
			}

			activateMail = function(event) {
				document.getElementById("link-email").src = "images/social/email-active.png";
			}

			deactivateMail = function(event) {
				document.getElementById("link-email").src = "images/social/email-inactive.png";
			}

			return {
				activateFacebook: activateFacebook,
				deactivateFacebook: deactivateFacebook,
				activateTwitter: activateTwitter,
				deactivateTwitter: deactivateTwitter,
				activateLinkedIn: activateLinkedIn,
				deactivateLinkedIn: deactivateLinkedIn,
				activateMail: activateMail,
				deactivateMail: deactivateMail
			}
		}());

		imgLinks.imgFacebook.addEventListener("mouseenter", imgEvents.activateFacebook, false);
		imgLinks.imgFacebook.addEventListener("mouseout", imgEvents.deactivateFacebook, false);
		imgLinks.imgTwitter.addEventListener("mouseenter", imgEvents.activateTwitter, false);
		imgLinks.imgTwitter.addEventListener("mouseout", imgEvents.deactivateTwitter, false);
		imgLinks.imgLinkedIn.addEventListener("mouseenter", imgEvents.activateLinkedIn, false);
		imgLinks.imgLinkedIn.addEventListener("mouseout", imgEvents.deactivateLinkedIn, false);
		imgLinks.imgMail.addEventListener("mouseenter", imgEvents.activateMail, false);
		imgLinks.imgMail.addEventListener("mouseout", imgEvents.deactivateMail, false);
	}

	// since the page has already been loaded, just call the method asap
	return 0init()

	console.log("This actually happened");
	}());
}