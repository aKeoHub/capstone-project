package com.project.capstone.userTest;

import com.project.capstone.user.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserModelTest {
    User user1;
    User user2;
    User user3;

    @BeforeEach
    void setUp() throws Exception {
        user1 = new User(1, "kingston", "1234", "kingston", "keobounphan", "kingston@live.ca", 1, LocalDate.now());
        user2 = new User(2, "john", "1234", "john", "hockey", "john@live.ca", 2, LocalDate.now());
        user3 = new User(3, "melvin", "1234", "melvin", "chew", "melvin@live.ca", 3, LocalDate.now());
    }

    @AfterEach
    void tearDown() throws Exception {
        user1 = null;
        user2 = null;
        user3 = null;
    }

    @Test
    void testUserId() {
        assertEquals(1, user1.getUserId());
        assertEquals(2, user2.getUserId());
        assertEquals(3, user3.getUserId());
    }

    @Test
    void testUsername() {
        assertEquals("kingston", user1.getUsername());
        assertEquals("john", user2.getUsername());
        assertEquals("melvin", user3.getUsername());
    }

    @Test
    void testPassword() {
        assertEquals("1234", user1.getPassword());
        assertEquals("1234", user2.getPassword());
        assertEquals("1234", user3.getPassword());
    }

    @Test
    void testFirstname() {
assertEquals("kingston", user1.getFirstname());
        assertEquals("john", user2.getFirstname());
        assertEquals("melvin", user3.getFirstname());
    }

    @Test
    void testLastname() {
        assertEquals("keobounphan", user1.getLastname());
        assertEquals("hockey", user2.getLastname());
        assertEquals("chew", user3.getLastname());
    }

    @Test
    void testEmail() {
        assertEquals("kingston@live.ca", user1.getEmail());
        assertEquals("john@live.ca", user2.getEmail());
        assertEquals("melvin@live.ca", user3.getEmail());
    }

    @Test
    void testPictureId() {
        assertEquals(1, user1.getPictureId());
        assertEquals(2, user2.getPictureId());
        assertEquals(3, user3.getPictureId());
    }

    @Test
    void testCreateDate() {
        assertEquals(LocalDate.now(), user1.getCreateDate());
        assertEquals(LocalDate.now(), user2.getCreateDate());
        assertEquals(LocalDate.now(), user3.getCreateDate());
    }

    @Test
    void testUserRoles() {

    }
}
