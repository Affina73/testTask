package com.mycompany.testtaskbackend.model.Room;

/**
 *
 * @author affina
 */
public class RoomBuilder {
    private Integer id;
    private String name;
    private Integer temperature;
    private Integer humidity;
    
    public RoomBuilder(Integer id) {
        this.id = id;
    }

    /**
     * @param id the id to set
     * @return RoomBuilder
     */
    public RoomBuilder setId(Integer id) {
        this.id = id;
        return this;
    }

    /**
     * @param name the name to set
     * @return RoomBuilder
     */
    public RoomBuilder setName(String name) {
        this.name = name;
        return this;
    }

    /**
     * @param temperature the temperature to set
     * @return RoomBuilder
     */
    public RoomBuilder setTemperature(Integer temperature) {
        this.temperature = temperature;
        return this;
    }

    /**
     * @param humidity the humidity to set
     * @return RoomBuilder
     */
    public RoomBuilder setHumidity(Integer humidity) {
        this.humidity = humidity;
        return this;
    }
    
    public Room build() {
        Room room = new Room(this.id);
        room.setTemperature(this.temperature);
        room.setName(this.name);
        room.setHumidity(this.humidity);
        return room;
    }
}
