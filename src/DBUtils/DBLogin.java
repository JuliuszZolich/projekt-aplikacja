package DBUtils;

import com.google.cloud.firestore.QueryDocumentSnapshot;

import java.util.List;
import java.util.Objects;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBLogin {
    public static String getLogin(String email, String password) throws ExecutionException, InterruptedException {
        List<QueryDocumentSnapshot> docRef = db.collection("users")
                .whereEqualTo("email", email)
                .get()
                .get()
                .getDocuments();

        if (docRef.isEmpty()) {
            System.out.println("User not found");
            return "{\"login\": \"false\"}";
        }
        if (Objects.equals(docRef.get(0).getString("password"), password)) {
            System.out.println("User logged in");
            return "{\"login\": \"true\", \"userID\": \"" + docRef.get(0).getDouble("userid") + "\"}";
        } else {
            System.out.println("Wrong password");
            return "{\"login\": \"false\"}";
        }
    }
}
