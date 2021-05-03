
const AppConfig = {
    PROTOCOL: "wss:",
    // TODO: change to localhost if you wish to run it locally
    HOST: "//sopra-group-7-chat-server.herokuapp.com/",
    PORT: ":9000"
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        // TODO: add +  PORT if you want to run it locally
        const socket = new WebSocket(AppConfig.PROTOCOL + AppConfig.HOST);
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;