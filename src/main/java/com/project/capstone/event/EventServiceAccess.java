package com.project.capstone.event;

import com.project.capstone.category.CategoryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * The Event Service Implementation Class declaring functionality. Extends the EventService Interface
 *
 * Denoted with Spring Annotations to declare this Service class has rights to make backend data-layer SQL changes(Transactional)
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Service
@Transactional
public class EventServiceAccess implements EventService{

    /**
     * Instantiates an Instance of the Event Repository (CRUD FUNCTIONS)
     */
    @Autowired
    private EventRepository eventRepository;

    /**
     * Uses Java Optionality to fetch Event Entities by ID (PK)
     * @param id
     * @return Requested Event Entity
     */
    @Override
    public Event getEvent(Integer id) {
        return eventRepository.findEventById(id);
    }

    /**
     * Saves an Event Entity to the database
     * @param event
     * @return created event
     */
    @Override
    public Event createEvent(Event event)  {
        if (eventRepository.checkId(event.getEventId())) {
            throw new RuntimeException("This id already Exists. Try PUT method");
        } else {
            return eventRepository.save(event);
        }
    }

    /**
     * Fetches all Event Entities from the SQL Database
     * @return Fetches Events
     */
    @Override
    public List<Event> fetchEventList() {
        return (List<Event>) eventRepository.findAll();
    }

    /**
     * Edit the requested Event Entity via ID (PK)
     * @param event Object
     * @param id
     * @return updated Event Entity
     * @throws EventNotFoundException
     */
    @Override
    public Event updateEvent(Event event, Integer id) throws EventNotFoundException {
        Optional<Event> currentEventOptional = eventRepository.findById(id);

        if (currentEventOptional.isPresent()) {
            Event currentEvent = currentEventOptional.get();

            currentEvent.setEventId(event.getEventId());
            currentEvent.setEventCreator(event.getEventCreator());
            currentEvent.setCategory(event.getCategory());
            currentEvent.setEventName(event.getEventName());
            currentEvent.setLocation(event.getLocation());
            currentEvent.setDescription(event.getDescription());
            currentEvent.setStartDate(event.getStartDate());
            currentEvent.setEndDate(event.getEndDate());
            currentEvent.setFile(event.getFile());

            return currentEvent;
        } else {
            throw new EventNotFoundException(id);
        }
    }

    /**
     * Delete the requested Event Entity using its ID (PK)
     * @param id
     */
    @Override
    public void deleteEventById(Integer id) {
        eventRepository.deleteById(id);

    }
}