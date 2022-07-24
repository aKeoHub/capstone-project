package com.project.capstone.parkdocument;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParkServiceAccess implements ParkService {

    @Autowired
    private ParkRepository parkRepository;

    @Override
    public Optional<ParkDocument> getDocument(Integer Id) {
        return parkRepository.findById(Id);
    }

    @Override
    public ParkDocument createDocument(ParkDocument document) {
        return parkRepository.save(document);
    }

    @Override
    public List<ParkDocument> fetchDocumentList() {
        return (List<ParkDocument>) parkRepository.findAll();
    }

    @Override
    public ParkDocument updateDocument(ParkDocument document, Integer id) throws DocumentNotFoundException {
        Optional<ParkDocument> currentDocumentOptional = getDocument(id);

        if (currentDocumentOptional.isPresent()) {
            ParkDocument currentDocument = currentDocumentOptional.get();

            currentDocument.setFile(document.getFile());
            currentDocument.setDescription(document.getDescription());
            currentDocument.setCreateDate(document.getCreateDate());
            currentDocument.setDocumentName(document.getDocumentName());
            currentDocument.setDocumentCategory(document.getDocumentCategory());
            currentDocument.setId(document.getId());
            currentDocument.setCreatorId(document.getCreatorId());

            return currentDocument;
        } else {
            throw new DocumentNotFoundException(id);
        }
    }

    @Override
    public void deleteDocumentById(Integer id) {
        parkRepository.deleteById((id));

    }
}
