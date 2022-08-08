package com.project.capstone.parkdocument;

import com.project.capstone.category.Category;
import com.project.capstone.category.CategoryNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
@Slf4j
public class ParkServiceAccess implements ParkService {

    @Autowired
    private ParkRepository parkRepository;

    @Override
    public ParkDocument getDocument(Integer Id) {
        return parkRepository.findParkDocumentById(Id);
    }

    @Override
    public ParkDocument createDocument(ParkDocument document) {
        log.info("Saving document {}", document);
        if (parkRepository.checkId(document.getDocumentId())) {
            throw new RuntimeException("This id already Exists. Try PUT method");
        } else {
            return parkRepository.save(document);
        }
    }

    @Override
    public Integer returnDocCategoryId(Integer categoryId) {
        Optional<ParkDocument> currentDocumentOptional = parkRepository.findById(categoryId);

        if (currentDocumentOptional.isPresent()) {
            ParkDocument currentCategory = currentDocumentOptional.get();
            return currentCategory.getDocumentId();
        } else {
            throw new RuntimeException("Category Doesnt Exist");
        }
    }

    @Override
    public List<ParkDocument> fetchDocumentList() {
        return (List<ParkDocument>) parkRepository.findAll();
    }

    @Override
    public ParkDocument updateDocument(ParkDocument document, Integer id) throws DocumentNotFoundException {
        Optional<ParkDocument> currentDocumentOptional = parkRepository.findById(id);
        if (currentDocumentOptional.isPresent()) {
            ParkDocument currentDocument = currentDocumentOptional.get();

            currentDocument.setFile(document.getFile());
            currentDocument.setDescription(document.getDescription());
            currentDocument.setCreateDate(document.getCreateDate());
            currentDocument.setDocumentName(document.getDocumentName());
            currentDocument.setDocumentCategory(document.getDocumentCategory());
            currentDocument.setDocumentId(document.getDocumentId());
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
