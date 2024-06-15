package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import org.json.JSONArray;
import org.json.JSONObject;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBTaskslist {
    public static String getTasks(String userID) {
        System.out.println("Getting tasklist for user: " + userID);
        ApiFuture<QuerySnapshot> query = db.collection("tasklist")
                .whereEqualTo("userid", Integer.parseInt(userID))
                .get();
        JSONObject json = new JSONObject();
        JSONArray tasklist = new JSONArray();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            return "{\"tasklist\": []}";
        }
        for (DocumentSnapshot document : listaQuery) {
            JSONObject task = new JSONObject();
            task.put("id", document.getId());
            task.put("title", document.getString("title"));
            task.put("content", document.getString("content"));
            task.put("date", document.getDate("date"));
            task.put("favourite", document.getBoolean("favourite"));
            task.put("completed", document.getBoolean("completed"));
            tasklist.put(task);
        }
        json.put("tasklist", tasklist);
        return json.toString();
    }

    public static String getTask(String userID, String taskID) {
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
            return new JSONObject()
                    .put("id", document.getId())
                    .put("title", document.getString("title"))
                    .put("content", document.getString("content"))
                    .put("date", document.getDate("date"))
                    .put("favourite", document.getBoolean("favourite"))
                    .toString();
        } else {
            return "{}";
        }
    }

    public static String addTask(String userID, String title, String content, String date, boolean favourite) {
        DocumentReference docRef = db.collection("tasklist").document();
        docRef.set(Map.of("userID", userID, "title", title, "content", content, "date", date, "favourite", favourite));
        return docRef.getId();
    }

    public static void deleteTask(String userID, String taskID) {
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


    public static void updateTask(String userID, String noteID, String title, String content, String date, boolean favourite) {
        db.collection("notes")
                .document(noteID)
                .update(Map.of("userID", userID,"title", title, "content", content, "date", Date.from(Instant.parse(date)), "favourite", favourite));
    }
}
