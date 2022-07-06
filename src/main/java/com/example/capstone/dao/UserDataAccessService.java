package com.example.capstone.dao;

import com.example.capstone.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Repository("mysql")
public class UserDataAccessService implements UserDao {


    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public int insertUser(User user) {

        String sql = "INSERT INTO capstonedb.user (" +
                "user_id, " +
                "userName, " +
                "firstname, " +
                "lastname, " +
                "password, " +
                "email, " +
                "picture_id, " +
                "create_date) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        int result = jdbcTemplate.update(sql, user.getId(), user.getUsername(), user.getFirstname(), user.getLastname(), user.getPassword(), user.getEmail(), user.getPictureId(), user.getCreateDate());
        if (result > 0) {
            System.out.println("A new row has been inserted.");
            return 1;
        }
        return 0;
    }

    @Override
    public List<User> selectAllUsers() {
        String sql = "SELECT * FROM capstonedb.user";
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

            int user_id = (rs.getInt("user_id"));
            String username = (rs.getString("username"));
            String password = (rs.getString("password"));
            String firstname = (rs.getString("firstname"));
            String lastname = (rs.getString("lastname"));
            String email = (rs.getString("email"));
            int picture_id = (rs.getInt("picture_id"));
            Date create_date = (rs.getDate("create_date"));


            return new User(user_id, username, password, firstname, lastname, email, picture_id, create_date);
        }
    }
}
