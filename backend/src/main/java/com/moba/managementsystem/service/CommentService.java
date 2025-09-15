package com.moba.managementsystem.service;

import com.moba.managementsystem.model.Comment;

import java.util.List;

public interface CommentService{
    Comment createdComment(Long issueId, Long userId, String content) throws Exception;
    void deleteComment(Long commentId, Long userId) throws Exception;
    List<Comment> findCommentByIssueId(Long issueId);
}
