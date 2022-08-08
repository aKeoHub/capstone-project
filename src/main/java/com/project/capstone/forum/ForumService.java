package com.project.capstone.forum;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for the Forum Object.
 * Methods not to be Documented as they're self-explanatory instances
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
public interface ForumService {

    Forum getForum(Integer id);

    Forum createForum(Forum forum);

    List<Forum> fetchForumList();

    Forum updateForum(Forum forum, Integer id) throws ForumNotFoundException;

    void deleteForumById(Integer id);
}
