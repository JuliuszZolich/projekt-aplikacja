import DBUtils.DBSubjects;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import Utils.Utils;

public class SubjectsHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange t) throws IOException {
        if(Utils.handleCORS(t)) return;
        System.out.println("Subject request received");
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        String response = DBSubjects.getSubjects(t.getRequestHeaders().get("UserID").get(0), t.getRequestHeaders().get("Field").get(0));
        t.sendResponseHeaders(200, response.getBytes().length);
        InputStream is = t.getRequestBody();
        OutputStream os = t.getResponseBody();
        System.out.println(new String(is.readAllBytes()));
        os.write(response.getBytes());
        os.close();
        is.close();
    }
}