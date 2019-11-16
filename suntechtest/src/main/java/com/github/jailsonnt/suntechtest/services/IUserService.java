package com.github.jailsonnt.suntechtest.services;

import com.github.jailsonnt.suntechtest.model.User;

import java.util.List;

public interface IUserService {
    User addUser(User newUser) throws BusinessException;
    void updateUser(Long userId, User user) throws BusinessException;
    List<User> getUsers() throws BusinessException;
    User getUser(Long userId) throws BusinessException;
}
