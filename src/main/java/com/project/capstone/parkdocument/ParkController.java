package com.project.capstone.parkdocument;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/documents")
public class ParkController {

    @Autowired
    private ParkService parkService;

    @PostMapping(value = "/add", consumes = {"application/json"})
    public ParkDocument createDocument (@Valid @RequestBody @NotNull ParkDocument document) {
        return parkService.createDocument(document);
    }

    @GetMapping("/get/{id}")
    public ParkDocument getDocument (@PathVariable("id") Integer id) throws DocumentNotFoundException {
        Optional<ParkDocument> document = Optional.ofNullable(parkService.getDocument(id));
        if(document.isPresent()) {
            return document.get();
        } else {
            throw new DocumentNotFoundException(id);
        }
    }

    @GetMapping("/all")
    public List<ParkDocument> fetchDocumentList() {
        return parkService.fetchDocumentList();
    }

    @PutMapping(value = "/edit/{id}", consumes = {"application/json"})
    public ParkDocument updateDocument (@RequestBody ParkDocument document, @PathVariable("id") Integer id) throws DocumentNotFoundException {
        return parkService.updateDocument(document, id);
    }

    @DeleteMapping(value = "/delete/{id}", consumes = {"application/json"})
    public String deleteDocumentById (@PathVariable("id") Integer id) {
        parkService.deleteDocumentById(id);
        return "Deleted Successfully";
    }
}
