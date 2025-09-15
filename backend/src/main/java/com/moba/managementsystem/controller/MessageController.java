package com.moba.managementsystem.controller;

import com.moba.managementsystem.model.*;
import com.moba.managementsystem.request.CreateMessageRequest;
import com.moba.managementsystem.request.InviteRequest;
import com.moba.managementsystem.response.MessageResponse;
import com.moba.managementsystem.service.InvitationService;
import com.moba.managementsystem.service.MessageService;
import com.moba.managementsystem.service.ProjectService;
import com.moba.managementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;


    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(
            @RequestBody CreateMessageRequest request) throws Exception {

        User user = userService.findUserById(request.getSenderId());

        Chat chat = projectService.getProjectById(request.getProjectId()).getChat();

        if(chat == null) throw new Exception("Chats not found");
        Message sentMessage = messageService.sendMessage(request.getSenderId(),
                request.getProjectId(), request.getContent());

        return ResponseEntity.ok(sentMessage);
    }


    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessageByChatId(
            @PathVariable Long projectId) throws Exception {

        List<Message> messages = messageService.getMessagesByProjectId(projectId);

        return ResponseEntity.ok(messages);
    }
}
