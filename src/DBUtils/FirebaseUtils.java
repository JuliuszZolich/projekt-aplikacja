package DBUtils;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.*;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;


import java.io.FileInputStream;
import java.io.IOException;

//TODO add TINK to encrypt passwords

public class FirebaseUtils {

    public static Firestore db;

    public static void Connect() {
        try {
            FileInputStream refreshToken = new FileInputStream(".\\projekt_keys.json");
            FirebaseOptions firestoreOptions = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(refreshToken))
                    .build();
            FirebaseApp.initializeApp(firestoreOptions);
        } catch (IOException ignored) {
            System.err.println("Error while initializing Firebase");
            System.exit(1);
        }
        db = FirestoreClient.getFirestore();
    }
}
