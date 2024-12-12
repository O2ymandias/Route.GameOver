export class UIHelper {
	static showLoader() {
		document.querySelector(".loading").classList.remove("d-none");
	}

	static hideLoader() {
		document.querySelector(".loading").classList.add("d-none");
	}

	static activeLink(target) {
		const links = document.querySelectorAll(".nav-link");
		links.forEach((link) => link.classList.remove("active"));
		target.classList.add("active");
	}

	static showGamesSection() {
		document.querySelector("#games").classList.remove("d-none");
		document.querySelector("#details").classList.add("d-none");
	}

	static showDetailsSection() {
		document.querySelector("#details").classList.remove("d-none");
		document.querySelector("#games").classList.add("d-none");
	}
}
