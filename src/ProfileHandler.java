import DBUtils.DBProfile;
import Utils.Utils;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.util.concurrent.ExecutionException;

public class ProfileHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Profile request received");
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        String userid = t.getRequestHeaders().get("UserID").get(0);
        String response;
        try {
            response = DBProfile.getProfile(userid);
        } catch (ExecutionException | InterruptedException e) {
            System.out.println("Error: " + e);
            response = "{\"error\": \"other\"}";
        }
        OutputStream os = t.getResponseBody();
        t.sendResponseHeaders(200, response.getBytes().length);
        os.write(response.getBytes());
        os.close();
    }
}
