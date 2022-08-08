package com.project.capstone.event;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for the Event Object.
 * Methods not to be Documented as they're self-explanatory instances
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
public interface EventService {

    Event getEvent(Integer id);

    Event createEvent(Event event);

    List<Event> fetchEventList();

    Event updateEvent(Event event, Integer id) throws EventNotFoundException;

    void deleteEventById(Integer id);
}
