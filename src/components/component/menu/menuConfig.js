let MENUS = {
		'/': {
			name: '1-1',
			openName: '1'
		},
		'/task/list/valid': {
			name: '2-1',
			openName: '2'
		},
		'/task/monitor': {
			name: '2-2',
			openName: '2'
		},
		'/task/headquarters': {
			name: '2-3',
			openName: '2'
		},
		'/task/rule': {
			name: '2-4',
			openName: '2'
		}
	};
export default {
	initMenu (path) {
		for (let key in MENUS) {
			if(path === key) {
				return {
					openNames: MENUS[key].openName,
					activeName: MENUS[key].name
				};
			}
		}
	}
}
