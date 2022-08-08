package com.project.capstone.forum;

import com.project.capstone.category.CategoryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.awt.*;
import java.util.List;
import java.util.Optional;

/**
 * Controller Class for the Forum Object
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@RestController
@RequestMapping(value="api/v1/forums")
public class ForumController {

    /**
     * Uses Spring Annotation to instantiate/inject an instance of Category Service
     */
    @Autowired
    private ForumService forumService;

    /**
     * Creates a Forum Object from the endpoint to be persisted with the Service Class
     * @param forum
     * @return The saved Forum Object
     */
    @PostMapping(value = "/add", consumes = {"application/json"})
    public Forum createForum (@Valid @RequestBody @NotNull Forum forum) {
        return forumService.createForum(forum);
    }

    /**
     * Fetches a Forum Object from the endpoint using the Forum ID
     * @param id
     * @return The requested Forum Object
     * @throws ForumNotFoundException
     */
    @GetMapping("/get/{id}")
    public Forum getForum (@PathVariable("id") Integer id) throws ForumNotFoundException {
        Optional<Forum> forum = Optional.ofNullable(forumService.getForum(id));
        if(forum.isPresent()){
            return forum.get();
        } else {
            throw new ForumNotFoundException(id);
        }
    }

    /**
     * Uses the Service class to call all Forum Entities
     * @return All listed Forums stored in the SQL Database
     */
    @GetMapping("/all")
    public List<Forum> fetchForumList() {
        return forumService.fetchForumList();
    }

    /**
     * Edit the requested Forum Object via ID
     * @param forum
     * @param id
     * @return Updated Forum Object
     * @throws ForumNotFoundException
     */
    @PutMapping(value = "/edit/{id}", consumes = {"application/json"})
    public Forum updateForum (@RequestBody Forum forum, @PathVariable("id") Integer id) throws ForumNotFoundException {
        return forumService.updateForum(forum, id);
    }

    /**
     * Delete the requested Forum Object via ID
     * @param id
     * @return String message of success
     */
    @DeleteMapping(value = "/delete/{id}", consumes = {"application/json"})
    public String deleteForumById (@PathVariable("id") Integer id) {
        forumService.deleteForumById(id);
        return "Deleted Successfully";
    }
}
