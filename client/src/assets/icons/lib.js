import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { 
    faUserAstronaut,
    faUser,
    faCity,
    faEnvelope,
    faPhone,
    faPen,
    faBars
} from '@fortawesome/free-solid-svg-icons';


library.add(faUserAstronaut);
library.add(faUser);
library.add(faCity);
library.add(faEnvelope);
library.add(faPhone);
library.add(faPen);
library.add(faBars);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()

export default library;