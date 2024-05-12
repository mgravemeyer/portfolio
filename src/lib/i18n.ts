import { createI18n } from "@inlang/paraglide-sveltekit"
import * as runtime from "$lib/paraglide/runtime.js"
import type { I18nUserConfig } from '@inlang/paraglide-sveltekit/dist/runtime/adapter';

const config: I18nUserConfig = {
	prefixDefaultLanguage: 'always'
}

export const i18n = createI18n(runtime, config);