import HelloWorldComponent, { metadata as helloWorldMetadata } from './writings/hello-world.md';

interface Route {
	route: string;
	component: App.MarkdownComponent;
}

export const writings: Route[] = [
	{
		route: 'hello-world',
		component: {
			default: HelloWorldComponent,
			metadata: helloWorldMetadata
		}
	}
];

export const series: Route[] = [];

const getRoute = (route: string, routeMap: Route[]): Route | undefined => {
	return routeMap.find((r) => r.route === route);
};

export const alwaysGetRoute = (route: string, routeMap: Route[]): Route => {
	return getRoute(route, routeMap) as Route;
};

export const routeExists = (route: string, routeMap: Route[]): boolean => {
	return !!getRoute(route, routeMap);
};
