import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class LoginHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        String response = "login";
        System.out.println("Request received");
        t.sendResponseHeaders(200, response.length());
        InputStream is = t.getRequestBody();
        OutputStream os = t.getResponseBody();
        System.out.println(new String(is.readAllBytes()));
        os.write(response.getBytes());
        os.close();
        is.close();
    }
}
