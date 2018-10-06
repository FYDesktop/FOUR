//context menu (right click config)
require('electron-context-menu')({
	prepend: (params, browserWindow) => [{
	cut: 'Configured Cut',
	copy: 'Configured Copy',
	paste: 'Configured Paste',
	save: 'Configured Save Image',
	copyLink: 'Configured Copy Link',
	copyImageAddress: 'Configured Copy Image Address',

		// Only show it when right-clicking images
		visible: params.mediaType === 'image',
		},
	],
	});