const dev = {
    be: {
        HOST: "http://localhost:8000/api/v1"
    }
};

const prod = {
    be: {
        HOST: "INSERT PROD HOSTNAME HERE"
    }
};

const config = process.env.REACT_APP_ENV === 'production'
    ? prod
    : dev;

export default {
    ...config
}