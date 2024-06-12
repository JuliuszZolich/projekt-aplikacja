package Utils;

import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;

public class Utils {
    public static boolean handleCORS(HttpExchange t) throws IOException {
        if (t.getRequestHeaders().get("UserID") == null) {
            System.out.println("CORS request received");
            t.getResponseHeaders().add("Access-Control-Allow-Methods", "*");
            t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            t.getResponseHeaders().add("Access-Control-Allow-Headers", "*");
            t.sendResponseHeaders(200, 100);
            t.getResponseBody().close();
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
