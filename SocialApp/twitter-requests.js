
var cb = new Codebird;
cb.setConsumerKey("UhAWWHnOa8pHU78FgYaHmWEQN", "qaXWnC2aQ3BmABbMYVDiOQ2EXij9SOBauVIx25YLbuKo47srhO");

cb.__call(
    "oauth2_token",
    {},
    function (reply) {
        var bearer_token = reply.access_token;
        console.log(bearer_token)
    }
);