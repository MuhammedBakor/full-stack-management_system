package com.moba.managementsystem.service;

import com.moba.managementsystem.model.Invitation;
import jakarta.mail.MessagingException;

public interface InvitationService {
    public void senInvitation(String email, Long projectId) throws MessagingException;
    public Invitation acceptInvitation(String token, Long userId) throws Exception;
    public String getTokenByUserMail(String userEmail);
    public void deleteToken(String token);
}
