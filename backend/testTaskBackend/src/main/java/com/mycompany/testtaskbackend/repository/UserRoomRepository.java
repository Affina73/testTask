package com.mycompany.testtaskbackend.repository;

import com.mycompany.testtaskbackend.model.UserRecord;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoomRepository extends MongoRepository<UserRecord, String> {
}