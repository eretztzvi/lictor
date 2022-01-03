
const userType = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).type : null;

let ORIGIN;

switch (userType) {
  case "ADMIN":
    ORIGIN = '/admin'
    break;
  case "USER":
    ORIGIN = '/user'
    break;
  default:
    ORIGIN = '/'
    break;
}

// ----------------------------------------------------------------------

export const PATHS = {
  root: ORIGIN,
  general: {
    home: `${ORIGIN}home`,
    about: `${ORIGIN}about`,
  },
  auth: {
    login: `${ORIGIN}login`,
    register: `${ORIGIN}register`,
    reset_password: `${ORIGIN}reset-password`,
    verify: `${ORIGIN}verify`,
  },
};


