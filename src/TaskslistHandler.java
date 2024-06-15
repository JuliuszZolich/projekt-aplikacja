import DBUtils.DBTaskslist;
import Utils.Utils;
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

    private void getTasks(HttpExchange t) throws IOException {
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String response = DBTaskslist.getTasks(userID);
        t.sendResponseHeaders(200, response.getBytes().length);
        OutputStream os = t.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private void getTask(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        String response = DBTaskslist.getTask(userID, taskID);
        t.sendResponseHeaders(200, response.getBytes().length);
        os.write(response.getBytes());
        os.close();
    }

    private void addTask(HttpExchange t) throws IOException {
        System.out.println("Adding task");
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Task task = mapper.readValue(body, Task.class);
        String id = DBTaskslist.addTask(userID, task.title, task.content, task.date, task.favourite);
        t.sendResponseHeaders(200, id.getBytes().length);
        os.write(id.getBytes());
        os.close();
    }

    private void deleteTask(HttpExchange t) throws IOException {
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        DBTaskslist.deleteTask(userID, taskID);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    private void updateTask(HttpExchange t) throws IOException {
        System.out.println("Updating task");
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        ObjectMapper mapper = new ObjectMapper();
        String body = new String(t.getRequestBody().readAllBytes());
        Task task = mapper.readValue(body, Task.class);
        DBTaskslist.updateTask(userID, taskID, task.title, task.content, task.date, task.favourite);
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    private void updateFav(HttpExchange t) throws IOException {
        System.out.println("Updating favourite");
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        Boolean fav = Boolean.parseBoolean(t.getRequestHeaders().get("Status").get(0));
        DBTaskslist.updateField(userID, taskID, fav, "favourite");
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    private void updateCompletion(HttpExchange t) throws IOException {
        System.out.println("Updating completion");
        OutputStream os = t.getResponseBody();
        String userID = t.getRequestHeaders().get("UserID").get(0);
        String taskID = t.getRequestHeaders().get("Task-ID").get(0);
        Boolean status = Boolean.parseBoolean(t.getRequestHeaders().get("Status").get(0));
        DBTaskslist.updateField(userID, taskID, status, "completed");
        t.sendResponseHeaders(200, 0);
        os.close();
    }

    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Tasks request received");
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        switch (t.getRequestHeaders().get("Action-Type").get(0)) {
            case "GET":
                if (t.getRequestHeaders().get("Task-ID").get(0).equals("all")) getTasks(t);
                else getTask(t);
                break;
            case "POST":
                addTask(t);
                break;
            case "DELETE":
                deleteTask(t);
                break;
            case "UPDATE":
                String updateType = t.getRequestHeaders().get("Update-Type").get(0);
                if (updateType.equals("favourite")) updateFav(t);
                else if (updateType.equals("completion")) updateCompletion(t);
                else updateTask(t);
                break;
            default:
                System.out.println("Invalid request: " + t.getRequestHeaders().get("Action-Type").get(0));
                t.sendResponseHeaders(400, 0);
                break;
        }
    }
}