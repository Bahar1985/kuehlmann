import * as tools from './tools';

export const getCurrentUrl = () => {
	return window.location.href;
}

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split('/');
	return parts[parts.length - 1];

}

/**
 * REPLACE ALL OCCURANCES IN A STRING:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

export const cleanCharactersToAscii = (text: string) => {
	text = tools.replaceAll(text, 'Ü', 'ue');
	text = tools.replaceAll(text, 'ü', 'ue');
	text = tools.replaceAll(text, 'Ö', 'oe');
	text = tools.replaceAll(text, 'ö', 'oe');
	text = tools.replaceAll(text, 'Ä', 'oe');
	text = tools.replaceAll(text, 'ä', 'oe');
	text = tools.replaceAll(text, 'ß', 'ss');
	text = tools.replaceAll(text, ' ', '');
	return text;
}
