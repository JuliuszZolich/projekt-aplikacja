package DBUtils;

import Utils.EmailData;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;

import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBMail {
    public static EmailData getUserData(String userID) throws ExecutionException, InterruptedException {
        DocumentReference docRef = db.collection("users")
                .whereEqualTo("userid", Integer.parseInt(userID))
                .get()
                .get()
                .getDocuments()
                .get(0).getReference();
        DocumentSnapshot document = docRef.get().get();
        EmailData emailData = new EmailData();
        emailData.setEmail(document.getString("email"));
        emailData.setName(document.getString("name"));
        return emailData;
    }
}
