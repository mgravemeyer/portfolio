import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({request}) {
	if(!request?.url.includes('en') && !request?.url.includes('de') && request.headers.get('accept-language')?.includes('de')) {
		throw redirect(302, '/de')
	}
}