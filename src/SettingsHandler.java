import DBUtils.DBSettings;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.concurrent.ExecutionException;
import Utils.Utils;


public class SettingsHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Settings request received");
        String userid = t.getRequestHeaders().get("UserID").get(0);
        String field = t.getRequestHeaders().get("Field").get(0);
        String value = t.getRequestHeaders().get("Value").get(0);
        String response;
        try {
            response = DBSettings.changeField(userid, field, value);
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        t.sendResponseHeaders(200, response.length());
        InputStream is = t.getRequestBody();
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
        is.close();
    }
}
