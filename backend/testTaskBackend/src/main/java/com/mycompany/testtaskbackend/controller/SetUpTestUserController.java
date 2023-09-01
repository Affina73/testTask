package com.mycompany.testtaskbackend.controller;

import com.mycompany.testtaskbackend.model.Room.Room;
import com.mycompany.testtaskbackend.model.Room.RoomBuilder;
import com.mycompany.testtaskbackend.model.UserRecord;
import com.mycompany.testtaskbackend.repository.UserRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * Set up a test user with a few rooms, user is a param.
 */
@RestController
public class SetUpTestUserController {
    @Autowired
    private UserRoomRepository repository;
    
    @GetMapping(path = "test/{userId}")
    public String addTestUser(@PathVariable("userId") Integer userId) {  
        Room livingRoom = new RoomBuilder(/* id= */ 0)
            .setHumidity(12)
            .setName("Living Room")
            .build();
        Room bedroomFirst = new RoomBuilder(/* id= */ 1)
                .setHumidity(78)
                .setTemperature(-5)
                .setName("Big bedroom")
                .build();
        Room bedroomSecond = new RoomBuilder(/* id= */ 2)
                .setTemperature(28)
                .setName("Small Room")
                .build();

        repository.save(new UserRecord(userId.toString())
                .addRoom(livingRoom)
                .addRoom(bedroomFirst).addRoom(bedroomSecond));
        return "Ok";
    }

}
