import Utils.Utils;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import DBUtils.DBLogin;

import java.io.IOException;
import java.io.OutputStream;
import java.util.concurrent.ExecutionException;

public class LoginHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Login request received");
        String email = t.getRequestHeaders().get("Email").get(0);
        String password = t.getRequestHeaders().get("Password").get(0);
        String response;
        try {
            response = DBLogin.getLogin(email, password);
        } catch (ExecutionException | InterruptedException e) {
            System.out.println("Error: " + e);
            response = "{\"login\": \"false\", \"error\": \"other\"}";
        }
        OutputStream os = t.getResponseBody();
        t.sendResponseHeaders(200, response.getBytes().length);
        os.write(response.getBytes());
        os.close();
    }
}
