var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on('/contacts', window.handleContactsRequest).resolve();
router.on('/contact/:id', window.handleContactRequest).resolve();
router.on('/picture', window.handlePictureRequest).resolve();
