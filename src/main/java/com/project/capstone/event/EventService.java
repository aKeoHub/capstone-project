package com.project.capstone.event;

import java.util.List;
import java.util.Optional;

public interface EventService {

    Optional<Event> getEvent(Integer id);

    Event createEvent(Event event);

    List<Event> fetchEventList();

    Event updateEvent(Event event, Integer id) throws EventNotFoundException;

    void deleteEventById(Integer id);
}
