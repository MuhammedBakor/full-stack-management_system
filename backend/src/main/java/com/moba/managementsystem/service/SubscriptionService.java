package com.moba.managementsystem.service;

import com.moba.managementsystem.model.PlanType;
import com.moba.managementsystem.model.Subscription;
import com.moba.managementsystem.model.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);
}
