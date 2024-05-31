package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.*;

public class DBNotes {
    public static String get_notes(String userID) {
        System.out.println("Getting notes for user: " + userID);
        ApiFuture<QuerySnapshot> query = db.collection("notes")
                .whereEqualTo("userID", userID)
                .get();
        StringBuilder json = new StringBuilder();
        json.append("{ \"notes\": [");
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            return "{\"notes\": []}";
        }
        for (DocumentSnapshot document : listaQuery) {
            json.append("{")
                    .append("\"id\": \"").append(document.getId()).append("\",")
                    .append("\"title\": \"").append(document.getString("title")).append("\",")
                    .append("\"content\": \"").append(document.getString("content")).append("\"")
                    .append("}").append(",");
        }
        json.delete(json.length() - 1, json.length());
        json.append("]}");
        return json.toString();
    }

    public static String get_note(String userID, String noteID) {
        DocumentSnapshot document;
        try {
            DocumentReference docRef = db.collection("notes")
                    .whereEqualTo("userID", userID)
                    .whereEqualTo("noteID", noteID)
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
                    "}";
        } else {
            return "{}";
        }
    }

    public static String add_note(String userID, String title, String content) {
        DocumentReference docRef = db.collection("notes").document();
        docRef.set(Map.of("title", title, "content", content, "userID", userID));
        return docRef.getId();
    }

    public static void delete_note(String userID, String noteID) {
        System.out.println("Deleting note: " + noteID);
        try {
            db.collection("notes")
                    .whereEqualTo("userID", userID)
                    .get()
                    .get()
                    .getDocuments()
                    .forEach(document -> {
                        if (document.getId().equals(noteID)) {
                            document.getReference().delete();
                        }
                    });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void update_note(String userID, String noteID, String title, String content) {
        db.collection("notes")
                .document(noteID)
                .update(Map.of("userID",userID,"title", title, "content", content));
    }
}
