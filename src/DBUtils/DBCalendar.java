package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBCalendar {
    public static String get_calendar(String userID) {
        System.out.println("Getting calendar for user: " + userID);
        ApiFuture<QuerySnapshot> query = db.collection("calendar")
                .whereEqualTo("userID", userID)
                .get();
        StringBuilder json = new StringBuilder();
        json.append("{ \"calendar\": [");
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            return "{\"calendar\": []}";
        }
        for (DocumentSnapshot document : listaQuery) {
            json.append("{")
                    .append("\"id\": \"").append(document.getId()).append("\",")
                    .append("\"content\": \"").append(document.getString("content")).append("\",")
                    .append("\"date\": \"").append(document.getDate("date")).append("\",")
                    .append("\"userid\": \"").append(document.getLong("userid")).append("\",")
                    .append("\"notification_read\": \"").append(document.getBoolean("notification_read")).append("\"")
                    .append("}").append(",");
        }
        json.delete(json.length() - 1, json.length());
        json.append("]}");
        return json.toString();
    }

    public static String get_event(String userID, String eventID) {
        System.out.println("Getting event: " + eventID + " for user: " + userID);
        DocumentSnapshot document;
        try {
            DocumentReference docRef = db.collection("calendar")
                    .document(eventID);
            ApiFuture<DocumentSnapshot> future = docRef.get();
            document = future.get();
        } catch (InterruptedException | ExecutionException e) {
            return "{}";
        }
        if (document.exists() && document.getLong("userID").toString().equals(userID)) {
            return "{" +
                    "\"id\": \"" + document.getId() + "\"," +
                    "\"content\": \"" + document.getString("content") + "\"," +
                    "\"date\": \"" + document.getDate("date") + "\"," +
                    "\"userid\": \"" + document.getLong("userid") + "\"," +
                    "\"notification_read\": \"" + document.getBoolean("notification_read") + "\"" +
                    "}";
        } else {
            return "{}";
        }
    }

    public static String add_event(String userID, String content, String date, boolean notification_read) {
        DocumentReference docRef = db.collection("calendar").document();
        docRef.set(Map.of("userID", userID, "content", content, "date", Date.from(Instant.parse(date)), "notification_read", notification_read));
        return docRef.getId();
    }

    public static void delete_event(String userID, String eventID) {
        System.out.println("Deleting event: " + eventID + " for user: " + userID);
        try {
            db.collection("calendar")
                    .document(eventID)
                    .delete();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void update_event(String userID, String eventID, String content, String date, boolean notification_read) {
        db.collection("calendar")
                .document(eventID)
                .update(Map.of("userID", userID,"content", content, "date", Date.from(Instant.parse(date)), "notification_read", notification_read));
    }
}