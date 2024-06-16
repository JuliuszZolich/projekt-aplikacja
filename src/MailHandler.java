import DBUtils.DBMail;
import Utils.Utils;
import com.courier.api.Courier;
import com.courier.api.requests.SendMessageRequest;
import com.courier.api.resources.send.types.*;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import Utils.EmailData;

import java.io.IOException;
import java.lang.Override;
import java.util.Map;
import java.util.concurrent.ExecutionException;

class MailHandler implements HttpHandler {

    private static final String QUESTION_TEMPLATE_ID = "WRZNNBSWCXMPKZG3ADXST3PAC82K";
    private static final String REPORT_TEMPLATE_ID = "N6445Z506R4XZRP117EKX58VFQ1X";

    @Override
    public void handle(HttpExchange t) throws IOException {
        if (Utils.handleCORS(t)) return;
        System.out.println("Mail request received");
        String userid = t.getRequestHeaders().get("UserID").get(0);
        String type = t.getRequestHeaders().get("Type").get(0);
        EmailData emailData;
        try {
            emailData = DBMail.getUserData(userid);
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println("Email data retrieved");
        String templateId = type.equals("question") ? QUESTION_TEMPLATE_ID : REPORT_TEMPLATE_ID;
        Courier courier = Courier.builder()
                .authorizationToken("dk_prod_M9JK9PQE9GMBB5GYEWS4EJ0CAEJ2")
                .build();

        MessageRecipient recipient = MessageRecipient.of(Recipient.of(UserRecipient.builder()
                .email(emailData.getEmail())
                .build()));

        String content = new String(t.getRequestBody().readAllBytes());

        Message message = Message.of(TemplateMessage.builder()
                .template(templateId)
                .data(Map.of("firstName",emailData.getName(),"content", content))
                .to(recipient)
                .build());

        SendMessageRequest messageRequest = SendMessageRequest.builder().message(message).build();
        courier.send(messageRequest);
        System.out.println("Message sent");
        t.sendResponseHeaders(200, 0);
        t.getResponseBody().close();
    }
}