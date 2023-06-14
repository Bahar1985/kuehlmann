import * as tools from './tools';
import { PageUeberuns} from './pages/PageUeberuns';
import { Page404 } from './pages/Page404';

const pageNames = ['Über uns', 'Bauherrenvertretung', 'Projektleitung','Interims', 'Kundenprojekt', 'Impressum ', 'Kontakt'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case '':
		case 'ueberuns':
			return PageUeberuns();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav class="menu">
		<ul>
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? pageNames[0].toLowerCase() : currentPageIdCode;
	return currentPageIdCode;
}
