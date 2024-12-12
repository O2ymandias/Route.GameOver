import { UI } from "./ui.js";
import { Game } from "./games.js";
import { Details } from "./details.js";
import { UIHelper } from "./uiHelper.js";

async function init() {
	const activeLink = document.querySelector(".nav-link.active");
	const category = activeLink.getAttribute("data-category");
	try {
		const games = await Game.getGamesByCategoryAsync(category);
		UI.displayData(games);
	} catch (error) {
		console.log(error.message);
	}
}

init();

document
	.querySelector("#categoriesLinks")
	.addEventListener("click", async function (event) {
		if (event.target.classList.contains("nav-link")) {
			event.preventDefault();
			UIHelper.activeLink(event.target);
			const category = event.target.getAttribute("data-category");

			try {
				const games = await Game.getGamesByCategoryAsync(category);
				UI.displayData(games);
			} catch (error) {
				console.log(error.message);
			}
		}
	});

document
	.querySelector("#gamesData")
	.addEventListener("click", async function (event) {
		if (event.target.closest(".card")) {
			const id = event.target.closest(".card").getAttribute("data-id");
			try {
				const gameDetails = await Details.getDetailsAsync(id);
				UI.displayDetails(gameDetails);
			} catch (error) {
				console.log(error.message);
			}
		}
	});

document.querySelector("#closeDetails").addEventListener("click", init);

document.addEventListener("keyup", function (event) {
	if (
		event.key === "Escape" &&
		!document.querySelector("#details").classList.contains("d-none")
	)
		init();
});
