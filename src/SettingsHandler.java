import DBUtils.DBSettings;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.concurrent.ExecutionException;
import Utils.Utils;
import lombok.Data;

@Data
class Settings{
    private String userid;
    private String field;
    private String value;
}

public class SettingsHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Settings request received");
        ObjectMapper mapper = new ObjectMapper();
        InputStream is = t.getRequestBody();
        Settings settings = mapper.readValue(is, Settings.class);
        String response;
        try {
            response = DBSettings.changeField(settings.getUserid(), settings.getField(), settings.getValue());
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        t.sendResponseHeaders(200, response.length());
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
        is.close();
    }
}
