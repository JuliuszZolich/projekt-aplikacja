package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.*;

public class DBNotes {
    public static String getNotes(String userID) {
        System.out.println("Getting notes for user: " + userID);
        ApiFuture<QuerySnapshot> query = db.collection("notes")
                .whereEqualTo("userid", Integer.parseInt(userID))
                .get();
        StringBuilder json = new StringBuilder();
        json.append("{\"notes\": [");
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
        if(!listaQuery.isEmpty()) json.delete(json.length() - 1, json.length());
        json.append("]}");
        return json.toString();
    }

    public static String getNote(String userID, String noteID) {
        DocumentSnapshot document;
        try {
            DocumentReference docRef = db.collection("notes")
                    .whereEqualTo("userID", Integer.parseInt(userID))
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

    public static String addNote(String userID, String title, String content) {
        DocumentReference docRef = db.collection("notes").document();
        docRef.set(Map.of("title", title, "content", content, "userid", Integer.parseInt(userID)));
        return docRef.getId();
    }

    public static void deleteNote(String userID, String noteID) {
        System.out.println("Deleting note: " + noteID);
        try {
            db.collection("notes")
                    .whereEqualTo("userid", Integer.parseInt(userID))
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

    public static void updateNote(String userID, String noteID, String title, String content) {
        db.collection("notes")
                .document(noteID)
                .update(Map.of("userID",userID,"title", title, "content", content));
    }
}
