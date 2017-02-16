'use strict';

vertx
    .createHttpServer()
    .requestHandler(
        function (req) {
            req.response().end("Hello World!\n");
        }
    )
    .listen(8000);
