package com.project.capstone.forum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ForumServiceAccess implements ForumService {

    @Autowired
    private ForumRepository forumRepository;

    @Override
    public Optional<Forum> getForum(Integer id) {
        return forumRepository.findById(id);
    }

    @Override
    public Forum createForum(Forum forum) {

        return forumRepository.save(forum);
    }

    @Override
    public List<Forum> fetchForumList() {
        return (List<Forum>) forumRepository.findAll();
    }

    @Override
    public Forum updateForum(Forum forum, Integer id) throws ForumNotFoundException {
        Optional<Forum> currentForumOptional = getForum(id);

        if (currentForumOptional.isPresent()) {
            Forum currentForum = currentForumOptional.get();

            currentForum.setId(forum.getId());
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

    @Override
    public void deleteForumById(Integer id) {
        forumRepository.deleteById(id);
    }
}
