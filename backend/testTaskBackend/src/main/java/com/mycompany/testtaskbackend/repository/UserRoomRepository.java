package com.mycompany.testtaskbackend.repository;

import com.mycompany.testtaskbackend.model.UserRecord;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRoomRepository extends MongoRepository<UserRecord, String> {
}