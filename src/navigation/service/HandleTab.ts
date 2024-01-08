import { Route, getFocusedRouteNameFromRoute } from "@react-navigation/native"

export const tabBarVisible= (item:string,array:string[]) => {
	const visible= array.includes(item)==true? 'none':'flex';
	return visible;
}  

export const getTabName= (route: Pick<Route<string>, 'key' | 'name'>) => {
	const routeName = getFocusedRouteNameFromRoute(route) || 'HOME';
	return routeName;
}
