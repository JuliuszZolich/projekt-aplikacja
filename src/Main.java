import DBUtils.FirebaseUtils;
import  com.sun.net.httpserver.*;

import java.io.IOException;
import java.net.InetSocketAddress;

public class Main {
    public static void main(String[] args) {
        HttpServer server;
        FirebaseUtils.Connect();
        try {
            server = HttpServer.create(new InetSocketAddress("localhost", 8001), 0);
            server.createContext("/login", new LoginHandler());
            server.createContext("/register", new RegisterHandler());
            server.createContext("/timetable", new TimetableHandler());
            server.createContext("/announcements", new AnnouncementsHandler());
            server.createContext("/tasklist", new TaskslistHandler());
            server.createContext("/notes", new NotesHandler());
            server.createContext("/map", new MapHandler());
            server.createContext("/subjects", new SubjectsHandler());
            server.createContext("/settings", new SettingsHandler());
            server.createContext("/", new OtherHandler());
            server.setExecutor(null); // creates a default executor
            server.start();
            System.out.println("Server started");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}