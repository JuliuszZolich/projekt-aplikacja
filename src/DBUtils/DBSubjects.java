package DBUtils;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static DBUtils.FirebaseUtils.db;

public class DBSubjects {
    public static String getSubjects(String fieldOfStudies) {
        System.out.println("Getting subjects for field: " + fieldOfStudies);
        ApiFuture<QuerySnapshot> query = db.collection("subjects")
                .whereEqualTo("field_of_studies", fieldOfStudies)
                .get();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            QuerySnapshot querySnapshot = query.get();
            listaQuery = querySnapshot.getDocuments();
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
                subject.put("id", document.getId());
                subject.put("teacherid", document.getDouble("teacherid"));
                subjects.put(subject);
            } catch (Exception e) {
                System.out.println("Error processing document " + document.getString("name") + ": " + e.getMessage());
            }
        }
        json.put("subjectlist", subjects);
        return json.toString();
    }

    public static String getSubject(String subjectID){
        System.out.println("Getting subject: " + subjectID);
        ApiFuture<QuerySnapshot> query = db.collection("subjects")
                .get();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            QuerySnapshot querySnapshot = query.get();
            listaQuery = querySnapshot.getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            System.out.println("Error getting subject");
            return "{\"subjectlist\": []}";
        }
        JSONObject json = new JSONObject();
        JSONArray subjects = new JSONArray();
        for (QueryDocumentSnapshot document : listaQuery) {
            if (!document.getId().equals(subjectID)) continue;
            try {
                JSONObject subject = new JSONObject();
                subject.put("faculty", document.getString("faculty"));
                subject.put("field_of_studies", document.getString("field_of_studies"));
                subject.put("name", document.getString("name"));
                subject.put("semester", document.getDouble("semester"));
                subject.put("id", document.getId());
                subject.put("teacherid", document.getDouble("teacherid"));
                ArrayList<Map<String,String>> exercises = (ArrayList<Map<String,String>>) document.get("materialy_cwiczenia");
                ArrayList<Map<String,String>> lectures = (ArrayList<Map<String,String>>) document.get("materialy_wyklad");
                assert exercises != null;
                assert lectures != null;
                JSONArray exercisesArray = new JSONArray();
                JSONArray lecturesArray = new JSONArray();
                for (Map<String,String> exercise : exercises) {
                    JSONObject exerciseJson = new JSONObject();
                    exerciseJson.put("link", exercise.get("link"));
                    exerciseJson.put("link_name", exercise.get("link_name"));
                    exerciseJson.put("name", exercise.get("name"));
                    exercisesArray.put(exerciseJson);
                }
                for (Map<String,String> lecture : lectures) {
                    JSONObject lectureJson = new JSONObject();
                    lectureJson.put("link", lecture.get("link"));
                    lectureJson.put("link_name", lecture.get("link_name"));
                    lectureJson.put("name", lecture.get("name"));
                    lecturesArray.put(lectureJson);
                }
                subject.put("exercises", exercisesArray);
                subject.put("lectures", lecturesArray);
                subjects.put(subject);
            } catch (Exception e) {
                System.out.println("Error processing document " + document.getString("name") + ": " + e.getMessage());
            }
        }
        json.put("subjectlist", subjects);
        return json.toString();
    }

    public static String getGrades(String userID, String subjectID){
        System.out.println("Getting grades for user: " + userID + " and subject: " + subjectID);
        ApiFuture<QuerySnapshot> query = db.collection("grades")
                .whereEqualTo("userid", Integer.parseInt(userID))
                .whereEqualTo("subjectid", subjectID)
                .get();
        List<QueryDocumentSnapshot> listaQuery;
        try {
            QuerySnapshot querySnapshot = query.get();
            listaQuery = querySnapshot.getDocuments();
        } catch (InterruptedException | ExecutionException e) {
            System.out.println("Error getting grades");
            return "{\"gradelist\": []}";
        }
        JSONObject json = new JSONObject();
        JSONArray grades = new JSONArray();
        for (QueryDocumentSnapshot document : listaQuery) {
            try {
                JSONObject grade = new JSONObject();
                grade.put("userid", document.getDouble("userid"));
                grade.put("subjectid", document.getString("subjectid"));
                grade.put("name", document.getString("name"));
                grade.put("grade", document.getDouble("grade"));
                grade.put("id", document.getId());
                Map<String, Integer> points = (Map<String, Integer>) document.get("points");
                assert points != null;
                grade.put("points_achieved", points.get("achieved"));
                grade.put("points_max", points.get("max"));
                grade.put("points_min", points.get("min"));
                grades.put(grade);
            } catch (Exception e) {
                System.out.println("Error processing document " + document.getId() + ": " + e.getMessage());
            }
        }
        json.put("gradelist", grades);
        return json.toString();
    }
}
