import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;

public class OtherHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        System.out.println("404 Request received");
        t.getResponseHeaders().set("Content-Type", "image/jpeg");
        File ciat = new File("src/404.jpg");
        t.sendResponseHeaders(200, ciat.length());
        InputStream is = t.getRequestBody();
        OutputStream os = t.getResponseBody();
        System.out.println(new String(is.readAllBytes()));
        Files.copy(ciat.toPath(), os);
        os.close();
        is.close();
    }
}
