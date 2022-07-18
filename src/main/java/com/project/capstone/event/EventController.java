package com.project.capstone.event;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/events")
    public Event createEvent(@Valid @RequestBody @NotNull Event event){
        return eventService.createEvent(event);
    }

    @GetMapping("/events/{id}")
    public Event getEvent(@PathVariable("id") Integer id) throws EventNotFoundException {
        Optional<Event> event = eventService.getEvent(id);
        if (event.isPresent()){
            return event.get();
        } else {
            throw new EventNotFoundException(id);
        }
    }

    @GetMapping("/events/all")
    public List<Event> fetchEventList() {
        return eventService.fetchEventList();
    }

    @PutMapping("/events/{id}")
    public Event updateEvent(@RequestBody Event event , @PathVariable("id") Integer id) throws EventNotFoundException{

        return eventService.updateEvent(event, id);
    }

    @DeleteMapping("/events/{id}")
    public String deleteEventById(@PathVariable("id") Integer id){
        eventService.deleteEventById(id);

        return "Deleted Successfully";
    }
}
