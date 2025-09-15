package com.moba.managementsystem.repository;

import com.moba.managementsystem.model.Project;
import com.moba.managementsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
//    List<Project> findByOwner(User user);

    List<Project> findByNameContainingAndTeamContains(String partialName, User user);
    //List<Project> findByNameContaining(String partialName);
//    @Query("SELECT p FROM Project p join p.team WHERE t =:user")
//    List<Project> findByTeam(@Param("user") User user);

    List<Project> findByTeamContainingOrOwner(User user, User owner);
}
