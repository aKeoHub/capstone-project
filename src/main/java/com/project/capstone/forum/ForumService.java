package com.project.capstone.forum;

import java.util.List;
import java.util.Optional;

public interface ForumService {

    Optional<Forum> getForum(Integer id);

    Forum createForum(Forum forum);

    List<Forum> fetchForumList();

    Forum updateForum(Forum forum, Integer id) throws ForumNotFoundException;

    void deleteForumById(Integer id);
}
