package com.mycompany.testtaskbackend.model;

import com.mycompany.testtaskbackend.model.Room.Room;
import java.util.ArrayList;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
public class UserRecord {

  @Id
  public String id;

  private ArrayList<Room> roomData = new ArrayList<>();
  
  public UserRecord() {
  }  
 
  public UserRecord(String id) {
      this.id = id;
      this.roomData = new ArrayList<>();
  }  
  
  public UserRecord addRoom(Room newRoom) {
      roomData.add(newRoom);
      return this;
  }
  
  public ArrayList<Room> getRoomData() {
      return this.roomData;
  }
  
//  @Override
//  public String toString() {
//    return String.join(
//            ", ",
//            roomData.stream().map(x->x.toString()).toList());
//  }
}