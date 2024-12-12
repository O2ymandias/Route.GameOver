import { UIHelper } from "./uiHelper.js";
class DetailsResponse {
	constructor(title, genre, platform, thumbnail, description, gameUrl, status) {
		this.title = title;
		this.genre = genre;
		this.platform = platform;
		this.thumbnail = thumbnail;
		this.description = description;
		this.gameUrl = gameUrl;
		this.status = status;
	}
}

export class Details {
	static async getDetailsAsync(id) {
		UIHelper.showLoader();

		const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;

		const options = {
			method: "GET",
			headers: {
				"x-rapidapi-key": "97b77a7579msh166ca5d78e05a9bp1e5991jsnaa41ee44375b",
				"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
			},
		};

		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error(
				"An error occurred while fetching details. Try again later."
			);
		}

		const result = await response.json();

		UIHelper.hideLoader();

		return new DetailsResponse(
			result.title,
			result.genre,
			result.platform,
			result.thumbnail,
			result.description,
			result.game_url,
			result.status
		);
	}
}
