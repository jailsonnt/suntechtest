package com.github.jailsonnt.suntechtest.api;

import com.github.jailsonnt.suntechtest.model.User;
import com.github.jailsonnt.suntechtest.services.BusinessException;
import com.github.jailsonnt.suntechtest.services.IUserService;
import com.github.jailsonnt.suntechtest.services.InvalidIdException;
import com.github.jailsonnt.suntechtest.services.InvalidUserNameException;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
@Log4j2
public class UserResource {
    private final IUserService userService;

    @Autowired
    public UserResource(final IUserService userService) {
        this.userService = userService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User addUser(@RequestBody final User newUser){
        log.info("New user request received. Username: {}", newUser.getUsername());
        try{
            if (newUser.getId() != null){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The ID field must be null while creating a new user.");
            }
            return userService.addUser(newUser);
        } catch (InvalidUserNameException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage(), e);
        } catch (BusinessException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }

    @PutMapping("/{userId}")
    public void updateUser(@PathVariable final Long userId,
                           @RequestBody final User user){
        log.info("Update user request received. ID: {} . Username: {}", user.getId(), user.getUsername());
        try {
            userService.updateUser(userId, user);
        } catch (InvalidIdException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage(), e);
        } catch (BusinessException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }

    @GetMapping
    public Page<User> getUsers(@RequestParam(required = false, defaultValue = "") final String usernameFilter,
                               @RequestParam(required = false, defaultValue = "") final String nameFilter,
                               @RequestParam(required = false, defaultValue = "") final String emailFilter,
                               @RequestParam(required = false, defaultValue = "id") final String sortField,
                               @RequestParam final Integer page,
                               @RequestParam final Integer rowsPerPage){
        log.info("Get Users List request received with params. userName: {} name: {} emailFilter: {} page: {} rowsPerPage: {}",
                usernameFilter,
                nameFilter,
                emailFilter,
                page,
                rowsPerPage);
        try {
            return userService.getUsers(usernameFilter, nameFilter, emailFilter, sortField, page, rowsPerPage);
        } catch (BusinessException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId){
        log.info("Get User request received with params. userId: {} ", userId);
        try {
            return userService.getUser(userId);
        } catch (InvalidIdException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage(), e);
        } catch (BusinessException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId){
        log.info("Delete User request received with params. userId: {} ", userId);
        try {
            userService.deleteUser(userId);
        } catch (InvalidIdException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        } catch (BusinessException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }
}
