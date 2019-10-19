export function formikErrorClass(name, touched = {}, errors = {}) {
	return `form-control ${touched[name] && errors[name] ? 'is-invalid' : ''}`;
}

export function hasFormikError(name, touched = {}, errors = {}) {
	return touched[name] && errors[name];
}