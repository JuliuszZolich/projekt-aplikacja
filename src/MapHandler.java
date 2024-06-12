import DBUtils.DBMap;

import Utils.Utils;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.util.concurrent.ExecutionException;

public class MapHandler implements HttpHandler {

    private void getMap(HttpExchange t) throws IOException, ExecutionException, InterruptedException {
        OutputStream os = t.getResponseBody();
        String BuildingID = t.getRequestHeaders().get("BuildingID").get(0);
        String response = DBMap.getMap(BuildingID);
        t.sendResponseHeaders(200, response.getBytes().length);
        System.out.println(response.getBytes().length);
        os.write(response.getBytes());
        os.close();
    }
    private void getMapList(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String response = DBMap.getMapList();
        t.sendResponseHeaders(200, response.getBytes().length);
        os.write(response.getBytes());
        os.close();
    }

    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Map request received");
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        switch (t.getRequestHeaders().get("Action-Type").get(0)) {
            case "GET":
                try {
                    getMap(t);
                } catch (ExecutionException | InterruptedException e) {
                    throw new RuntimeException(e);
                }
                break;
            case "LIST":
                getMapList(t);
                break;
            default:
                System.out.println("Invalid request: " + t.getRequestHeaders().get("Action-Type").get(0));
                t.sendResponseHeaders(400, 0);
                break;
        }
    }
}
