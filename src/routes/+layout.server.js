import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({request}) {
	if(!request.url.includes('de') && !request?.url.includes('en')) {
		if(request.headers.get('accept-language')?.includes('de')) {
			throw redirect(302, '/de')
		} else {
			throw redirect(302, '/en')
		}
	}
}