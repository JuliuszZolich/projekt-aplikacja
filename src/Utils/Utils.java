package Utils;

import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;

public class Utils {
    public static boolean handleCORS(HttpExchange exchange) throws IOException {
        String requestMethod = exchange.getRequestMethod().toUpperCase();

        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers","Access-Control-Allow-Origin, Content-Type, UserID, Access-Control-Request-Headers, Access-Control-Allow-Headers, Message, Type, Task-ID, " +
                "Action-Type, Status, Password, Email, Post-ID, Authorization, Content-Length, Content-Type, Date, Origin, X-Requested-With, Accept, Note-ID, BuildingID, Field, subjectid, Value"
        );

        if (requestMethod.equals("OPTIONS")) {
            System.out.println("CORS preflight request received");
            exchange.sendResponseHeaders(204, -1);
            exchange.close();
            return true;
        }

        return false;
    }
    public static String escapeCommonChars(String s) {
        return s.replace("\n", "\\n")
                .replace("\t", "\\t")
                .replace("\r", "\\r")
                .replace("\b", "\\b")
                .replace("\f", "\\f");
    }
    public static String unescapeCommonChars(String s) {
        return s.replace("\\n", "\n")
                .replace("\\t", "\t")
                .replace("\\r", "\r")
                .replace("\\b", "\b")
                .replace("\\f", "\f");
    }
}
