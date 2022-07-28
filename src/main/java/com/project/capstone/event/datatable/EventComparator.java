package com.project.capstone.event.datatable;

import com.project.capstone.event.Event;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

public class EventComparator {


    @EqualsAndHashCode
    @AllArgsConstructor
    @Getter
    static class Key {
        String name;
        Direction dir;
    }

    static Map<Key, Comparator<Event>> map = new HashMap<>();

    static {
        map.put(new Key("name", Direction.asc), Comparator.comparing(Event::getEventName));
        map.put(new Key("name", Direction.desc), Comparator.comparing(Event::getEventName)
                .reversed());

        map.put(new Key("start_date", Direction.asc), Comparator.comparing(Event::getStartDate));
        map.put(new Key("start_date", Direction.desc), Comparator.comparing(Event::getStartDate)
                .reversed());

        map.put(new Key("end_date", Direction.asc), Comparator.comparing(Event::getEndDate));
        map.put(new Key("end_date", Direction.desc), Comparator.comparing(Event::getEndDate)
                .reversed());

        map.put(new Key("description", Direction.asc), Comparator.comparing(Event::getDescription));
        map.put(new Key("description", Direction.desc), Comparator.comparing(Event::getDescription)
                .reversed());

        map.put(new Key("location", Direction.asc), Comparator.comparing(Event::getLocation));
        map.put(new Key("location", Direction.desc), Comparator.comparing(Event::getLocation)
                .reversed());

        map.put(new Key("eventid", Direction.asc), Comparator.comparing(Event::getId));
        map.put(new Key("eventid", Direction.desc), Comparator.comparing(Event::getId)
                .reversed());
    }

    public static Comparator<Event> getComparator(String name, Direction dir) {
        return map.get(new Key(name, dir));
    }

    private EventComparator(){

    }

}
