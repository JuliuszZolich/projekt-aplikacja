package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;

import static DBUtils.FirebaseUtils.db;

public class DBAnnouncements {

    public static String getAnnouncements() {
        System.out.println("Getting announcements");
        ApiFuture<QuerySnapshot> query = db.collection("notifications")
                .get();
        JSONObject json = new JSONObject();
        JSONArray tasklist = new JSONArray();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (Exception e) {
            return "{\"announcements\": []}";
        }
        for (QueryDocumentSnapshot document : listaQuery) {
            convertDocumentToJson(tasklist, document);
        }
        json.put("announcements", tasklist);
        return json.toString();
    }
    public static String getAnnouncement(String postID){
        System.out.println("Getting announcement: " + postID);
        ApiFuture<QuerySnapshot> query = db.collection("notifications")
                .get();
        JSONObject json = new JSONObject();
        JSONArray tasklist = new JSONArray();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (Exception e) {
            return "{\"announcements\": []}";
        }
        for (QueryDocumentSnapshot document : listaQuery) {
            if (!document.getId().equals(postID)) continue;
            convertDocumentToJson(tasklist, document);
        }
        json.put("announcements", tasklist);
        return json.toString();
    }

    private static void convertDocumentToJson(JSONArray tasklist, QueryDocumentSnapshot document) {
        JSONObject task = new JSONObject();
        task.put("id", document.getId());
        Map<String,String> content = (Map<String,String>) document.get("content");
        assert content != null;
        task.put("title_en", content.get("title_en"));
        task.put("title_pl", content.get("title_pl"));
        task.put("text_pl", content.get("text_pl"));
        task.put("text_en", content.get("text_en"));
        task.put("short_text_pl", content.get("short_text_pl"));
        task.put("short_text_en", content.get("short_text_en"));
        task.put("date", document.getDate("date"));
        task.put("img", document.getString("img"));
        task.put("type", document.getString("type"));
        tasklist.put(task);
    }
}

