package com.dbtest;
import com.mycompany.testtaskbackend.model.Room.Room;
import com.mycompany.testtaskbackend.model.Room.RoomBuilder;
import com.mycompany.testtaskbackend.model.UserRecord;
import com.mycompany.testtaskbackend.repository.UserRoomRepository;
import static org.assertj.core.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Example;


@SpringBootTest
public class UserRoomRepositoryTest {

	@Autowired
	UserRoomRepository repository;

	UserRecord first, second;
        Room livingRoom, bedroomFirst, bedroomSecond;
        
	@BeforeEach
	public void setUp() {
            repository.deleteAll();
            first = repository.save(
                    new UserRecord());
            second = repository.save(
                    new UserRecord());
	}

	@Test
	public void setsIdOnSave() {
            assertThat(first.id).isNull();
	}
}
