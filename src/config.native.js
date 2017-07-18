const config = {
    development: {
        baseApiUrl: 'http://10.0.2.2:3000/'
    },
    production: {
        //@todo: change with your heroku URL
        baseApiUrl: 'https://dispatcher.herokuapp.com/'
    }
};

export default config;