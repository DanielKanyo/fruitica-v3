export enum RoutePaths {
	Home = "/",
	AboutUs = "/aboutUs",
	ManufacturingDivision = "/manufacturingDivision",
	FoodIngredientsTradingDivision = "/foodIngredientsTradingDivision",
	BeverageSolutionsPlatform = "/beverageSolutionsPlatform",
	CoreIndustrialIngredientsPortfolio = "/coreIndustrialIngredientsPortfolio",
}

export const ROUTES = [
	{ label: "Home", link: RoutePaths.Home },
	{ label: "About Us", link: RoutePaths.AboutUs },
	{ label: "Manufacturing Division", link: RoutePaths.ManufacturingDivision },
	{ label: "Food Ingredients Trading Division", link: RoutePaths.FoodIngredientsTradingDivision },
	{ label: "Beverage Solutions Platform", link: RoutePaths.BeverageSolutionsPlatform },
	{ label: "Core Industrial Ingredients Portfolio", link: RoutePaths.CoreIndustrialIngredientsPortfolio },
];
