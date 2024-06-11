import DBUtils.DBNotes;
import Utils.Utils;
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

    private void getNotes(HttpExchange t) throws IOException {
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String response = DBNotes.getNotes(userID);
        t.sendResponseHeaders(200, response.getBytes().length);
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private void getNote(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String noteID = t.getRequestHeaders().get("Note-ID").get(0);
        String response = DBNotes.getNote(userID, noteID);
        t.sendResponseHeaders(200, response.getBytes().length);
        os.write(response.getBytes());
        os.close();
    }

    private void addNote(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Note note = mapper.readValue(body, Note.class);
        String id = DBNotes.addNote(userID, note.title, note.content);
        t.sendResponseHeaders(200, id.length());
        os.write(id.getBytes());
        os.close();
    }

    private void deleteNote(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String noteID = t.getRequestHeaders().get("Note-ID").get(0);
        DBNotes.deleteNote(userID, noteID);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    private void updateNote(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String noteID = t.getRequestHeaders().get("Note-ID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Note note = mapper.readValue(body, Note.class);
        DBNotes.updateNote(userID, noteID, note.title, note.content);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Notes request received");
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        switch (t.getRequestHeaders().get("Action-Type").get(0)) {
            case "GET":
                if (t.getRequestHeaders().get("Note-ID").get(0).equals("all")) getNotes(t);
                else getNote(t);
                break;
            case "POST":
                addNote(t);
                break;
            case "DELETE":
                deleteNote(t);
                break;
            case "UPDATE":
                updateNote(t);
                break;
            default:
                System.out.println("Invalid request: " + t.getRequestHeaders().get("Action-Type").get(0));
                t.sendResponseHeaders(400, 0);
                break;
        }
    }
}
