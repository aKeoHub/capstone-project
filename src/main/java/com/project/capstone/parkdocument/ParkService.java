package com.project.capstone.parkdocument;

import com.project.capstone.event.Event;
import com.project.capstone.event.EventNotFoundException;

import java.util.List;
import java.util.Optional;

public interface ParkService {
    Optional<ParkDocument> getDocument(Integer Id);

    ParkDocument createDocument(ParkDocument document);

    List<ParkDocument> fetchDocumentList();

    ParkDocument updateDocument(ParkDocument document, Integer id) throws DocumentNotFoundException;

    void deleteDocumentById(Integer id);
}
