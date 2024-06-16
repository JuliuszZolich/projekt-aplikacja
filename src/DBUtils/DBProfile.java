package DBUtils;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import org.json.JSONObject;

import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBProfile {
    public static String getProfile(String userID) throws ExecutionException, InterruptedException {
        DocumentReference docRef = db.collection("users")
                .whereEqualTo("userid", Integer.parseInt(userID))
                .get()
                .get()
                .getDocuments()
                .get(0).getReference();
       DocumentSnapshot document = docRef.get().get();

        return new JSONObject()
                .put("id", document.getId())
                .put("name", document.getString("name"))
                .put("surname", document.getString("surname"))
                .put("email", document.getString("email"))
                .put("faculty", document.getString("faculty"))
                .put("semester", document.getDouble("semester"))
                .put("field", document.getString("field_of_studies"))
                .toString();
    }
}
