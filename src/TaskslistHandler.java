import DBUtils.DBTaskslist;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import lombok.Data;

import java.io.IOException;
import java.io.OutputStream;

@Data
class Task {
    public String title;
    public String content;
    public String date;
    public boolean favourite;
}

public class TaskslistHandler implements HttpHandler {

    private void get_tasks(HttpExchange t) throws IOException {
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String response = DBTaskslist.get_tasks(userID);
        t.sendResponseHeaders(200, response.length());
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private void get_task(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        String response = DBTaskslist.get_task(userID, taskID);
        t.sendResponseHeaders(200, response.length());
        os.write(response.getBytes());
        os.close();
    }

    private void add_task(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Task task = mapper.readValue(body, Task.class);
        String id = DBTaskslist.add_task(userID, task.title, task.content, task.date, task.favourite);
        t.sendResponseHeaders(200, id.length());
        os.write(id.getBytes());
        os.close();
    }

    private void delete_task(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        DBTaskslist.delete_task(userID, taskID);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    private void update_task(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Task task = mapper.readValue(body, Task.class);
        DBTaskslist.update_task(userID, taskID, task.title, task.content, task.date, task.favourite);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    @Override
    public void handle(HttpExchange t) throws IOException {
        if(Utils.handleCORS(t)) return;
        System.out.println("Tasks request received");
        System.out.println(t.getRequestHeaders().get("UserID").get(0));
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        switch (t.getRequestHeaders().get("Action-Type").get(0)) {
            case "GET":
                if (t.getRequestHeaders().get("Task-ID").get(0).equals("all")) get_tasks(t);
                else get_task(t);
                break;
            case "POST":
                add_task(t);
                break;
            case "DELETE":
                delete_task(t);
                break;
            case "UPDATE":
                update_task(t);
                break;
            default:
                System.out.println("Invalid request: " + t.getRequestHeaders().get("Action-Type").get(0));
                t.sendResponseHeaders(400, 0);
                break;
        }
    }
}