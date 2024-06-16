import DBUtils.DBTimetable;
import Utils.Utils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import lombok.Data;

import java.io.IOException;
import java.io.OutputStream;

@Data
class Event {
    public String content;
    public String date;
    public boolean notification_read;
}

public class TimetableHandler implements HttpHandler {

    private void get_calendar(HttpExchange t) throws IOException {
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String response = DBTimetable.get_calendar(userID);
        t.sendResponseHeaders(200, response.getBytes().length);
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private void get_event(HttpExchange t) throws IOException {
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String eventID = t.getRequestHeaders().get("Event-ID").get(0);
        String response = DBTimetable.get_event(userID, eventID);
        t.sendResponseHeaders(200, response.getBytes().length);
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private void delete_event(HttpExchange t) throws IOException {
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String eventID = t.getRequestHeaders().get("Event-ID").get(0);
        DBTimetable.delete_event(userID, eventID);
        t.sendResponseHeaders(200, 0);
        t.getResponseBody().close();
    }

    private void add_event(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Event event = mapper.readValue(body, Event.class);
        String id = DBTimetable.add_event(userID, event.content, event.date, event.notification_read);
        t.sendResponseHeaders(200, id.length());
        os.write(id.getBytes());
        os.close();
    }

    private void update_event(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String eventID = t.getRequestHeaders().get("Event-ID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Event event = mapper.readValue(body, Event.class);
        DBTimetable.update_event(userID, eventID, event.content, event.date, event.notification_read);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Timetable request received");
        System.out.println(t.getRequestHeaders().get("UserID").get(0));
        switch (t.getRequestHeaders().get("Action-Type").get(0)) {
            case "GET":
                if (t.getRequestHeaders().get("Event-ID").get(0).equals("all")) get_calendar(t);
                else get_event(t);
                break;
            case "DELETE":
                delete_event(t);
                break;
            case "POST":
                add_event(t);
                break;
            case "UPDATE":
                update_event(t);
                break;
            default:
                System.out.println("Invalid request: " + t.getRequestHeaders().get("Action-Type").get(0));
                t.sendResponseHeaders(400, 0);
                break;
        }
    }
}