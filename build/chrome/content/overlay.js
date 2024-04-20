function log(msg) {
	Zotero.debug("Folder Map: " + msg);
}

async function init() {
	log("Initializing");
	await Zotero.initializationPromise;
	Zotero.FolderMap.foo();

	// Use strings from zotero-folder-map.properties -
	// Fluent is available in Zotero 6 but unreliable and difficult to configure
	let stringBundle = Services.strings.createBundle('chrome://zotero-folder-map/locale/zotero-folder-map.properties');
	Zotero.getMainWindow().document.getElementById('make-it-green-instead')
		.setAttribute('label', stringBundle.GetStringFromName('makeItGreenInstead.label'));
}

window.addEventListener('load', function (event) {
	init();
});
