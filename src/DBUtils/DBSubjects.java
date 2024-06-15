package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBSubjects {
    public static String getSubjects(String userID, String fieldOfStudies) {
        System.out.println("Getting subjects for user: " + userID + " and field: " + fieldOfStudies);
        ApiFuture<QuerySnapshot> query = db.collection("subjects")
                .whereEqualTo("field_of_studies", fieldOfStudies)
                //.orderBy("subjectid", Query.Direction.ASCENDING)
                .get();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            QuerySnapshot querySnapshot = query.get();
            listaQuery = querySnapshot.getDocuments();
            System.out.println("Total subjects found: " + listaQuery.size());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println("Error getting subjects");
            return "{\"subjectlist\": []}";
        }
        JSONObject json = new JSONObject();
        JSONArray subjects = new JSONArray();
        for (QueryDocumentSnapshot document : listaQuery) {
            try {
                JSONObject subject = new JSONObject();
                subject.put("faculty", document.getString("faculty"));
                subject.put("field_of_studies", document.getString("field_of_studies"));
                subject.put("name", document.getString("name"));
                subject.put("semester", document.getDouble("semester"));
                subject.put("id", document.getDouble("subjectid"));
                subject.put("teacherid", document.getDouble("teacherid"));
                subjects.put(subject);
            } catch (Exception e) {
                System.out.println("Error processing document " + document.getString("name") + ": " + e.getMessage());
            }
        }
        json.put("subjectlist", subjects);
        return json.toString();
    }
}
