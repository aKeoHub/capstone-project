package com.example.capstone.dao;

import com.example.capstone.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository("mysql")
public class UserDataAccessService implements UserDao {


    private JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public int insertUser(User user) {
        String sql = "INSERT INTO users (userName, password, firstName, lastName, email) VALUES (?, ?, ?, ?, ?)";

        int result = jdbcTemplate.update(sql, user.getUserName(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getEmail());
        if (result > 0) {
            System.out.println("A new row has been inserted.");
            return 1;
        }
        return 0;
    }

    @Override
    public List<User> selectAllUsers() {
        String sql = "SELECT * FROM capstone.users";
        return jdbcTemplate.query(sql, new UserMapper());
    }

    @Override
    public Optional<User> selectUserById(int id) {
        return Optional.empty();
    }

    @Override
    public int deleteUserById(int id) {
        return 0;
    }

    @Override
    public int updateUserById(int id, User user) {
        return 0;
    }


    private static final class UserMapper implements RowMapper<User> {
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {

            int id = (rs.getInt("id"));
            String userName = (rs.getString("userName"));
            String password = (rs.getString("password"));
            String firstName = (rs.getString("firstName"));
            String lastName = (rs.getString("lastName"));
            String email = (rs.getString("email"));


            return new User(id, userName, password, firstName, lastName, email);
        }
    }
}
