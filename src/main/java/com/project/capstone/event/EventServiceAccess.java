package com.project.capstone.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EventServiceAccess implements EventService{

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Optional<Event> getEvent(Integer id) {
        return eventRepository.findById(id);
    }

    @Override
    public Event createEvent(Event event)  {
        if (eventRepository.checkId(event.getEventId())) {
            throw new RuntimeException("This id already Exists. Try PUT method");
        } else {
            return eventRepository.save(event);
        }
    }

    @Override
    public List<Event> fetchEventList() {
        return (List<Event>) eventRepository.findAll();
    }

    @Override
    public Event updateEvent(Event event, Integer id) throws EventNotFoundException {
        Optional<Event> currentEventOptional = getEvent(id);

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

    @Override
    public void deleteEventById(Integer id) {
        eventRepository.deleteById(id);

    }
}
