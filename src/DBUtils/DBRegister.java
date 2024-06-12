package DBUtils;


import Utils.User;
import com.google.cloud.firestore.QueryDocumentSnapshot;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBRegister {
    public static void addUser(User user) {
        System.out.println("User added");
        db.collection("users").document().set(user);
    }
    public static String checkEmail(String email) throws ExecutionException, InterruptedException {
        List<QueryDocumentSnapshot> docRef = db.collection("users")
                .whereEqualTo("email", email)
                .get()
                .get()
                .getDocuments();

        if (docRef.isEmpty()) {
            System.out.println("Email not found");
            return "{\"email\": \"true\"}";
        } else {
            System.out.println("Email found");
            return "{\"email\": \"false\"}";
        }
    }
}
