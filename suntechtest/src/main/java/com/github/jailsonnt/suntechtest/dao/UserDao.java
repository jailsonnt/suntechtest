package com.github.jailsonnt.suntechtest.dao;

import com.github.jailsonnt.suntechtest.model.User;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class UserDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    @NotNull
    private String username;
    private String password;
    private Boolean isEnabled;
    @NotNull
    private Date registerDate;
    @NotNull
    private String name;
    private String surname;
    @NotNull
    private String email;
    private String phone;

    public static UserDao of(User user){
        final UserDao userDao = new UserDao();
        userDao.setId(user.getId());
        userDao.setUsername(user.getUsername());
        userDao.setPassword(user.getPassword());
        userDao.setIsEnabled(user.getIsEnabled());
        userDao.setRegisterDate(user.getRegisterDate());
        userDao.setName(user.getName());
        userDao.setSurname(user.getSurname());
        userDao.setEmail(user.getEmail());
        userDao.setPhone(user.getPhone());
        return userDao;
    }
}
