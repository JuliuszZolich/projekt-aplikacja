import DBUtils.DBAnnouncements;
import Utils.Utils;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;

public class AnnouncementsHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Announcements request received");
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        String response = DBAnnouncements.getAnnouncements();
        OutputStream os = t.getResponseBody();
        t.sendResponseHeaders(200, response.getBytes().length);
        os.write(response.getBytes());
        os.close();
    }
}
