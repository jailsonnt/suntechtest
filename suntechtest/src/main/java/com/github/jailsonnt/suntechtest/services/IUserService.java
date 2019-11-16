package com.github.jailsonnt.suntechtest.services;

import com.github.jailsonnt.suntechtest.model.User;
import org.springframework.data.domain.Page;

public interface IUserService {
    User addUser(User newUser) throws BusinessException;
    void updateUser(Long userId, User user) throws BusinessException;
    Page<User> getUsers(String usernameFilter,
                        String nameFilter,
                        String emailFilter,
                        String sortField,
                        Integer page,
                        Integer rowsPerPage) throws BusinessException;
    User getUser(Long userId) throws BusinessException;
    void deleteUser(Long userId) throws BusinessException;
}
