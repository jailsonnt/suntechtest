package com.github.jailsonnt.suntechtest.services;

public class InvalidUserNameException extends BusinessException {
    public InvalidUserNameException(){
        super("This username is already in use.");
    }
}
