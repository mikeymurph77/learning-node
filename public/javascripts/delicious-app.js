import '../sass/style.scss';

import { $, $$ } from './modules/bling'; // Allows jQuery like syntax
import autocomplete from './modules/autocomplete';

autocomplete( $('#address'), $('#lat'), $('#lng') );
