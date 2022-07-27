package com.project.capstone.forum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.awt.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="api/v1/forums")
public class ForumController {

    @Autowired
    private ForumService forumService;

    @PostMapping(value = "/add", consumes = {"application/json"})
    public Forum createForum (@Valid @RequestBody @NotNull Forum forum) {
        return forumService.createForum(forum);
    }

    @GetMapping("/get/{id}")
    public Forum getForum (@PathVariable("id") Integer id) throws ForumNotFoundException {
        Optional<Forum> forum = forumService.getForum(id);
        if(forum.isPresent()){
            return forum.get();
        } else {
            throw new ForumNotFoundException(id);
        }
    }

    @GetMapping("/all")
    public List<Forum> fetchForumList() {
        return forumService.fetchForumList();
    }

    @PutMapping(value = "/edit/{id}", consumes = {"application/json"})
    public Forum updateForum (@RequestBody Forum forum, @PathVariable("id") Integer id) throws ForumNotFoundException {
        return forumService.updateForum(forum, id);
    }

    @DeleteMapping(value = "/delete/{id}", consumes = {"application/json"})
    public String deleteForumById (@PathVariable("id") Integer id) {
        forumService.deleteForumById(id);
        return "Deleted Successfully";
    }
}
