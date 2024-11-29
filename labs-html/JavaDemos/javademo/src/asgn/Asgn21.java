package asgn;

import java.util.*;

public class Asgn21 {
    public static void main(String[] args) {
        ZoomCalling zoomRoom1 = new ZoomCalling(101, 100, "First", 10, 20);
        ZoomCalling zoomRoom2 = new ZoomCalling(102, 50, "Second", 11, 21);

        WithoutZoomCalling roomWithoutZoom1 = new WithoutZoomCalling(201, 200, "Third");
        WithoutZoomCalling roomWithoutZoom2 = new WithoutZoomCalling(202, 150, "Fourth");

        EmployeeBooking booking1 = new EmployeeBooking("EMP01", "2024-11-23", "10:00", 2, zoomRoom1);
        EmployeeBooking booking2 = new EmployeeBooking("EMP02", "2024-11-23", "13:00", 1, roomWithoutZoom1);
        EmployeeBooking booking3 = new EmployeeBooking("EMP03", "2024-11-24", "09:00", 3, zoomRoom2);

        System.out.println("Bookings on 2024-11-23:");
        displayBookingsByDate("2024-11-23");
    }

    static void displayBookingsByDate(String date) {
        for (EmployeeBooking booking : EmployeeBooking.getBookings()) {
            if (booking.getMeetingDate().equals(date)) {
                System.out.println(booking);
            }
        }
    }
}

class ZoomCalling extends MeetingRoom {
    private int zoomDeviceId;
    private int zoomAccountId;

    public ZoomCalling(int roomId, int capacity, String location, int zoomDeviceId, int zoomAccountId) {
        super(roomId, capacity, location);
        this.zoomDeviceId = zoomDeviceId;
        this.zoomAccountId = zoomAccountId;
    }

    @Override
    public String toString() {
        return super.toString() + ", Zoom Device ID: " + zoomDeviceId + ", Zoom Account ID: " + zoomAccountId;
    }
}

class WithoutZoomCalling extends MeetingRoom {
    public WithoutZoomCalling(int roomId, int capacity, String location) {
        super(roomId, capacity, location);
    }
}

class MeetingRoom {
    private int roomId;
    private int capacity;
    private String location;

    public MeetingRoom(int roomId, int capacity, String location) {
        this.roomId = roomId;
        this.capacity = capacity;
        this.location = location;
    }

    public int getRoomId() {
        return roomId;
    }

    public int getCapacity() {
        return capacity;
    }

    public String getLocation() {
        return location;
    }

    @Override
    public String toString() {
        return "Room ID: " + roomId + ", Capacity: " + capacity + ", Location: " + location;
    }
}

class EmployeeBooking {
    private String employeeId;
    private String meetingDate;
    private String meetingTime;
    private int duration;
    private MeetingRoom meetingRoom;

    private static List<EmployeeBooking> bookings = new ArrayList<>();

    public EmployeeBooking(String employeeId, String meetingDate, String meetingTime, int duration, MeetingRoom meetingRoom) {
        this.employeeId = employeeId;
        this.meetingDate = meetingDate;
        this.meetingTime = meetingTime;
        this.duration = duration;
        this.meetingRoom = meetingRoom;
        bookings.add(this);
    }

    public String getMeetingDate() {
        return meetingDate;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String getMeetingTime() {
        return meetingTime;
    }

    public int getDuration() {
        return duration;
    }

    public MeetingRoom getMeetingRoom() {
        return meetingRoom;
    }

    public static List<EmployeeBooking> getBookings() {
        return Collections.unmodifiableList(bookings);  // Prevents external modifications
    }

    @Override
    public String toString() {
        return "Employee ID: " + employeeId + ", Date: " + meetingDate + ", Time: " + meetingTime + ", Duration: " + duration + " hours, " + meetingRoom;
    }
}
