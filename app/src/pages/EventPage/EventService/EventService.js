import axios from 'axios';

const Event_API_BASE_URL= "http://localhost:8080/api/v1/events";

class EventService {
    getAllEvents() {
        return axios.get(Event_API_BASE_URL);
    }
    createEvent(event) {
        return axios.post(Event_API_BASE_URL, event);
    }
    updateEvent(event, eventName) {
        return axios.put(Event_API_BASE_URL+'/'+eventName, event);
    }
    deleteEvent(eventName) {
        return axios.delete(Event_API_BASE_URL+'/'+eventName);
    }
}

export default new EventService();
