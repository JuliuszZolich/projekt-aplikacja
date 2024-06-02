import DBUtils.DBNotes;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import lombok.Data;

import java.io.IOException;
import java.io.OutputStream;

@Data
class Note {
    public String title;
    public String content;
}

public class NotesHandler implements HttpHandler {

    private void get_notes(HttpExchange t) throws IOException {
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String response = DBNotes.get_notes(userID);
        t.sendResponseHeaders(200, response.length());
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private void get_note(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String noteID = t.getRequestHeaders().get("Note-ID").get(0);
        String response = DBNotes.get_note(userID, noteID);
        t.sendResponseHeaders(200, response.length());
        os.write(response.getBytes());
        os.close();
    }

    private void add_note(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Note note = mapper.readValue(body, Note.class);
        String id = DBNotes.add_note(userID, note.title, note.content);
        t.sendResponseHeaders(200, id.length());
        os.write(id.getBytes());
        os.close();
    }

    private void delete_note(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String noteID = t.getRequestHeaders().get("Note-ID").get(0);
        System.out.println(noteID);
        DBNotes.delete_note(userID, noteID);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    private void update_note(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String noteID = t.getRequestHeaders().get("Note-ID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Note note = mapper.readValue(body, Note.class);
        DBNotes.update_note(userID, noteID, note.title, note.content);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Notes request received");
        System.out.println(t.getRequestHeaders().get("UserID").get(0));
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        switch (t.getRequestHeaders().get("Action-Type").get(0)) {
            case "GET":
                if (t.getRequestHeaders().get("Note-ID").get(0).equals("all")) get_notes(t);
                else get_note(t);
                break;
            case "POST":
                add_note(t);
                break;
            case "DELETE":
                delete_note(t);
                break;
            case "UPDATE":
                update_note(t);
                break;
            default:
                System.out.println("Invalid request: " + t.getRequestHeaders().get("Action-Type").get(0));
                t.sendResponseHeaders(400, 0);
                break;
        }
    }
}
