package com.mycompany.testtaskbackend.controller;


import com.mycompany.testtaskbackend.model.Room.Room;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mycompany.testtaskbackend.repository.UserRoomRepository;
import java.util.List;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * Get room data for a user.
 */
@RestController
public class GetRoomDataController {
    @Autowired
    private UserRoomRepository repository;
    Logger logger = LoggerFactory.getLogger(GetRoomDataController.class);
  
    @GetMapping(path = "user/{userId}/data")
    @CrossOrigin
    public ResponseEntity<List<Room>> getRoomData(
            @PathVariable("userId") String userId) {
        try {
            var userRecord = repository.findById(userId);
            return new ResponseEntity<>(
                    userRecord.get().getRoomData(),
                    HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Get room data has failed:" + e.toString());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
    }
}