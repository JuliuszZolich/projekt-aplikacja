package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

import org.json.JSONArray;
import org.json.JSONObject;

import static Utils.Utils.escapeCommonChars;
import static Utils.Utils.unescapeCommonChars;

public class DBNotes {
    public static String getNotes(String userID) {
        System.out.println("Getting notes for user: " + userID);
        ApiFuture<QuerySnapshot> query = db.collection("notes")
                .whereEqualTo("userid", Integer.parseInt(userID))
                .get();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            return "{\"notes\": []}";
        }
        JSONObject json = new JSONObject();
        JSONArray notes = new JSONArray();
        for (DocumentSnapshot document : listaQuery) {
            JSONObject note = new JSONObject();
            note.put("id", document.getId());
            note.put("title", unescapeCommonChars(document.getString("title")));
            note.put("content", unescapeCommonChars(document.getString("content")));
            notes.put(note);
        }
        json.put("notes", notes);
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
            return new JSONObject()
                    .put("id", document.getId())
                    .put("title", document.getString("title"))
                    .put("content", document.getString("content"))
                    .toString();
        } else {
            return "{}";
        }
    }

    public static String addNote(String userID, String title, String content) {
        content = content.replace("\n", "\\n");
        System.out.println("Adding note: " + title + " " + content + " " + userID);
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
                .update(Map.of("userid",Integer.parseInt(userID),"title", escapeCommonChars(title), "content", escapeCommonChars(content)));
    }
}
