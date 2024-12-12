import { UIHelper } from "./uiHelper.js";
export class UI {
	static displayData(data) {
		const gamesData = document.getElementById("gamesData");
		let html = "";
		for (let i = 0; i < data.length; i++) {
			const game = data[i];
			html += `
			    <div class="col-sm-6 col-md-4 col-lg-3">
					<div class="h-100 card bg-transparent" data-id="${game.id}">
						<figure class="card-body mb-0">
							<img class="card-img-top" src="${game.thumbnail}" alt="">
							<figcaption class="mt-3">
								<div class="mb-2 d-flex justify-content-between align-items-center">
									<h3 class="fs-5 m-0">
										${game.title}
									</h3>
									<span class="badge text-bg-primary">
										Free
									</span>
								</div>
								<p class="text-center small text-light opacity-50 mb-0">
									${game.description.split(" ").slice(0, 15).join(" ")} . . .
								</p>
							</figcaption>
						</figure>
						<div class="card-footer d-flex justify-content-between align-items-center">
							<span class="badge text-bg-secondary">
								${game.genre}
							</span>
							<span class="badge text-bg-secondary">
								${game.platform}
							</span>
						</div>
					</div>
                </div>
			`;
		}

		gamesData.innerHTML = html;

		UIHelper.showGamesSection();
	}

	static displayDetails(data) {
		const gameDetails = document.getElementById("gameDetails");
		let html = `
		    <div class="col-md-4">
                <img class="w-100" src="${data.thumbnail}" alt="game image">
            </div>

            <div class="col-md-8">
                <div class="text-light">
					<div class="h3">
						Title: ${data.title}
					</div>

					<div class="d-flex align-items-center column-gap-2 mb-3">
						Category:
						<span class="badge text-bg-info">
							${data.genre}
						</span>
					</div>

					<div class="d-flex align-items-center column-gap-2 mb-3">
						Platform:
						<span class="badge text-bg-info">
							${data.platform}
						</span>
					</div>

					<div class="d-flex align-items-center column-gap-2 mb-3">
						Status:
						<span class="badge text-bg-info">
							${data.status}
						</span>
					</div>

					<p>
						${data.description}
					</p>

					<a class="btn btn-outline-warning" href="${data.gameUrl}" target="_blank">
						Show Game
					</a>
                </div>

            </div>
		`;

		gameDetails.innerHTML = html;

		UIHelper.showDetailsSection();
	}
}
