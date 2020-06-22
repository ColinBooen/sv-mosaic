export { default } from "./DataView";
export * from "./DataViewTypes";

import * as localeData from "./DataViewLocales.json";
import { addCoreResourceBundle } from "../../i18n";

addCoreResourceBundle({
	prefix : "DataView",
	bundle : localeData
})