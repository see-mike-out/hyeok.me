export const manifest = {
	appDir: "app",
	appPath: "app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/factcheck/factcheck_card.png","images/factcheck/factcheck_factmeter.png","images/factcheck/factcheck_grid.png","images/research_miro.png","images/snucardnewsbot/snucardnewsbot_api.png","images/snucardnewsbot/snucardnewsbot_concept.png","images/snucardnewsbot/snucardnewsbot_io.png","images/snucardnewsbot/snucardnewsbot_ui_1.png","images/snucardnewsbot/snucardnewsbot_ui_2.png","images/snucardnewsbot/snucardnewsbot_ui_3.png","images/snucardnewsbot/snucardnewsbot_ui_4.png","images/utopia/utopia_book.png","images/utopia/utopia_diary.png","images/utopia/utopia_main.png","images/utopia/utopia_monitoring.png","images/utopia/utopia_tutorial.png","images/utopia/utopia_webtoon.png","images/utopia/utopia_webtoon_manager.png","pubs/.DS_Store","pubs/ingame-sexual-harassment-2018.pdf","pubs/map-2019.pdf"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {"start":"app/immutable/entry/start.9013a9ae.js","app":"app/immutable/entry/app.e1cb2b92.js","imports":["app/immutable/entry/start.9013a9ae.js","app/immutable/chunks/index.702c3da6.js","app/immutable/chunks/singletons.697866ed.js","app/immutable/entry/app.e1cb2b92.js","app/immutable/chunks/index.702c3da6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/snu_cardnews",
				pattern: /^\/snu_cardnews\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/snu_factcheck",
				pattern: /^\/snu_factcheck\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/utopia",
				pattern: /^\/utopia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
