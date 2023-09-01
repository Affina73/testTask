package com.mycompany.testtaskbackend.model.Room;

/**
 *
 * Class that contains room metadata.
 */
public class Room {
    public final Integer id;
    private String name;
    private Integer temperature;
    private Integer humidity;
    
    public Room(Integer id) {
        this.id = id;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getName() {
        return this.name;
    }
     
    public void setTemperature(Integer temperature) {
        this.temperature = temperature;
    }
    
    public Integer getTemperature() {
        return this.temperature;
    }
    
     
    public void setHumidity(Integer humidity) {
        this.humidity = humidity;
    }
    
    public Integer getHumidity() {
        return this.humidity;
    }
    
//    @Override
//    public String toString() {
//        return String.format("{id: %d, name: %s, temperature: %d, humidity: %d}", 
//                this.id, 
//                this.name, 
//                this.temperature, 
//                this.humidity);
//    }
    
}
