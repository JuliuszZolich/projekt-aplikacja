package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBTaskslist {
    public static String get_tasks(String userID) {
        System.out.println("Getting tasklist for user: " + userID);
        ApiFuture<QuerySnapshot> query = db.collection("notes")
                .whereEqualTo("userID", userID)
                .get();
        StringBuilder json = new StringBuilder();
        json.append("{ \"tasklist\": [");
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            return "{\"tasklist\": []}";
        }
        for (DocumentSnapshot document : listaQuery) {
            json.append("{")
                    .append("\"id\": \"").append(document.getId()).append("\",")
                    .append("\"title\": \"").append(document.getString("title")).append("\",")
                    .append("\"content\": \"").append(document.getString("content")).append("\"")
                    .append("\"date\": \"").append(document.getDate("date")).append("\"")
                    .append("\"favourite\": \"").append(document.getBoolean("favourite")).append("\"")
                    .append("}").append(",");
        }
        json.delete(json.length() - 1, json.length());
        json.append("]}");
        return json.toString();
    }

    public static String get_task(String userID, String taskID) {
        DocumentSnapshot document;
        try {
        DocumentReference docRef = db.collection("notes")
                .whereEqualTo("userID", userID)
                .whereEqualTo("taskID", taskID)
                .get()
                .get()
                .getDocuments()
                .get(0).getReference();
        ApiFuture<DocumentSnapshot> future = docRef.get();
        document = future.get();
        } catch (InterruptedException | ExecutionException e) {
            return "{}";
        }
        if (document.exists()) {
            return "{" +
                    "\"id\": \"" + document.getId() + "\"," +
                    "\"title\": \"" + document.getString("title") + "\"," +
                    "\"content\": \"" + document.getString("content") + "\"" +
                    "\"date\": \"" + document.getDate("date") + "\"" +
                    "\"favourite\": \"" + document.getBoolean("favourite")+ "\"" +
                    "}";
        } else {
            return "{}";
        }
    }

    public static String add_task(String userID, String title, String content, String date, boolean favourite) {
        DocumentReference docRef = db.collection("tasklist").document();
        docRef.set(Map.of("userID", userID, "title", title, "content", content, "date", date, "favourite", favourite));
        return docRef.getId();
    }

    public static void delete_task(String userID, String taskID) {
        System.out.println("Deleting task: " + taskID);
        try {
            db.collection("tasklist")
                    .whereEqualTo("userID", userID)
                    .get()
                    .get()
                    .getDocuments()
                    .forEach(document -> {
                        if (document.getId().equals(taskID)) {
                            document.getReference().delete();
                        }
                    });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public static void update_task(String userID, String noteID, String title, String content, String date, boolean favourite) {
        db.collection("notes")
                .document(noteID)
                .update(Map.of("userID", userID,"title", title, "content", content, "date", Date.from(Instant.parse(date)), "favourite", favourite));
    }
}
