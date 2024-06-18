package DBUtils;

import com.google.cloud.firestore.QueryDocumentSnapshot;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBSettings {
    public static String changeField(String userID, String field, String newEmail) throws ExecutionException, InterruptedException {
        System.out.println("Changing " + field + " for user: " + userID);
        List<QueryDocumentSnapshot> docRef = db.collection("users")
                .whereEqualTo("userid", Integer.parseInt(userID))
                .get()
                .get()
                .getDocuments();

        if (docRef.isEmpty()) {
            System.out.println("User not found");
            return "{\"change\": \"false\"}";
        }
        docRef.get(0).getReference().update(field, newEmail);
        System.out.println(field + " changed");
        return "{\"change\": \"true\"}";
    }
}
