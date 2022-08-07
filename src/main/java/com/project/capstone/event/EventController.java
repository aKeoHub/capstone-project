package com.project.capstone.event;

import com.project.capstone.category.CategoryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

/**
 * Controller Class for the Event Object
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@RestController
@RequestMapping("api/v1/events")
public class EventController {

    /**
     * Uses Spring Annotation to instantiate/inject an instance of Event Service
     */
    @Autowired
    private EventService eventService;

    /**
     * Creates an Event Object from the endpoint to be persisted with the Service Class
     * @param event
     * @return The saved Event Object
     */
    @PostMapping(value = "/add", consumes = {"application/json"})
    public Event createEvent(@Valid @RequestBody @NotNull Event event){
        return eventService.createEvent(event);
    }

    /**
     * Fetches an Event Object from the endpoint using the Events ID
     * @param id
     * @return The requested Event Object
     * @throws EventNotFoundException
     */
    @GetMapping("/get/{id}")
    public Event getEvent(@PathVariable("id") Integer id) throws EventNotFoundException {
        Optional<Event> event = eventService.getEvent(id);
        if (event.isPresent()){
            return event.get();
        } else {
            throw new EventNotFoundException(id);
        }
    }

    /**
     * Uses the Service class to call all Event Entities
     * @return All listed Events stored in the SQL Database
     */
    @GetMapping("/all")
    public List<Event> fetchEventList() {
        return eventService.fetchEventList();
    }

    /**
     * Edit the requested Event Object via ID
     * @param event
     * @param id
     * @return Updated Event Object
     * @throws EventNotFoundException
     */
    @PutMapping(value = "/edit/{id}", consumes = {"application/json"})
    public Event updateEvent(@RequestBody Event event , @PathVariable("id") Integer id) throws EventNotFoundException{

        return eventService.updateEvent(event, id);
    }

    /**
     * Delete the requested Event Object via ID
     * @param id
     * @return String message of success
     */
    @DeleteMapping(value = "/delete/{id}", consumes = {"application/json"})
    public String deleteEventById(@PathVariable("id") Integer id){
        eventService.deleteEventById(id);

        return "Deleted Successfully";
    }
}