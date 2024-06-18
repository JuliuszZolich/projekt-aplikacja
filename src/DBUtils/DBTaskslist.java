package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import org.json.JSONArray;
import org.json.JSONObject;

import java.time.Instant;
import java.time.LocalDate;
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
        DocumentReference docRef = db.collection("tasklist")
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
        LocalDate date1 = LocalDate.parse(date);
        docRef.set(Map.of("userid", Integer.parseInt(userID), "title", title, "content", content, "date", new Date(date1.getYear()-1900, date1.getMonthValue()-1, date1.getDayOfMonth()), "favourite", favourite, "completed", false));
        return docRef.getId();
    }

    public static void deleteTask(String userID, String taskID) {
        System.out.println("Deleting task: " + taskID);
        try {
            db.collection("tasklist")
                    .whereEqualTo("userid", Integer.parseInt(userID))
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

    public static void updateField(String userID, String taskID, Boolean status, String field){
        System.out.println("Updating " + field + " for task: " + taskID + " to " + status);
        System.out.println(userID);
        try {
            db.collection("tasklist")
                    .whereEqualTo("userid", Integer.parseInt(userID))
                    .get()
                    .get()
                    .getDocuments()
                    .forEach(document -> {
                        System.out.println(document.getId());
                        if (document.getId().equals(taskID)) {
                            System.out.println(":(");
                            document.getReference().update(field, status);
                        }
                    });
        } catch (Exception ignored) {
        }
    }

    public static void updateTask(String userID, String taskId, String title, String content, String date, boolean favourite) {
        System.out.println("Updating task: " + taskId);
        LocalDate date1 = LocalDate.parse(date);
        db.collection("tasklist")
                .document(taskId)
                .update(Map.of("userID", userID,"title", title, "content", content, "date", new Date(date1.getYear()-1900, date1.getMonthValue()-1, date1.getDayOfMonth()), "favourite", favourite));
    }
}
