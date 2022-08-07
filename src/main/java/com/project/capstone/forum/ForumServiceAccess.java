package com.project.capstone.forum;

import com.project.capstone.category.CategoryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * The Forum Service Implementation Class declaring functionality. Extends the ForumService Interface
 *
 * Denoted with Spring Annotations to declare this Service class has rights to make backend data-layer SQL changes(Transactional)
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Service
@Transactional
public class ForumServiceAccess implements ForumService {

    /**
     * Instantiates an Instance of the Forum Repository (CRUD FUNCTIONS)
     */
    @Autowired
    private ForumRepository forumRepository;

    /**
     * Uses Java Optionality to fetch Forum Entities by ID (PK)
     * @param id
     * @return Requested Forum Entity
     */
    @Override
    public Optional<Forum> getForum(Integer id) {
        return forumRepository.findById(id);
    }

    /**
     * Creates a Forum Entity to the database
     * @param forum
     * @return new reated Forum object
     */
    @Override
    public Forum createForum(Forum forum) {
        if (forumRepository.checkId(forum.getForumId())) {
            throw new RuntimeException("This id already Exists. Try PUT method");
        } else {
            return forumRepository.save(forum);
        }
    }

    /**
     * Fetches all Forum Entities from the SQL Database
     * @return Fetched Forums
     */
    @Override
    public List<Forum> fetchForumList() {
        return (List<Forum>) forumRepository.findAll();
    }

    /**
     * Edit the requested Forum Entity via ID (PK)
     * @param forum Object
     * @param id
     * @return updated Forum Entity
     * @throws ForumNotFoundException
     */
    @Override
    public Forum updateForum(Forum forum, Integer id) throws ForumNotFoundException {
        Optional<Forum> currentForumOptional = getForum(id);

        if (currentForumOptional.isPresent()) {
            Forum currentForum = currentForumOptional.get();

            currentForum.setForumId(forum.getForumId());
            currentForum.setCreator(forum.getCreator());
            currentForum.setTitle(forum.getTitle());
            currentForum.setDescription(forum.getDescription());
            currentForum.setCreateDate(forum.getCreateDate());
            currentForum.setPictureId(forum.getPictureId());
            currentForum.setForumCategory(forum.getForumCategory());
            currentForum.setSubTitle(forum.getSubTitle());
            return currentForum;
        } else {
            throw new ForumNotFoundException(id);
        }
    }

    /**
     * Delete the requested Forum Entity using its ID (PK)
     * @param id
     */
    @Override
    public void deleteForumById(Integer id) {
        forumRepository.deleteById(id);
    }
}
