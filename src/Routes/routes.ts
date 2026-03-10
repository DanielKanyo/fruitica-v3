export enum RoutePaths {
	Home = "/",
	AboutUs = "/aboutUs",
	ManufacturingDivision = "/manufacturingDivision",
	FoodIngredientsTradingDivision = "/foodIngredientsTradingDivision",
	BeverageSolutionsPlatform = "/beverageSolutionsPlatform",
	CoreIndustrialIngredientsPortfolio = "/coreIndustrialIngredientsPortfolio",
	QualityAndProductSafetyPolicy = "/qualityAndProductSafetyPolicy",
}

export const ROUTES = [
	{ translationKey: "home", link: RoutePaths.Home },
	{ translationKey: "aboutUs", link: RoutePaths.AboutUs },
	{ translationKey: "manufacturingDivision", link: RoutePaths.ManufacturingDivision },
	{ translationKey: "foodIngredientsTradingDivision", link: RoutePaths.FoodIngredientsTradingDivision },
	{ translationKey: "beverageSolutionsPlatform", link: RoutePaths.BeverageSolutionsPlatform },
	{ translationKey: "coreIndustrialIngredientsPortfolio", link: RoutePaths.CoreIndustrialIngredientsPortfolio },
	{ translationKey: "qualityAndProductSafetyPolicy", link: RoutePaths.QualityAndProductSafetyPolicy },
];
