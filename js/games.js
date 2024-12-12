import { UIHelper } from "./uiHelper.js";
class GameResponse {
	constructor(id, title, genre, platform, thumbnail, description) {
		this.id = id;
		this.title = title;
		this.genre = genre;
		this.platform = platform;
		this.thumbnail = thumbnail;
		this.description = description;
	}
}

export class Game {
	static async getGamesByCategoryAsync(category) {
		UIHelper.showLoader();

		const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
				"An error occurred while fetching games. Try again later."
			);
		}
		const data = await response.json();
		const games = data.map(
			(game) =>
				new GameResponse(
					game.id,
					game.title,
					game.genre,
					game.platform,
					game.thumbnail,
					game.short_description
				)
		);

		UIHelper.hideLoader();

		return games;
	}
}
