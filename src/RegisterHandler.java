import DBUtils.DBRegister;
import Utils.User;
import Utils.Utils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Objects;
import java.util.concurrent.ExecutionException;

public class RegisterHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        if(Utils.handleCORS(t)) return;
        InputStream is = t.getRequestBody();
        OutputStream os = t.getResponseBody();
        if(Objects.equals(t.getRequestMethod(), "GET")){
            String response = "{\"email\": \"false\"}";
            /*try {
                response = DBRegister.checkEmail(t.getRequestHeaders().get("Email").get(0));
            } catch (ExecutionException | InterruptedException e) {
                throw new RuntimeException(e);
            }*/
            t.sendResponseHeaders(200, response.getBytes().length);
            os.write(response.getBytes());
        } else if(Objects.equals(t.getRequestMethod(), "POST")){
            t.sendResponseHeaders(200, 0);
            System.out.println("Register request received");
            ObjectMapper mapper = new ObjectMapper();
            String body = new String(is.readAllBytes());
            User user = mapper.readValue(body, User.class);
            DBRegister.addUser(user);
        } else {
            System.out.println("Unknown request method");
            t.sendResponseHeaders(405, 0);
        }
        os.close();
        is.close();
    }
}
