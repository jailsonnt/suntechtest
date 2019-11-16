package com.github.jailsonnt.suntechtest.model;

import com.github.jailsonnt.suntechtest.dao.UserDao;
import lombok.Value;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.Date;

@Value
public class User implements Serializable {
    private Long id;
    @NotEmpty(message = "The username field must be filled.")
    private String username;
    private String password;
    private Boolean isEnabled;
    @NotEmpty(message = "The register date field must be filled.")
    private Date registerDate;
    @NotEmpty(message = "The name field must be filled.")
    private String name;
    private String surname;
    @NotEmpty(message = "The email field must be filled.")
    private String email;
    private String phone;

    public static User of(UserDao userDao) {
        return new User(userDao.getId(),
                userDao.getUsername(),
                userDao.getPassword(),
                userDao.getIsEnabled(),
                userDao.getRegisterDate(),
                userDao.getName(),
                userDao.getSurname(),
                userDao.getEmail(),
                userDao.getPhone());
    }
}
