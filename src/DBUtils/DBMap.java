package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBMap {
    public static String getMap(String buildingID) throws ExecutionException, InterruptedException {
        System.out.println("Getting map for building: " + buildingID);
        DocumentReference docRef = db.collection("locations")
                .whereEqualTo("building", buildingID)
                .get()
                .get()
                .getDocuments()
                .get(0).getReference();
        DocumentSnapshot document;
        try {
            ApiFuture<DocumentSnapshot> future = docRef.get();
            document = future.get();
        } catch (InterruptedException | ExecutionException e) {
            return "{\"map\": []}";
        }
        if (!document.exists()) return "{\"map\": []}";
        return new JSONObject()
                .put("map", new JSONObject()
                        .put("id", document.getId())
                        .put("address", document.getString("address"))
                        .put("building", document.getString("building"))
                        .put("campus", document.getString("campus"))
                        .put("facility", document.getString("facility"))
                        .put("img", document.getString("img"))
                        .put("iframe", document.getString("iframe"))
                ).toString();
    }
    public static String getMapList() {
        ApiFuture<QuerySnapshot> query = db.collection("locations")
                .get();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            listaQuery = query.get().getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            return "{\"maplist\": []}";
        }
        JSONObject json = new JSONObject();
        JSONArray maplist = new JSONArray();
        for (DocumentSnapshot document : listaQuery) {
               JSONObject map = new JSONObject();
                map.put("id", document.getId());
                map.put("building", document.getString("building"));
                map.put("campus", document.getString("campus"));
                map.put("facility", document.getString("facility"));
                maplist.put(map);
        }
        json.put("maplist", maplist);
        return json.toString();
    }
}
