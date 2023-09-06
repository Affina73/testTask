package com.mycompany.testtaskbackend.controller;

import com.mycompany.testtaskbackend.model.Room.Room;
import com.mycompany.testtaskbackend.model.UserRecord;
import com.mycompany.testtaskbackend.repository.UserRoomRepository;
import java.util.Optional;
import org.junit.runner.*;
import org.junit.jupiter.api.Test;
import static org.mockito.BDDMockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@SpringBootTest
@ComponentScan(basePackages = {"com.mycompany.testtaskbackend.controller.*" })
@AutoConfigureMockMvc
public class GetRoomDataControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserRoomRepository userRepository;

    @Test
    public void testGetsData() throws Exception {
        given(this.userRepository.findById(any()))
                .willReturn(Optional.of(new UserRecord("1").addRoom(new Room(2))));
        this.mvc.perform(get("/user/1/data")
                .accept(MediaType.ALL))
                .andExpect(status().isOk())
                .andExpect(content().string("[{\"id\":2,\"name\":null,\"temperature\":null,\"humidity\":null}]"));
    }

}