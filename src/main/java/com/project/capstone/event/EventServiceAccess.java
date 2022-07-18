package com.project.capstone.event;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.project.capstone.event.datatable.*;
import org.springframework.util.StringUtils;

@Service
@Slf4j
public class EventServiceAccess implements EventService{

    @Autowired
    private EventRepository eventRepository;

    private static final Comparator<Event> EMPTY_COMPARATOR = (e1, e2) -> 0;
    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");

    @Override
    public Optional<Event> getEvent(Integer id) {
        return eventRepository.findById(id);
    }

    @Override
    public Event createEvent(Event event)  {
        return eventRepository.save(event);
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
            currentEvent.setId(event.getId());
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


    public PageArray getEventsArray(PagingRequest pagingRequest) {
        pagingRequest.setColumns(Stream.of("event_creator", "category", "event_name", "location", "description", "start_date" , "end_date", "file")
                .map(Column::new)
                .collect(Collectors.toList()));

        Page<Event> eventPage = getEvents(pagingRequest);

        PageArray pageArray = new PageArray();
        pageArray.setRecordsFiltered(eventPage.getRecordsFiltered());
        pageArray.setRecordsTotal(eventPage.getRecordsTotal());
        pageArray.setDraw(eventPage.getDraw());
        pageArray.setData(eventPage.getData()
                .stream()
                .map(this::toStringList)
                .collect(Collectors.toList()));
        return pageArray;
    }

    private List<String> toStringList(Event event) {
        return Arrays.asList(event.getEventCreator().toString(), event.getCategory().toString(), event.getEventName(), event.getLocation(), event.getDescription(),
                sdf.format(event.getStartDate()), sdf.format(event.getEndDate()),
                event.getFile().toString()
                     );
    }

    public Page<Event> getEvents(PagingRequest pagingRequest) {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            List<Event> events = objectMapper.readValue(getClass().getClassLoader()
                            .getResourceAsStream("events.json"),
                    new TypeReference<List<Event>>() {
                    });

            return getPage(events, pagingRequest);

        } catch (IOException e) {
            log.error(e.getMessage(), e);
        }

        return new Page<>();
    }

    private Page<Event> getPage(List<Event> employees, PagingRequest pagingRequest) {
        List<Event> filtered = employees.stream()
                .sorted(sortEvents(pagingRequest))
                .filter(filterEvents(pagingRequest))
                .skip(pagingRequest.getStart())
                .limit(pagingRequest.getLength())
                .collect(Collectors.toList());

        long count = employees.stream()
                .filter(filterEvents(pagingRequest))
                .count();

        Page<Event> page = new Page<>(filtered);
        page.setRecordsFiltered((int) count);
        page.setRecordsTotal((int) count);
        page.setDraw(pagingRequest.getDraw());

        return page;
    }

    private Predicate<Event> filterEvents(PagingRequest pagingRequest) {
        if (pagingRequest.getSearch() == null || StringUtils.isEmpty(pagingRequest.getSearch()
                .getValue())) {
            return employee -> true;
        }

        String value = pagingRequest.getSearch()
                .getValue();

        return event -> event.getEventName()
                .toLowerCase()
                .contains(value)
                || event.getLocation()
                .toLowerCase()
                .contains(value)
                || event.getDescription()
                .toLowerCase()
                .contains(value)
                || event.getEventCreator()
                .equals(value)
                || event.getStartDate()
                .equals(value)
                || event.getEndDate()
                .equals(value);
    }

    private Comparator<Event> sortEvents(PagingRequest pagingRequest) {
        if (pagingRequest.getOrder() == null) {
            return EMPTY_COMPARATOR;
        }

        try {
            Order order = pagingRequest.getOrder()
                    .get(0);

            int columnIndex = order.getColumn();
            Column column = pagingRequest.getColumns()
                    .get(columnIndex);

            Comparator<Event> comparator = EventComparator.getComparator(column.getData(), order.getDir());
            if (comparator == null) {
                return EMPTY_COMPARATOR;
            }

            return comparator;

        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }

        return EMPTY_COMPARATOR;
    }


}
