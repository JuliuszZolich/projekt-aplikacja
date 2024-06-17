package DBUtils;


import Utils.User;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBRegister {
    public static void addUser(User user) throws ExecutionException, InterruptedException {
        System.out.println("User added");
        QuerySnapshot querySnapshot = db.collection("users").get().get();
        int documentCount = querySnapshot.getDocuments().size();
        user.setUserid(documentCount+1);
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
