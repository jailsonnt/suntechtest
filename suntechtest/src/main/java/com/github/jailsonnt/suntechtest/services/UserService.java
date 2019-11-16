package com.github.jailsonnt.suntechtest.services;

import com.github.jailsonnt.suntechtest.dao.UserDao;
import com.github.jailsonnt.suntechtest.model.User;
import com.github.jailsonnt.suntechtest.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class UserService implements  IUserService{
    private final UserRepository userRepository;

    @Autowired
    public UserService(final UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User newUser) throws BusinessException {
        try {
            UserDao userDao = userRepository.save(UserDao.of(newUser));
            return User.of(userDao);
        } catch (Throwable e) {
            log.error("Unknown error while creating user. username: " + newUser.getUsername(), e);
            throw new BusinessException("Unknown error while creating user. username: " + newUser.getUsername());
        }
    }

    @Override
    public void updateUser(Long userId, User user) throws BusinessException {
        try {
            if (user.getId() != null &&
                    userId != null &&
                    userId.equals(user.getId()) &&
                    userRepository.existsById(userId)) {
                userRepository.save(UserDao.of(user));
            } else {
                throw new InvalidIdException();
            }
        } catch (Throwable e) {
            log.error("Unknown error while updating user. UserId: " + userId, e);
            throw new BusinessException("Unknown error while updating user");
        }
    }

    @Override
    public Page<User> getUsers(final String usernameFilter,
                               final String nameFilter,
                               final String emailFilter,
                               final String sortField,
                               Integer page,
                               Integer rowsPerPage) throws BusinessException {
        try {
            final PageRequest pageRequest = PageRequest.of(
                    page -1,
                    rowsPerPage,
                    Sort.Direction.ASC,
                    sortField);
            final Page<User> usersFound = userRepository.findUsersByLikeFilters(pageRequest, usernameFilter, nameFilter, emailFilter);
            return usersFound;
        } catch (Throwable e){
            log.error("Unknown error while getting user list", e);
            throw new BusinessException("Unknown error while user list.");
        }
    }

    @Override
    public User getUser(Long userId) throws BusinessException {
        try {
            if (userId != null &&
                    userRepository.existsById(userId)) {
                return User.of(userRepository.findById(userId).get());
            } else {
                throw new InvalidIdException();
            }
        } catch (Throwable e){
            log.error("Unknown error while getting user id:" + userId, e);
            throw new BusinessException("Unknown error while getting user");
        }
    }

    @Override
    public void deleteUser(Long userId) throws BusinessException {
        try {
            if (userId != null &&
                    userRepository.existsById(userId)) {
                userRepository.deleteById(userId);
            } else {
                throw new InvalidIdException();
            }
        } catch (Throwable e){
            log.error("Unknown error while deleting user id:" + userId, e);
            throw new BusinessException("Unknown error while deleting user");
        }
    }
}
